import React from "react";

const BordersArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3 rk_border">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Additive Border</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body d-flex flex-wrap">
							<div className="border-content">
								<span
									className="border border-primary d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border All Side</small>
							</div>

							<div className="border-content">
								<span
									className="border-top border-primary d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Top</small>
							</div>

							<div className="border-content">
								<span
									className="border-end border-primary d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Right</small>
							</div>

							<div className="border-content">
								<span
									className="border-bottom border-primary d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Bottom</small>
							</div>

							<div className="border-content">
								<span
									className="border-start border-primary d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Left</small>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Border Width</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body d-flex flex-wrap">
							<div className="border-content">
								<span
									className="border border-primary d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border 1px</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-2 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border 2px</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-3 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border 3px</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-4 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border 4px</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-5 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border 5px</small>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Subtractive Border</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body d-flex flex-wrap">
							<div className="border-content">
								<span
									className="border border-primary border-0 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border All Side</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-top-0 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Top</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-end-0 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Right</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-bottom-0 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Bottom</small>
							</div>

							<div className="border-content">
								<span
									className="border border-primary border-start-0 d-inline-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Left</small>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Border color</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body d-flex flex-wrap">
							<div className="border-content">
								<span
									className="border border-primary d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Primary</small>
							</div>

							<div className="border-content">
								<span
									className="border border-secondary d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Secondary</small>
							</div>

							<div className="border-content">
								<span
									className="border border-success d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Success</small>
							</div>

							<div className="border-content">
								<span
									className="border border-danger d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Danger</small>
							</div>

							<div className="border-content">
								<span
									className="border border-warning d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Warning</small>
							</div>

							<div className="border-content">
								<span
									className="border border-info d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Info</small>
							</div>

							<div className="border-content">
								<span
									className="border border-light d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Light</small>
							</div>

							<div className="border-content">
								<span
									className="border border-dark d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border Dark</small>
							</div>

							<div className="border-content">
								<span
									className="border border-white d-block bg-light m-1"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Border White</small>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Border Radius</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body d-flex flex-wrap">
							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-top"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded Top</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-right"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded Right</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-bottom"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded Bottom</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-left"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded Left</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-circle"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded Circle</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-pill"
									style={{ width: "12rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded Pill</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-0"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded 0</small>
							</div>

							<div className="border-content">
								<span
									className="border d-block bg-light m-1 rounded-lg"
									style={{ width: "5rem", height: "5rem" }}
								></span>
								<small className="d-block">Rounded Large</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BordersArea;
