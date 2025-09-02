"use client";

import React from "react";

const AccordionArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/js/dist/collapse");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Accordion with Image</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="accordion accordion-style-six"
								id="accordionStyle6"
							>
								{/* <!-- Single Accordion --> */}
								<div
									className="accordion-item"
									style={{ backgroundImage: `url(/assets/img/bg-img/1.jpg)` }}
								>
									<div className="accordion-header" id="accordionSix1">
										<h6
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleSix1"
											aria-expanded="true"
											aria-controls="accordionStyleSix1"
										>
											What is refund policy?
										</h6>
										<div
											className="accordion-collapse collapse show"
											id="accordionStyleSix1"
											aria-labelledby="accordionSix1"
											data-bs-parent="#accordionStyle6"
										>
											<p className="mb-0 mt-2 text-white">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Rerum, velit?
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div
									className="accordion-item"
									style={{ backgroundImage: `url(/assets/img/bg-img/2.jpg)` }}
								>
									<div className="accordion-header" id="accordionSix2">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleSix2"
											aria-expanded="false"
											aria-controls="accordionStyleSix2"
										>
											Can it accept Paypal?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleSix2"
										aria-labelledby="accordionSix2"
										data-bs-parent="#accordionStyle6"
									>
										<p className="mb-0 mt-2 text-white">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Quisquam, a cupiditate.
										</p>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div
									className="accordion-item"
									style={{ backgroundImage: `url(/assets/img/bg-img/3.jpg)` }}
								>
									<div className="accordion-header" id="accordionSix3">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleSix3"
											aria-expanded="false"
											aria-controls="accordionStyleSix3"
										>
											What is PWA ready?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleSix3"
										aria-labelledby="accordionSix3"
										data-bs-parent="#accordionStyle6"
									>
										<p className="mb-0 mt-2 text-white">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Quisquam, a cupiditate.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bordered Accordion</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="accordion accordion-style-five"
								id="accordionStyle5"
							>
								{/* <!-- Single Accordion --> */}
								<div className="accordion-item accordion-bg-primary">
									<div className="accordion-header" id="accordionFive1">
										<h6
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFive1"
											aria-expanded="true"
											aria-controls="accordionStyleFive1"
										>
											<i className="bi bi-plus-lg"></i>What is refund policy?
										</h6>
										<div
											className="accordion-collapse collapse show"
											id="accordionStyleFive1"
											aria-labelledby="accordionFive1"
											data-bs-parent="#accordionStyle5"
										>
											<p className="mb-0 mt-2">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Rerum, velit?
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item accordion-bg-warning">
									<div className="accordion-header" id="accordionFive2">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFive2"
											aria-expanded="false"
											aria-controls="accordionStyleFive2"
										>
											<i className="bi bi-plus-lg"></i>Can it accept Paypal?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleFive2"
										aria-labelledby="accordionFive2"
										data-bs-parent="#accordionStyle5"
									>
										<p className="mb-0 mt-2">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Quisquam, a cupiditate.
										</p>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item accordion-bg-success">
									<div className="accordion-header" id="accordionFive3">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFive3"
											aria-expanded="false"
											aria-controls="accordionStyleFive3"
										>
											<i className="bi bi-plus-lg"></i>What is PWA ready?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleFive3"
										aria-labelledby="accordionFive3"
										data-bs-parent="#accordionStyle5"
									>
										<p className="mb-0 mt-2">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Quisquam, a cupiditate.
										</p>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item accordion-bg-info">
									<div className="accordion-header" id="accordionFive4">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFive4"
											aria-expanded="false"
											aria-controls="accordionStyleFive4"
										>
											<i className="bi bi-plus-lg"></i>What is the single
											license?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleFive4"
										aria-labelledby="accordionFive4"
										data-bs-parent="#accordionStyle5"
									>
										<p className="mb-0 mt-2">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Quisquam, a cupiditate.
										</p>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item accordion-bg-danger">
									<div className="accordion-header" id="accordionFive5">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleFive5"
											aria-expanded="false"
											aria-controls="accordionStyleFive5"
										>
											<i className="bi bi-plus-lg"></i>Whats new in 2.0?
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleFive5"
										aria-labelledby="accordionFive5"
										data-bs-parent="#accordionStyle5"
									>
										<p className="mb-0 mt-2">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Quisquam, a cupiditate.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Cozy Accordion</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="accordion accordion-flush accordion-style-one"
								id="accordionStyle1"
							>
								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionOne">
										<h6
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleOne"
											aria-expanded="true"
											aria-controls="accordionStyleOne"
										>
											What is refund policy?
											<i className="bi bi-chevron-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse show"
										id="accordionStyleOne"
										aria-labelledby="accordionOne"
										data-bs-parent="#accordionStyle1"
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
									<div className="accordion-header" id="accordionTwo">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleTwo"
											aria-expanded="false"
											aria-controls="accordionStyleTwo"
										>
											Can it accept Paypal?
											<i className="bi bi-chevron-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleTwo"
										aria-labelledby="accordionTwo"
										data-bs-parent="#accordionStyle1"
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
									<div className="accordion-header" id="accordionThree">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleThree"
											aria-expanded="false"
											aria-controls="accordionStyleThree"
										>
											What is PWA ready?<i className="bi bi-chevron-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleThree"
										aria-labelledby="accordionThree"
										data-bs-parent="#accordionStyle1"
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

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Accordion with Plus Sign</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
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
											<i className="bi bi-plus-lg"></i>What is refund policy?
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
											<i className="bi bi-plus-lg"></i>Can it accept Paypal?
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
											<i className="bi bi-plus-lg"></i>What is PWA ready?
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
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Dark Accordion</h6>
					</div>
				</div>

				<div className="container">
					<div className="card bg-dark">
						<div className="card-body">
							<div
								className="accordion accordion-style-four"
								id="accordionStyle4"
							>
								{/* <!-- Single Accordion --> */}
								<div className="accordion-item bg-transparent">
									<div className="accordion-header" id="accordionTen">
										<h6
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleTen"
											aria-expanded="true"
											aria-controls="accordionStyleTen"
										>
											# What is refund policy?
											<i className="bi bi-caret-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse show"
										id="accordionStyleTen"
										aria-labelledby="accordionTen"
										data-bs-parent="#accordionStyle4"
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
								<div className="accordion-item bg-transparent">
									<div className="accordion-header" id="accordion11">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyle11"
											aria-expanded="false"
											aria-controls="accordionStyle11"
										>
											# Can it accept Paypal?
											<i className="bi bi-caret-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyle11"
										aria-labelledby="accordion11"
										data-bs-parent="#accordionStyle4"
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
								<div className="accordion-item bg-transparent">
									<div className="accordion-header" id="accordion12">
										<h6
											className="collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyle12"
											aria-expanded="false"
											aria-controls="accordionStyle12"
										>
											# What is PWA ready?
											<i className="bi bi-caret-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyle12"
										aria-labelledby="accordion12"
										data-bs-parent="#accordionStyle4"
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

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Compact Accordion</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="accordion accordion-style-three"
								id="accordionStyle3"
							>
								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="accordionSeven">
										<h6
											className="shadow-sm rounded border"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleSeven"
											aria-expanded="true"
											aria-controls="accordionStyleSeven"
										>
											What is refund policy?
											<i className="bi bi-caret-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse show"
										id="accordionStyleSeven"
										aria-labelledby="accordionSeven"
										data-bs-parent="#accordionStyle3"
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
									<div className="accordion-header" id="accordionEight">
										<h6
											className="shadow-sm rounded collapsed border"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleEight"
											aria-expanded="false"
											aria-controls="accordionStyleEight"
										>
											Can it accept Paypal?
											<i className="bi bi-caret-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleEight"
										aria-labelledby="accordionEight"
										data-bs-parent="#accordionStyle3"
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
									<div className="accordion-header" id="accordionNine">
										<h6
											className="shadow-sm rounded collapsed border"
											data-bs-toggle="collapse"
											data-bs-target="#accordionStyleNine"
											aria-expanded="false"
											aria-controls="accordionStyleNine"
										>
											What is PWA ready?
											<i className="bi bi-caret-down"></i>
										</h6>
									</div>
									<div
										className="accordion-collapse collapse"
										id="accordionStyleNine"
										aria-labelledby="accordionNine"
										data-bs-parent="#accordionStyle3"
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

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bootstrap Accordion</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="accordion" id="basicaccordion">
								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="headingOne">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											What is PWA ready?
										</button>
									</div>
									<div
										className="accordion-collapse collapse show"
										id="collapseOne"
										aria-labelledby="headingOne"
										data-bs-parent="#basicaccordion"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Hello, I am bootstrap 5 accordion. I am number one.
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="headingTwo">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo"
										>
											What is refund policy?
										</button>
									</div>
									<div
										className="accordion-collapse collapse"
										id="collapseTwo"
										aria-labelledby="headingTwo"
										data-bs-parent="#basicaccordion"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Hello, I am bootstrap 5 accordion. I am number two.
											</p>
										</div>
									</div>
								</div>

								{/* <!-- Single Accordion --> */}
								<div className="accordion-item">
									<div className="accordion-header" id="headingThree">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="false"
											aria-controls="collapseThree"
										>
											Can it accept Paypal?
										</button>
									</div>
									<div
										className="accordion-collapse collapse"
										id="collapseThree"
										aria-labelledby="headingThree"
										data-bs-parent="#basicaccordion"
									>
										<div className="accordion-body">
											<p className="mb-0">
												Hello, I am bootstrap 5 accordion. I am number three.
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

export default AccordionArea;
