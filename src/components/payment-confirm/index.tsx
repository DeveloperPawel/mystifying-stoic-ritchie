import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Link from "next/link";
import React from "react";

const PaymentConfirm = () => {
	return (
		<>
			<HeaderFour links="pages" title="Payment Confirm" />
			<div className="order-success-wrapper">
				<div className="custom-container">
					<div className="order-done-content">
						<i className="bi bi-check-circle-fill text-success mb-2 display-1"></i>
						<h5>Your order is confirmed!</h5>
						<p>
							Your order ID is 
							<strong className="badge bg-light text-dark shadow-sm me-2 fz-14">
								#20A11F15N. 
							</strong>
							Keep this ID remember for further assistance. Thank you!
						</p>
						<Link className="btn btn-warning mt-3" href="/shop-grid">
							Go to Shop
						</Link>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default PaymentConfirm;
