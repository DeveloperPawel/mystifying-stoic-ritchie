"use client";

import React from "react";
import NiceSelect from "../ui/NiceSelect";

const ContactArea = () => {
	const selectHandler = (e: any) => {};

	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- Contact Form --> */}
					<div className="card mb-3">
						<div className="card-body">
							<h5 className="mb-3">Write to us</h5>

							<div className="contact-form">
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="form-group mb-3">
										<input
											className="form-control"
											type="text"
											placeholder="Your name"
										/>
									</div>

									<div className="form-group mb-3">
										<input
											className="form-control"
											type="email"
											placeholder="Enter email"
										/>
									</div>

									<div className="form-group mb-3 rk_select">
										<NiceSelect
											className="form-select d-flex align-items-center"
											options={[
												{ value: "01", text: "Authors Help" },
												{ value: "02", text: "Buyer Help" },
												{ value: "03", text: "Licenses" },
											]}
											defaultCurrent={0}
											onChange={selectHandler}
											placeholder="Select an option"
											name="myNiceSelect"
										/>
									</div>

									<div className="form-group mb-3">
										<textarea
											className="form-control"
											name="textarea"
											cols={30}
											rows={10}
											placeholder="Write details"
										></textarea>
									</div>
									<button className="btn btn-primary w-100">Send Now</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					{/* <!-- Google Maps --> */}
					<div className="card">
						<div className="card-body">
							<div className="google-maps">
								<h5 className="mb-3">Our office location</h5>
								<iframe
									className="w-100"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37902.096510377676!2d101.6393079588335!3d3.103387873464772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sbd!4v1591684973931!5m2!1sen!2sbd"
									allowFullScreen={true}
									aria-hidden="false"
									tabIndex={0}
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactArea;
