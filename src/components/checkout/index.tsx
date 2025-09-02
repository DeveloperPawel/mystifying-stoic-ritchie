"use client";

import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";
import NiceSelect from "../ui/NiceSelect";
import Link from "next/link";

const Checkout = () => {
	const selectHandler = (e: any) => {};

	return (
		<>
			<HeaderFour links="pages" title="Checkout" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- Checkout Wrapper --> */}
					<div className="checkout-wrapper-area">
						<div className="card">
							<div className="card-body checkout-form">
								<h6 className="mb-3">Enter your billing details</h6>

								<form onSubmit={(e) => e.preventDefault()}>
									<div className="form-group">
										<input
											className="form-control mb-3"
											type="text"
											placeholder="Your full name"
										/>
									</div>

									<div className="form-group">
										<input
											className="form-control mb-3"
											type="text"
											placeholder="Your company"
										/>
									</div>

									<div className="form-group">
										<input
											className="form-control mb-3"
											type="email"
											placeholder="Your email"
										/>
									</div>

									<div className="form-group">
										<input
											className="form-control mb-3"
											type="text"
											placeholder="Your mobile number"
										/>
									</div>

									<div className="form-group rk_select">
										<NiceSelect
											className="form-select mb-3 d-flex align-items-center shop_grid_style checkout_select"
											options={[
												{ value: "01", text: "Your Country" },
												{ value: "02", text: "Bangladesh" },
												{ value: "03", text: "India" },
												{ value: "04", text: "United" },
												{ value: "05", text: "United" },
											]}
											defaultCurrent={0}
											onChange={selectHandler}
											placeholder="Select an option"
											name="myNiceSelect"
										/>
									</div>

									<div className="form-group rk_select">
										<NiceSelect
											className="form-select mb-3 d-flex align-items-center shop_grid_style checkout_select"
											options={[
												{ value: "01", text: "Your City" },
												{ value: "02", text: "Dhaka" },
												{ value: "03", text: "Barishal" },
												{ value: "04", text: "Khulna" },
											]}
											defaultCurrent={0}
											onChange={selectHandler}
											placeholder="Select an option"
											name="myNiceSelect"
										/>
									</div>

									<div className="form-group">
										<input
											className="form-control mb-3"
											type="text"
											placeholder="Street address"
										/>
									</div>

									<div className="form-group">
										<input
											className="form-control mb-3"
											type="text"
											placeholder="Postcode or ZIP"
										/>
									</div>

									<div className="form-group">
										<input
											className="form-control mb-3"
											type="text"
											placeholder="Postcode or ZIP"
										/>
									</div>

									<div className="form-group">
										<textarea
											className="form-control mb-3"
											id="notes"
											name="notes"
											cols={30}
											rows={10}
											placeholder="Notes"
										></textarea>
									</div>

									<div className="form-check mb-2">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadio"
											id="darkRadio1"
											defaultChecked
										/>
										<label className="form-check-label" htmlFor="darkRadio1">
											Regular Courier $0.49
										</label>
									</div>

									<div className="form-check mb-2">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadio"
											id="darkRadio2"
										/>
										<label className="form-check-label" htmlFor="darkRadio2">
											Free Shipping $0
										</label>
									</div>

									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="exampleRadio"
											id="darkRadio3"
										/>
										<label className="form-check-label" htmlFor="darkRadio3">
											Emergency Delivery $2
										</label>
									</div>

									<Link href="/payment-confirm">
										<button className="btn btn-danger mt-3 w-100" type="submit">
											Pay Now & Order
										</button>
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default Checkout;
