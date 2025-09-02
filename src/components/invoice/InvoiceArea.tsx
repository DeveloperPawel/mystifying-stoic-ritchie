import React from "react";

const InvoiceArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card invoice-card shadow">
						<div className="card-body">
							{/* <!-- Download Invoice --> */}
							<div className="download-invoice text-end mb-3">
								<a className="btn btn-sm btn-primary me-2" href="#">
									<i className="bi bi-file-earmark-pdf"></i> PDF
								</a>
								<a className="btn btn-sm btn-light" href="#">
									<i className="bi bi-printer"></i> Print
								</a>
							</div>

							{/* <!-- Invoice Info --> */}
							<div className="invoice-info text-end mb-4">
								<h5 className="mb-1 fz-14">Designing World Inc.</h5>
								<h6 className="fz-12">Invoice No. #36A89G</h6>
								<p className="mb-0 fz-12">Due Date: Nov 16, 2022</p>
							</div>

							{/* <!-- Invoice Table --> */}
							<div className="invoice-table">
								<div className="table-responsive">
									<table className="table table-bordered caption-top rk_table_style">
										<caption>List of works</caption>
										<thead className="table-light">
											<tr>
												<th>Sl.</th>
												<th>Description</th>
												<th>Unit</th>
												<th>Q.</th>
												<th>Total</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>Website design and development</td>
												<td>$120</td>
												<td>4</td>
												<td>$480</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Digital Marketing</td>
												<td>$80</td>
												<td>2</td>
												<td>$160</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Support</td>
												<td>$100</td>
												<td>1</td>
												<td>$100</td>
											</tr>
										</tbody>
										<tfoot className="table-light">
											<tr>
												<td className="text-end" colSpan={4}>
													Total:
												</td>
												<td className="text-end">$740</td>
											</tr>
											<tr>
												<td className="text-end" colSpan={4}>
													VAT (10%):
												</td>
												<td className="text-end">$74</td>
											</tr>
											<tr>
												<td className="text-end" colSpan={4}>
													Grand Total:
												</td>
												<td className="text-end">$814</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
							<p className="mb-0">Notice: This is auto generated invoice.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InvoiceArea;
