import React from "react";

const FormRadioArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Radio</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form action="#" method="GET">
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadio"
										id="primaryRadio"
									/>
									<label className="form-check-label" htmlFor="primaryRadio">
										Primary Radio
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-success"
										type="radio"
										name="exampleRadio"
										id="successRadio"
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="successRadio">
										Success Radio
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-danger"
										type="radio"
										name="exampleRadio"
										id="dangerRadio"
									/>
									<label className="form-check-label" htmlFor="dangerRadio">
										Danger Radio
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-warning"
										type="radio"
										name="exampleRadio"
										id="warningRadio"
									/>
									<label className="form-check-label" htmlFor="warningRadio">
										Warning Radio
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-info"
										type="radio"
										name="exampleRadio"
										id="infoRadio"
									/>
									<label className="form-check-label" htmlFor="infoRadio">
										Info Radio
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-secondary"
										type="radio"
										name="exampleRadio"
										id="secondaryRadio"
									/>
									<label className="form-check-label" htmlFor="secondaryRadio">
										Secondary Radio
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-light"
										type="radio"
										name="exampleRadio"
										id="lightRadio"
									/>
									<label className="form-check-label" htmlFor="lightRadio">
										Light Radio
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-dark"
										type="radio"
										name="exampleRadio"
										id="darkRadio"
									/>
									<label className="form-check-label" htmlFor="darkRadio">
										Dark Radio
									</label>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Radio Card</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Single Plan Check --> */}
							<div className="single-plan-check shadow-sm active-effect">
								<div className="form-check mb-0">
									<input
										className="form-check-input"
										type="radio"
										name="planChoose"
										id="Individual"
									/>
									<label className="form-check-label" htmlFor="Individual">
										Individual
									</label>
								</div>
								<i className="bi bi-person text-primary fz-20 ms-auto"></i>
							</div>

							{/* <!-- Single Plan Check --> */}
							<div className="single-plan-check active shadow-sm active-effect">
								<div className="form-check mb-0">
									<input
										className="form-check-input"
										type="radio"
										name="planChoose"
										id="Team"
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="Team">
										Team
									</label>
								</div>
								<i className="bi bi-people text-success fz-20 ms-auto"></i>
							</div>

							{/* <!-- Single Plan Check --> */}
							<div className="single-plan-check shadow-sm active-effect">
								<div className="form-check mb-0">
									<input
										className="form-check-input"
										type="radio"
										name="planChoose"
										id="Company"
									/>
									<label className="form-check-label" htmlFor="Company">
										Company
									</label>
								</div>
								<i className="bi bi-building text-danger fz-20 ms-auto"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormRadioArea;
