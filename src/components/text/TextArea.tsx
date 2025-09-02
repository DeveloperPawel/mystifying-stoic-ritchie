import React from "react";

const TextArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Text alignment</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<h6 className="text-start text-primary">Left aligned text</h6>
							<h6 className="text-center text-success">Center aligned text</h6>
							<h6 className="text-end mb-0 text-info">Right aligned text</h6>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Text wrapping</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<div
								className="badge bg-primary text-wrap"
								style={{ width: "5rem" }}
							>
								This text should wrap.
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Text overflow</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<div className="text-nowrap bg-gray" style={{ width: "8rem" }}>
								This text should overflow the parent.
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Text transform</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<h6 className="text-lowercase">Lowercased text.</h6>
							<h6 className="text-uppercase">Uppercased text.</h6>
							<h6 className="text-capitalize mb-0">CapiTaliZed text.</h6>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Font weight and italics</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<p className="fw-bold">Bold text.</p>
							<p className="fw-bolder">
								Bolder weight text (relative to the parent element).
							</p>
							<p className="fw-normal">Normal weight text.</p>
							<p className="fw-light">Light weight text.</p>
							<p className="fw-lighter">
								Lighter weight text (relative to the parent element).
							</p>
							<p className="fst-italic">Italic text.</p>
							<p className="fst-normal mb-0">Text without font style</p>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Line height</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<p className="lh-1">
								Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
								auctor. Donec sed odio dui. Cras mattis pannenkoek purus.
							</p>
							<p className="lh-sm">
								Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
								auctor. Donec sed odio dui. Cras mattis pannenkoek purus.
							</p>
							<p className="lh-base">
								Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
								auctor. Donec sed odio dui. Cras mattis pannenkoek purus.
							</p>
							<p className="lh-lg mb-0">
								Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
								auctor. Donec sed odio dui. Cras mattis pannenkoek purus.
							</p>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Text decoration</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							<p className="text-decoration-underline">
								This text has a line underneath it.
							</p>
							<p className="text-decoration-line-through">
								This text has a line going through it.
							</p>
							<a className="text-decoration-none" href="#">
								This link has its text decoration removed
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TextArea;
