import React from "react";

const BasicTableArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3 rk_table">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Basic Table</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<table className="table mb-0">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First</th>
										<th scope="col">Last</th>
										<th scope="col">Handle</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colSpan={2}>Larry the Bird</td>
										<td>@twitter</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Striped Table</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<table className="table mb-0 table-striped">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First</th>
										<th scope="col">Last</th>
										<th scope="col">Handle</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colSpan={2}>Larry the Bird</td>
										<td>@twitter</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Hoverable Rows Table</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<table className="table mb-0 table-hover">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First</th>
										<th scope="col">Last</th>
										<th scope="col">Handle</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colSpan={2}>Larry the Bird</td>
										<td>@twitter</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Dark Table</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<table className="table mb-0 table-dark table-striped">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First</th>
										<th scope="col">Last</th>
										<th scope="col">Handle</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">1</th>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<th scope="row">2</th>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<th scope="row">3</th>
										<td colSpan={2}>Larry the Bird</td>
										<td>@twitter</td>
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

export default BasicTableArea;
