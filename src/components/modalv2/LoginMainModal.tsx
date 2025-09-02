import { Box, Flex, Spacer, Button } from '@chakra-ui/react';
import React, { FC, useContext, useState, useEffect, KeyboardEvent, ChangeEvent, useCallback } from 'react';
import AppContext, {SessionObj} from '@/context/appcontext';
import { getRandomString, handleSignUp } from '@/auth/handlesignup';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { handleSignIn } from '@/auth/handlesignin';
import { otpsend, otpverify } from '@/api/verify';
import { completeChallenge } from '@/auth/handlecustomchallenge';
import { authSignin } from '@/auth/authsignin';

export const UserType = Object.freeze({
    NOUSER: Symbol('NOUSER'),
    VERIFIEDUSER: Symbol('VERIFIEDUSER'),
    VERIFYUSER: Symbol('VERIFYUSER'),
    INITIATEVERIFICATION: Symbol('INITIATEVERIFICATION')
})

interface LoginMainModalProps {
    
}
 
export const LoginMainModal: FC<LoginMainModalProps> = () => {
    const { appData, setAppData } = useContext(AppContext);
    const [ userState, setUserState ] = useState<Symbol>(UserType.NOUSER);
    const [username, setUsername] = useState<string>("");
    const [focusedInput, setFocusedInput] = useState(null);
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    // resend otp
    const [count, setCount] = useState<number>(60);
    const [resendEnabled, setResendEnabled] = useState<boolean>(false);

    const handleFocus = (inputName: any) => {
        setFocusedInput(inputName);
    };
    const handleBlur = () => {
        setFocusedInput(null);
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
        
        let num = 0;
        try {
          num = parseInt(otp[index]);
        } catch (error) {
          const prevElement = document.getElementById(
            `otp-input-${index - 1}`
            ) as HTMLInputElement;
            prevElement?.focus();
          return;
        }
        if (e.key === "Backspace" && Number.isInteger(num)) {
        if (index > 0) {
            let newArray = [...otp]
            newArray[index] = ""
            setOtp([...newArray]);
            const prevElement = document.getElementById(
            `otp-input-${index - 1}`
            ) as HTMLInputElement;
            prevElement?.focus();
        }
        if (index == 0) {
          let newArray = [...otp]
          newArray[0] = ""
          setOtp([...newArray]);
        }
        }
    };

    useEffect(() => {
        if (userState !== UserType.VERIFYUSER) return;
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

    const resetUser = useCallback(async () => {
        console.log("CLICKED");
    }, []);

    const getAffiliate = () => {
        let aff = ""
        if (typeof window !== "undefined") {
        // Get data from localStorage
        const storedData = localStorage.getItem(appData.app_id + "data");
        
        if (storedData) {
            const { affiliate_id } = JSON.parse(storedData);
            setAppData({ ...appData, affiliate_id });
            aff = affiliate_id;
        }
        }
        return aff;
    }

    const closeButtonClick = () => {
      const element = document.getElementById('loginMainModal')
      if (element) {
        element.classList.remove("show");
        element.style.display = "";
      }
    }

    return <>
        <Box
        top={0}
        width={"100%"}
        height={"100%"}
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        zIndex={900}
        background={"white"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* close button block */}
          <div
            style={{
              padding: 4,
              right: 42,
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
          
            <Button
              className="btn-close"
              aria-label="Close"
              onClick={closeButtonClick}
              style={{
                width: '28px',
                height: '28px',
              }}
            >
            </Button>

          </div>
            <Box height={'60px'} />
        <div className="text-center px-4">
            <img
                className="login-intro-img"
                src="/assets/img/bg-img/37.png"
                alt=""
                style={{
                  height: '250px',
                  width: '250px'
                }}
            />
        </div>
        {/** NOUSER */}
          {userState == UserType.NOUSER && (
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
                userState !== UserType.VERIFIEDUSER ? "100%" : "0%"
              }
            >
              <div className="register-form mt-4">
                <div 
                  style={{
                    color: 'black',
                  }}
                >Enter your email</div>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    if (username.length == 0) return;

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

                    setUserState(UserType.VERIFYUSER);
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
                      tabIndex={2}
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
          {userState == UserType.VERIFYUSER && (
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
                userState !== UserType.VERIFIEDUSER ? "100%" : "0%"
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
                              setUserState(UserType.VERIFIEDUSER);
                            }
                          }
                          return;
                        }

                        const challenge = await completeChallenge(otp.join(""));

                        if (!challenge.status) return;

                        const { userId, signInDetails } =
                          await getCurrentUser();

                        const session = await fetchAuthSession();

                        const response = await authSignin({
                          app_id: appData.app_id!,
                          affiliate_id: getAffiliate(),
                          email: signInDetails?.loginId!,
                        });

                        if (response) {
                          if (!response.body.success) {
                            setUserState(UserType.NOUSER);
                            return;
                          }
                          
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
                          setUserState(UserType.VERIFIEDUSER);
                          setOtp(new Array(4).fill(""));
                          closeButtonClick()
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
                            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                              handleBackspace(e, index)
                            }
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
                              setOtp(new Array(4).fill(""));
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
          {userState == UserType.INITIATEVERIFICATION && (
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
                userState !== UserType.VERIFIEDUSER ? "100%" : "0%"
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
                            setUserState(UserType.VERIFYUSER);
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
          </Flex>
      </Box>
    </>
}