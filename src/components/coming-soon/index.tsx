"use client";

import Link from "next/link";
import React from "react";

const ComingSoon = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			{/* <!-- Static Backdrop Modal --> */}

			<div
				className="cs-newsletter-form modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex={-1}
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<button
								className="btn btn-close p-1 ms-auto"
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
							<h6 className="mb-3">Subscribe our newsletter.</h6>
							<form onSubmit={(e) => e.preventDefault()}>
								<input
									className="form-control mb-3"
									type="email"
									placeholder="Enter your email"
								/>
								<button className="btn btn-primary w-100" type="submit">
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Page Content Wrapper --> */}
			<div
				className="coming-soon-wrapper bg-white text-center bg-overlay"
				style={{ backgroundImage: `url(/assets/img/bg-img/26.jpg)` }}
			>
				<div className="container">
					<div className="cs-logo">
						<Link href="/home">
							<img src="/assets/img/core-img/logo-dark.png" alt="" />
						</Link>
					</div>

					<h2 className="text-white display-3">Coming Soon</h2>
					<p className="text-white">
						It is very nicely designed & coded with the latest technology.
					</p>

					<div
						className="countdown2 justify-content-center"
						id="countdown2"
						data-date="11-6-2022"
						data-time="23:24"
					>
						<div className="day">
							<span className="num"></span>
							<span className="word"></span>
						</div>
						<div className="hour">
							<span className="num"></span>
							<span className="word"></span>
						</div>
						<div className="min">
							<span className="num"></span>
							<span className="word"></span>
						</div>
						<div className="sec">
							<span className="num"></span>
							<span className="word"></span>
						</div>
					</div>

					<div className="notify-email mt-5">
						<button
							className="btn btn-warning"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop"
						>
							Notify via Email
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ComingSoon;
