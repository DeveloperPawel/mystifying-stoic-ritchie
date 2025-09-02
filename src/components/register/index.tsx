"use client";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
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

	return (
		<>
			<HeaderThree links="login" />
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
							Register to continue to the Affan
						</h6>

						<form action="/otp" onSubmit={(e) => e.preventDefault()}>
							<div className="form-group text-start mb-3">
								<input
									className={`form-control ${
										focusedInput === "text" ? "form-control-clicked" : ""
									}`}
									type="text"
									placeholder="Email address"
									onFocus={() => handleFocus("text")}
									onBlur={handleBlur}
								/>
							</div>

							<div className="form-group text-start mb-3">
								<input
									className={`form-control ${
										focusedInput === "username" ? "form-control-clicked" : ""
									}`}
									type="text"
									placeholder="Username"
									onFocus={() => handleFocus("username")}
									onBlur={handleBlur}
								/>
							</div>

							<div className="form-group text-start mb-3 position-relative">
								<input
									className={`form-control ${
										focusedInput === "password" ? "form-control-clicked" : ""
									}`}
									onFocus={() => handleFocus("password")}
									onBlur={handleBlur}
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									id="psw-input"
									placeholder="New password"
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
									<i className="bi bi-eye"></i>
									<i className="bi bi-eye-slash"></i>
								</div>
							</div>

							<div className="mb-3" id="pswmeter"></div>

							<div className="form-check mb-3">
								<input
									className="form-check-input"
									id="checkedCheckbox"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label
									className="form-check-label text-muted fw-normal"
									htmlFor="checkedCheckbox"
								>
									I agree with the terms & policy.
								</label>
							</div>

							<button className="btn btn-primary w-100" type="submit">
								Sign Up
							</button>
						</form>
					</div>

					{/* <!-- Login Meta --> */}
					<div className="login-meta-data text-center">
						<p className="mt-3 mb-0">
							Already have an account?
							<Link className="stretched-link" href="/login"> {" "}
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
