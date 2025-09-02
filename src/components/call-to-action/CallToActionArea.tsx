import React from "react";

const CallToActionArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Call To Action 01</h6>
					</div>
				</div>

				<div className="container">
					<div className="card bg-warning">
						<div className="card-body">
							<h3 className="mb-3">Build your website easier with Affan</h3>
							<a className="btn btn-dark" href="#">
								Buy Now $24
							</a>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Call To Action 02</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<h4 className="mb-4">
								We believe that our works can contribute to a better world.
							</h4>
							<a className="btn btn-light w-100" href="#">
								<i className="bi bi-chat"></i> Lets Talk
							</a>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Call To Action 03</h6>
					</div>
				</div>

				{/* <!-- Card --> */}
				<div
					className="card cta-card bg-img bg-overlay rounded-0"
					style={{ backgroundImage: `url(/assets/img/bg-img/22.jpg)` }}
				>
					<div className="container">
						<div className="card-body px-0 py-5">
							<h3 className="mb-3 text-white">
								Create your website beautifully & easily with Affan.
							</h3>
							<a className="btn btn-warning" href="#">
								Buy Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CallToActionArea;
