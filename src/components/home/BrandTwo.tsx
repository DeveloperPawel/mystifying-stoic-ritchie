import React from "react";

const BrandTwo = () => {
	return (
		<>
			<div className="container direction-rtl">
				<div className="card mb-3">
					<div className="card-body">
						<div className="row g-3">
							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/sass.png" alt="" />
									</div>
									<p className="mb-0">SCSS</p>
								</div>
							</div>

							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/npm.png" alt="" />
									</div>
									<p className="mb-0">npm</p>
								</div>
							</div>

							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/gulp.png" alt="" />
									</div>
									<p className="mb-0">TypeScript</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BrandTwo;
