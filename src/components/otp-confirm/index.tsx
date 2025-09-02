"use client";

import {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useContext,
  useCallback,
} from "react";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { completeChallenge } from "@/auth/handlecustomchallenge";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { fetchAuthSession } from "aws-amplify/auth";
import { handleSignIn } from "@/auth/handlesignin";
import { authSignin } from "@/auth/authsignin";
import AppContext from "@/context/appcontext";
import { getAppOffers, GetOfferResponse } from "@/api/getoffers";
import { Download } from "@/api/download";
import axios from "axios";
import { Buffer } from "buffer";
import { useRouter } from "next/navigation";
import { FImage } from "@/context/appcontext";

interface Dict {
  [key: string]: string;
}

const OtpConfirm = () => {
  const router = useRouter();
  const { appData, setAppData } = useContext(AppContext);
  // const [username, setUsername] = useState<string>(
  //   "pawelunawrocki@protonmail.com"
  // );
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [imageUrls, setImageUrls] = useState<Dict>({
    update: "",
  });
  const [images, setimages] = useState<FImage[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Ensure only numbers are entered

    if (value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input field if current one is filled
      if (index < otp.length - 1) {
        const nextElement = document.getElementById(
          `otp-input-${index + 1}`
        ) as HTMLInputElement;
        nextElement?.focus();
      }
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        const prevElement = document.getElementById(
          `otp-input-${index - 1}`
        ) as HTMLInputElement;
        prevElement?.focus();
      }
    }
  };

  // resend otp
  const [count, setCount] = useState<number>(60);
  const [resendEnabled, setResendEnabled] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
    }

    return () => clearInterval(timer);
  }, [count]);

  const detectMimeType = (file: any): string => {
    //@ts-ignore
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        //@ts-ignore
        const uint8Array = new Uint8Array(reader.result);
        let mimeType = "application/octet-stream"; // Default

        if (
          uint8Array[0] === 0xff &&
          uint8Array[1] === 0xd8 &&
          uint8Array[2] === 0xff
        ) {
          mimeType = "image/jpeg";
        } else if (
          uint8Array[0] === 0x89 &&
          uint8Array[1] === 0x50 &&
          uint8Array[2] === 0x4e &&
          uint8Array[3] === 0x47
        ) {
          mimeType = "image/png";
        } else if (
          uint8Array[0] === 0x47 &&
          uint8Array[1] === 0x49 &&
          uint8Array[2] === 0x46
        ) {
          mimeType = "image/gif";
        }
        resolve(mimeType);
      };
      reader.readAsArrayBuffer(file.slice(0, 4)); // Read the first 4 bytes
    });
  };

  const saveImage = (
    binaryData: BlobPart,
    filename: string,
    mimeType: string
  ) => {
    const blob = new Blob([binaryData], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // const saveImageCall = useCallback(async (buffer: any, filename: string) => {
  //   const binaryData = new Uint8Array(buffer);
  //   const mimeType = await detectMimeType(binaryData);
  //   saveImage(binaryData, filename, mimeType);
  // }, []);

  const saveImageCall = useCallback(
    async (binaryData: Buffer, filename: string) => {
      // const binaryData = new Uint8Array(buffer);
      const mimeType = await detectMimeType(binaryData);
      saveImage(binaryData, filename, mimeType);
    },
    []
  );

  function arrayBufferToBase64(buffer: any) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  useEffect(() => {
    if (imageUrls["update"].length > 0) {
      const newData: Dict = { update: imageUrls["update"] };
      const imageList: FImage[] = [];
      for (const filename in imageUrls) {
        if (filename == "update") continue;
        const value = imageUrls[filename];
        try {
          const base64String = arrayBufferToBase64(value);
          const imageData = `data:image/jpeg;base64,${base64String}`;
          newData[filename] = imageData;
          imageList.push({ filename: filename, image: imageData });
        } catch (error) {
          console.log(error);
          continue;
        }
      }

      setImageUrls(newData);
      setimages(imageList);
    }
    if (imageUrls["update"].length > 0) {
      router.push("/home");
    }
  }, [imageUrls["update"].length]);

  useEffect(() => {
    console.log(appData);
  }, [appData]);

  return (
    <>
      <HeaderThree links="otp" />

      <div className="login-wrapper d-flex align-items-center justify-content-center">
        <div className="custom-container">
          <div className="text-center">
            <img
              className="mx-auto mb-4 d-block"
              src="/assets/img/bg-img/38.png"
              alt=""
            />
            {/* {images.length == 0 && (
              <img
                className="mx-auto mb-4 d-block"
                src="/assets/img/bg-img/38.png"
                alt=""
              />
            )} */}
            {/* {images.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={item.image}
                  width={300}
                  height={300}
                  alt={item.filename}
                />
              );
            })} */}
            <h3>Verify Email Address</h3>
            <p className="mb-4">
              Enter the OTP code sent to <strong>{appData.email}</strong>
            </p>
          </div>

          {/* <!-- OTP Verify Form --> */}
          <div className="otp-verify-form mt-4">
            <form
              action="/home"
              onSubmit={async (e) => {
                e.preventDefault();
                await completeChallenge(otp.join(""));

                const { userId, signInDetails } = await getCurrentUser();

                const session = await fetchAuthSession();

                const response = await authSignin({
                  app_id: appData.app_id!,
                  email: signInDetails?.loginId!,
                  affiliate_id: appData.affiliate_id,
                });

                if (response) {
                  const time = new Date();
                  setAppData({
                    ...appData,
                    user_id: response.body.data.user_id,
                    session: {
                      session_id: response.body.data.session_id,
                      time: time.getTime() / 1000 + 60 * 60,
                      status: "VERIFIED",
                      update: "s",
                    },
                  });
                }

                if (response) {
                  try {
                    await getAppOffers(appData.app_id!).then(
                      async (res: GetOfferResponse | undefined) => {
                        if (res) {
                          // console.log(res);
                          const imageList: FImage[] = [];
                          let offerlist: Dict = {};
                          for (const offer of res.body.data) {
                            if (offer.image) {
                              if (offerlist[offer.image]) continue;
                              // console.log(offer);
                              const imageurlResponse = await Download(
                                offer.image
                              );
                              //@ts-ignore
                              offerlist[offer.image] = imageurlResponse;
                            }
                          }
                          // console.log(offerlist);
                          setImageUrls({
                            ...offerlist,
                            update: imageUrls["update"] + "+",
                          });
                        }
                      }
                    );
                  } catch (e) {}
                }

                // await signOut();
              }}
            >
              <div className="input-group mb-3 otp-input-group">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    className="single-otp-input form-control"
                    type="text"
                    value={data}
                    placeholder="-"
                    maxLength={1}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e.target, index)
                    }
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                      handleBackspace(e, index)
                    }
                  />
                ))}
              </div>
              <button className="btn btn-primary w-100">
                Verify & Proceed
              </button>
            </form>
          </div>

          {/* <!-- Term & Privacy Info --> */}
          <div className="login-meta-data text-center">
            <p className="mt-3 mb-0">
              Dont received the OTP?{" "}
              <span
                className="otp-sec"
                id="resendOTP"
                style={{ color: count <= 10 ? "red" : "black" }}
              >
                {resendEnabled ? (
                  <a
                    className="resendOTP"
                    onClick={async (e) => {
                      let newresult = await handleSignIn(appData.email!);
                      // console.log(newresult);
                    }}
                  >
                    Resend OTP
                  </a>
                ) : (
                  `Wait ${count} secs`
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpConfirm;
