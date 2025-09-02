import React from "react";

const TextTruncationArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Text truncation</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<div className="row">
								<div className="col-7 text-truncate">
									<h4>Truncate long strings of text with an ellipsis.</h4>
								</div>
							</div>
							<span
								className="d-inline-block text-truncate mb-0"
								style={{ maxWidth: "145px" }}
							>
								Truncate long strings of text with an ellipsis.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TextTruncationArea;
