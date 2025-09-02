"use client";
import React from "react";

const FaqArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/js/dist/collapse");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- Accordion Card --> */}
					<div className="card bg-primary rounded-0 rounded-top">
						<div className="card-body text-center py-3">
							<h6 className="mb-0 text-white line-height-1">For Buyers</h6>
						</div>
					</div>

					<div className="card mb-3 rounded-0 rounded-bottom">
						<div className="card-body">
							<div
								className="accordion accordion-flush accordion-style-two"
								id="accordionStyle2"
							>
								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionFour">
										<h6
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFour"
											aria-expanded="true"
											aria-controls="accordionStyleFour"
										>
											<i className="bi bi-plus-lg"></i> What is refund policy?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse show"
										id="accordionStyleFour"
										aria-labelledby="accordionFour"
										data-bs-parent="#accordionStyle2"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Rerum, velit?
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionFive">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFive"
											aria-expanded="false"
											aria-controls="accordionStyleFive"
										>
											<i className="bi bi-plus-lg"></i> Can it accept Paypal?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleFive"
										aria-labelledby="accordionFive"
										data-bs-parent="#accordionStyle2"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quisquam, a cupiditate.
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionSix">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleSix"
											aria-expanded="false"
											aria-controls="accordionStyleSix"
										>
											<i className="bi bi-plus-lg"></i> What is PWA ready?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleSix"
										aria-labelledby="accordionSix"
										data-bs-parent="#accordionStyle2"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quisquam, a cupiditate.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Accordion Card --> */}
					<div className="card bg-danger rounded-0 rounded-top">
						<div className="card-body text-center py-3">
							<h6 className="mb-0 text-white line-height-1">For Authors</h6>
						</div>
					</div>

					<div className="card rounded-0 rounded-bottom">
						<div className="card-body">
							<div
								className="accordion accordion-flush accordion-style-two"
								id="accordionStyle22"
							>
								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionFour2">
										<h6
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFour2"
											aria-expanded="true"
											aria-controls="accordionStyleFour2"
										>
											<i className="bi bi-plus-lg"></i> What is refund policy?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse show"
										id="accordionStyleFour2"
										aria-labelledby="accordionFour2"
										data-bs-parent="#accordionStyle22"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Rerum, velit?
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionFive2">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFive2"
											aria-expanded="false"
											aria-controls="accordionStyleFive2"
										>
											<i className="bi bi-plus-lg"></i> Can it accept Paypal?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleFive2"
										aria-labelledby="accordionFive2"
										data-bs-parent="#accordionStyle22"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quisquam, a cupiditate.
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionSix3">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleSix3"
											aria-expanded="false"
											aria-controls="accordionStyleSix3"
										>
											<i className="bi bi-plus-lg"></i> What is PWA ready?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleSix3"
										aria-labelledby="accordionSix3"
										data-bs-parent="#accordionStyle22"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quisquam, a cupiditate.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FaqArea;
