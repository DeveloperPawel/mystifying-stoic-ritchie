import React from "react";

const PaginationArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Bootstrap Pagination</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<nav aria-label="Page navigation example">
								<ul className="pagination direction-rtl">
									<li className="page-item disabled">
										<a className="page-link" href="#" aria-label="Previous">
											<span aria-hidden="true">&laquo;</span>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											...
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											9
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#" aria-label="Next">
											<span aria-hidden="true">&</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Pagination 02</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<nav aria-label="Page navigation example">
								<ul className="pagination direction-rtl pagination-one">
									<li className="page-item disabled">
										<a className="page-link" href="#" aria-label="Previous">
											<i className="bi bi-chevron-left"></i>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											...
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											9
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#" aria-label="Next">
											<i className="bi bi-chevron-right"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Pagination 03</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<nav aria-label="Page navigation example">
								<ul className="pagination direction-rtl pagination-two">
									<li className="page-item">
										<a className="page-link" href="#" aria-label="Previous">
											<i className="bi bi-chevron-left"></i>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											...
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#">
											9
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="#" aria-label="Next">
											<i className="bi bi-chevron-right"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Pagination 04</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between">
								<nav aria-label="Page navigation example">
									<ul className="pagination direction-rtl pagination-three">
										<li className="page-item">
											<a className="page-link" href="#" aria-label="Previous">
												<i className="bi bi-chevron-left"></i>
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#" aria-label="Next">
												<i className="bi bi-chevron-right"></i>
											</a>
										</li>
									</ul>
								</nav>
								<small>Showing 3 of 31</small>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Pagination 05</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between direction-rtl">
								{/* <!-- Form --> */}
								<div className="goto-page-form">
									<form className="d-flex align-items-center" action="#">
										<label htmlFor="gotoPageNumber">Go to page</label>
										<input
											className="form-control form-control-sm mx-2"
											id="gotoPageNumber"
											type="text"
											value="3"
										/>
										<button className="btn btn-sm btn-danger" type="submit">
											Go
										</button>
									</form>
								</div>

								<nav aria-label="Page navigation example">
									<ul className="pagination pagination-four">
										<li className="page-item">
											<a className="page-link" href="#" aria-label="Previous">
												<i className="bi bi-caret-left"></i>
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#" aria-label="Next">
												<i className="bi bi-caret-right"></i>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PaginationArea;
