"use client";

import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const FormTextarea = () => {
	return (
		<>
			<HeaderSix links="elements" title="Input" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Textarea</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form onSubmit={(e) => e.preventDefault()}>
								<div className="form-group">
									<label className="form-label" htmlFor="exampleTextarea1">
										Input textarea
									</label>
									<textarea
										className="form-control"
										id="exampleTextarea1"
										name="textarea"
										cols={3}
										rows={5}
										placeholder="Write something..."
									></textarea>
								</div>
								<button
									className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
									type="button"
								>
									Send Message
									<i className="bi bi-arrow-right fz-16 ms-1"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};

export default FormTextarea;
