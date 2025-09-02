"use client";

import React from "react";
import Link from "next/link";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";

const Cart = () => {
	return (
		<>
			<HeaderFour links="pages" title="Cart" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- Cart Wrapper --> */}
					<div className="cart-wrapper-area">
						<div className="cart-table card mb-3">
							<div className="table-responsive card-body">
								<table className="table mb-0 text-center rk_table">
									<thead>
										<tr>
											<th scope="col">Image</th>
											<th scope="col">Description</th>
											<th scope="col">Quantity</th>
											<th scope="col">Remove</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">
												<img src="/assets/img/bg-img/p1.jpg" alt="" />
											</th>
											<td>
												<h6 className="mb-1">Wooden Tool</h6>
												<span>$9.89 × 1</span>
											</td>
											<td>
												<div className="quantity">
													<input className="qty-text" type="text" value="1" />
												</div>
											</td>
											<td>
												<a className="remove-product" href="#">
													<i className="bi bi-x-lg"></i>
												</a>
											</td>
										</tr>

										<tr>
											<th scope="row">
												<img src="/assets/img/bg-img/p3.jpg" alt="" />
											</th>
											<td>
												<h6 className="mb-1">Black T-shirt</h6>
												<span>$10.99 × 2</span>
											</td>
											<td>
												<div className="quantity">
													<input className="qty-text" type="text" value="2" />
												</div>
											</td>
											<td>
												<a className="remove-product" href="#">
													<i className="bi bi-x-lg"></i>
												</a>
											</td>
										</tr>

										<tr>
											<th scope="row">
												<img src="/assets/img/bg-img/p5.jpg" alt="" />
											</th>
											<td>
												<h6 className="mb-1">Crispy Biscuit</h6>
												<span>$0.78 × 9</span>
											</td>
											<td>
												<div className="quantity">
													<input className="qty-text" type="text" value="9" />
												</div>
											</td>
											<td>
												<a className="remove-product" href="#">
													<i className="bi bi-x-lg"></i>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className="card-body border-top">
								<div className="apply-coupon">
									<h6 className="mb-0">Have a coupon?</h6>
									<p className="mb-2">
										Enter your coupon code here & get awesome discounts!
									</p>
									{/* <!-- Coupon Form --> */}
									<div className="coupon-form">
										<form onSubmit={(e) => e.preventDefault()}>
											<div className="form-group">
												<div className="input-group">
													<input
														className="form-control input-group-text text-start"
														type="text"
														placeholder="OFFER30"
													/>
													<button className="btn btn-primary" type="submit">
														Apply
													</button>
												</div>
											</div>
											{/* <!-- Checkout --> */}
											<Link href="/checkout">
												<button className="btn btn-danger w-100 mt-3">
													$38.89 & Pay
												</button>
											</Link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default Cart;
