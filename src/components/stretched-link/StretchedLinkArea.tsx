import React from "react";

const StretchedLinkArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Stretched link</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<h5 className="card-title">Card with stretched link</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</p>
							<a className="stretched-link" href="#">
								Stretched link
							</a>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Stretched link with colors</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<a className="stretched-link text-primary mb-2 d-block" href="#">
								This is a primary color stretched link
							</a>
							<a
								className="stretched-link text-secondary mb-2 d-block"
								href="#"
							>
								This is a secondary color stretched link
							</a>
							<a className="stretched-link text-success mb-2 d-block" href="#">
								This is a success color stretched link
							</a>
							<a className="stretched-link text-danger mb-2 d-block" href="#">
								This is a danger color stretched link
							</a>
							<a className="stretched-link text-warning mb-2 d-block" href="#">
								This is a warning color stretched link
							</a>
							<a className="stretched-link text-info mb-2 d-block" href="#">
								This is a info color stretched link
							</a>
							<a className="stretched-link text-light mb-2 d-block" href="#">
								This is a light color stretched link
							</a>
							<a className="stretched-link text-dark mb-0 d-block" href="#">
								This is a dark color stretched link
							</a>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Stretched link with paragraph text</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<p className="mb-0">
								Some quick example text to build on the
								<a className="stretched-link" href="#">
									 
									card title 
								</a>
								and make up the bulk of the cards content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StretchedLinkArea;
