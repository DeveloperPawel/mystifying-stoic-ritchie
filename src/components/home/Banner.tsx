import Link from "next/link";
import React from "react";

const Banner = () => {
	return (
		<>
			<div className="container">
				<div
					className="card bg-primary mb-3 bg-img"
					style={{ backgroundImage: `url(/assets/img/core-img/1.png)` }}
				>
					<div className="card-body direction-rtl p-4">
						<h2 className="text-white">Ready pages</h2>
						<p className="mb-4 text-white">
							Already designed more than 100+ pages for your needs. Such as -
							Authentication, Chats, eCommerce, Blog & Miscellaneous pages.
						</p>
						<Link className="btn btn-warning" href="/pages">
							All Pages
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
