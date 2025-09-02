"use client";

import React, { useEffect, useState } from "react";

const ToastsArea = () => {
 
	if (typeof window !== "undefined") {
		require("bootstrap/js/dist/toast");	
	}

	const [isVisible, setIsVisible] = useState<boolean>(true); // Initially visible

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false); // Hide the toast after 5 seconds
		}, 5000);

		return () => clearTimeout(timer); // Clean up the timer on component unmount
	}, []); // Empty dependency array ensures this runs only on initial mount

	const showToast = () => {
		setIsVisible(true);

		// Hide the toast after 5 seconds (5000ms)
		setTimeout(() => {
			setIsVisible(false);
		}, 5000);
	};

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Bootstrap Toasts</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<div
								className="toast fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="3982"
								data-bs-autohide="false"
							>
								<div className="toast-header">
									<i className="bi bi-bootstrap-fill text-primary fz-20"></i>
									<strong className="me-auto ms-1" style={{ color: "#ffffff" }}>
										Bootstrap 5
									</strong>
									<small style={{ color: "#ffffff" }}>Just now</small>

									<button
										className="btn btn-close position-relative p-1"
										type="button"
										data-bs-dismiss="toast"
										aria-label="Close"
									></button>
								</div>
								<div className="toast-body" style={{ color: "#8480AE" }}>
									Hello Affan, You just received an email.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Translucent Toasts </h6>
					</div>
				</div>

				<div className="container">
					<div className="card bg-dark direction-rtl">
						<div className="card-body">
							<div
								className="toast fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="3000"
								data-bs-autohide="false"
							>
								<div className="toast-header">
									<i className="bi bi-bootstrap-fill text-primary fz-24"></i>
									<strong className="me-auto ms-1" style={{ color: "#ffffff" }}>
										Bootstrap 5
									</strong>
									<small style={{ color: "#ffffff" }}>Just now</small>

									<button
										className="btn btn-close position-relative p-1"
										type="button"
										data-bs-dismiss="toast"
										aria-label="Close"
									></button>
								</div>
								<div className="toast-body" style={{ color: "#8480AE" }}>
									Hello Affan, You just received an email.
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Affan Toasts</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body"> 
							<div 
								className="toast custom-toast-1 mb-2 fade show"
        
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="5000"
								data-bs-autohide="false"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-primary h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
							</div>
 
							<div
								className="toast custom-toast-1 toast-primary mb-2 fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="5000"
								data-bs-autohide="false"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
							</div>
 
							<div
								className="toast custom-toast-1 toast-success mb-2 fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="5000"
								data-bs-autohide="false"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
							</div>
 
							<div
								className="toast custom-toast-1 toast-warning mb-2 fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="5000"
								data-bs-autohide="false"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
							</div>
 
							<div
								className="toast custom-toast-1 toast-danger mb-2 fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="5000"
								data-bs-autohide="false"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
							</div>
 
							<div
								className="toast custom-toast-1 toast-info mb-2 fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="5000"
								data-bs-autohide="false"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
							</div>
 
							<div
								className="toast custom-toast-1 toast-dark mb-0 fade show"
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="5000"
								data-bs-autohide="false"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
							</div>

						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Toasts auto hide</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<div
								className={`toast toast-autohide custom-toast-1 mb-2 fade ${isVisible ? 'show' : 'hide'}`}
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="8000"
								data-bs-autohide="true"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
								<span
									className="toast-autohide-animation"
									style={{ animationDuration: "8000ms" }}
								></span>
							</div>

							<div
								className={`toast toast-autohide custom-toast-1 toast-primary mb-2 fade  ${isVisible ? 'show' : 'hide'}`}
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="8000"
								data-bs-autohide="true"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
								<span
									className="toast-autohide-animation"
									style={{ animationDuration: "8000ms" }}
								></span>
							</div>

							<div
								className={`toast toast-autohide custom-toast-1 toast-success mb-2 fade ${isVisible ? 'show' : 'hide'}`}
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="8000"
								data-bs-autohide="true"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
								<span
									className="toast-autohide-animation"
									style={{ animationDuration: "8000ms" }}
								></span>
							</div>

							<div
								className={`toast toast-autohide custom-toast-1 toast-warning mb-2 fade ${isVisible ? 'show' : 'hide'}`}
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="8000"
								data-bs-autohide="true"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
								<span
									className="toast-autohide-animation"
									style={{ animationDuration: "8000ms" }}
								></span>
							</div>

							<div
								className={`toast toast-autohide custom-toast-1 toast-danger mb-2 fade ${isVisible ? 'show' : 'hide'}`}
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="8000"
								data-bs-autohide="true"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
								<span
									className="toast-autohide-animation"
									style={{ animationDuration: "8000ms" }}
								></span>
							</div>

							<div
								className={`toast toast-autohide custom-toast-1 toast-info mb-2 fade ${isVisible ? 'show' : 'hide'}`}
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="8000"
								data-bs-autohide="true"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
								<span
									className="toast-autohide-animation"
									style={{ animationDuration: "8000ms" }}
								></span>
							</div>

							<div
								className={`toast toast-autohide custom-toast-1 toast-dark fade ${isVisible ? 'show' : 'hide'}`}
								role="alert"
								aria-live="assertive"
								aria-atomic="true"
								data-bs-delay="8000"
								data-bs-autohide="true"
							>
								<div className="toast-body">
									<i className="bi bi-bootstrap-fill text-white h1 mb-0"></i>
									<div className="toast-text ms-3 me-2">
										<p className="mb-0 text-white">Bootstrap 5 is launched.</p>
										<small className="d-block">2 min ago</small>
									</div>
								</div>

								<button
									className="btn btn-close btn-close-white position-absolute p-1"
									type="button"
									data-bs-dismiss="toast"
									aria-label="Close"
								></button>
								<span
									className="toast-autohide-animation"
									style={{ animationDuration: "8000ms" }}
								></span>
							</div>

							<div className="text-center my-3">
								<a className="btn btn-primary" onClick={showToast} id="toast-showing-btn" style={{cursor: "pointer"}}>
									View Auto Hide Toast
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ToastsArea;
