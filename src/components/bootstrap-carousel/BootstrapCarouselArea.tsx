"use client";

import React from "react";

const BootstrapCarouselArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Bootstrap Carousel</h6>
					</div>
				</div>

				{/* <!-- Bootstrap Carousel --> */}
				<div
					className="carousel slide"
					id="bootstrapCarousel"
					data-bs-ride="carousel"
				>
					{/* <!-- Carousel Indicators --> */}
					<div className="carousel-indicators">
						<button
							className="active"
							type="button"
							data-bs-target="#bootstrapCarousel"
							data-bs-slide-to="0"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#bootstrapCarousel"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#bootstrapCarousel"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>

					{/* <!-- Carousel Inner --> */}
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src="/assets/img/bg-img/23.jpg"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="/assets/img/bg-img/24.jpg"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="/assets/img/bg-img/25.jpg"
								alt=""
							/>
						</div>
					</div>

					{/* <!-- Carousel Control Prev --> */}
					<button
						className="carousel-control-prev"
						data-bs-target="#bootstrapCarousel"
						type="button"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>

					{/* <!-- Carousel Control Next --> */}
					<button
						className="carousel-control-next"
						data-bs-target="#bootstrapCarousel"
						type="button"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bootstrap Carousel Crossfade</h6>
					</div>
				</div>

				{/* <!-- Bootstrap Carousel --> */}
				<div
					className="carousel slide carousel-fade"
					id="bootstrapCarouselFade"
					data-bs-ride="carousel"
				>
					{/* <!-- Carousel Indicators --> */}
					<div className="carousel-indicators">
						<button
							className="active"
							type="button"
							data-bs-target="#bootstrapCarouselFade"
							data-bs-slide-to="0"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#bootstrapCarouselFade"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#bootstrapCarouselFade"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>

					{/* <!-- Carousel Inner --> */}
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src="/assets/img/bg-img/26.jpg"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="/assets/img/bg-img/27.jpg"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="/assets/img/bg-img/28.jpg"
								alt=""
							/>
						</div>
					</div>

					{/* <!-- Carousel Control Prev --> */}
					<button
						className="carousel-control-prev"
						data-bs-target="#bootstrapCarouselFade"
						type="button"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>

					{/* <!-- Carousel Control Next --> */}
					<button
						className="carousel-control-next"
						data-bs-target="#bootstrapCarouselFade"
						type="button"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default BootstrapCarouselArea;
