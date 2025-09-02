"use client";

import React from "react";

const FormValidationArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Form validation</h6>
					</div>
				</div>

				<div className="container">
					<div className="card-body">
						<form
							className="was-validated"
							onSubmit={(e) => e.preventDefault()}
						>
							<div className="form-group">
								<label className="form-label" htmlFor="exampleInputText">
									Input text
								</label>
								<input
									className="form-control"
									id="exampleInputText"
									type="text"
									placeholder="Designing World"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label" htmlFor="exampleInputemail">
									Input email
								</label>
								<input
									className="form-control"
									id="exampleInputemail"
									type="email"
									placeholder="care.designingworld@gmail.com"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label" htmlFor="exampleInputpassword">
									Input password
								</label>
								<input
									className="form-control"
									id="exampleInputpassword"
									type="password"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label" htmlFor="exampleInputnumber">
									Input number
								</label>
								<input
									className="form-control"
									id="exampleInputnumber"
									type="number"
									placeholder="12"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label" htmlFor="exampleInputtelephone">
									Input telephone
								</label>
								<input
									className="form-control"
									id="exampleInputtelephone"
									type="tel"
									placeholder="+880 123 456 7890"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label" htmlFor="exampleInputurl">
									Input url
								</label>
								<input
									className="form-control"
									id="exampleInputurl"
									type="url"
									placeholder="https://themeforest.net/user/designing-world"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label" htmlFor="exampleTextarea1">
									Input textarea
								</label>
								<textarea
									className="form-control"
									id="exampleTextarea1"
									name="textarea"
									cols={3}
									rows={5}
									placeholder="Write something..."
									required
								></textarea>
							</div>

							<button
								className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
								type="button"
							>
								Send Message
								<i className="bi bi-arrow-right fz-16 ms-1"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormValidationArea;
