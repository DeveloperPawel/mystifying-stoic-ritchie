import React from "react";

const FooterOne = () => {
	return (
		<>
			<div className="preview-footer-area py-4">
				<div className="container demo-container direction-rtl h-100 d-flex align-items-center justify-content-between">
					<p className="mb-0">
						<span id="copyrightYear"></span> Copyright {new Date().getFullYear()} Made by rk theme
					</p>
					<a className="btn btn-info" href="#" target="_blank">
						Purchase Now
					</a>
				</div>
			</div>
		</>
	);
};

export default FooterOne;
