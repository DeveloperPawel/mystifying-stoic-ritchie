import React from "react";

const ImagesArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Responsive Image</h6>
					</div>
				</div>

				<div className="container direction-rtl">
					<img className="img-fluid" src="/assets/img/bg-img/1.jpg" alt="" />
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Image Thumbnail</h6>
					</div>
				</div>

				<div className="container direction-rtl">
					<img
						className="img-thumbnail"
						src="/assets/img/bg-img/9.jpg"
						alt=""
					/>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Round Image</h6>
					</div>
				</div>

				<div className="container direction-rtl">
					<img className="rounded" src="/assets/img/bg-img/7.jpg" alt="" />
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Circle Image</h6>
					</div>
				</div>

				<div className="container direction-rtl">
					<img className="img-circle" src="/assets/img/bg-img/21.jpg" alt="" />
				</div>
			</div>
		</>
	);
};

export default ImagesArea;
