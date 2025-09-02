"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = () => {
	return (
		<>
			<div className="container">
				<div className="card mb-3">
					<div className="card-body">
						<h3>Customer Review</h3>

						<div className="testimonial-slide-three-wrapper">
							<Swiper
								loop={true}
								slidesPerView={1}
								spaceBetween={0}
								pagination={{
									el: ".tns-nav",
									clickable: true,
								}}
								modules={[Pagination]}
								className="testimonial-slide3 testimonial-style3"
							>
								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											The code looks clean, and the designs are excellent. I
											recommend.
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											Mrrickez, Themeforest
										</span>
									</div>
								</SwiperSlide>

								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											All complete, <br /> great craft.
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											Mazatlumm, Themeforest
										</span>
									</div>
								</SwiperSlide>

								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											Awesome template! <br /> Excellent support!
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											Vguntars, Themeforest
										</span>
									</div>
								</SwiperSlide>

								{/* <!-- Single Testimonial Slide --> */}
								<SwiperSlide className="single-testimonial-slide">
									<div className="text-content">
										<span className="d-inline-block badge bg-warning mb-2">
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill me-1"></i>
											<i className="bi bi-star-fill"></i>
										</span>
										<h6 className="mb-2">
											Nice modern design, <br /> I love the product.
										</h6>
										<span className="d-block" style={{ color: "#8480AE" }}>
											electroMEZ, Themeforest
										</span>
									</div>
								</SwiperSlide>

								<div className="tns-nav"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Review;
