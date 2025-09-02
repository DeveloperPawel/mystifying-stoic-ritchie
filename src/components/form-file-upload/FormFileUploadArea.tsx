import React from "react";

const FormFileUploadArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>File Upload Card 1</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body py-5 text-center">
							<img
								className="w-75 mb-4"
								src="/assets/img/bg-img/29.png"
								alt=""
							/>
							<h5 className="mb-4">Upload your files</h5>

							{/* <!-- Form --> */}
							<form action="#" method="GET">
								<div className="form-file">
									<input
										className="form-control d-none"
										id="customFile"
										type="file"
									/>
									<label
										className="form-file-label justify-content-center"
										htmlFor="customFile"
									>
										<span className="form-file-button btn btn-danger d-flex align-items-center justify-content-center shadow-lg">
											<i className="bi bi-plus-circle me-2 fz-16"></i> Upload
											File
										</span>
									</label>
								</div>
							</form>

							<h6 className="mt-4 mb-0">Supported files</h6>
							<small>.jpg .png .jpeg .gif</small>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>File Upload Card 2</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="file-upload-card">
								<i className="bi bi-file-earmark-arrow-up text-primary display-2"></i>
								<h5 className="mt-2 mb-4">Upload your files</h5>

								{/* <!-- Form --> */}
								<form action="#" method="GET">
									<div className="form-file">
										<input
											className="form-control d-none"
											id="customFile2"
											type="file"
										/>
										<label
											className="form-file-label justify-content-center"
											htmlFor="customFile2"
										>
											<span className="form-file-button btn btn-primary shadow w-100">
												Upload File
											</span>
										</label>
									</div>
								</form>

								<h6 className="mt-4 mb-0">Supported files</h6>
								<small>.jpg .png .jpeg .gif</small>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bootstrap File Upload</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form action="#" method="GET">
								<div className="form-group">
									<label className="form-label" htmlFor="customFile3">
										Default upload
									</label>
									<input
										className="form-control border-0"
										id="customFile3"
										type="file"
									/>
								</div>

								<div className="mb-3"></div>

								<div className="form-group">
									<label className="form-label" htmlFor="customFileLg">
										Large upload
									</label>
									<input
										className="form-control border-0 form-control-lg"
										id="customFileLg"
										type="file"
									/>
								</div>

								<div className="mb-3"></div>

								<div className="form-group mb-0">
									<label className="form-label" htmlFor="customFileSm">
										Small upload
									</label>
									<input
										className="form-control border-0 form-control-sm"
										id="customFileSm"
										type="file"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormFileUploadArea;
