import { Box, Flex, Spacer, Button } from '@chakra-ui/react';
import React, { FC, useContext, useState, useEffect, KeyboardEvent, ChangeEvent, useCallback } from 'react';
import AppContext, {SessionObj} from '@/context/appcontext';
import { getRandomString, handleSignUp } from '@/auth/handlesignup';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { handleSignIn } from '@/auth/handlesignin';
import { otpsend, otpverify } from '@/api/verify';
import { completeChallenge } from '@/auth/handlecustomchallenge';
import { authSignin } from '@/auth/authsignin';
import { postClientContact, POSTGameContactResponse } from '@/api/postClentContact';
import * as fbq from "@/functions/fpixel";

const EmailFormType = Object.freeze({
    DOUBLEOPTIN: Symbol('DOUBLEOPTIN'),
    SINGLEOPTIN: Symbol('SINGLEOPTIN')
})

const getEmailType = (type:string|null|undefined): Symbol => {
    if (!type) {
        return EmailFormType.SINGLEOPTIN;
    }

    switch (type) {
        case "SINGLEOPTIN":
            
            return EmailFormType.SINGLEOPTIN;

        case "DOUBLEOPTIN":
            
            return EmailFormType.DOUBLEOPTIN;
    
        default:
            return EmailFormType.SINGLEOPTIN;
    }
}

const typeConfig = getEmailType(process.env.NEXT_PUBLIC_OPTINTYPE)

export const ContactState = Object.freeze({
    NOEMAIL: Symbol('NOEMAIL'),
    EMAILUNVERIFIED: Symbol('EMAILUNVERIFIED'),
    EMAILVERIFIED: Symbol('EMAILVERIFIED'),
    EMAILSENT: Symbol('EMAILSENT'),
})

interface ContactModalProps {
    
}
 
export const ContactModal: FC<ContactModalProps> = () => {
    const { appData, setAppData } = useContext(AppContext);
    const [contactState, setContactState] = useState<Symbol>(ContactState.NOEMAIL);
    const [email, setEmail] = useState<string>("");
    const [focusedInput, setFocusedInput] = useState(null);
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    // resend otp
    const [count, setCount] = useState<number>(60);
    const [resendEnabled, setResendEnabled] = useState<boolean>(false);

    useEffect(() => {
        if (appData.contact == null) return;
        if (contactState !== ContactState.NOEMAIL) return;

        if (appData.email.length > 0) setEmail(appData.contact.email);
        if (appData.contact.email.length > 0 && (appData.contact.verified && typeConfig == EmailFormType.DOUBLEOPTIN)) {
            setContactState(ContactState.EMAILVERIFIED);
            return;
        }
        if (appData.contact.email.length > 0 && (typeConfig == EmailFormType.SINGLEOPTIN)) {
            setContactState(ContactState.EMAILVERIFIED);
            return;
        }
        if (!appData.contact.verified) {
            setContactState(ContactState.EMAILUNVERIFIED);
            return;
        }
    }, []);

    useEffect(() => {
        if (appData.contact == null) return;
        if (contactState !== ContactState.EMAILSENT) return;

    }, [contactState]);

    useEffect(() => {
        if (appData.contact == null) return;
        if (contactState !== ContactState.EMAILVERIFIED) return;
        
    }, [contactState]);

    useEffect(() => {
        if (appData.contact == null) return;
        if (contactState !== ContactState.EMAILUNVERIFIED) return;
        
    }, [contactState]);

    const closeButtonClick = () => {
      const element = document.getElementById('contactModal')
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
              left: 314,
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
                src="/assets/img/bg-img/38.png"
                alt=""
            />
        </div>
        {/** NOUSER */}
          {contactState == ContactState.NOEMAIL && (
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
            >
              <div className="register-form mt-4">
                
                <div className="text-center" 
                  style={{
                    color: 'black'
                  }}>Enter your email</div>
                
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const response = await postClientContact(appData.loginData?.tokenid!, email, appData.user_id)

                    if (response) {
                        if (response.body.error) return;

                        fbq.event('Lead');
                        
                        setAppData({ ...appData, contact: { email: email, verified: false}});
                        if (typeConfig == EmailFormType.SINGLEOPTIN) {
                          setContactState(ContactState.EMAILVERIFIED);
                          return;
                        }
                        setContactState(ContactState.EMAILUNVERIFIED);
                    }
                  }}
                >
                  <div className="form-group">
                    <input
                      className={`form-control ${
                        focusedInput === "email"
                          ? "form-control-clicked"
                          : ""
                      }`}
                      type="text"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
          {contactState == ContactState.EMAILUNVERIFIED && (
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
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="custom-container">
                  <div className="text-center">
                    <h3>Verify Email Address</h3>
                    <p className="mb-4">
                      Enter the OTP code sent to <strong>{email}</strong>
                    </p>
                  </div>
                  <div className="otp-verify-form mt-4">
                    
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
                        {resendEnabled ? 
                          typeConfig == EmailFormType.DOUBLEOPTIN && 
                            <button
                                className="btn btn-primary"
                                style={{
                                width: "200px",
                                }}
                                onClick={async () => {
                                    const response = await postClientContact(appData.loginData?.tokenid!, email, appData.user_id, "RESEND");

                                    if (response) {
                                        if (response.body.error) return;
                                    }
                                }}
                            >
                                Resend Verify Email
                            </button>
                         : (
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
          {contactState == ContactState.EMAILVERIFIED && (
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
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="custom-container">
                    <div className="text-center">
                        <h3>Verify Email Address</h3>
                        <p className="mb-4">
                        <strong>{email}</strong>
                        </p>
                    </div>

                  <div
                    style={{
                      height: "4px",
                    }}
                  />
                  <div className="otp-verify-form mt-4">
                    
                    <div
                      style={{
                        height: "24px",
                      }}
                    />
                    <a
                      type="button"
                      onClick={async (e) => {
                        const response : POSTGameContactResponse | undefined = await postClientContact(appData.loginData?.tokenid!, email, appData.user_id, "DELETE")
                        if (response) {
                            if (response.body.error) return;

                            setAppData({ ...appData, contact: null })
                            setContactState(ContactState.NOEMAIL);
                        }
                      }}
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      Delete
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