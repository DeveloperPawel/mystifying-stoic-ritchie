import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";

const Fallback = () => {
	return (
		<>
			<HeaderSix links="pages" title="No Internet" />
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card text-center px-3">
						<div className="card-body">
							<i className="bi bi-wifi-off text-danger mb-2"></i>
							<h5>No internet connection!</h5>
							<p className="mb-0">
								Seems like youre offline, please check your internet
								connection. This page doesnt support when you offline!
							</p>
						</div>
					</div>
				</div>
			</div>
			<FooterTwo />
		</>
	);
};

export default Fallback;
