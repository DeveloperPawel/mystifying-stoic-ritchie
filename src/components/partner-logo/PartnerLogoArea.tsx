import React from "react";
import PartnerSlideOne from "./PartnerSlideOne";
import PartnerLogoTwo from "./PartnerLogoTwo";

const PartnerLogoArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Partners Logo 01</h6>
					</div>
				</div>

				<PartnerSlideOne />

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Partners Logo 02</h6>
					</div>
				</div>

				<PartnerLogoTwo />

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Partners Logo 03</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="row g-3">
								<div className="col-4">
									<div className="card partner-slide-card border bg-gray">
										<div className="card-body p-3">
											<a href="#">
												<img src="/assets/img/partner-img/1.png" alt="" />
											</a>
										</div>
									</div>
								</div>

								<div className="col-4">
									<div className="card partner-slide-card border bg-gray">
										<div className="card-body p-3">
											<a href="#">
												<img src="/assets/img/partner-img/2.png" alt="" />
											</a>
										</div>
									</div>
								</div>

								<div className="col-4">
									<div className="card partner-slide-card border bg-gray">
										<div className="card-body p-3">
											<a href="#">
												<img src="/assets/img/partner-img/3.png" alt="" />
											</a>
										</div>
									</div>
								</div>

								<div className="col-4">
									<div className="card partner-slide-card border bg-gray">
										<div className="card-body p-3">
											<a href="#">
												<img src="/assets/img/partner-img/4.png" alt="" />
											</a>
										</div>
									</div>
								</div>

								<div className="col-4">
									<div className="card partner-slide-card border bg-gray">
										<div className="card-body p-3">
											<a href="#">
												<img src="/assets/img/partner-img/5.png" alt="" />
											</a>
										</div>
									</div>
								</div>

								<div className="col-4">
									<div className="card partner-slide-card border bg-gray">
										<div className="card-body p-3">
											<a href="#">
												<img src="/assets/img/partner-img/6.png" alt="" />
											</a>
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

export default PartnerLogoArea;
