"use client";

import Image from "next/image";
import Count from "../common/Count";
import React, { useState } from "react";
import ImagePopup from "@/modals/ImagePopup";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const count_data = [
	{ id: 1, icon: "basket", color: "success", number: 1400, symble: "+" },
	{ id: 2, icon: "cup", color: "primary", number: 16, symble: "k" },
	{ id: 3, icon: "emoji-smile", color: "danger", number: 963, symble: "+" },
];

import masonary_img_1 from "../../../public/assets/img/bg-img/4.jpg";
import masonary_img_2 from "../../../public/assets/img/bg-img/5.jpg";
import masonary_img_3 from "../../../public/assets/img/bg-img/7.jpg";
import masonary_img_4 from "../../../public/assets/img/bg-img/6.jpg";

const masonry_data = [
	{ id: 1, img: masonary_img_1 },
	{ id: 2, img: masonary_img_2 },
	{ id: 3, img: masonary_img_3 },
	{ id: 4, img: masonary_img_4 },
];

const AboutArea = () => {
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

	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card image-gallery-card direction-rtl">
						<div className="card-body">
							<img
								className="mb-3 rounded"
								src="/assets/img/bg-img/13.jpg"
								alt=""
							/>
							<h5>Why do we use it?</h5>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</p>
							<p>
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using Content
								here, content here, making it look like readable English.
							</p>
							<a className="btn btn-primary mb-4" href="#">
								Get A Quote
							</a>

							<ResponsiveMasonry
								className="masonry-content-wrapper gallery-img mb-3"
								columnsCountBreakPoints={{ 0: 2, 750: 2, 992: 2 }}
							>
								<Masonry gutter="20px">
									{masonry_data.map((item, i) => (
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

							<h5>Where can I get some?</h5>
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which dont look even
								slightly believable.
							</p>

							{/* <!-- Single Skill Progress Bar --> */}
							<div className="skill-progress-bar d-flex align-items-center">
								{/* <!-- Skill Icon --> */}
								<div className="skill-icon shadow-sm p-2">
									<i className="bi bi-code text-dark fz-20"></i>
								</div>

								<div className="skill-data">
									{/* <!-- Skill Name --> */}
									<div className="skill-name d-flex align-items-center justify-content-between">
										<p className="mb-1">HTML5</p>
										<small className="mb-1">
											<span className="counter">78</span>%
										</small>
									</div>

									{/* <!-- Progress --> */}
									<div className="progress" style={{ height: "4px" }}>
										<div
											className="progress-bar"
											style={{ width: "78%" }}
											role="progressbar"
											aria-valuenow={78}
											aria-valuemin={0}
											aria-valuemax={100}
										></div>
									</div>
								</div>
							</div>

							{/* <!-- Single Skill Progress Bar --> */}
							<div className="skill-progress-bar d-flex align-items-center">
								{/* <!-- Skill Icon --> */}
								<div className="skill-icon shadow-sm p-2">
									<i className="bi bi-heart text-danger fz-20"></i>
								</div>

								<div className="skill-data">
									{/* <!-- Skill Name --> */}
									<div className="skill-name d-flex align-items-center justify-content-between">
										<p className="mb-1">PHP 8</p>
										<small className="mb-1">
											<span className="counter">96</span>%
										</small>
									</div>

									{/* <!-- Progress --> */}
									<div className="progress" style={{ height: "4px" }}>
										<div
											className="progress-bar bg-success"
											style={{ width: "96%" }}
											role="progressbar"
											aria-valuenow={96}
											aria-valuemin={0}
											aria-valuemax={100}
										></div>
									</div>
								</div>
							</div>

							{/* <!-- Single Skill Progress Bar --> */}
							<div className="skill-progress-bar d-flex align-items-center">
								{/* <!-- Skill Icon --> */}
								<div className="skill-icon shadow-sm p-2 fz-20">
									<i className="bi bi-bootstrap text-primary"></i>
								</div>

								<div className="skill-data">
									{/* <!-- Skill Name --> */}
									<div className="skill-name d-flex align-items-center justify-content-between">
										<p className="mb-1">Bootstrap 5</p>
										<small className="mb-1">
											<span className="counter">88</span>%
										</small>
									</div>

									{/* <!-- Progress --> */}
									<div className="progress" style={{ height: "4px" }}>
										<div
											className="progress-bar bg-info"
											style={{ width: "88%" }}
											role="progressbar"
											aria-valuenow={88}
											aria-valuemin={0}
											aria-valuemax={100}
										></div>
									</div>
								</div>
							</div>

							<p className="mb-4">
								If you are going to use a passage of Lorem Ipsum, you need to be
								sure there isnt anything embarrassing hidden in the middle of
								text.
							</p>

							<div className="row">
								{count_data.map((item, i) => (
									<div key={i} className="col-4">
										<div className="single-counter-wrap text-center mb-4">
											<i
												className={`bi bi-${item.icon} mb-1 text-${item.color}`}
											></i>
											<h4 className={`mb-0 text-${item.color}`}>
												<span className="counter">
													<Count number={item.number} />
												</span>
												{item.symble}
											</h4>
										</div>
									</div>
								))}
							</div>

							<p className="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Excepturi culpa repellendus voluptatem quod. Minus laudantium
								voluptatem asperiores! Itaque suscipit eos aliquid.
							</p>
							<p className="mb-0">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Excepturi culpa repellendus voluptatem quod. Minus laudantium
								voluptatem asperiores!
							</p>

							<a href="#" className="btn btn-primary mt-3 w-100">
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>

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
		</>
	);
};

export default AboutArea;
