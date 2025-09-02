import React from "react";

const Features = () => {
	return (
		<>
			<div className="container direction-rtl">
				<div className="card mb-3">
					<div className="card-body">
						<div className="row g-3">
							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/dark.png" alt="" />
									</div>
									<p className="mb-0">Dark Mode</p>
								</div>
							</div>

							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/rtl.png" alt="" />
									</div>
									<p className="mb-0">RTL Ready</p>
								</div>
							</div>

							<div className="col-4">
								<div className="feature-card mx-auto text-center">
									<div className="card mx-auto bg-gray">
										<img src="/assets/img/demo-img/code.png" alt="" />
									</div>
									<p className="mb-0">Easy Code</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
