import React from "react";

const ListGroupArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>List group active & disabled state</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<ul className="list-group">
								<li className="list-group-item">List group item 1</li>
								<li className="list-group-item active">List group item 2</li>
								<li className="list-group-item">List group item 3</li>
								<li className="list-group-item disabled">List group item 4</li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>List group links</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="list-group">
								<a className="list-group-item list-group-item-action" href="#">
									List group item 1
								</a>
								<a className="list-group-item list-group-item-action" href="#">
									List group item 2
								</a>
								<a
									className="list-group-item list-group-item-action active"
									href="#"
								>
									List group item 3
								</a>
								<a
									className="list-group-item list-group-item-action disabled"
									href="#"
								>
									List group item 4
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>List group flush</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">List group item 1</li>
								<li className="list-group-item active">List group item 2</li>
								<li className="list-group-item">List group item 3</li>
								<li className="list-group-item disabled">List group item 4</li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>List group with badges</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<ul className="list-group">
								<li className="list-group-item d-flex align-items-center justify-content-between">
									List group item 1
									<span className="badge bg-primary rounded-pill">12</span>
								</li>
								<li className="list-group-item d-flex align-items-center justify-content-between">
									List group item 2
									<span className="badge bg-success rounded-pill">6</span>
								</li>
								<li className="list-group-item d-flex align-items-center justify-content-between">
									List group item 3
									<span className="badge bg-warning rounded-pill">7</span>
								</li>
								<li className="list-group-item d-flex align-items-center justify-content-between">
									List group item 4
									<span className="badge bg-info rounded-pill">3</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>List group checkboxes</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="list-group">
								<label className="list-group-item">
									<input
										className="form-check-input me-2"
										type="checkbox"
										value=""
									/>
									List group item 1
								</label>

								<label className="list-group-item">
									<input
										className="form-check-input me-2"
										type="checkbox"
										value=""
										defaultChecked
									/>
									List group item 2
								</label>

								<label className="list-group-item">
									<input
										className="form-check-input me-2"
										type="checkbox"
										value=""
									/>
									List group item 3
								</label>

								<label className="list-group-item">
									<input
										className="form-check-input me-2"
										type="checkbox"
										value=""
									/>
									List group item 4
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListGroupArea;
