import Link from "next/link";
import React from "react";

const HeaderEight = ({ links, title }: any) => {
	return (
		<>
			<div className="header-area" id="headerArea">
				<div className="container">
					<div className="header-content header-style-three position-relative d-flex align-items-center justify-content-between">
						<div className="back-button">
							<Link href={`/${links}`}>
								<i className="bi bi-arrow-left-short"></i>
							</Link>
						</div>

						<div className="page-heading">
							<h6 className="mb-0">{title}</h6>
						</div>

						<div className="user-profile-wrapper">
							<a className="user-profile-trigger-btn" href="#">
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderEight;
