import React from "react";

const TemplatesOffcanvas = ({ show, handleToggle }: any) => {
	return (
		<>
			<div
				className={`offcanvas offcanvas-start ${show ? "show" : ""}`}
				data-bs-scroll="true"
				tabIndex={-1}
				id="othersTemplate"
				aria-labelledby="othersTemplateLabel"
			>
				<div className="offcanvas-header">
					<button
						onClick={handleToggle}
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>

				<div className="offcanvas-body">
					{/* <!-- Single Item --> */}
					<div className="others-items-preview shadow-sm mb-3">
						<div className="alert alert-info mb-0" role="alert">
							<img
								className="mb-2"
								src="/assets/img/demo-img/suha.png"
								alt=""
							/>
							<h6>Suha - PWA Ecommerce Mobile</h6>
							<a
								className="btn btn-success btn-sm w-100 rounded-pill"
								target="_blank"
								href="https://themeforest.net/item/suha-multipurpose-ecommerce-mobile-template/25294162"
							>
								View Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
							</a>
						</div>
					</div>

					{/* <!-- Single Item --> */}
					<div className="others-items-preview shadow-sm mb-3">
						<div className="alert alert-info mb-0" role="alert">
							<img
								className="mb-2"
								src="/assets/img/demo-img/newsten.png"
								alt=""
							/>
							<h6>Newsten - Blog & Magazine Mobile</h6>
							<a
								className="btn btn-success btn-sm w-100 rounded-pill"
								target="_blank"
								href="https://themeforest.net/item/newsten-blog-magazine-mobile-html-template/26265024"
							>
								View Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
							</a>
						</div>
					</div>

					{/* <!-- Single Item --> */}
					<div className="others-items-preview shadow-sm mb-3">
						<div className="alert alert-info mb-0" role="alert">
							<img
								className="mb-2"
								src="/assets/img/demo-img/saasbox.png"
								alt=""
							/>
							<h6>Saasbox - Multipurpose HTML Template</h6>
							<a
								className="btn btn-success btn-sm w-100 rounded-pill"
								target="_blank"
								href="https://themeforest.net/item/saasbox-multipurpose-html-template-for-saas/25607146"
							>
								View Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
							</a>
						</div>
					</div>

					{/* <!-- Single Item --> */}
					<div className="others-items-preview shadow-sm">
						<div className="alert alert-info mb-0" role="alert">
							<img
								className="mb-2"
								src="/assets/img/demo-img/funto.png"
								alt=""
							/>
							<h6>Funto - HTML NFT Marketplace</h6>
							<a
								className="btn btn-success btn-sm w-100 rounded-pill"
								target="_blank"
								href="https://themeforest.net/item/funto-html-nft-marketplace/35740238"
							>
								View Demo <i className="ms-1 bi bi-box-arrow-up-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TemplatesOffcanvas;
