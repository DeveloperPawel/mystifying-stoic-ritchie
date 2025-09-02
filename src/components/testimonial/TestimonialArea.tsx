"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Testimonial 01</h6>
					</div>
				</div>

				<div className="container">
					<div className="testimonial-slide-one-wrapper">
						<Swiper
							loop={true}
							pagination={{
								el: ".tns-nav",
								clickable: true,
							}}
							modules={[Pagination]}
							className="testimonial-slide testimonial-style1"
						>
							{/* <!-- Single Testimonial Slide --> */}
							<SwiperSlide>
								<div className="card">
									<div className="card-body">
										<div className="single-testimonial-slide">
											<div className="image-wrapper shadow">
												<img src="/assets/img/bg-img/20.jpg" alt="" />
											</div>
											<div className="text-content">
												<p className="mb-2">
													I strongly recommend this agency to everyone
													interested in running a business.
												</p>
												<span className="d-block"  style={{ color: "#8480AE" }}>- Riyadh</span>
											</div>
											<i className="bi bi-chat-quote text-warning"></i>
										</div>
									</div>
								</div>
							</SwiperSlide>

							{/* <!-- Single Testimonial Slide --> */}
							<SwiperSlide>
								<div className="card">
									<div className="card-body">
										<div className="single-testimonial-slide">
											<div className="image-wrapper shadow">
												<img src="/assets/img/bg-img/2.jpg" alt="" />
											</div>
											<div className="text-content">
												<p className="mb-2">
													Youve saved our business! Thanks guys, keep up the
													good work! The best on the net!
												</p>
												<span className="d-block"  style={{ color: "#8480AE" }}>- Affan</span>
											</div>
											<i className="bi bi-chat-quote text-warning"></i>
										</div>
									</div>
								</div>
							</SwiperSlide>

							{/* <!-- Single Testimonial Slide --> */}
							<SwiperSlide>
								<div className="card">
									<div className="card-body">
										<div className="single-testimonial-slide">
											<div className="image-wrapper shadow">
												<img src="/assets/img/bg-img/21.jpg" alt="" />
											</div>
											<div className="text-content">
												<p className="mb-2">
													Absolutely wonderful! I wish I would have thought of
													it first. I would be lost without agency.
												</p>
												<span className="d-block"  style={{ color: "#8480AE" }}>- Designing World</span>
											</div>
											<i className="bi bi-chat-quote text-warning"></i>
										</div>
									</div>
								</div>
							</SwiperSlide>
							
						</Swiper>
						{/* <div className="tns-nav" aria-label="Carousel Pagination"></div> */}
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Testimonial 02</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body p-0">
							<div className="testimonial-slide-two-wrapper">
								<Swiper
									loop={true}
									slidesPerView={2.5}
									spaceBetween={15}
									centeredSlides={true}
									className="testimonial-slide2 testimonial-style2"
								>
									{/* <!-- Single Testimonial Slide --> */}
									<SwiperSlide className="single-testimonial-slide">
										<div className="image-wrapper shadow-sm">
											<img src="/assets/img/bg-img/2.jpg" alt="" />
											<i className="bi bi-chat-quote"></i>
										</div>
										<div className="text-content">
											<p className="mb-0">
												I strongly recommend this agency to everyone interested
												a business.
											</p>
										</div>
									</SwiperSlide>

									{/* <!-- Single Testimonial Slide --> */}
									<SwiperSlide className="single-testimonial-slide">
										<div className="image-wrapper shadow-sm">
											<img src="/assets/img/bg-img/20.jpg" alt="" />
											<i className="bi bi-chat-quote"></i>
										</div>
										<div className="text-content">
											<p className="mb-0">
												Youve saved our business! Thanks guys, keep up the good
												work!
											</p>
										</div>
									</SwiperSlide>

									{/* <!-- Single Testimonial Slide --> */}
									<SwiperSlide className="single-testimonial-slide">
										<div className="image-wrapper shadows-sm">
											<img src="/assets/img/bg-img/21.jpg" alt="" />
											<i className="bi bi-chat-quote"></i>
										</div>
										<div className="text-content">
											<p className="mb-0">
												Absolutely wonderful! I wish I would have thought of it
												first.
											</p>
										</div>
									</SwiperSlide>

									{/* <!-- Single Testimonial Slide --> */}
									<SwiperSlide className="single-testimonial-slide">
										<div className="image-wrapper shadows-sm">
											<img src="/assets/img/bg-img/21.jpg" alt="" />
											<i className="bi bi-chat-quote"></i>
										</div>
										<div className="text-content">
											<p className="mb-0">
												Absolutely wonderful! I wish I would have thought of it
												first.
											</p>
										</div>
									</SwiperSlide>

								</Swiper>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Testimonial 03</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<h2>Customer Review</h2>
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
											<span className="d-inline-block badge bg-danger mb-2">
												Top
											</span>
											<p className="mb-2">
												I strongly recommend this agency to everyone interested
												in running a business.
											</p>
											<span className="d-block"  style={{ color: "#8480AE" }}>- Suha, Designingworld</span>
										</div>
									</SwiperSlide>

									{/* <!-- Single Testimonial Slide --> */}
									<SwiperSlide className="single-testimonial-slide">
										<div className="text-content">
											<span className="d-inline-block badge bg-warning mb-2">
												Top
											</span>
											<p className="mb-2">
												Youve saved our business! Thanks guys, keep up the good
												work! The best on the net!
											</p>
											<span className="d-block"  style={{ color: "#8480AE" }}>- Riyadhu, Shape Digital</span>
										</div>
									</SwiperSlide>

									{/* <!-- Single Testimonial Slide --> */}
									<SwiperSlide className="single-testimonial-slide">
										<div className="text-content">
											<span className="d-inline-block badge bg-primary mb-2">
												Top
											</span>
											<p className="mb-2">
												Absolutely wonderful! I wish I would have thought of it
												first. I would be lost without agency.
											</p>
											<span className="d-block"  style={{ color: "#8480AE" }}>- Affan, Founder</span>
										</div>
									</SwiperSlide>

								</Swiper>
								<div className="tns-nav" aria-label="Carousel Pagination"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialArea;
