import React from "react";

const ProgressBarArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Bootstrap Progress Bar</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Default Progress --> */}
							<div className="progress">
								<div
									className="progress-bar w-25"
									role="progressbar"
									aria-valuenow={25}
									aria-valuemin={0}
									aria-valuemax={100}
									
								>
									25%
								</div>
							</div>

							<div className="mb-3"></div>

							{/* <!-- Success Progress --> */}
							<div className="progress">
								<div
									className="progress-bar bg-success w-50"
									role="progressbar"
									aria-valuenow={50}
									aria-valuemin={0}
									aria-valuemax={100}
								>
									50%
								</div>
							</div>

							<div className="mb-3"></div>

							{/* <!-- Danger Progress --> */}
							<div className="progress">
								<div
									className="progress-bar bg-danger w-75"
									role="progressbar"
									aria-valuenow={75}
									aria-valuemin={0}
									aria-valuemax={100}
								>
									75%
								</div>
							</div>

							<div className="mb-3"></div>

							{/* <!-- Warning Progress --> */}
							<div className="progress">
								<div
									className="progress-bar bg-warning w-100"
									role="progressbar"
									aria-valuenow={100}
									aria-valuemin={0}
									aria-valuemax={100}
								>
									100%
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Skill Progress Bar</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Single Skill Progress Bar --> */}
							<div className="skill-progress-bar d-flex align-items-center">
								{/* <!-- Skill Icon --> */}
								<div className="skill-icon shadow-sm">
									<i className="bi bi-code fz-20 text-dark"></i>
								</div>

								{/* <!-- Skill Data --> */}
								<div className="skill-data">
									{/* <!-- Skill Name--> */}
									<div className="skill-name d-flex align-items-center justify-content-between">
										<p className="mb-1">HTML5</p>
										<small className="mb-1"  style={{ color: "#8480AE" }}>
											<span>78</span>%
										</small>
									</div>
									{/* <!-- Progress --> */}
									<div className="progress" style={{ height: "4px" }}>
										<div
											className="progress-bar"
											style={{ width: "78%" }}
											role="progressbar"
											aria-valuenow={78}
											aria-valuemin={0}
											aria-valuemax={100}
										></div>
									</div>
								</div>
							</div>

							{/* <!-- Single Skill Progress Bar --> */}
							<div className="skill-progress-bar d-flex align-items-center">
								{/* <!-- Skill Icon --> */}
								<div className="skill-icon shadow-sm">
									<i className="bi bi-heart fz-20 text-danger"></i>
								</div>

								{/* <!-- Skill Data --> */}
								<div className="skill-data">
									{/* <!-- Skill Name --> */}
									<div className="skill-name d-flex align-items-center justify-content-between">
										<p className="mb-1">PHP 8</p>
										<small className="mb-1"  style={{ color: "#8480AE" }}>
											<span>96</span>%
										</small>
									</div>
									{/* <!-- Progress --> */}
									<div className="progress" style={{ height: "4px" }}>
										<div
											className="progress-bar bg-success"
											style={{ width: "96%" }}
											role="progressbar"
											aria-valuenow={96}
											aria-valuemin={0}
											aria-valuemax={100}
										></div>
									</div>
								</div>
							</div>

							{/* <!-- Single Skill Progress Bar --> */}
							<div className="skill-progress-bar d-flex align-items-center">
								{/* <!-- Skill Icon --> */}
								<div className="skill-icon shadow-sm">
									<i className="bi bi-bootstrap fz-20 text-primary"></i>
								</div>

								{/* <!-- Skill Data --> */}
								<div className="skill-data">
									{/* <!-- Skill Name --> */}
									<div className="skill-name d-flex align-items-center justify-content-between">
										<p className="mb-1">Bootstrap 5</p>
										<small className="mb-1"  style={{ color: "#8480AE" }}>
											<span>88</span>%
										</small>
									</div>
									{/* <!-- Progress --> */}
									<div className="progress" style={{ height: "4px" }}>
										<div
											className="progress-bar bg-info"
											style={{ width: "88%" }}
											role="progressbar"
											aria-valuenow={88}
											aria-valuemin={0}
											aria-valuemax={100}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Upload Data Progress</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<h6>Uploading...</h6>
							{/* <!-- Progress --> */}
							<div className="progress" style={{ height: "6px" }}>
								<div
									className="progress-bar progress-bar-striped progress-bar-animated"
									style={{ width: "93%" }}
									role="progressbar"
									aria-valuenow={93}
									aria-valuemin={0}
									aria-valuemax={100}
								></div>
							</div>
							{/* <!-- Progress Info --> */}
							<div className="progress-info d-flex align-items-center justify-content-between"  style={{ color: "#8480AE" }}>
								<span>93%</span>
								<span>17 sec remaining</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Task Progress</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Single Task Progress --> */}
							<div className="single-task-progress">
								{/* <!-- Progress Info --> */}
								<div className="progress-info d-flex align-items-center justify-content-between">
									<h6 className="mb-1">Project Affan</h6>
									<span className="mt-0 mb-1"  style={{ color: "#8480AE" }}>70% done</span>
								</div>

								{/* <!-- Progress --> */}
								<div className="progress" style={{ height: "4px" }}>
									<div
										className="progress-bar bg-danger"
										style={{ width: "70%" }}
										role="progressbar"
										aria-valuenow={70}
										aria-valuemin={0}
										aria-valuemax={100}
									></div>
								</div>

								<div className="task-member-info d-flex align-items-center justify-content-between">
									{/* <!-- Who working --> */}
									<div className="who-working mt-2">
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/7.jpg"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/8.jpg"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/9.jpg"
												alt=""
											/>
										</a>
									</div>
									{/* <!-- Add New Member --> */}
									<div className="addnew-member mt-2">
										<a className="btn btn-sm btn-danger rounded-pill" href="#">
											Add New
										</a>
									</div>
								</div>
							</div>

							{/* <!-- Single Task Progress --> */}
							<div className="single-task-progress">
								{/* <!-- Progress Info --> */}
								<div className="progress-info d-flex align-items-center justify-content-between">
									<h6 className="mb-1">Project Suha</h6>
									<span className="mt-0 mb-1"  style={{ color: "#8480AE" }}>93% done</span>
								</div>

								{/* <!-- Progress --> */}
								<div className="progress" style={{ height: "4px" }}>
									<div
										className="progress-bar bg-success"
										style={{ width: "93%" }}
										role="progressbar"
										aria-valuenow={93}
										aria-valuemin={0}
										aria-valuemax={100}
									></div>
								</div>

								<div className="task-member-info d-flex align-items-center justify-content-between">
									{/* <!-- Who working --> */}
									<div className="who-working mt-2">
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/7.jpg"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/8.jpg"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/9.jpg"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/7.jpg"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/8.jpg"
												alt=""
											/>
										</a>
									</div>
									{/* <!-- Add New Member --> */}
									<div className="addnew-member mt-2">
										<a className="btn btn-sm btn-success rounded-pill" href="#">
											Add New
										</a>
									</div>
								</div>
							</div>

							{/* <!-- Single Task Progress --> */}
							<div className="single-task-progress">
								{/* <!-- Progress Info --> */}
								<div className="progress-info d-flex align-items-center justify-content-between">
									<h6 className="mb-1">Project Saasbox</h6>
									<span className="mt-0 mb-1"  style={{ color: "#8480AE" }}>89% done</span>
								</div>

								{/* <!-- Progress --> */}
								<div className="progress" style={{ height: "4px" }}>
									<div
										className="progress-bar bg-warning"
										style={{ width: "89%" }}
										role="progressbar"
										aria-valuenow={89}
										aria-valuemin={0}
										aria-valuemax={100}
									></div>
								</div>

								<div className="task-member-info d-flex align-items-center justify-content-between">
									{/* <!-- Who working --> */}
									<div className="who-working mt-2">
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/7.jpg"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												className="shadow-sm"
												src="/assets/img/bg-img/8.jpg"
												alt=""
											/>
										</a>
									</div>
									{/* <!-- Add New Member --> */}
									<div className="addnew-member mt-2">
										<a className="btn btn-sm btn-warning rounded-pill" href="#">
											Add New
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProgressBarArea;
