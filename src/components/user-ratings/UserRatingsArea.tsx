import React from "react";

const UserRatingsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Rating 01</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- Rating Card --> */}
					<div className="card">
						<div className="card-body">
							<div className="rating-card-one">
								<div className="d-flex align-items-center justify-content-between">
									<div className="rating">
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-half"></i>
										</a>
									</div>
									<span  style={{ color: "#8480AE" }}>4.65 out of 5</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Rating 02</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- Rating Card --> */}
					<div className="card">
						<div className="card-body">
							<div className="rating-card-two">
								{/* <!-- Rating result --> */}
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
									<div className="rating">
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-fill"></i>
										</a>
										<a href="#">
											<i className="bi bi-star-half"></i>
										</a>
									</div>
									<span  style={{ color: "#8480AE" }}>4.44 out of 5 ratings</span>
								</div>

								{/* <!-- Rating Details --> */}
								<div className="rating-detail">
									{/* <!-- Single Rating Details --> */}
									<div className="d-flex align-items-center mt-2">
										<span style={{ color: "#8480AE" }}>5 star</span>
										<div className="progress-bar-wrapper">
											<div className="progress">
												<div
													className="progress-bar bg-warning"
													style={{ width: "78%" }}
													role="progressbar"
													aria-valuenow={78}
													aria-valuemin={0}
													aria-valuemax={100}
												></div>
											</div>
										</div>
										<span>78%</span>
									</div>

									{/* <!-- Single Rating Details --> */}
									<div className="d-flex align-items-center mt-2">
										<span style={{ color: "#8480AE" }}>4 star</span>
										<div className="progress-bar-wrapper">
											<div className="progress">
												<div
													className="progress-bar bg-warning"
													style={{ width: "14%" }}
													role="progressbar"
													aria-valuenow={14}
													aria-valuemin={0}
													aria-valuemax={100}
												></div>
											</div>
										</div>
										<span>14%</span>
									</div>

									{/* <!-- Single Rating Details --> */}
									<div className="d-flex align-items-center mt-2">
										<span style={{ color: "#8480AE" }}>3 star</span>
										<div className="progress-bar-wrapper">
											<div className="progress">
												<div
													className="progress-bar bg-warning"
													style={{ width: "8%" }}
													role="progressbar"
													aria-valuenow={8}
													aria-valuemin={0}
													aria-valuemax={100}
												></div>
											</div>
										</div>
										<span>8%</span>
									</div>

									{/* <!-- Single Rating Details --> */}
									<div className="d-flex align-items-center mt-2">
										<span style={{ color: "#8480AE" }}>2 star</span>
										<div className="progress-bar-wrapper">
											<div className="progress">
												<div
													className="progress-bar bg-warning"
													style={{ width: "0%" }}
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
												></div>
											</div>
										</div>
										<span>0%</span>
									</div>

									{/* <!-- Single Rating Details --> */}
									<div className="d-flex align-items-center mt-2">
										<span style={{ color: "#8480AE" }}>1 star</span>
										<div className="progress-bar-wrapper">
											<div className="progress">
												<div
													className="progress-bar bg-warning"
													style={{ width: "0%" }}
													role="progressbar"
													aria-valuenow={0}
													aria-valuemin={0}
													aria-valuemax={100}
												></div>
											</div>
										</div>
										<span>0%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Rating 03</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- Rating Card --> */}
					<div className="card">
						<div className="card-body py-5">
							<div className="rating-card-three text-center">
								<h6 className="mb-3">How was your experience with us?</h6>

								<div className="stars">
									<input
										className="stars-checkbox"
										id="first-star"
										type="radio"
										name="star"
									/>
									<label className="stars-star" htmlFor="first-star">
										<svg
											className="star-icon"
											id="star1"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											x="0px"
											y="0px"
											viewBox="0 0 53.867 53.867"
											style={
												{ enableBackground: "new 0 0 53.867 53.867" } as any
											}
											xmlSpace="preserve"
										>
											<polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182" />
										</svg>
									</label>

									<input
										className="stars-checkbox"
										id="second-star"
										type="radio"
										name="star"
									/>
									<label className="stars-star" htmlFor="second-star">
										<svg
											className="star-icon"
											id="star2"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											x="0px"
											y="0px"
											viewBox="0 0 53.867 53.867"
											style={
												{ enableBackground: "new 0 0 53.867 53.867" } as any
											}
											xmlSpace="preserve"
										>
											<polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182"></polygon>
										</svg>
									</label>

									<input
										className="stars-checkbox"
										id="third-star"
										type="radio"
										name="star"
									/>
									<label className="stars-star" htmlFor="third-star">
										<svg
											className="star-icon"
											id="star3"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											x="0px"
											y="0px"
											viewBox="0 0 53.867 53.867"
											style={
												{ enableBackground: "new 0 0 53.867 53.867" } as any
											}
											xmlSpace="preserve"
										>
											<polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182"></polygon>
										</svg>
									</label>

									<input
										className="stars-checkbox"
										id="fourth-star"
										type="radio"
										name="star"
									/>
									<label className="stars-star" htmlFor="fourth-star">
										<svg
											className="star-icon"
											id="star4"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											x="0px"
											y="0px"
											viewBox="0 0 53.867 53.867"
											style={
												{ enableBackground: "new 0 0 53.867 53.867" } as any
											}
											xmlSpace="preserve"
										>
											<polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182"></polygon>
										</svg>
									</label>

									<input
										className="stars-checkbox"
										id="fifth-star"
										type="radio"
										name="star"
									/>
									<label className="stars-star" htmlFor="fifth-star">
										<svg
											className="star-icon"
											id="star5"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											x="0px"
											y="0px"
											viewBox="0 0 53.867 53.867"
											style={
												{ enableBackground: "new 0 0 53.867 53.867" } as any
											}
											xmlSpace="preserve"
										>
											<polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182"></polygon>
										</svg>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserRatingsArea;
