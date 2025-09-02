import React from "react";

const ComparisonTableArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3 rk_table">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Comparison Table 1</h6>
					</div>
				</div>

				<div className="container">
					<div className="card comparison-table-two">
						<div className="card-body">
							<table className="table mb-0">
								<thead>
									<tr>
										<th>Features</th>
										<th>Basic</th>
										<th>
											<i className="bi bi-gem text-white h1 mb-0"></i>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>Price</th>
										<td>Free</td>
										<td>$99</td>
									</tr>
									<tr>
										<th>Lifetime Usage</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="bi bi-check-lg fz-16"></i>
										</td>
									</tr>
									<tr>
										<th>Support</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="bi bi-check-lg fz-16"></i>
										</td>
									</tr>
									<tr>
										<th>Domain License</th>
										<td>1</td>
										<td>10</td>
									</tr>
									<tr>
										<th>Access to Extensions</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="bi bi-check-lg fz-16"></i>
										</td>
									</tr>
									<tr>
										<th>Copyright Removal</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="bi bi-check-lg fz-16"></i>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Comparison Table 2</h6>
					</div>
				</div>

				<div className="container">
					<div className="card comparison-table-one">
						<div className="card-body">
							<table className="table mb-0">
								<thead className="thead-light">
									<tr>
										<th>Features</th>
										<th>Basic</th>
										<th>Pro</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>Price</th>
										<td>Free</td>
										<td>$99</td>
									</tr>
									<tr>
										<th>Lifetime Usage</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="text-success bi bi-check-lg fz-16"></i>
										</td>
									</tr>
									<tr>
										<th>Premium Supports</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="text-success bi bi-check-lg fz-16"></i>
										</td>
									</tr>
									<tr>
										<th>Domain License</th>
										<td>1</td>
										<td>10</td>
									</tr>
									<tr>
										<th>Access to Extensions</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="text-success bi bi-check-lg fz-16"></i>
										</td>
									</tr>
									<tr>
										<th>Copyright Removal</th>
										<td>
											<i className="text-danger bi bi-x-lg"></i>
										</td>
										<td>
											<i className="text-success bi bi-check-lg fz-16"></i>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ComparisonTableArea;
