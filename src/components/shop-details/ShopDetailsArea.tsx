"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import slider_img_1 from "../../../public/assets/img/bg-img/p1.jpg";
import slider_img_2 from "../../../public/assets/img/bg-img/p2.jpg";
import slider_img_3 from "../../../public/assets/img/bg-img/p3.jpg";
import { Pagination } from "swiper/modules";
import ImagePopup from "@/modals/ImagePopup";
import NiceSelect from "../ui/NiceSelect";
import Link from "next/link";

const image_data = [
	{ id: 1, img: slider_img_1 },
	{ id: 2, img: slider_img_2 },
	{ id: 3, img: slider_img_3 },
];

const ShopDetailsArea = () => {
	// photoIndex
	const [photoIndex, setPhotoIndex] = useState(null);
	// image open state
	const [isOpen, setIsOpen] = useState(false);
	// handleImagePopup
	const handleImagePopup = (i: any) => {
		setPhotoIndex(i);
		setIsOpen(true);
	};

	const image = image_data.map((item) => item.img.src);

	const selectHandler = (e: any) => {};

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
				<div className="container">
					<div className="card product-details-card mb-3">
						<span className="badge bg-warning text-dark position-absolute product-badge">
							Sale -10%
						</span>
						<div className="card-body">
							<div className="product-gallery-wrapper">
								<Swiper
									loop={true}
									slidesPerView={1}
									spaceBetween={0}
									pagination={{
										el: ".tns-nav",
										clickable: true,
									}}
									modules={[Pagination]}
									className="product-gallery gallery-img"
								>
									{image_data.map((image, index) => (
										<SwiperSlide key={index}>
											<a
												style={{ cursor: "pointer" }}
												onClick={() => handleImagePopup(index)}
												className="image-zooming-in-out"
												title="Product One"
												data-gall="gallery2"
											>
												<Image className="rounded" src={image.img} alt="" />
											</a>
										</SwiperSlide>
									))}
								</Swiper>

								<div className="tns-nav" aria-label="Carousel Pagination"></div>
							</div>
						</div>
					</div>

					<div className="card product-details-card mb-3 direction-rtl">
						<div className="card-body shop_style">
							<h3>Wooden Table</h3>
							<h1>$9.89</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
								dolores natus laboriosam accusantium.
							</p>
							<form onSubmit={(e) => e.preventDefault()}>
								<NiceSelect
									className="form-select mb-3 d-flex align-items-center shop_grid_style"
									options={[
										{ value: "01", text: "Choose Size" },
										{ value: "02", text: "Small" },
										{ value: "03", text: "Medium" },
										{ value: "04", text: "Large" },
									]}
									defaultCurrent={0}
									onChange={selectHandler}
									placeholder="Select an option"
									name="myNiceSelect"
								/>

								<div className="input-group">
									<input
										className="input-group-text form-control"
										type="number"
										min="1"
										max="99"
										defaultValue="1"
									/>
									<button className="btn btn-primary w-50" type="submit">
										Add to Cart
									</button>
								</div>
							</form>
						</div>
					</div>

					<div className="card product-details-card mb-3 direction-rtl">
						<div className="card-body">
							<h5>Description</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
								soluta tempore tenetur provident eligendi porro, eius nulla?
								Aliquam, blanditiis id. Corporis.
							</p>
							<p className="mb-0">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ut
								fugit accusantium quo quidem magni laboriosam!
							</p>

							<div className="rating-card-two mt-4">
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
									<span>4.44 out of 5 ratings</span>
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

					<div className="card related-product-card direction-rtl">
						<div className="card-body">
							<h5 className="mb-3">Related Products</h5>

							<div className="row g-3">
								{/* <!-- Single Top Product Card --> */}
								<div className="col-6 col-sm-4 col-lg-3">
									<div className="card single-product-card border">
										<div className="card-body p-3">
											{/* <!-- Product Thumbnail --> */}
											<Link
												className="product-thumbnail d-block"
												href="/shop-details"
											>
												<img src="/assets/img/bg-img/p1.jpg" alt="" />
												{/* <!-- Badge --> */}
												<span className="badge bg-primary">Sale</span>
											</Link>
											{/* <!-- Product Title --> */}
											<Link
												className="product-title d-block text-truncate"
												href="/shop-details"
											>
												Wooden Tool
											</Link>
											{/* <!-- Product Price --> */}
											<p className="sale-price">
												$9.89<span>$13.42</span>
											</p>
											<a className="btn btn-danger btn-sm" href="#">
												Add to Cart
											</a>
										</div>
									</div>
								</div>

								{/* <!-- Single Top Product Card --> */}
								<div className="col-6 col-sm-4 col-lg-3">
									<div className="card single-product-card border">
										<div className="card-body p-3">
											{/* <!-- Product Thumbnail --> */}
											<Link
												className="product-thumbnail d-block"
												href="/shop-details"
											>
												<img src="/assets/img/bg-img/p2.jpg" alt="" />
												{/* <!-- Badge --> */}
												<span className="badge bg-primary">Sale</span>
											</Link>
											{/* <!-- Product Title --> */}
											<Link
												className="product-title d-block text-truncate"
												href="/shop-details"
											>
												Atoms Musk
											</Link>
											{/* <!-- Product Price --> */}
											<p className="sale-price">
												$3.36<span>$5.99</span>
											</p>
											<a className="btn btn-danger btn-sm" href="#">
												Add to Cart
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShopDetailsArea;
