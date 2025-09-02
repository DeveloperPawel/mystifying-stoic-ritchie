"use client";

import React from "react";

const FormCheckArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Checkbox</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form onSubmit={(e) => e.preventDefault()}>
								<div className="form-check">
									<input
										className="form-check-input"
										id="defaultCheckbox"
										type="checkbox"
										value=""
									/>
									<label className="form-check-label" htmlFor="defaultCheckbox">
										Default Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input"
										id="checkedCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="checkedCheckbox">
										Checked Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input indeterminate"
										id="indeterminateCheckbox"
										type="checkbox"
										value=""
									/>
									<label
										className="form-check-label"
										htmlFor="indeterminateCheckbox"
									>
										Indeterminate Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input"
										id="disabledCheckbox"
										type="checkbox"
										value=""
										disabled
									/>
									<label
										className="form-check-label"
										htmlFor="disabledCheckbox"
									>
										Disabled Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input"
										id="disabledCheckbox2"
										type="checkbox"
										value=""
										defaultChecked
										disabled
									/>
									<label
										className="form-check-label"
										htmlFor="disabledCheckbox2"
									>
										Disabled Checked Checkbox
									</label>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="element-heading mt-3">
						<h6>Colorful Checkbox</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form action="#" method="GET">
								<div className="form-check">
									<input
										className="form-check-input form-check-success"
										id="successCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="successCheckbox">
										Success Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-danger"
										id="dangerCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="dangerCheckbox">
										Danger Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-warning"
										id="warningCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="warningCheckbox">
										Warning Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-info"
										id="infoCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="infoCheckbox">
										Info Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-secondary"
										id="secondaryCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="secondaryCheckbox"
									>
										Secondary Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-light"
										id="lightCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="lightCheckbox">
										Light Checkbox
									</label>
								</div>

								<div className="mb-2"></div>

								<div className="form-check">
									<input
										className="form-check-input form-check-dark"
										id="darkCheckbox"
										type="checkbox"
										value=""
										defaultChecked
									/>
									<label className="form-check-label" htmlFor="darkCheckbox">
										Dark Checkbox
									</label>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="element-heading mt-3">
						<h6>Checkbox Large</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="form-check">
								<input
									className="form-check-input form-check-input-lg form-check-success"
									id="successCheckbox2"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="successCheckbox2">
									Success Checkbox
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check">
								<input
									className="form-check-input form-check-input-lg form-check-danger"
									id="dangerCheckbox2"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="dangerCheckbox2">
									Danger Checkbox
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check">
								<input
									className="form-check-input form-check-input-lg form-check-warning"
									id="warningCheckbox2"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="warningCheckbox2">
									Warning Checkbox
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check">
								<input
									className="form-check-input form-check-input-lg form-check-info"
									id="infoCheckbox2"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="infoCheckbox2">
									Info Checkbox
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check">
								<input
									className="form-check-input form-check-input-lg form-check-secondary"
									id="secondaryCheckbox2"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="secondaryCheckbox2"
								>
									Secondary Checkbox
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check">
								<input
									className="form-check-input form-check-input-lg form-check-light"
									id="lightCheckbox2"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="lightCheckbox2">
									Light Checkbox
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check">
								<input
									className="form-check-input form-check-input-lg form-check-dark"
									id="darkCheckbox2"
									type="checkbox"
									value=""
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="darkCheckbox2">
									Dark Checkbox
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="element-heading mt-3">
						<h6>Checkbox Card</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="list-group">
								<label className="list-group-item" htmlFor="listCheckbox1">
									<input
										className="form-check-input me-2"
										id="listCheckbox1"
										type="checkbox"
										value=""
									/>
									List Checkbox 1
								</label>

								<label className="list-group-item" htmlFor="listCheckbox2">
									<input
										className="form-check-input me-2"
										id="listCheckbox2"
										type="checkbox"
										value=""
										defaultChecked
									/>
									List Checkbox 2
								</label>

								<label className="list-group-item" htmlFor="listCheckbox3">
									<input
										className="form-check-input me-2"
										id="listCheckbox3"
										type="checkbox"
										value=""
									/>
									List Checkbox 3
								</label>

								<label className="list-group-item" htmlFor="listCheckbox4">
									<input
										className="form-check-input me-2"
										id="listCheckbox4"
										type="checkbox"
										value=""
									/>
									List Checkbox 4
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormCheckArea;
