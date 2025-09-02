"use client";

import React from "react";

const AlertsArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- Element Heading --> */}
					<div className="element-heading">
						<h6>Alerts 01</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="alert custom-alert-1 alert-primary alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-1 alert-secondary alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-1 alert-success alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-1 alert-danger alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-x-circle"></i>
								Message not sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-1 alert-warning alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-exclamation-circle"></i>
								Oops! Message not sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-1 alert-info alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-info-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-1 alert-light alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-1 alert-dark alert-dismissible fade show mb-0"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Alerts 02</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="alert custom-alert-2 alert-primary alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close btn-close-white position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-2 alert-secondary alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close btn-close-white position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-2 alert-success alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close btn-close-white position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-2 alert-danger alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-x-circle"></i>
								Message not sent!
								<button
									className="btn btn-close btn-close-white position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-2 alert-warning alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-exclamation-circle"></i>
								Oops! Message not sent!
								<button
									className="btn btn-close btn-close-white position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-2 alert-info alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-info-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close btn-close-white position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-2 alert-light alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-2 alert-dark alert-dismissible fade show mb-0"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								Message successfully sent!
								<button
									className="btn btn-close btn-close-white position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Alerts 03</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="alert custom-alert-3 alert-primary alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								<div className="alert-text">
									<h6>Successfully sent!</h6>
									<span>Your email successfully sent!</span>
									<a className="btn btn-sm btn-primary mt-2" href="#">
										View Details
									</a>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-3 alert-secondary alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-person-plus"></i>
								<div className="alert-text">
									<h6>New user added</h6>
									<span>Your email successfully sent!</span>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-3 alert-success alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-all"></i>
								<div className="alert-text">
									<h6>Payment received!</h6>
									<span>Your email successfully sent!</span>
									<a className="btn btn-sm btn-success mt-2" href="#">
										View balance
									</a>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-3 alert-danger alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-x-circle"></i>
								<div className="alert-text">
									<h6>Oops! something is wrong</h6>
									<span>Your email successfully sent!</span>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-3 alert-warning alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-exclamation-circle"></i>
								<div className="alert-text">
									<h6>Warning!</h6>
									<span>Your email successfully sent!</span>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-3 alert-info alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-arrow-repeat"></i>
								<div className="alert-text">
									<h6>Update available</h6>
									<span>Your email successfully sent!</span>
									<a className="btn btn-sm btn-creative btn-info mt-2" href="#">
										Update Now
									</a>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-3 alert-light alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								<div className="alert-text">
									<h6>Successfully sent!</h6>
									<span>Your email successfully sent!</span>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert custom-alert-3 alert-dark mb-0 alert-dismissible fade show"
								role="alert"
							>
								<i className="bi bi-check-circle"></i>
								<div className="alert-text">
									<h6>Successfully sent!</h6>
									<span>Your email successfully sent!</span>
									<a className="btn btn-sm btn-outline-dark mt-2" href="#">
										View Details
									</a>
								</div>
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bootstrap Alerts</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="alert alert-primary" role="alert">
								A simple primary alert!
							</div>
							<div className="alert alert-secondary" role="alert">
								A simple secondary alert!
							</div>
							<div className="alert alert-success" role="alert">
								A simple success alert!
							</div>
							<div className="alert alert-danger" role="alert">
								A simple danger alert!
							</div>
							<div className="alert alert-warning" role="alert">
								A simple warning alert!
							</div>
							<div className="alert alert-info" role="alert">
								A simple info alert!
							</div>
							<div className="alert alert-light" role="alert">
								A simple light alert!
							</div>
							<div className="alert mb-0 alert-dark" role="alert">
								A simple dark alert!
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Alerts with close icon</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div
								className="alert d-flex align-items-center alert-primary alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert d-flex align-items-center alert-secondary alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert d-flex align-items-center alert-success alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert d-flex align-items-center alert-danger alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert d-flex align-items-center alert-warning alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert d-flex align-items-center alert-info alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert d-flex align-items-center alert-light alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>

							<div
								className="alert d-flex align-items-center mb-0 alert-dark alert-dismissible fade show"
								role="alert"
							>
								Message successfully sent!
								<button
									className="btn btn-close position-relative p-1 ms-auto"
									type="button"
									data-bs-dismiss="alert"
									aria-label="Close"
								></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AlertsArea;
