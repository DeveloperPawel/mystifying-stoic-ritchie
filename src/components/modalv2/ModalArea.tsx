"use client";
import React from "react";

const ModalArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Bootstrap Basic Modal</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							{/* <!-- Bootstrap Basic Modal Trigger Button --> */}
							<button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#bootstrapBasicModal"
							>
								Bootstrap Basic Modal
							</button>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Fullscreen Modal</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							{/* <!-- Fullscreen Modal Trigger Button --> */}
							<button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#fullscreenModal"
							>
								Fullscreen Modal
							</button>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Static Backdrop</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							{/* <!-- Static Backdrop Modal Trigger Button --> */}
							<button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#staticBackdrop"
							>
								Static Backdrop Modal
							</button>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bottom Align Modal</h6>
					</div>
				</div>

				<div className="container">
					<div className="card direction-rtl">
						<div className="card-body">
							{/* <!-- Bottom Align Modal Trigger Button --> */}
							<button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#bottomAlignModal"
							>
								Bottom Align Modal
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Modals */}
			<div
				className="modal fade"
				id="bootstrapBasicModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Bootstrap Basic Modal
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">This is a Bootstrap basic modal.</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="fullscreenModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-fullscreen">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Fullscreen Modal
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">This is a fullscreen modal.</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex={-1}
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">
								Static Backdrop Modal
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							This is a static backdrop modal. Click outside will not close this
							modal.
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="bottomAlignModal"
				tabIndex={1}
				aria-labelledby="bottomAlignModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-bottom">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="bottomAlignModalLabel">
								Bottom Align Modal
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">This is a bottom align modal.</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalArea;
