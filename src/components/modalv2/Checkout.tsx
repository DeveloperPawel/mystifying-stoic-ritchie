"use client";
import {
  Flex,
  Box,
  Spacer,
  Image,
  RadioGroup,
  Icon,
  Button,
} from "@chakra-ui/react";
import React, {
  useContext,
  useCallback,
  useState,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
  useRef,
} from "react";
import { MdAddBox, MdCancel } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { PaymentIcon } from "react-svg-credit-card-payment-icons";
import BumpOffer from "./BumpOffer";
import CheckoutItem from "./CheckoutItem";
import AppContext, { SessionObj } from "@/context/appcontext";
import OfferContext, { Address, CreditCard } from "@/context/offerContext";
import { Offer } from "@/types/offer";
import { getUserPofile, ProfileReturn, Profile } from "@/api/getProfile";
import { CheckoutUserType } from "@/types/checkouttype";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { authSignin } from "@/auth/authsignin";
import { completeChallenge } from "@/auth/handlecustomchallenge";
import { handleSignIn } from "@/auth/handlesignin";
import Link from "next/link";
import { CalculateTax } from "@/functions/calculateTax";
import { PaymentBox } from "./PaymentBox";
import { BillingBox } from "./BillingBox";
import { FormikHelpers, useFormik } from "formik";
import { postPurchase, Payment } from "@/api/payment";
import { useAcceptJs, CardData } from "react-acceptjs";
import { getRandomString, handleSignUp } from "@/auth/handlesignup";
import { otpsend, otpverify } from "@/api/verify";
import { SiginBody } from "@/auth/signinbody";
import * as fbq from "@/functions/fpixel";

interface ViewConfig {
  taxTotalSize: number;
  taxTotalValueSize: number;
}

const normal: ViewConfig = {
  taxTotalSize: 12,
  taxTotalValueSize: 14,
};

const first: ViewConfig = {
  taxTotalSize: 12,
  taxTotalValueSize: 12,
};

const second: ViewConfig = {
  taxTotalSize: 12,
  taxTotalValueSize: 12,
};

const MERCHANT = "authorize";
const index = 0;

const Checkout = () => {
  const { appData, setAppData } = useContext(AppContext);
  const {
    offerData,
    setOfferData,
    authData,
    billing,
    creditcard,
    selectedProfile,
    setSelectedProfile,
  } = useContext(OfferContext);
  const [bumpOffers, setbumpOffers] = useState<Offer[]>([]);
  const [profile, setProfile] = useState<Profile>({
    email: "",
    billing: [],
    creditcards: [],
    profiles: [],
  });
  const [userState, setUserState] = useState<Symbol>(CheckoutUserType.NOUSER);
  const [username, setUsername] = useState<string>("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  // resend otp
  const [count, setCount] = useState<number>(60);
  const [resendEnabled, setResendEnabled] = useState<boolean>(false);
  // const [reverifyFlag, setReverifyFlag] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [tax, setTax] = useState<string>("");
  const { dispatchData, loading, error } = useAcceptJs({
    environment: "PRODUCTION",
    authData: authData,
  });
  const [nonceData, setNonceData] = useState({
    dataDescriptor: "",
    dataValue: "",
  });


  const handleFocus = (inputName: any) => {
    setFocusedInput(inputName);
  };
  const handleBlur = () => {
    setFocusedInput(null);
  };

  const addNewCard = () => {
    document.getElementById("paymentInput")?.style.setProperty("bottom", "0%");
  };

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

  const getBumpOffers = useCallback(() => {
    if (offerData.selectedOffer) {
      if (offerData.selectedOffer.group.length == 0) return;

      const bOffers = appData.offers?.filter(
        (offer) => offer.group == offerData.selectedOffer!.group && offer.tags == "BUMP"
      );

      const fOffers = appData.fixed_offers.filter(
        (offer) =>
          offer.group == offerData.selectedOffer!.group && offer.tags == "BUMP"
      );

      setbumpOffers([...bOffers, ...fOffers]);
    }
  }, [offerData?.selectedOffer, bumpOffers, appData.offers]);

  const getProfile = useCallback(async () => {
    const response = await getUserPofile();
    if (response) {
      if (!response.body.success) return;

      setProfile(response.body.data);
      setUsername(response.body.data.email);

      const profiles = response.body.data.profiles.filter(
        (profile, i) => profile.merchant == MERCHANT
      );

      if (profiles.length == 0) return;
      const profile = profiles[index];

      const profData = setSelectedMerchProfile(MERCHANT, profile);
      //@ts-ignore
      setSelectedProfile(profData);
    }
  }, [appData]);

  const setSelectedMerchProfile = (merchant: string, data: any): any => {
    switch (merchant) {
      case "authorize":
        return {
          payment_id: data.payment_id,
          contact_id: data.contact_id,
          address: data.address,
        };

      default:
        return;
    }
  };

  useEffect(() => {
    if (userState !== CheckoutUserType.VERIFYUSER) return;
    let timer: NodeJS.Timeout;

    if (count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
    }

    return () => clearInterval(timer);
  }, [count, userState]);

  /** listen to nonce event */
  // useEffect(() => {
  //   document.addEventListener("nonce", handleNonceReturn);

  //   return () => {
  //     document.removeEventListener("nonce", () => {});
  //   };
  // }, []);

  useEffect(() => {
    // no app email NOUSER
    if (appData.email!.length == 0) {
      setUserState(CheckoutUserType.NOUSER);
      return;
    }

    setUsername(appData.email!);
    // transition - VERIFYUSER
    setUserState(CheckoutUserType.VERIFIEDUSER);
  }, []);

  /**
   * get the current user - when the session has expired and set the email if the user is still logged in
   */
  const getUser = useCallback(async () => {
    let check = {
      error: true,
      email: "",
    };
    try {
      const { signInDetails } = await getCurrentUser();
      check.error = false;
      check.email = signInDetails?.loginId!;
    } catch (error) {
      check.error = true;
    }

    if (check.error) {
      setUsername("");
      setUserState(CheckoutUserType.NOUSER);
    }
    if (!check.error) {
      // TODO: set username from the response
      setAppData({
        ...appData,
        email: check.email,
      });
      setUsername(check.email);
      setUserState(CheckoutUserType.INITIATEVERIFICATION);
    }
  }, [setUserState, setUsername, appData, setAppData]);

  const unverfySession = useCallback(() => {
    setAppData({
      ...appData,
      session: {
        ...appData.session,
        status: "UNVERIFIED",
      },
    });
  }, [appData, setAppData]);

  useEffect(() => {
    const cTime = new Date();
    let currentTime = cTime.getTime() / 1000;

    // no session id or time exceeds session time INITIATE
    if (appData.session!.time! < currentTime) {
      if (appData.email.length == 0) {
        getUser();
        return;
      }
      setUsername(appData.email!);
      setUserState(CheckoutUserType.INITIATEVERIFICATION);
      unverfySession();
    }
  }, [appData.session.update.length, billing, creditcard]);

  useEffect(() => {
    getBumpOffers();
  }, []);

  useEffect(() => {
    if (appData.user_id.length == 0) return;
    getProfile();
  }, [appData.user_id.length]);

  useEffect(() => {
    console.log("check appdata - email");
    console.log(appData.email);
  }, [appData.email.length]);

  useEffect(() => {
    console.log("check appdata - id");
    console.log(appData.user_id);
  }, [appData.user_id.length]);

  useEffect(() => {
    if (!offerData.selectedOffer) return;
    getBumpOffers();
  }, [offerData.selectedOffer]);

  useEffect(() => {
    if (!offerData.selectedOffer) return;
    fbq.event('InitiateCheckout', {
      currency: "USD",
      value: total > 0 ? total : parseFloat(offerData.selectedOffer.price),
    });
  }, [offerData.selectedOffer]);

  const resetUser = useCallback(async () => {
    console.log("CLICKED");
  }, []);

  const calculateTotal = useCallback(() => {
    let subtotal: number = 0;
    subtotal += parseFloat(offerData.selectedOffer?.price!);
    for (const offer of offerData.secondaryOffers) {
      subtotal += parseFloat(offer.price);
    }
    let tax: number = 0;
    if (billing) tax = CalculateTax(subtotal, billing.state);
    if (profile.profiles.length > 0)
      tax = CalculateTax(subtotal, profile.profiles[index].address.state);

    const total = parseFloat((tax + subtotal).toFixed(2));

    setTax(
      parseFloat(tax.toFixed(2)) < 1
        ? `${tax.toFixed(2)}`
        : // : parseFloat(tax.toFixed(2)).toString()
          tax.toFixed(2)
    );
    setTotal(total);
  }, [offerData, setTotal, setTax, profile.billing, billing, selectedProfile]);

  useEffect(() => {
    if (profile.billing.length == 0) return;
    calculateTotal();
  }, [profile.billing.length]);

  useEffect(() => {
    if (!billing) return;
    calculateTotal();
  }, [billing]);

  useEffect(() => {
    if (offerData.selectedOffer == null) return;
    calculateTotal();
  }, [offerData.selectedOffer]);

  useEffect(() => {
    if (!selectedProfile) return;
    calculateTotal();
  }, [selectedProfile]);

  useEffect(() => {
    calculateTotal();
  }, [offerData.secondaryOffers.length]);

  const getConfig = useCallback(() => {
    switch (offerData.secondaryOffers.length) {
      case 0:
        return normal;

      case 1:
        return first;

      case 2:
        return second;

      default:
        return normal;
    }
  }, [offerData.secondaryOffers]);

  const removeSelectedOffer = useCallback(() => {
    setOfferData({
      ...offerData,
      selectedOffer: null,
    });
  }, [offerData, setOfferData]);

  useEffect(() => {
    const checkoutButton = document.getElementById("checkoutModal");
    if (checkoutButton?.style.display == "block") {
      const closeButton = document.getElementById("checkoutButtonTop");
      if (closeButton) {
        closeButton.onclick = () => {
          const checkoutButton = document.getElementById("checkoutModal");

          if (!checkoutButton) return;
          checkoutButton.style.display = "";
          checkoutButton.classList.remove("show");

          removeSelectedOffer();
        };
      }
    }
  }, [offerData.selectedOffer]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get data from localStorage
      const storedData = localStorage.getItem(appData.app_id + "data");
      if (storedData) {
        const { affiliate_id } = JSON.parse(storedData);
        setAppData({ ...appData, affiliate_id });
      }
    }
  }, []);



  const closeButtonClick = () => {
      const element = document.getElementById('checkoutModalgame')
      if (element) {
        element.classList.remove("show");
        element.style.display = "";

        setOfferData({
          ...offerData,
          selectedOffer: null,
        });
      }
    }

  return (
    <>
      <Box
        top={0}
        width={"100%"}
        height={"100%"}
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        zIndex={900}
        // overflow={"scroll"}
        boxShadow={"0px 8px 21px #0215a2"}
        background={"white"}
      >
        {/* close button block */}
        <div
          style={{
            padding: 4,
            left: 334,
            top: 10,
            position: "absolute",
            // background: "rgba(255, 255, 255, 0.50)",
            background: 'grey',
            borderRadius: 100,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <button
            id="checkoutButtonTop"
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeButtonClick}
          ></button>
        </div>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          // height={"100%"}
          // position={"absolute"}
        >
          {/* summary container */}
          <Flex
            width={"90%"}
            // height={"100%"}
            paddingTop={4}
            paddingRight={4}
            paddingLeft={4}
            paddingBottom={2}
            background={"white"}
            boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
            borderRadius={16}
            outline={"1px #F5F5F5 solid"}
            outlineOffset={"-1px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"inline-flex"}
            marginTop={12}
          >
            <Flex>
              <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Order Summary
              </div>
            </Flex>
            <CheckoutItem
              offer={
                offerData.selectedOffer
                  ? offerData.selectedOffer
                  : {
                      app_id: "",
                      id: "",
                      image: "",
                      tags: "",
                      group: "",
                      price: "",
                      description: "",
                      itemid: "",
                      title: "",
                      start: "",
                      end: "",
                      quantity: 1,
                    }
              }
            />

            {offerData.secondaryOffers.map((offer, i) => (
              <>
                <CheckoutItem key={i} offer={offer} />
              </>
            ))}
            <Flex
              style={{
                alignSelf: "stretch",
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#888786",
                  fontSize: getConfig().taxTotalSize,
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Tax
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "#888786",
                  fontSize: getConfig().taxTotalValueSize,
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                {`$${tax}`}
              </div>
            </Flex>
            <Flex
              style={{
                alignSelf: "stretch",
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: getConfig().taxTotalSize,
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Total Amount
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: getConfig().taxTotalValueSize,
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                {`$${total}`}
              </div>
            </Flex>
          </Flex>
          {/* Bump Offer Container */}

          {/** NOUSER */}
          {userState == CheckoutUserType.NOUSER && (
            <Flex
              width={"90%"}
              // height={"100%"}
              paddingTop={4}
              paddingRight={4}
              paddingLeft={4}
              paddingBottom={4}
              background={"white"}
              boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
              borderRadius={16}
              outline={"1px #F5F5F5 solid"}
              outlineOffset={"-1px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              marginTop={2}
              marginBottom={
                userState !== CheckoutUserType.VERIFIEDUSER ? "100%" : "0%"
              }
            >
              <div className="register-form mt-4">
                <h6 className="mb-3 text-center">Enter your email</h6>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    // auth signin
                    try {
                      let result = await handleSignUp({
                        username,
                        fullName: getRandomString(7),
                      });
                    } catch (error) {
                      const { username, userId, signInDetails } =
                        await getCurrentUser();

                      const session = await fetchAuthSession();

                      setAppData({
                        ...appData,
                        userId: userId,
                        email: username,
                      });
                    }

                    try {
                      let result2 = await handleSignIn(username);
                    } catch (error) {}

                    setUserState(CheckoutUserType.VERIFYUSER);
                  }}
                >
                  <div className="form-group">
                    <input
                      className={`form-control ${
                        focusedInput === "username"
                          ? "form-control-clicked"
                          : ""
                      }`}
                      type="text"
                      id="username"
                      placeholder="Email"
                      onFocus={() => handleFocus("username")}
                      onBlur={handleBlur}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-primary w-100" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </Flex>
          )}

          {/** VERIFYUSER */}
          {userState == CheckoutUserType.VERIFYUSER && (
            <Flex
              width={"90%"}
              // height={"100%"}
              paddingTop={4}
              paddingRight={4}
              paddingLeft={4}
              paddingBottom={4}
              background={"white"}
              boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
              borderRadius={16}
              outline={"1px #F5F5F5 solid"}
              outlineOffset={"-1px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              marginTop={2}
              marginBottom={
                userState !== CheckoutUserType.VERIFIEDUSER ? "100%" : "0%"
              }
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="custom-container">
                  <div className="text-center">
                    <h3>Verify Email Address</h3>
                    <p className="mb-4">
                      Enter the OTP code sent to <strong>{username}</strong>
                    </p>
                  </div>

                  {/* <!-- OTP Verify Form --> */}
                  <div className="otp-verify-form mt-4">
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const time = new Date();
                        if (appData.session.status == "UNVERIFIED") {
                          const response = await otpverify({
                            app_id: appData.app_id,
                            session_id: appData.session.session_id,
                            code: otp.join(""),
                          });

                          if (response) {
                            setOtp(new Array(4).fill(""));
                            if (response.body.error) {
                              return;
                            }
                            if (response.body.status == "VERIFIED") {
                              let session: SessionObj = {
                                ...appData.session,
                                status: "VERIFIED",
                                update: appData.session.update + "s",
                              };
                              setAppData({
                                ...appData,
                                session: session,
                              });
                              setUserState(CheckoutUserType.VERIFIEDUSER);
                            }
                          }
                          return;
                        }

                        const session = await fetchAuthSession({ forceRefresh: true });

                        const challenge = await completeChallenge(otp.join(""));

                        if (!challenge.status) return;

                        const { userId, signInDetails } =
                          await getCurrentUser();

                        const response = await authSignin({
                          app_id: appData.app_id!,
                          email: signInDetails?.loginId!,
                          affiliate_id: appData.affiliate_id,
                        });

                        if (response) {
                          if (!response.body.success) {
                            setUserState(CheckoutUserType.NOUSER);
                            return;
                          }
                          console.log("sigin - otem");
                          console.log(response);
                          setAppData({
                            ...appData,
                            user_id: response.body.data.user_id,
                            email: signInDetails?.loginId,
                            session: {
                              session_id: response.body.data.session_id,
                              time: (time.getTime() / 1000) + 60 * 60,
                              status: "VERIFIED",
                              update: "s",
                            },
                          });
                          setUserState(CheckoutUserType.VERIFIEDUSER);
                          setOtp(new Array(4).fill(""));
                        }
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
                              let newresult = await handleSignIn(username);
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
            </Flex>
          )}

          {/** INITIATEVERIFICATION */}
          {userState == CheckoutUserType.INITIATEVERIFICATION && (
            <Flex
              width={"90%"}
              // height={"100%"}
              paddingTop={4}
              paddingRight={4}
              paddingLeft={4}
              paddingBottom={4}
              background={"white"}
              boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
              borderRadius={16}
              outline={"1px #F5F5F5 solid"}
              outlineOffset={"-1px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              marginTop={2}
              marginBottom={
                userState !== CheckoutUserType.VERIFIEDUSER ? "100%" : "0%"
              }
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="custom-container">
                  <div className="text-center">
                    <h3>Verify it{"'"}s you</h3>
                    <p className="mb-4">
                      We will send a code to{" "}
                      <strong>
                        {username.length > 0 ? username : appData.email}
                      </strong>
                    </p>
                  </div>

                  <div
                    style={{
                      height: "4px",
                    }}
                  />
                  <div className="otp-verify-form mt-4">
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();

                        const response = await otpsend({
                          app_id: appData.app_id,
                        });

                        if (response) {
                          if (response.body.success) {
                            const cTime = new Date();
                            let currentTime = (cTime.getTime() / 1000) + 60 * 60;
                            let session: SessionObj = {
                              session_id: response.body.data,
                              time: currentTime,
                              status: "UNVERIFIED",
                              update: appData.session.update + "s",
                            };
                            setAppData({
                              ...appData,
                              session: session,
                            });
                            setUserState(CheckoutUserType.VERIFYUSER);
                          }
                        }
                      }}
                    >
                      <button
                        className="btn btn-primary"
                        style={{
                          width: "200px",
                        }}
                      >
                        Verify
                      </button>
                    </form>
                    <div
                      style={{
                        height: "24px",
                      }}
                    />
                    <a
                      type="button"
                      onClick={(e) => resetUser()}
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      That{"'"}s not my email
                    </a>
                  </div>
                </div>
              </div>
            </Flex>
          )}

          {bumpOffers.length > 0 &&
            ((billing && creditcard) ||
              profile.profiles.length > 0 ||
              (profile.billing.length > 0 && profile.creditcards.length > 0)) &&
            userState == CheckoutUserType.VERIFIEDUSER && (
              <Flex
                width={"90%"}
                // height={"100%"}
                paddingTop={2}
                paddingRight={4}
                paddingLeft={4}
                paddingBottom={4}
                background={"white"}
                boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
                borderRadius={16}
                outline={"1px #F5F5F5 solid"}
                outlineOffset={"-1px"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                display={"inline-flex"}
                marginTop={2}
              >
                {bumpOffers.map((offer, i) => (
                  <BumpOffer key={i} offer={offer} />
                ))}
              </Flex>
            )}

          {userState == CheckoutUserType.VERIFIEDUSER && (
            <Flex
              width={"90%"}
              paddingRight={4}
              paddingLeft={4}
              paddingBottom={4}
              background={"white"}
              boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
              borderRadius={16}
              outline={"1px #F5F5F5 solid"}
              outlineOffset={"-1px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              marginTop={2}
            >
              {profile.profiles.length > 0 && (
                <PaymentBox
                  payment={{
                    ...profile.profiles[index].creditcard,
                    number: profile.profiles[index].creditcard.creditcard,
                  }}
                />
              )}
              {creditcard && billing && <PaymentBox payment={creditcard} />}
              {/** Billing */}
              {profile.profiles.length > 0 && (
                <BillingBox billing={profile.profiles[index].address} />
              )}
              {creditcard && billing && <BillingBox billing={billing} />}
              {profile.profiles.length == 0 && !billing && !creditcard && (
                <Button
                  padding={2}
                  marginTop={4}
                  alignItems={"center"}
                  borderRadius={4}
                  outline={"1px rgb(210, 210, 210) solid"}
                  width={"100%"}
                  display={"flex"}
                  background={"white"}
                  onClick={addNewCard}
                >
                  <Icon size="lg" color="#027FEE">
                    <MdAddBox />
                  </Icon>
                  <div
                    style={{
                      color: "black",
                    }}
                  >
                    Add New Card
                  </div>
                </Button>
              )}
            </Flex>
          )}

          {/* payment selection */}
          {/* {userState == CheckoutUserType.VERIFIEDUSER && false && (
            <Flex
              width={"90%"}
              // height={"100%"}
              paddingRight={4}
              paddingLeft={4}
              paddingBottom={4}
              background={"white"}
              boxShadow={"0px 8px 16px rgba(0, 0, 0, 0.08)"}
              borderRadius={16}
              outline={"1px #F5F5F5 solid"}
              outlineOffset={"-1px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"inline-flex"}
              marginTop={2}
            >
              <RadioGroup.Root>
                {profile.creditcards.map((card, i) => (
                  <Flex
                    key={i}
                    padding={2}
                    marginTop={4}
                    alignItems={"center"}
                    borderRadius={4}
                    outline={"1px rgb(210, 210, 210) solid"}
                    onClick={selectCard}
                  >
                    <PaymentIcon type="Visa" format="logo" width={32} />
                    <div
                      style={{
                        paddingRight: 2,
                        paddingLeft: 2,
                      }}
                    >
                      Chase Bank
                    </div>
                    <div>**** **** **** 2334</div>
                    <Spacer width={24} />
                    <RadioGroup.Item value={"value"}>
                      <RadioGroup.ItemIndicator />
                    </RadioGroup.Item>
                  </Flex>
                ))}
              </RadioGroup.Root>
              <Button
                padding={2}
                marginTop={4}
                alignItems={"center"}
                borderRadius={4}
                outline={"1px rgb(210, 210, 210) solid"}
                width={"100%"}
                display={"flex"}
                background={"white"}
                onClick={addNewCard}
              >
                <Icon size="lg" color="#027FEE">
                  <MdAddBox />
                </Icon>
                <div
                  style={{
                    color: "black",
                  }}
                >
                  Add New Card
                </div>
              </Button>
            </Flex>
          )} */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={4}
            width={"100%"}
            height={0}
          >
            <Box
              // background={"yellow"}
              // marginTop={4}
              height={"100%"}
              width={"90%"}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Checkout;
