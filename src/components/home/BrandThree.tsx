import React from "react";

const BrandThree = () => {
	return (
		<>
			<div className="container direction-rtl">
				<div className="card">
					<div className="card-body">
						<div className="row g-3">
							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/star.png" alt="" />
									</div>
									<p className="mb-0">Best Rated</p>
								</div>
							</div>

							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/elegant.png" alt="" />
									</div>
									<p className="mb-0">Elegant</p>
								</div>
							</div>

							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/lightning.png" alt="" />
									</div>
									<p className="mb-0">Trendsetter</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pb-3"></div>
		</>
	);
};

export default BrandThree;
