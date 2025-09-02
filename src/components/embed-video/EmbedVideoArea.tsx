import React from "react";

const EmbedVideoArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>21:9 Aspect Ratio</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- 21:9 Aspect Ratio --> */}
					<div className="ratio ratio-21x9 mb-4">
						<iframe src="https://www.youtube.com/embed/lFGvqvPh5jI"></iframe>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>16:9 Aspect Ratio</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- 16:9 Aspect Ratio --> */}
					<div className="ratio ratio-16x9 mb-4">
						<iframe src="https://www.youtube.com/embed/lFGvqvPh5jI"></iframe>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>4:3 Aspect Ratio</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- 4:3 Aspect Ratio --> */}
					<div className="ratio ratio-4x3 mb-4">
						<iframe src="https://www.youtube.com/embed/lFGvqvPh5jI"></iframe>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>1:1 Aspect Ratio</h6>
					</div>
				</div>

				<div className="container">
					{/* <!-- 1:1 Aspect Ratio --> */}
					<div className="ratio ratio-1x1">
						<iframe
							className="embed-responsive-item"
							src="https://www.youtube.com/embed/lFGvqvPh5jI"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
};

export default EmbedVideoArea;
