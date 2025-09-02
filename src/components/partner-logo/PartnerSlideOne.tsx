"use client";

import React from "react";

import img_1 from "../../../public/assets/img/partner-img/1.png";
import img_2 from "../../../public/assets/img/partner-img/2.png";
import img_3 from "../../../public/assets/img/partner-img/3.png";
import img_4 from "../../../public/assets/img/partner-img/4.png";
import img_5 from "../../../public/assets/img/partner-img/6.png";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slider_img = [img_1, img_2, img_3, img_4, img_5];

const PartnerSlideOne = () => {
	return (
		<>
			<div className="container">
				<div className="card">
					<div className="card-body">
						<div className="partner-logo-slide-wrapper">
							<Swiper
								slidesPerView={3}
								loop={true}
								spaceBetween={15}
								pagination={{
									el: ".tns-nav",
									clickable: true,
								}}
								modules={[Pagination]}
								breakpoints={{
									0: {
										slidesPerView: 1,
									},
									576: {
										slidesPerView: 2,
									},
									768: {
										slidesPerView: 3,
									},
								}}
								className="partner-slide"
							>
								{slider_img.map((item, i) => (
									<SwiperSlide key={i}>
										<div className="card partner-slide-card border my-2 bg-white">
											<div className="card-body p-3">
												<a href="#">
													<Image src={item} alt="" />
												</a>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>

							<div className="tns-nav" aria-label="Carousel Pagination"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PartnerSlideOne;
