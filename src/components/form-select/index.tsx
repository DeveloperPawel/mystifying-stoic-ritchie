import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";

const FormSelect = () => {
	return (
		<>
			<HeaderSix links="elements" title="Select" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Select</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form action="#" method="GET">
								<div className="form-group">
									<label className="form-label" htmlFor="defaultSelect">
										Default select
									</label>
									<select
										className="form-select"
										id="defaultSelect"
										name="defaultSelect"
										aria-label="Default select example"
									>
										<option value="1" selected>
											One
										</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="multipleSelect">
										Multiple select
									</label>
									<select
										className="form-select"
										id="multipleSelect"
										name="multipleSelect"
										multiple
										aria-label="multiple select example"
									>
										<option value="1" selected>
											One
										</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
										<option value="4">Four</option>
									</select>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="multipleSelect2">
										Multiple select with size
									</label>
									<select
										className="form-select"
										id="multipleSelect2"
										name="multipleSelect2"
										multiple
										size={3}
										aria-label="multiple select example"
									>
										<option value="1" selected>
											One
										</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
										<option value="4">Four</option>
										<option value="5">Five</option>
									</select>
								</div>

								<div className="form-group">
									<label className="form-label" htmlFor="defaultSelectLg">
										Large select
									</label>
									<select
										className="form-select form-select-lg"
										id="defaultSelectLg"
										name="defaultSelectLg"
										aria-label="Default select example"
									>
										<option value="1" selected>
											One
										</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>

								<div className="form-group mb-0">
									<label className="form-label" htmlFor="defaultSelectSm">
										Small select
									</label>
									<select
										className="form-select form-select-sm"
										id="defaultSelectSm"
										name="defaultSelectSm"
										aria-label="Default select example"
									>
										<option value="1" selected>
											One
										</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default FormSelect;
