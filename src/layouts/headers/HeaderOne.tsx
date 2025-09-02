"use client";

import SettingPopup from "@/components/common/SettingPopup";
import Link from "next/link";
import React, { useState } from "react";

const HeaderOne = () => {
	const [showSetting, setShowSetting] = useState(false);
	const handleShowSetting = () => setShowSetting(!showSetting);

	return (
		<>
			<div className="demo-header-wrapper">
				<div className="container demo-container">
					<div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
						<div className="logo-wrapper">
							<Link href="/home">
								<img src="/assets/img/core-img/logo.png" alt="" />
							</Link>
						</div>

						<div className="setting-wrapper" onClick={handleShowSetting}>
							<div className="setting-trigger-btn" id="settingTriggerBtn">
								<i className="bi bi-gear"></i>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SettingPopup
				showSetting={showSetting}
				handleShowSetting={handleShowSetting}
			/>
		</>
	);
};

export default HeaderOne;
