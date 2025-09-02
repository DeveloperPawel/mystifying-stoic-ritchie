import HeaderThree from "@/layouts/headers/HeaderThree";
import Link from "next/link";
import React from "react";

const SocialLogin = () => {
	return (
		<>
			<HeaderThree />

			<div className="login-wrapper d-flex align-items-center justify-content-center">
				<div className="custom-container">
					{/* <!-- Image --> */}
					<div className="text-center px-4">
						<img
							className="login-intro-img"
							src="/assets/img/bg-img/36.png"
							alt=""
						/>
					</div>

					{/* <!-- Register Form --> */}
					<div className="register-form mt-4">
						<h6 className="mb-3 text-center">Login with</h6>
						<div className="row">
							<div className="col-12">
								<a className="btn btn-primary btn-facebook mb-3 w-100" href="#">
									<i className="bi bi-facebook me-1"></i> Login with Facebook
								</a>

								<a className="btn btn-primary btn-twitter mb-3 w-100" href="#">
									<i className="bi bi-twitter me-1"></i> Login with Twitter
								</a>

								<a className="btn btn-primary btn-google mb-3 w-100" href="#">
									<i className="bi bi-google me-1"></i> Login with Google
								</a>
							</div>
						</div>
					</div>

					{/* <!-- Login Meta --> */}
					<div className="login-meta-data text-center">
						<p className="mb-0">
							Didnt have an account? 
							<Link className="stretched-link" href="/register">
								Register Now
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialLogin;
