"use client";

import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import HeaderThree from "@/layouts/headers/HeaderThree";

const OtpConfirm = () => {
	const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));

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
						<h3>Verify Phone Number</h3>
						<p className="mb-4">
							Enter the OTP code sent to <strong>012 3456 7890</strong>
						</p>
					</div>

					{/* <!-- OTP Verify Form --> */}
					<div className="otp-verify-form mt-4">
						<form action="/home" onSubmit={(e) => e.preventDefault()}>
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
							Dont received the OTP? {" "}
							<span className="otp-sec" id="resendOTP" style={{ color: count <= 10 ? "red" : "black" }}>
								{resendEnabled ? (
									<a className="resendOTP" href="">
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
