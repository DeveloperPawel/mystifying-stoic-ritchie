import Link from "next/link";
import React from "react";

const Elements = () => {
	return (
		<>
			<div className="container">
				<div
					className="card card-bg-img bg-img bg-overlay mb-3"
					style={{ backgroundImage: `url(/assets/img/bg-img/3.jpg)` }}
				>
					<div className="card-body direction-rtl p-4">
						<h2 className="text-white">Reusable elements</h2>
						<p className="mb-4 text-white">
							More than 220+ reusable modern design elements. Just copy the code
							and paste it on your desired page.
						</p>
						<Link className="btn btn-warning" href="/elements">
							All elements
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Elements;
