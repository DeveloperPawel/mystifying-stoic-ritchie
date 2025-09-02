"use client";

import React, { useState } from "react";
import ImagePopup from "@/modals/ImagePopup";
import { Swiper, SwiperSlide } from "swiper/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import img_1 from "../../../public/assets/img/bg-img/4.jpg";
import img_2 from "../../../public/assets/img/bg-img/5.jpg";
import img_3 from "../../../public/assets/img/bg-img/6.jpg";
import img_4 from "../../../public/assets/img/bg-img/7.jpg";
import Image from "next/image";

const masonry_data = [
	{ id: 1, img: img_1, catagory: "Large" },
	{ id: 2, img: img_2, catagory: "Small" },
	{ id: 3, img: img_4, catagory: "Small" },
	{ id: 4, img: img_3, catagory: "Large" },
];

// data
const categories = [
	"All",
	...new Set(masonry_data.map((item) => item.catagory)),
];

const ImageGalleryArea = () => {
	// photoIndex
	const [photoIndex, setPhotoIndex] = useState(null);
	// image open state
	const [isOpen, setIsOpen] = useState(false);
	// handleImagePopup
	const handleImagePopup = (i: any) => {
		setPhotoIndex(i);
		setIsOpen(true);
	};

	const image = masonry_data.map((item) => item.img.src);

	const [activeCategory, setActiveCategory] = useState("All");
	const [items, setItems] = useState(masonry_data);

	const filterItems = (cateItem: string) => {
		setActiveCategory(cateItem);

		if (cateItem === "All") {
			return setItems(masonry_data);
		} else {
			const findItems = masonry_data.filter((findItem) => {
				return findItem.catagory == cateItem;
			});
			setItems(findItems);
		}
	};



	return (
		<>
			{/* image light box start */}
			{isOpen && (
				<ImagePopup
					images={image}
					setIsOpen={setIsOpen}
					photoIndex={photoIndex}
					setPhotoIndex={setPhotoIndex}
				/>
			)}
			{/* image light box end */}

			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Masonry Image Gallery</h6>
					</div>
				</div>

				<div className="container">
					<div className="card image-gallery-card">
						<div className="card-body px-3 pb-3">
							<div className="filters-button-group text-center">
								{categories.map((cate, i) => (
									<React.Fragment key={i}>
										<button
											onClick={() => filterItems(cate)}
											className={`btn btn-primary btn-sm mx-1 mb-2 rounded-pill ${
												cate === activeCategory ? "active" : ""
											}`}
										>
											{cate}
										</button>
									</React.Fragment>
								))}
							</div>

							<ResponsiveMasonry
								className="masonry-content-wrapper gallery-img"
								columnsCountBreakPoints={{ 0: 2, 750: 2, 992: 2 }}
							>
								<Masonry gutter="20px">
									{items.map((item, i) => (
										<a
											key={i}
											className="portfolio-item large single-gallery-item image-zooming-in-out"
											title="Gallery One"
											data-gall="gallery01"
											style={{ cursor: "pointer" }}
											onClick={() => handleImagePopup(i)}
										>
											<Image src={item.img} alt="" />
											{/* <!-- Fav Icon --> */}
											<div className="fav-icon shadow">
												<i className="bi bi-heart-fill"></i>
											</div>
										</a>
									))}
								</Masonry>
							</ResponsiveMasonry>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Same Size Image Gallery</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="row g-3">
								{/* <!-- Single Image Gallery --> */}
								<div className="col-6">
									<div className="single-gallery-item">
										<img src="/assets/img/bg-img/8.jpg" alt="" />
										{/* <!-- Fav Icon--> */}
										<a className="fav-icon shadow" href="#">
											<i className="bi bi-heart-fill"></i>
										</a>
									</div>
								</div>

								{/* <!-- Single Image Gallery --> */}
								<div className="col-6">
									<div className="single-gallery-item">
										<img src="/assets/img/bg-img/9.jpg" alt="" />
										{/* <!-- Fav Icon--> */}
										<a className="fav-icon shadow" href="#">
											<i className="bi bi-heart-fill"></i>
										</a>
									</div>
								</div>

								{/* <!-- Single Image Gallery --> */}
								<div className="col-6">
									<div className="single-gallery-item">
										<img src="/assets/img/bg-img/10.jpg" alt="" />
										{/* <!-- Fav Icon--> */}
										<a className="fav-icon shadow" href="#">
											<i className="bi bi-heart-fill"></i>
										</a>
									</div>
								</div>

								{/* <!-- Single Image Gallery --> */}
								<div className="col-6">
									<div className="single-gallery-item">
										<img src="/assets/img/bg-img/11.jpg" alt="" />
										{/* <!-- Fav Icon--> */}
										<a className="fav-icon shadow" href="#">
											<i className="bi bi-heart-fill"></i>
										</a>
									</div>
								</div>

								{/* <!-- Single Image Gallery --> */}
								<div className="col-6">
									<div className="single-gallery-item">
										<img src="/assets/img/bg-img/12.jpg" alt="" />
										{/* <!-- Fav Icon--> */}
										<a className="fav-icon shadow" href="#">
											<i className="bi bi-heart-fill"></i>
										</a>
									</div>
								</div>

								{/* <!-- Single Image Gallery --> */}
								<div className="col-6">
									<div className="single-gallery-item">
										<img src="/assets/img/bg-img/13.jpg" alt="" />
										{/* <!-- Fav Icon--> */}
										<a className="fav-icon shadow" href="#">
											<i className="bi bi-heart-fill"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Slider Image Gallery</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="row gx-2 align-items-end">
								<div className="col-8">
									<div className="image-gallery-text mb-4">
										<h3 className="mb-0">Recent works</h3>
										<p className="mb-0">Latest awesome portfollio.</p>
									</div>
								</div>
								<div className="col-4 text-end">
									<a className="btn btn-primary btn-sm mb-4" href="#">
										View More
									</a>
								</div>
							</div>

							{/* <!-- Image Gallery Slides Wrapper --> */}
							<div className="image-gallery-slides-wrapper">
								<Swiper
									loop={true}
									slidesPerView={2.5}
									spaceBetween={15}
									centeredSlides={true}
									className="image-gallery-carousel"
								>
									<SwiperSlide>
										<div className="single-gallery-item">
											{/* <!-- Gallery Image --> */}
											<img src="/assets/img/bg-img/14.jpg" alt="" />
											{/* <!-- Fav Icon --> */}
											<a className="fav-icon shadow" href="#">
												<i className="bi bi-heart-fill"></i>
											</a>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-gallery-item">
											{/* <!-- Gallery Image --> */}
											<img src="/assets/img/bg-img/15.jpg" alt="" />
											{/* <!-- Fav Icon --> */}
											<a className="fav-icon shadow" href="#">
												<i className="bi bi-heart-fill"></i>
											</a>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-gallery-item">
											{/* <!-- Gallery Image --> */}
											<img src="/assets/img/bg-img/16.jpg" alt="" />
											{/* <!-- Fav Icon --> */}
											<a className="fav-icon shadow" href="#">
												<i className="bi bi-heart-fill"></i>
											</a>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-gallery-item">
											{/* <!-- Gallery Image --> */}
											<img src="/assets/img/bg-img/17.jpg" alt="" />
											{/* <!-- Fav Icon --> */}
											<a className="fav-icon shadow" href="#">
												<i className="bi bi-heart-fill"></i>
											</a>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-gallery-item">
											{/* <!-- Gallery Image --> */}
											<img src="/assets/img/bg-img/18.jpg" alt="" />
											{/* <!-- Fav Icon --> */}
											<a className="fav-icon shadow" href="#">
												<i className="bi bi-heart-fill"></i>
											</a>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageGalleryArea;
