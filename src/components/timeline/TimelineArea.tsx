import React from "react";

const TimelineArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Timeline</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- Timeline Content --> */}
					<div className="card timeline-card">
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<div className="timeline-text mb-2">
									<span className="badge mb-2 rounded-pill">12 Nov 2022</span>
									<h6>Improved Security</h6>
								</div>
								<div className="timeline-icon mb-2">
									<i className="bi bi-shield-lock h1 mb-0"></i>
								</div>
							</div>
							<p className="mb-2">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
							<div className="timeline-tags">
								<span className="badge fw-normal bg-primary">#Bug</span>
								<span className="badge fw-normal bg-primary">#Security</span>
								<span className="badge fw-normal bg-primary">#Improved</span>
							</div>
						</div>
					</div>

					{/* <!-- Timeline Content --> */}
					<div className="card timeline-card bg-warning">
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<div className="timeline-text mb-2">
									<span className="badge mb-2 rounded-pill">21 Sep 2022</span>
									<h6>Winning Award</h6>
								</div>
								<div className="timeline-icon mb-2">
									<i className="bi bi-award h1 mb-0"></i>
								</div>
							</div>
							<p className="mb-2">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
							<div className="timeline-tags">
								<span className="badge fw-normal bg-primary">#Award</span>
								<span className="badge fw-normal bg-primary">#Honor</span>
							</div>
						</div>
					</div>

					{/* <!-- Timeline Content --> */}
					<div className="card timeline-card bg-info">
						<div className="card-body">
							<div className="d-flex justify-content-between align-items-center">
								<div className="timeline-text mb-2">
									<span className="badge mb-2 rounded-pill">12 April 21</span>
									<h6>Reach 500 Sales</h6>
								</div>
								<div className="timeline-icon mb-2">
									<i className="bi bi-emoji-smile h1 mb-0"></i>
								</div>
							</div>
							<p className="mb-2">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
							<div className="timeline-tags">
								<span className="badge fw-normal bg-primary">#Achieve</span>
							</div>
						</div>
					</div>

					{/* <!-- Timeline Content --> */}
					<div className="card timeline-card bg-success">
						<div className="card-body">
							<div className="d-flex justify-content-between align-items-center">
								<div className="timeline-text mb-2">
									<span className="badge mb-2 rounded-pill">17 Nov 2022</span>
									<h6>Added Ecommerce Pages</h6>
								</div>
								<div className="timeline-icon mb-2">
									<i className="bi bi-basket h1 mb-0"></i>
								</div>
							</div>
							<p className="mb-2">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
							<div className="timeline-tags">
								<span className="badge fw-normal bg-primary">#Ecommerce</span>
								<span className="badge fw-normal bg-primary">#Checkout</span>
								<span className="badge fw-normal bg-primary">#Cart</span>
							</div>
						</div>
					</div>

					{/* <!-- Timeline Content --> */}
					<div className="card timeline-card bg-dark">
						<div className="card-body">
							<div className="d-flex justify-content-between align-items-center">
								<div className="timeline-text mb-2">
									<span className="badge mb-2 rounded-pill">26 Oct 2022</span>
									<h6>Updated 1.2.0</h6>
								</div>
								<div className="timeline-icon mb-2">
									<i className="bi bi-bug h1 mb-0"></i>
								</div>
							</div>
							<p className="mb-2">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
							<div className="timeline-tags">
								<span className="badge fw-normal bg-primary">#Bug fixed</span>
								<span className="badge fw-normal bg-primary">#New pages</span>
							</div>
						</div>
					</div>

					{/* <!-- Timeline Content --> */}
					<div className="card timeline-card bg-danger">
						<div className="card-body">
							<div className="d-flex justify-content-between align-items-center">
								<div className="timeline-text mb-2">
									<span className="badge mb-2 rounded-pill">12 Oct 2022</span>
									<h6>Initial Release</h6>
								</div>
								<div className="timeline-icon mb-2">
									<i className="bi bi-flower3 h1 mb-0"></i>
								</div>
							</div>
							<p className="mb-2">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
							<div className="timeline-tags">
								<span className="badge fw-normal bg-primary">#New Release</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimelineArea;
