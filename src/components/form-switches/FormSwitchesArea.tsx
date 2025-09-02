import React from "react";

const FormSwitchesArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Bootstrap Switches</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="form-check form-switch">
								<input
									className="form-check-input"
									id="flexSwitchCheckDefault"
									type="checkbox"
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckDefault"
								>
									Default Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input"
									id="flexSwitchCheckChecked"
									type="checkbox"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckChecked"
								>
									Checked Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input"
									id="flexSwitchCheckDisabled"
									type="checkbox"
									disabled
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckDisabled"
								>
									Disabled Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input"
									id="flexSwitchCheckCheckedDisabled"
									type="checkbox"
									defaultChecked
									disabled
								/>
								<label
									className="form-check-label"
									htmlFor="flexSwitchCheckCheckedDisabled"
								>
									Disabled Checked Switch
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Colorful Switches</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="form-check form-switch">
								<input
									className="form-check-input form-check-success"
									id="successSwitch"
									type="checkbox"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="successSwitch">
									Success Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input form-check-warning"
									id="warningSwitch"
									type="checkbox"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="warningSwitch">
									Warning Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input form-check-danger"
									id="dangerSwitch"
									type="checkbox"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="dangerSwitch">
									Danger Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input form-check-info"
									id="infoSwitch"
									type="checkbox"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="infoSwitch">
									Info Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input form-check-light"
									id="lightSwitch"
									type="checkbox"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="lightSwitch">
									Light Switch
								</label>
							</div>

							<div className="mb-2"></div>

							<div className="form-check form-switch">
								<input
									className="form-check-input form-check-dark"
									id="dark8Switch"
									type="checkbox"
									defaultChecked
								/>
								<label className="form-check-label" htmlFor="dark8Switch">
									Dark Switch
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormSwitchesArea;
