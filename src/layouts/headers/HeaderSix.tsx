"use client";

import SettingPopup from "@/components/common/SettingPopup";
import Link from "next/link";
import React, { useState } from "react";

const HeaderSix = ({ links, title }: any) => {
	const [showSetting, setShowSetting] = useState(false);
	const handleShowSetting = () => setShowSetting(!showSetting);

	return (
		<>
			<div className="header-area" id="headerArea">
				<div className="container">
					{/* <!-- Header Content --> */}
					<div className="header-content position-relative d-flex align-items-center justify-content-between">
						{/* <!-- Back Button --> */}
						<div className="back-button">
							<Link href={`/${links}`}>
								<i className="bi bi-arrow-left-short"></i>
							</Link>
						</div>

						{/* <!-- Page Title --> */}
						<div className="page-heading">
							<h6 className="mb-0">{title}</h6>
						</div>

						{/* <!-- Settings --> */}
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

export default HeaderSix;
