import HeaderThree from "@/layouts/headers/HeaderThree";
import Link from "next/link";
import React from "react";

const ForgetPasswordSuccess = () => {
	return (
		<>
			<HeaderThree links="login" />

			<div className="login-wrapper d-flex align-items-center justify-content-center text-center">
				<div className="custom-container">
					<div className="text-center px-2">
						<img
							className="login-intro-img mb-4"
							src="/assets/img/bg-img/38.png"
							alt=""
						/>

						<h3>Check your mailbox!</h3>
						<p className="mb-4">
							We have sent a password recovery email in your email. This email
							contain 8 digit security code.
						</p>

						{/* <!-- Go Back Button --> */}
						<Link className="btn btn-primary" href="/change-password">
							Change Password
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgetPasswordSuccess;
