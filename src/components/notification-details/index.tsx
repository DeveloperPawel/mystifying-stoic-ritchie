import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";

const NotificationDetails = () => {
	return (
		<>
			<HeaderSix links="pages" title="Notification Details" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card">
						<div className="card-body direction-rtl">
							<p>
								New comment on Affan - PWA Mobile HTML5 Template from
								designing world.
							</p>
							<div className="border-bottom border-top py-4">
								<p className="lead">
									Good job! Waiting for admin dashboard too!
								</p>
								<a
									className="btn btn-primary btn-sm"
									href="https://themeforest.net/item/suha-pwa-ecommerce-mobile/52838653?s_rank=1"
								>
									View the comment
								</a>
							</div>
							<p className="mb-0 fz-12 mt-4">
								<i className="bi bi-clock mx-1"></i>
								12 Dec {new Date().getFullYear()} 12:36 AM
							</p>
						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default NotificationDetails;
