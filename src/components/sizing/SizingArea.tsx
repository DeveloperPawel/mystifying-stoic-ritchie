import React from "react";

const SizingArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Width Sizing</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<p>All width relative to the parent width.</p>
							<div className="w-25 p-2 bg-light mb-2 rounded">w-25</div>
							<div className="w-50 p-2 bg-light mb-2 rounded">w-50</div>
							<div className="w-75 p-2 bg-light mb-2 rounded">w-75</div>
							<div className="w-100 p-2 bg-light mb-2 rounded">w-100</div>
							<div className="w-auto p-2 bg-light mb-2 rounded">w-auto</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Height Sizing</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<p>All height relative to the parent height.</p>
							<div
								className="d-flex bg-gray justify-content-between"
								style={{ height: "120px" }}
							>
								<div className="h-25 p-1 bg-info mb-2 text-white rounded-bottom">
									h-25
								</div>
								<div className="h-50 p-1 bg-info mb-2 text-white rounded-bottom">
									h-50
								</div>
								<div className="h-75 p-1 bg-info mb-2 text-white rounded-bottom">
									h-75
								</div>
								<div className="h-100 p-1 bg-info mb-2 text-white rounded-bottom">
									h-100
								</div>
								<div className="h-auto p-1 bg-info mb-2 text-white rounded-bottom">
									h-auto
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Max Width & Max Height</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<div className="mw-100 p-2 bg-light mb-2 rounded">
								Max Width 100%
							</div>
							<div className="bg-gray" style={{ height: "120px" }}>
								<div className="mh-100 p-1 bg-info mb-2 text-white">
									Max Height 100%
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Relative to the viewport</h6>
					</div>
				</div>

				<div className="min-vw-100 bg-primary text-white mb-3 p-2">
					Min-width 100vw
				</div>
				<div className="vw-100 bg-success text-white mb-3 p-2">Width 100vw</div>
				<div className="container">
					<div className="min-vh-100 bg-primary rounded text-center p-3 text-white mb-3">
						Min-height 100vh
					</div>
					<div className="vh-100 bg-info rounded text-center p-3 text-white">
						Height 100vh
					</div>
				</div>
			</div>
		</>
	);
};

export default SizingArea;
