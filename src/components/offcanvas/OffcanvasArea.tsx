"use client";

import React from "react";
import Link from "next/link";
import { useDarkMode } from "@/hooks/useDarkMode";

const OffcanvasArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}
	const { theme, handleDarkModeToggle } = useDarkMode();

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Left offcanvas</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Trigger Button --> */}
							<button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasleft"
								aria-controls="offcanvasLeft"
							>
								Toggle left offcanvas
							</button>

							{/* <!-- Offcanvas Wrapper --> */}
							<div
								className="offcanvas offcanvas-start"
								id="offcanvasleft"
								data-bs-scroll="true"
								tabIndex={-1}
								aria-labelledby="affanOffcanvsLabel"
							>
								<button
									className="btn-close btn-close-white text-reset"
									type="button"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>

								<div className="offcanvas-body p-0">
									<div className="sidenav-wrapper">
										{/* <!-- Sidenav Profile --> */}
										<div className="sidenav-profile bg-gradient">
											<div className="sidenav-style1"></div>

											{/* <!-- User Thumbnail --> */}
											<div className="user-profile">
												<img src="/assets/img/bg-img/2.jpg" alt="" />
											</div>

											{/* <!-- User Info --> */}
											<div className="user-info">
												<h6 className="user-name mb-0">Affan Islam</h6>
												<span>CEO, Designing World</span>
											</div>
										</div>

										{/* <!-- Sidenav Nav --> */}
										<ul className="sidenav-nav ps-0">
											<li>
												<Link href="/home">
													<i className="bi bi-house-door"></i> Home
												</Link>
											</li>
											<li>
												<Link href="/elements">
													<i className="bi bi-folder2-open"></i> Elements
													<span className="badge bg-danger rounded-pill ms-2">
														220+
													</span>
												</Link>
											</li>
											<li>
												<Link href="/pages">
													<i className="bi bi-collection"></i> Pages
													<span className="badge bg-success rounded-pill ms-2">
														100+
													</span>
												</Link>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-cart-check"></i> Shop
												</a>
												<ul>
													<li>
														<Link href="/shop-grid">Shop Grid</Link>
													</li>
													<li>
														<Link href="/shop-list">Shop List</Link>
													</li>
													<li>
														<Link href="/shop-details">Shop Details</Link>
													</li>
													<li>
														<Link href="/cart"> Cart</Link>
													</li>
													<li>
														<Link href="/checkout">Checkout</Link>
													</li>
												</ul>
											</li>
											<li>
												<Link href="/settings">
													<i className="bi bi-gear"></i> Settings
												</Link>
											</li>
											<li>
												<div
													className="night-mode-nav"
													style={{ color: "#8480AE" }}
												>
													<i className="bi bi-moon"></i>
													{theme === "dark" ? "Light" : "Dark"} Mode
													<div className="form-check form-switch">
														<input
															className="form-check-input form-check-success"
															id="darkSwitch2"
															type="checkbox"
															checked={theme === "dark"}
															onChange={handleDarkModeToggle}
														/>
													</div>
												</div>
											</li>
											<li>
												<Link href="/login">
													<i className="bi bi-box-arrow-right"></i>Logout
												</Link>
											</li>
										</ul>

										{/* <!-- Social Info --> */}
										<div className="social-info-wrap">
											<a href="#">
												<i className="bi bi-facebook"></i>
											</a>
											<a href="#">
												<i className="bi bi-twitter"></i>
											</a>
											<a href="#">
												<i className="bi bi-linkedin"></i>
											</a>
										</div>

										{/* <!-- Copyright Info --> */}
										<div className="copyright-info">
											<p>
												<span id="copyrightYear"></span>
												copyright Made by <a href="#">Designing World</a>
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
						<h6>Top offcanvas</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Trigger Button --> */}
							<button
								className="btn btn-success"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasTop"
								aria-controls="offcanvasTop"
							>
								Toggle top offcanvas
							</button>

							{/* <!-- Offcanvas Wrapper --> */}
							<div
								className="offcanvas offcanvas-top"
								id="offcanvasTop"
								tabIndex={-1}
								aria-labelledby="offcanvasTopLabel"
							>
								{/* <!-- Close Button --> */}
								<button
									className="btn-close text-reset"
									type="button"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>

								{/* <!-- Offcanvas Body --> */}
								<div className="offcanvas-body p-4">
									<h5>Placement</h5>
									<p>
										Theres no default placement for offcanvas components, so you
										must add one of the modifier classNamees below;
									</p>
									<ul className="ps-0 mb-4">
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-start
											</code>
											places offcanvas on the left of the viewport.
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-end
											</code>
											places offcanvas on the right of the viewport.
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-top
											</code>
											places offcanvas on the top of the viewport.
										</li>
										<li className="fz-14">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-bottom
											</code>
											places offcanvas on the bottom of the viewport.
										</li>
									</ul>
									<h5>Hide & Show</h5>
									<p>
										Use the buttons below to show and hide an offcanvas element
										via JavaScript that toggles the 
										<code className="bg-dark text-white rounded p-1 me-1">
											.show 
										</code>
										className on an element with the 
										<code className="bg-dark text-white rounded p-1 me-1">
											.offcanvas 
										</code>
										className.
									</p>
									<ul className="ps-0">
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas
											</code>
											hides content (by default).
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas.show
											</code>
											shows content.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Right offcanvas</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Trigger Button --> */}
							<button
								className="btn btn-warning"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasRight"
								aria-controls="offcanvasRight"
							>
								Toggle right offcanvas
							</button>

							{/* <!-- Offcanvas Wrapper --> */}
							<div
								className="offcanvas offcanvas-end"
								id="offcanvasRight"
								tabIndex={-1}
								aria-labelledby="offcanvasRightLabel"
							>
								{/* <!-- Close Button --> */}
								<button
									className="btn-close text-reset"
									type="button"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>

								{/* <!-- Offcanvas Body --> */}
								<div className="offcanvas-body p-4 text-end">
									<h5>Placement</h5>
									<p>
										Theres no default placement for offcanvas components, so you
										must add one of the modifier classNamees below;
									</p>
									<ul className="ps-0 mb-4">
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-start
											</code>
											places offcanvas on the left of the viewport.
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-end
											</code>
											places offcanvas on the right of the viewport.
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-top
											</code>
											places offcanvas on the top of the viewport.
										</li>
										<li className="fz-14">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-bottom
											</code>
											places offcanvas on the bottom of the viewport.
										</li>
									</ul>
									<h5>Hide & Show</h5>
									<p>
										Use the buttons below to show and hide an offcanvas element
										via JavaScript that toggles the 
										<code className="bg-dark text-white rounded p-1 me-1">
											.show 
										</code>
										className on an element with the 
										<code className="bg-dark text-white rounded p-1 me-1">
											.offcanvas 
										</code>
										className.
									</p>
									<ul className="ps-0">
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas
											</code>
											hides content (by default).
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas.show
											</code>
											shows content.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bottom Offcanvas</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Trigger Button --> */}
							<button
								className="btn btn-info"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasBottom"
								aria-controls="offcanvasBottom"
							>
								Toggle bottom offcanvas
							</button>

							{/* <!-- Offcanvas Wrapper --> */}
							<div
								className="offcanvas offcanvas-bottom"
								id="offcanvasBottom"
								tabIndex={-1}
								aria-labelledby="offcanvasBottomLabel"
							>
								{/* <!-- Close Button --> */}
								<button
									className="btn-close text-reset"
									type="button"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
								{/* <!-- Offcanvas Body --> */}
								<div className="offcanvas-body p-4">
									<h5>Placement</h5>
									<p>
										Theres no default placement for offcanvas components, so you
										must add one of the modifier classNamees below;
									</p>
									<ul className="ps-0 mb-4">
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-start
											</code>
											places offcanvas on the left of the viewport.
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-end
											</code>
											places offcanvas on the right of the viewport.
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-top
											</code>
											places offcanvas on the top of the viewport.
										</li>
										<li className="fz-14">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas-bottom
											</code>
											places offcanvas on the bottom of the viewport.
										</li>
									</ul>
									<h5>Hide & Show</h5>
									<p>
										Use the buttons below to show and hide an offcanvas element
										via JavaScript that toggles the 
										<code className="bg-dark text-white rounded p-1 me-1">
											.show 
										</code>
										className on an element with the 
										<code className="bg-dark text-white rounded p-1 me-1">
											.offcanvas 
										</code>
										className.
									</p>
									<ul className="ps-0">
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas
											</code>
											hides content (by default).
										</li>
										<li className="fz-14 pb-2">
											<code className="bg-dark text-white rounded p-1 me-1">
												.offcanvas.show
											</code>
											shows content.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OffcanvasArea;
