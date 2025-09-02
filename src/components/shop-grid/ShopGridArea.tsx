"use client";

import React from "react";
import NiceSelect from "../ui/NiceSelect";
import shop_data from "@/data/shop_data";
import Link from "next/link";

const ShopGridArea = () => {
	const selectHandler = (e: any) => {};

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Pagination --> */}
				<div className="shop-pagination pb-3">
					<div className="container">
						<div className="card">
							<div className="card-body p-2">
								<div className="d-flex align-items-center justify-content-between rk_style">
									<small className="ms-1">Showing 6 of 31</small>
									<form onSubmit={(e) => e.preventDefault()}>
										<NiceSelect
											className="pe-4 form-select d-flex align-items-center shop_grid_style"
											options={[
												{ value: "01", text: "Sort by Newest" },
												{ value: "02", text: "Sort by Older" },
												{ value: "03", text: "Sort by Ratings" },
												{ value: "04", text: "Sort by Sales" },
											]}
											defaultCurrent={0}
											onChange={selectHandler}
											placeholder="Select an option"
											name="myNiceSelect"
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Top Products --> */}
				<div className="top-products-area">
					<div className="container">
						<div className="row g-3">
							{shop_data.map((item, i) => (
								<div key={i} className="col-6 col-sm-4 col-lg-3">
									<div className="card single-product-card">
										<div className="card-body p-3">
											{/* <!-- Product Thumbnail --> */}
											<Link
												className="product-thumbnail d-block"
												href="/shop-details"
											>
												<img src={item.img} alt={item.title} />
												{/* <!-- Badge --> */}
												<span className={`badge bg-${item.badge_colro}`}>
													{item.badge_text}
												</span>
											</Link>
											{/* <!-- Product Title --> */}
											<Link
												className="product-title d-block text-truncate"
												href="/shop-details"
											>
												{item.title}
											</Link>
											{/* <!-- Product Price --> */}
											<p className="sale-price">
												$ {item.new_price}
												<span>$ {item.old_price}</span>
											</p>
											<a
												className={`btn btn-${
													item.btn_color
												} rounded-pill btn-sm ${
													item.btn_color === "danger" ? "disabled" : ""
												}`}
												href="#"
											>
												{item.btn_text}
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* <!-- Pagination --> */}
				<div className="shop-pagination pt-3">
					<div className="container">
						<div className="card">
							<div className="card-body py-3">
								<nav aria-label="Page navigation example">
									<ul className="pagination pagination-two justify-content-center">
										<li className="page-item">
											<a className="page-link" href="#" aria-label="Previous">
												<i className="bi bi-chevron-left"></i>
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												...
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												9
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#" aria-label="Next">
												<i className="bi bi-chevron-right"></i>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShopGridArea;
