"use client";

import HeaderThree from "@/layouts/headers/HeaderThree";
import Link from "next/link";
import React from "react";

const ForgetPassword = () => {
	return (
		<>
			<HeaderThree links="login" />

			<div className="login-wrapper d-flex align-items-center justify-content-center">
				<div className="custom-container">
					<div className="text-center px-4">
						<img
							className="login-intro-img"
							src="/assets/img/bg-img/37.png"
							alt=""
						/>
					</div>

					<div className="register-form mt-4">
						<Link href="/forget-password-success">
							<form
								action="/forget-password-success"
								onSubmit={(e) => e.preventDefault()}
							>
								<div className="form-group text-start mb-3">
									<input
										className="form-control"
										type="text"
										placeholder="Enter your email address"
										required
									/>
								</div>
								<button className="btn btn-primary w-100" type="submit">
									Reset Password
								</button>
							</form>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgetPassword;
