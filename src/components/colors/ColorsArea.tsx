import React from "react";

const ColorsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Text Colors</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<p className="text-primary">.text-primary</p>
							<p className="text-secondary">.text-secondary</p>
							<p className="text-success">.text-success</p>
							<p className="text-danger">.text-danger</p>
							<p className="text-warning">.text-warning</p>
							<p className="text-info">.text-info</p>
							<p className="text-light bg-dark">.text-light</p>
							<p className="text-dark">.text-dark</p>
							<p className="text-white bg-dark">.text-white</p>
							<p className="text-body">.text-body</p>
							<p className="text-muted">.text-muted</p>
							<p className="text-black-50">.text-black-50</p>
							<p className="text-white-50 bg-dark mb-0">.text-white-50</p>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Background colors</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<div className="p-3 mb-2 bg-primary text-white rounded">
								.bg-primary
							</div>
							<div className="p-3 mb-2 bg-secondary text-white rounded">
								.bg-secondary
							</div>
							<div className="p-3 mb-2 bg-success text-white rounded">
								.bg-success
							</div>
							<div className="p-3 mb-2 bg-danger text-white rounded">
								.bg-danger
							</div>
							<div className="p-3 mb-2 bg-warning text-dark rounded">
								.bg-warning
							</div>
							<div className="p-3 mb-2 bg-info text-white rounded">
								.bg-info
							</div>
							<div className="p-3 mb-2 bg-light text-dark rounded">
								.bg-light
							</div>
							<div className="p-3 mb-2 bg-dark text-white rounded">
								.bg-dark
							</div>
							<div className="p-3 mb-2 bg-white text-dark rounded">
								.bg-white
							</div>
							<div className="p-3 mb-0 bg-transparent text-dark rounded">
								.bg-transparent
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Background gradient</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<div className="p-3 mb-2 bg-primary bg-gradient text-white rounded">
								.bg-primary
							</div>
							<div className="p-3 mb-2 bg-secondary bg-gradient text-white rounded">
								.bg-secondary
							</div>
							<div className="p-3 mb-2 bg-success bg-gradient text-white rounded">
								.bg-success
							</div>
							<div className="p-3 mb-2 bg-danger bg-gradient text-white rounded">
								.bg-danger
							</div>
							<div className="p-3 mb-2 bg-warning bg-gradient text-dark rounded">
								.bg-warning
							</div>
							<div className="p-3 mb-2 bg-info bg-gradient text-white rounded">
								.bg-info
							</div>
							<div className="p-3 mb-2 bg-light bg-gradient text-dark rounded">
								.bg-light
							</div>
							<div className="p-3 mb-0 bg-dark bg-gradient text-white rounded">
								.bg-dark
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ColorsArea;
