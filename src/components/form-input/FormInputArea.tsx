import React from "react";

const FormInputArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>All input field</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form action="#" method="GET">
								<div className="form-group">
									<label className="form-label" htmlFor="exampleInputText">
										Input text
									</label>
									<input
										className="form-control"
										id="exampleInputText"
										type="text"
										placeholder="Designing World"
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
										placeholder="https://themeforest.net/user/rk_theme"
									/>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="exampleInputReadonly">
										Readonly input
									</label>
									<input
										className="form-control"
										id="exampleInputReadonly"
										type="text"
										placeholder="Designing World"
									/>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="exampleInputText3">
										Readonly plain text
									</label>
									<input
										className="form-control-plaintext"
										id="exampleInputText3"
										type="text"
										placeholder="Designing World"
									/>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="exampleColorInput">
										Color picker
									</label>
									<input
										className="form-control form-control-color"
										id="exampleColorInput"
										type="color"
										value="#563d7c"
										data-bs-toggle="tooltip"
										data-bs-placement="right"
										title="Choose your color"
									/>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="inputDate">
										Date picker
									</label>
									<input className="form-control" id="inputDate" type="date" />
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="exampleInputText2">
										Input large
									</label>
									<input
										className="form-control form-control-lg"
										id="exampleInputText2"
										type="text"
										placeholder="Designing World"
									/>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="exampleInputText38">
										Input small
									</label>
									<input
										className="form-control form-control-sm"
										id="exampleInputText38"
										type="text"
										placeholder="Designing World"
									/>
								</div>

								<button
									className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
									type="submit"
								>
									Send Message
									<i className="bi bi-arrow-right fz-16 ms-1"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormInputArea;
