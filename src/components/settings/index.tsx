"use client";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useRTLMode } from "@/hooks/useRTLMode";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSeven from "@/layouts/headers/HeaderSeven";
import Link from "next/link";
import React from "react";

const Settings = () => {
	const { theme, handleDarkModeToggle } = useDarkMode();
	const { viewMode, handleRTLToggling } = useRTLMode();

	return (
		<>
			<HeaderSeven />

			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- Setting Card--> */}
					<div className="card mb-3 shadow-sm">
						<div className="card-body direction-rtl">
							<p className="mb-2">Settings</p>

							<div className="single-setting-panel">
								<div className="form-check form-switch mb-2">
									<input
										className="form-check-input"
										type="checkbox"
										id="flexSwitchCheckDefault"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="flexSwitchCheckDefault"
									>
										Availability Status
									</label>
								</div>
							</div>

							<div className="single-setting-panel">
								<div className="form-check form-switch mb-2">
									<input
										className="form-check-input"
										type="checkbox"
										id="flexSwitchCheckDefault2"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="flexSwitchCheckDefault2"
									>
										Send Me Notifications
									</label>
								</div>
							</div>

							<div className="single-setting-panel">
								<div className="form-check form-switch mb-2">
									<input
										className="form-check-input"
										type="checkbox"
										id="darkSwitch"
										checked={theme === "dark"}
										onChange={handleDarkModeToggle}
									/>
									<label className="form-check-label" htmlFor="darkSwitch">
										{theme === "dark" ? "Light" : "Dark"} mode
									</label>
								</div>
							</div>

							<div className="single-setting-panel">
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										id="rtlSwitch"
										checked={viewMode === "rtl"}
										onChange={handleRTLToggling}
									/>
									<label className="form-check-label" htmlFor="rtlSwitch">
										 
										{viewMode === "rtl" ? "LTR" : "RTL"} mode
									</label>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Setting Card--> */}
					<div className="card mb-3 shadow-sm">
						<div className="card-body direction-rtl">
							<p className="mb-2">Account Setup</p>

							<div className="single-setting-panel">
								<Link href="/user-profile">
									<div className="icon-wrapper">
										<i className="bi bi-person"></i>
									</div>
									Update Profile
								</Link>
							</div>

							<div className="single-setting-panel">
								<Link href="/user-profile">
									<div className="icon-wrapper bg-warning">
										<i className="bi bi-pencil"></i>
									</div>
									Update Bio
								</Link>
							</div>

							<div className="single-setting-panel">
								<Link href="/change-password">
									<div className="icon-wrapper bg-info">
										<i className="bi bi-lock"></i>
									</div>
									Change Password
								</Link>
							</div>

							<div className="single-setting-panel">
								<Link href="/language">
									<div className="icon-wrapper bg-success">
										<i className="bi bi-globe2"></i>
									</div>
									Language
								</Link>
							</div>

							<div className="single-setting-panel">
								<Link href="/privacy-policy">
									<div className="icon-wrapper bg-danger">
										<i className="bi bi-shield-lock"></i>
									</div>
									Privacy Policy
								</Link>
							</div>
						</div>
					</div>

					{/* <!-- Setting Card--> */}
					<div className="card shadow-sm">
						<div className="card-body direction-rtl">
							<p className="mb-2">Register & Logout</p>

							<div className="single-setting-panel">
								<Link href="/register">
									<div className="icon-wrapper bg-primary">
										<i className="bi bi-person"></i>
									</div>
									Create New Account
								</Link>
							</div>

							<div className="single-setting-panel">
								<Link href="/login">
									<div className="icon-wrapper bg-danger">
										<i className="bi bi-box-arrow-right"></i>
									</div>
									Logout
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterTwo />
		</>
	);
};

export default Settings;
