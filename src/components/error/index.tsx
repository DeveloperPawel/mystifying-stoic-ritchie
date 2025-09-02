import React from "react";
import Link from "next/link";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";

const Error = () => {
	return (
		<>
			<HeaderFour links="pages" title="Page Not Found" />

			<div className="page-content-wrapper py-3">
				<div className="custom-container">
					<div className="card">
						<div className="card-body px-5 text-center">
							<img className="mb-4" src="/assets/img/bg-img/39.png" alt="" />
							<h4>
								OOPS... <br /> Page not found!
							</h4>
							<p className="mb-4">
								We couldnt find any results for your search. Try again.
							</p>
							<Link className="btn btn-creative btn-danger" href="/home">
								Go to Home
							</Link>
						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default Error;
