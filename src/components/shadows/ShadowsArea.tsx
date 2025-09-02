import React from "react";

const ShadowsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Shadows</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<div className="shadow-none p-3 mb-5 bg-light rounded">
								No shadow
							</div>
							<div className="shadow-sm p-3 mb-5 bg-white rounded">
								Small shadow
							</div>
							<div className="shadow p-3 mb-5 bg-white rounded">
								Regular shadow
							</div>
							<div className="shadow-lg p-3 bg-white rounded">
								Larger shadow
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShadowsArea;
