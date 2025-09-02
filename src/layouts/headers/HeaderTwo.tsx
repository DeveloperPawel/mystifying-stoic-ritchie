"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import Link from "next/link";
import React from "react";

const HeaderTwo = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	const { theme, handleDarkModeToggle } = useDarkMode();

	return (
		<>
		
			<div className="header-area" id="headerArea">
				<div className="container">
					<div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
						<div className="logo-wrapper">
							<Link href="/home">
								<img src="/assets/img/core-img/logo.png" alt="" />
							</Link>
						</div>

						<div
							className="navbar--toggler"
							id="affanNavbarToggler"
							data-bs-toggle="offcanvas"
							data-bs-target="#affanOffcanvas"
							aria-controls="affanOffcanvas"
						>
							<span className="d-block"></span>
							<span className="d-block"></span>
							<span className="d-block"></span>
						</div>
					</div>
				</div>
			</div>

			<div
				className="offcanvas offcanvas-start"
				id="affanOffcanvas"
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
						<div className="sidenav-profile bg-gradient">
							<div className="sidenav-style1"></div>

							<div className="user-profile">
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</div>

							<div className="user-info">
								<h6 className="user-name mb-0">Affan Islam</h6>
								<span>CEO, Designing World</span>
							</div>
						</div>

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
										<Link href="/shop-grid"> Shop Grid</Link>
									</li>
									<li>
										<Link href="/shop-list"> Shop List</Link>
									</li>
									<li>
										<Link href="/shop-details"> Shop Details</Link>
									</li>
									<li>
										<Link href="/cart"> Cart</Link>
									</li>
									<li>
										<Link href="/checkout"> Checkout</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/settings">
									<i className="bi bi-gear"></i> Settings
								</Link>
							</li>
							<li>
								<div className="night-mode-nav">
									<i className="bi bi-moon"></i> 
									{theme === "dark" ? "Light" : "Dark"} Mode
									<div className="form-check form-switch">
										<input
											className="form-check-input form-check-success"
											id="darkSwitch"
											type="checkbox"
											checked={theme === "dark"}
											onChange={handleDarkModeToggle}
										/>
									</div>
								</div>
							</li>
							<li>
								<Link href="/login">
									<i className="bi bi-box-arrow-right"></i> Logout
								</Link>
							</li>
						</ul>

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

						<div className="copyright-info">
							<p>
								<span id="copyrightYear"></span>
							 {new Date().getFullYear()}	© Made by <a target="_blank" href="https://themeforest.net/user/rk_theme/portfolio">rk theme</a>
							</p>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default HeaderTwo;
