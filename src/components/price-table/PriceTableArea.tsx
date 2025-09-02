"use client";

import React from "react";

const PriceTableArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/js/dist/tab");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Price Table 01</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Price Table One --> */}
							<div className="price-table-one">
								<ul
									className="nav nav-tabs border-bottom-0 mb-3 align-items-center justify-content-center"
									id="priceTab"
									role="tablist"
								>
									<li className="nav-item" role="presentation">
										<a
											className="nav-link shadow"
											id="priceTabOne"
											data-bs-toggle="tab"
											href="#priceTab_One"
											role="tab"
											aria-controls="priceTab_One"
											aria-selected="false"
										>
											<i className="bi bi-egg"></i>
										</a>
									</li>

									<li className="nav-item" role="presentation">
										<a
											className="nav-link active shadow"
											id="priceTabTwo"
											data-bs-toggle="tab"
											href="#priceTab_Two"
											role="tab"
											aria-controls="priceTab_Two"
											aria-selected="true"
										>
											<i className="bi bi-lightning"></i>
										</a>
									</li>

									<li className="nav-item" role="presentation">
										<a
											className="nav-link shadow"
											id="priceTabThree"
											data-bs-toggle="tab"
											href="#priceTab_Three"
											role="tab"
											aria-controls="priceTab_Three"
											aria-selected="false"
										>
											<i className="bi bi-cpu"></i>
										</a>
									</li>
								</ul>

								<div className="tab-content" id="priceTabContent">
									<div
										className="tab-pane fade"
										id="priceTab_One"
										role="tabpanel"
										aria-labelledby="priceTabOne"
									>
										{/* <!-- Single Price Table --> */}
										<div className="single-price-content shadow-sm">
											<div className="price">
												<span className="text-white mb-2">Intro</span>
												<h2 className="display-3">$3.19</h2>
												<span className="badge bg-light text-dark rounded-pill">
													Save -29%
												</span>
											</div>
											{/* <!-- Pricing Desc --> */}
											<div className="pricing-desc">
												<ul className="ps-0">
													<li>
														<i className="bi bi-check-lg me-2"></i>3 Month Usage
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>Lifetime
														Updates
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>2 Website
														License
													</li>
													<li className="times">
														<i className="bi bi-x-lg me-2"></i>Free Support
													</li>
													<li className="times">
														<i className="bi bi-x-lg me-2"></i>Download New
														Release
													</li>
												</ul>
											</div>
											{/* <!-- Purchase --> */}
											<div className="purchase">
												<a
													className="btn btn-warning btn-lg btn-creative w-100"
													href="#"
												>
													Choose Plan
												</a>
												<small className="d-block text-white mt-2 ms-1">
													No credit card required*
												</small>
											</div>
										</div>
									</div>

									<div
										className="tab-pane fade show active"
										id="priceTab_Two"
										role="tabpanel"
										aria-labelledby="priceTabTwo"
									>
										{/* <!-- Single Price Table --> */}
										<div className="single-price-content shadow-sm">
											<div className="price">
												<span className="text-white mb-2">Popular</span>
												<h2 className="display-3">$19.19</h2>
												<span className="badge bg-light text-dark rounded-pill">
													Save -29%
												</span>
											</div>
											{/* <!-- Pricing Desc --> */}
											<div className="pricing-desc">
												<ul className="ps-0">
													<li>
														<i className="bi bi-check-lg me-2"></i>6 Month Usage
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>Lifetime
														Updates
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>10 Website
														License
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>Free Support
													</li>
													<li className="times">
														<i className="bi bi-x-lg me-2"></i>Download New
														Release
													</li>
												</ul>
											</div>
											{/* <!-- Purchase --> */}
											<div className="purchase">
												<a
													className="btn btn-light btn-lg btn-creative"
													href="#"
												>
													Choose Plan
												</a>
											</div>
										</div>
									</div>

									<div
										className="tab-pane fade"
										id="priceTab_Three"
										role="tabpanel"
										aria-labelledby="priceTabThree"
									>
										{/* <!-- Single Price Table --> */}
										<div className="single-price-content shadow-sm">
											<div className="price">
												<span className="text-white mb-2">Pro</span>
												<h2 className="display-3">$49.99</h2>
												<span className="badge bg-light text-dark rounded-pill">
													Save -29%
												</span>
											</div>
											{/* <!-- Pricing Desc --> */}
											<div className="pricing-desc">
												<ul className="ps-0">
													<li>
														<i className="bi bi-check-lg me-2"></i>12 Month
														Usage
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>Lifetime
														Updates
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>Unlimited
														Website License
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>Free Support
													</li>
													<li>
														<i className="bi bi-check-lg me-2"></i>Download New
														Release
													</li>
												</ul>
											</div>
											{/* <!-- Purchase --> */}
											<div className="purchase">
												<a
													className="btn btn-primary btn-lg btn-creative"
													href="#"
												>
													Choose Plan
												</a>
											</div>
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
						<h6>Price Table 02</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Price Table Two --> */}
							<div className="price-table-two d-flex align-items-center">
								{/* <!-- Single Price Table --> */}
								<div className="single-price-table active-effect">
									<div className="text">
										<h6 className="fz-14">Basic</h6>
										<span className="badge bg-primary rounded-pill">
											Save 7%
										</span>
									</div>
									<div className="price">
										<h3>$9</h3>
										<span className="fz-12" style={{ color: "#8480AE" }}>
											per month
										</span>
									</div>
									<div className="purchase">
										<div className="form-check mb-0">
											<input
												className="form-check-input form-check-warning mx-0 shadow"
												type="radio"
												name="exampleRadio"
												id="choosePlan1"
											/>
											<label
												className="form-check-label"
												htmlFor="choosePlan1"
											></label>
										</div>
									</div>
								</div>

								{/* <!-- Single Price Table --> */}
								<div className="single-price-table active-effect active">
									<div className="text">
										<h6 className="fz-14">Standard</h6>
										<span className="badge bg-primary rounded-pill">
											Save 16%
										</span>
									</div>
									<div className="price">
										<h3>$59</h3>
										<span className="fz-12">per month</span>
									</div>
									<div className="purchase">
										<div className="form-check">
											<input
												className="form-check-input form-check-warning mx-0 shadow"
												type="radio"
												name="exampleRadio"
												id="choosePlan2"
												defaultChecked
											/>
											<label
												className="form-check-label"
												htmlFor="choosePlan2"
											></label>
										</div>
									</div>
								</div>

								{/* <!-- Single Price Table --> */}
								<div className="single-price-table active-effect">
									<div className="text">
										<h6 className="fz-14">Premium</h6>
										<span className="badge bg-primary rounded-pill">
											Save 23%
										</span>
									</div>
									<div className="price">
										<h3>$99</h3>
										<span className="fz-12" style={{ color: "#8480AE" }}>
											per month
										</span>
									</div>
									<div className="purchase">
										<div className="form-check">
											<input
												className="form-check-input form-check-warning mx-0 shadow"
												type="radio"
												name="exampleRadio"
												id="choosePlan3"
											/>
											<label
												className="form-check-label"
												htmlFor="choosePlan3"
											></label>
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

export default PriceTableArea;
