"use client";

import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const FormInputGroup = () => {
	return (
		<>
			<HeaderSix links="elements" title="Input group" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Input group</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form onSubmit={(e) => e.preventDefault()}>
								<div className="input-group mb-3">
									<span className="input-group-text" id="basic-addon1">
										@
									</span>
									<input
										className="form-control"
										type="text"
										placeholder="Designing World"
										aria-label="Username"
										aria-describedby="basic-addon1"
									/>
								</div>

								<div className="input-group mb-3">
									<input
										className="form-control"
										type="text"
										placeholder="care.designingworld"
										aria-label="Recipients username"
										aria-describedby="basic-addon2"
									/>
									<span className="input-group-text" id="basic-addon2">
										@gmail.com
									</span>
								</div>

								<label className="form-label" htmlFor="basic-url">
									Your profile URL
								</label>
								<div className="input-group mb-3">
									<span className="input-group-text" id="basic-addon3">
										themeforest.net/user/
									</span>
									<input
										className="form-control"
										id="basic-url"
										type="text"
										aria-describedby="basic-addon3"
										placeholder="designing-world"
									/>
								</div>

								<div className="input-group mb-3">
									<span className="input-group-text">Price</span>
									<input
										className="form-control"
										type="text"
										aria-label="Amount (to the nearest dollar)"
										placeholder="24"
									/>
									<span className="input-group-text">$</span>
								</div>

								<div className="input-group mb-3">
									<div className="input-group-text">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											aria-label="Checkbox for following text input"
										/>
									</div>
									<input
										className="form-control"
										type="text"
										aria-label="Text input with checkbox"
										placeholder="Checkbox"
									/>
								</div>

								<div className="input-group mb-3">
									<div className="input-group-text">
										<input
											className="form-check-input"
											type="radio"
											value=""
											aria-label="Radio button for following text input"
										/>
									</div>
									<input
										className="form-control"
										type="text"
										aria-label="Text input with radio button"
										placeholder="Radio"
									/>
								</div>

								<div className="input-group mb-3">
									<span className="input-group-text">Name</span>
									<input
										className="form-control"
										type="text"
										aria-label="First name"
										placeholder="First name"
									/>
									<input
										className="form-control"
										type="text"
										aria-label="Last name"
										placeholder="Last name"
									/>
								</div>

								<div className="input-group mb-3">
									<button
										className="btn btn-primary dropdown-toggle"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Dropdown
									</button>
									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item" href="#">
												Search By Name
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Search By Price
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Search By Date
											</a>
										</li>
									</ul>
									<input
										className="form-control"
										type="text"
										aria-label="Text input with dropdown button"
									/>
								</div>

								<div className="input-group">
									<span className="input-group-text">Message</span>
									<textarea
										className="form-control"
										aria-label="With textarea"
										placeholder="Hello, Designing World!"
									></textarea>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default FormInputGroup;
