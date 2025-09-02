"use client";
import React, { useState } from "react";

const SearchResultArea = () => {
	const [inputValue, setInputValue] = useState("Affan template");

	const handleChange = (event: any) => {
		setInputValue(event.target.value);
	};

	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							{/* <!-- Search Form Wrapper --> */}
							<div className="search-form-wrapper">
								<p className="mb-2 fz-12">
									397+ results found for Affan template
								</p>
								{/* <!-- Search Form --> */}
								<form
									className="mb-3 pb-4 border-bottom"
									onSubmit={(e) => e.preventDefault()}
								>
									<div className="input-group">
										<input
											className="form-control form-control-clicked"
											type="search"
											value={inputValue}
											onChange={handleChange}
										/>
										<button className="btn btn-dark" type="submit">
											<i className="bi bi-search fz-14"></i>
										</button>
									</div>
								</form>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									Affan - Multipurpose Ecommerce Mobile HTML Template
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="#"
								>
									https://themeforest.net/item/suha-multipurpose-ecommerce-mobile-template/25294162
								</a>
								<p className="mb-0">
									Suha - Multipurpose Ecommerce Mobile HTML Template. A
									versatile mobile e-commerce shop template.
								</p>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									WordPress Themes & Website Templates from ThemeForest
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="#"
								>
									https://themeforest.net/
								</a>
								<p className="mb-0">
									Discover 1000s of premium WordPress themes & website
									templates, including multipurpose and responsive Bootstrap
									templates, email templates & HTML
								</p>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									Sign in to ThemeForest - Envato Account
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="https://account.envato.com/"
								>
									https://account.envato.com/
								</a>
								<p className="mb-0">
									Your Envato Account gives you access not just to ThemeForest,
									but also to the other Envato Market sites listed below. Theyre
									stocked with everything from
								</p>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									Envato ThemeForest Cyber Monday & Black Friday Deals
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="#"
								>
									https://envato.com/c/cybermonday/themes/
								</a>
								<p className="mb-0">
									Enjoy a week of savings across Envato with Cyber Monday &
									Black Friday 2019 deals. Save on premium creative assets from
									Envato Market, Envato Elements ...
								</p>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									Affan - Multipurpose Ecommerce Mobile HTML Template
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="#"
								>
									https://themeforest.net/item/suha-multipurpose-ecommerce-mobile-template/25294162
								</a>
								<p className="mb-0">
									Suha - Multipurpose Ecommerce Mobile Next js Template. A
									versatile mobile e-commerce shop template.
								</p>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									WordPress Themes & Website Templates from ThemeForest
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="https://themeforest.net"
								>
									https://themeforest.net/
								</a>
								<p className="mb-0">
									Discover 1000s of premium WordPress themes & website
									templates, including multipurpose and responsive Bootstrap
									templates, email templates & HTML
								</p>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									Sign in to ThemeForest - Envato Account
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="https://account.envato.com/"
								>
									https://account.envato.com/
								</a>
								<p className="mb-0">
									Your Envato Account gives you access not just to ThemeForest,
									but also to the other Envato Market sites listed below. Theyre
									stocked with everything from
								</p>
							</div>

							{/* <!-- Single Search Result --> */}
							<div className="single-search-result mb-3 border-bottom pb-3">
								<h6 className="text-truncate mb-1">
									Envato ThemeForest Cyber Monday & Black Friday Deals
								</h6>
								<a
									className="text-truncate mb-2 d-block fz-12 text-decoration-underline"
									href="#"
								>
									https://envato.com/c/cybermonday/themes/
								</a>
								<p className="mb-0">
									Enjoy a week of savings across Envato with Cyber Monday &
									Black Friday 2019 deals. Save on premium creative assets from
									Envato Market, Envato Elements ...
								</p>
							</div>

							{/* <!-- Pagination --> */}
							<nav aria-label="Page navigation example">
								<ul className="pagination pagination-two justify-content-center">
									<li className="page-item">
										<a className="page-link" href="#" aria-label="Previous">
											<i className="bi bi-chevron-left"></i>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											...
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											9
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#" aria-label="Next">
											<i className="bi bi-chevron-right"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchResultArea;
