"use client";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Link from "next/link";
import React from "react";
import NiceSelect from "../ui/NiceSelect";

const Otp = () => {
	const selectHandler = (e: any) => {};

	return (
		<>
			<HeaderThree links="register" />
			<div className="login-wrapper d-flex align-items-center justify-content-center">
				<div className="custom-container">
					<div className="text-center">
						<img
							className="mx-auto mb-4 d-block"
							src="/assets/img/bg-img/36.png"
							alt=""
						/>
						<h3>Phone Verification</h3>
						<p>We will send you an OTP code on this phone number.</p>
					</div>

					<div className="otp-form mt-4">
						<form action="/otp-confirm" onSubmit={(e) => e.preventDefault()}>
							<div className="input-group mb-3">
								<NiceSelect
									className="input-group-text d-flex"
									options={[
										{ value: "01", text: "+880" },
										{ value: "02", text: "+920" },
										{ value: "03", text: "+061" },
									]}
									defaultCurrent={0}
									onChange={selectHandler}
									placeholder="Select an option"
									name="myNiceSelect"
								/>

								<input
									className="form-control"
									type="text"
									placeholder="Enter phone number"
								/>
							</div>
							<button className="btn btn-primary w-100" type="submit">
								Send Now
							</button>
						</form>
					</div>

					<div className="login-meta-data px-4 text-center">
						<p className="mt-3 mb-0">
							By providing my phone number, I hereby agree the
							<Link className="stretched-link" href="/privacy-policy">
								 
								{" "}Term of Services
							</Link>
							and
							<Link className="stretched-link" href="/privacy-policy"> {" "}
								Privacy Policy.
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Otp;
