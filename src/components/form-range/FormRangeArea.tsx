import React from "react";

const FormRangeArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Range</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<label className="form-label" htmlFor="bootstrapRange">
								Bootstrap range
							</label>
							<input className="form-range" id="bootstrapRange" type="range" />
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Range with step</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<label className="form-label" htmlFor="stepRange">
								Range with step
							</label>
							<input
								className="form-range"
								id="stepRange"
								type="range"
								min="0"
								max="5"
								step="1"
							/>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Disabled range</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<label className="form-label" htmlFor="disabledRange">
								Disabled Range
							</label>
							<input
								className="form-range"
								id="disabledRange"
								type="range"
								min="0"
								max="100"
								step="1"
								disabled
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormRangeArea;
