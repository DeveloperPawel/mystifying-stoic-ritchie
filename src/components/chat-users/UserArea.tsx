"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataType {
	id: number;
	img: string;
	name: string;
}

const user_data: DataType[] = [
	{ id: 1, img: "/assets/img/bg-img/user1.png", name: "Aynal" },
	{ id: 2, img: "/assets/img/bg-img/user2.png", name: "Afrin" },
	{ id: 3, img: "/assets/img/bg-img/user3.png", name: "Fairoze" },
	{ id: 4, img: "/assets/img/bg-img/user4.png", name: "ReFresh" },
	{ id: 5, img: "/assets/img/bg-img/user1.png", name: "Robin" },
	{ id: 6, img: "/assets/img/bg-img/user2.png", name: "Hasnain" },
	{ id: 7, img: "/assets/img/bg-img/user1.png", name: "Aynal" },
	{ id: 8, img: "/assets/img/bg-img/user2.png", name: "Afrin" },
	{ id: 9, img: "/assets/img/bg-img/user3.png", name: "Fairoze" },
	{ id: 10, img: "/assets/img/bg-img/user4.png", name: "ReFresh" },
	{ id: 11, img: "/assets/img/bg-img/user1.png", name: "রবিন" },
	{ id: 12, img: "/assets/img/bg-img/user2.png", name: "Hasnain" },
];

const UserArea = () => {
	return (
		<>
			{/* <!-- User Status Slide --> */}
			<div className="chat-user-status-slides-wrapper">
				<Swiper
					spaceBetween={10}
					slidesPerView={10}
					breakpoints={{
						0: {
							slidesPerView: 5,
						},
						480: {
							slidesPerView: 5,
						},
						768: {
							slidesPerView: 7,
						},
						1200: {
							slidesPerView: 10,
						},
					}}
					className="chat-user-status-slides mb-2"
				>
					{user_data.map((item, i) => (
						<SwiperSlide key={i}>
							<div className="user-status-slide">
								<a href="#">
									<img src={item.img} alt="" />
									<div className="active-status"></div>
									<p className="mb-0 mt-1 text-truncate">{item.name}</p>
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default UserArea;
