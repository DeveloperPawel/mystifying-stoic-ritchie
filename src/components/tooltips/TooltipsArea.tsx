
"use client"; 

const TooltipsArea = () => {

	if (typeof window !== "undefined") {
		require("bootstrap/js/dist/tooltip");
	} 

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Tooltip on top</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body text-center">
							<button
								className="btn btn-primary"
								title="Hi, I am a top tooltip!"
								data-toggle="tooltip" data-placement="top"
							>
								Tooltip on top
							</button>
						</div>
					</div> 
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Tooltip on right</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<a
								className="btn btn-success ms-auto"
								href="#"
								data-bs-toggle="tooltip"
								data-bs-placement="right"
								title="Hi, I am a right tooltip!"
							>
								Tooltip on right
							</a>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Tooltip on bottom</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body text-center">
							<a
								className="btn btn-info"
								href="#"
								data-bs-toggle="tooltip"
								data-bs-placement="bottom"
								title="Hi, I am a bottom tooltip!"
							>
								Tooltip on bottom
							</a>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Tooltip on left</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="text-end">
								<a
									className="btn btn-danger"
									href="#"
									data-bs-toggle="tooltip"
									data-bs-placement="left"
									title="Hi, I am a left tooltip!"
								>
									Tooltip on left
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Tooltip on HTML</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<button
								className="btn btn-warning"
								type="button"
								data-bs-toggle="tooltip"
								data-bs-html="true"
								title="Tooltip with Next js"
							>
								Tooltip with Next js
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TooltipsArea;
