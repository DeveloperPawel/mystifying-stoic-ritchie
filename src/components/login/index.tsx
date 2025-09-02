"use client";

import HeaderThree from "@/layouts/headers/HeaderThree";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { handleSignUp, getRandomString } from "@/auth/handlesignup";
import { handleSignIn } from "@/auth/handlesignin";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "aws-amplify/auth";
import { fetchAuthSession } from "aws-amplify/auth";
import AppContext from "@/context/appcontext";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName: any) => {
    setFocusedInput(inputName);
  };
  const handleBlur = () => {
    setFocusedInput(null);
  };
  const { appData, setAppData } = useContext(AppContext);

  return (
    <>
      <HeaderThree links="hero-blocks" />

      {/* <!-- Login Wrapper Area --> */}
      <div className="login-wrapper d-flex align-items-center justify-content-center">
        <div className="custom-container">
          <div className="text-center px-4">
            <img
              className="login-intro-img"
              src="/assets/img/bg-img/36.png"
              alt=""
            />
          </div>

          {/* <!-- Register Form --> */}
          <div className="register-form mt-4">
            <h6 className="mb-3 text-center">
              Log in to continue to the Affan
            </h6>

            <form
              action="/otp-confirm"
              onSubmit={async (e) => {
                e.preventDefault();
                let result = null;
                let result2 = null;
                let error = false;
                try {
                  let result = await handleSignUp({
                    username,
                    fullName: getRandomString(7),
                  });
                } catch (error) {
                  error = true;

                  const { username, userId, signInDetails } =
                    await getCurrentUser();

                  const session = await fetchAuthSession();

                  // console.log(session);
                  // console.log(username);
                  // console.log(userId);
                  // console.log(signInDetails);
                  setAppData({
                    ...appData,
                    userId: userId,
                    email: username,
                  });
                }

                try {
                  let result2 = await handleSignIn(username);
                } catch (error) {
                  error = true;
                }
                // console.log(result);
                // console.log(result2);
                if (!error) {
                  router.push("/otp-confirm");
                }
              }}
            >
              <div className="form-group">
                <input
                  className={`form-control ${
                    focusedInput === "username" ? "form-control-clicked" : ""
                  }`}
                  type="text"
                  id="username"
                  placeholder="Username"
                  onFocus={() => handleFocus("username")}
                  onBlur={handleBlur}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group position-relative">
                <input
                  className={`form-control ${
                    focusedInput === "password" ? "form-control-clicked" : ""
                  }`}
                  id="psw-input"
                  placeholder="Enter Password"
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className={`position-absolute ${
                    showPassword ? "active" : ""
                  }`}
                  id="password-visibility"
                  onClick={toggleShowPassword}
                  style={{
                    cursor: "pointer",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                >
                  {showPassword ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </div>
              </div>
              {/* <Link href="/otp-confirm"> */}
              <button className="btn btn-primary w-100" type="submit">
                Sign In
              </button>
              {/* </Link> */}
            </form>
          </div>

          {/* <!-- Login Meta --> */}
          <div className="login-meta-data text-center">
            <Link
              className="stretched-link forgot-password d-block mt-3 mb-1"
              href="/forget-password"
            >
              Forgot Password?
            </Link>
            <p className="mb-0">
              Didnt have an account?
              <Link className="stretched-link" href="/register">
                {" "}
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
