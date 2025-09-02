"use client";

import React from "react";

const TabArea = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/js/dist/tab");
	}

	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Standard Tab</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="standard-tab">
								<ul
									className="nav rounded-lg mb-2 p-2 shadow-sm"
									id="affanTabs1"
									role="tablist"
								>
									<li className="nav-item" role="presentation">
										<button
											className="btn active"
											id="bootstrap-tab"
											data-bs-toggle="tab"
											data-bs-target="#bootstrap"
											type="button"
											role="tab"
											aria-controls="bootstrap"
											aria-selected="true"
										>
											RTL
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="btn"
											id="pwa-tab"
											data-bs-toggle="tab"
											data-bs-target="#pwa"
											type="button"
											role="tab"
											aria-controls="pwa"
											aria-selected="false"
										>
											PWA
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="btn"
											id="dark-tab"
											data-bs-toggle="tab"
											data-bs-target="#dark"
											type="button"
											role="tab"
											aria-controls="dark"
											aria-selected="false"
										>
											Dark
										</button>
									</li>
								</ul>

								<div
									className="tab-content rounded-lg p-3 shadow-sm"
									id="affanTabs1Content"
								>
									<div
										className="tab-pane fade show active"
										id="bootstrap"
										role="tabpanel"
										aria-labelledby="bootstrap-tab"
									>
										<h6>RTL Ready</h6>
										<p className="mb-0">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>

									<div
										className="tab-pane fade"
										id="pwa"
										role="tabpanel"
										aria-labelledby="pwa-tab"
									>
										<h6>PWA Ready</h6>
										<p className="mb-0">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>

									<div
										className="tab-pane fade"
										id="dark"
										role="tabpanel"
										aria-labelledby="dark-tab"
									>
										<h6>Dark Mode</h6>
										<p className="mb-0">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Colorful Tab</h6>
					</div>
				</div>

				<div className="container">
					<div className="card bg-primary bg-gradient">
						<div className="card-body">
							<div className="colorful-tab">
								<ul
									className="nav p-1 mb-3 shadow-sm"
									id="affanTab3"
									role="tablist"
								>
									<li className="nav-item" role="presentation">
										<button
											className="btn btn-primary active"
											id="creative-tab"
											data-bs-toggle="tab"
											data-bs-target="#creative"
											type="button"
											role="tab"
											aria-controls="creative"
											aria-selected="true"
										>
											Creative
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="btn btn-primary"
											id="modern-tab"
											data-bs-toggle="tab"
											data-bs-target="#modern"
											type="button"
											role="tab"
											aria-controls="modern"
											aria-selected="false"
										>
											Modern
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="btn btn-primary"
											id="latest-tab"
											data-bs-toggle="tab"
											data-bs-target="#latest"
											type="button"
											role="tab"
											aria-controls="latest"
											aria-selected="false"
										>
											Latest
										</button>
									</li>
								</ul>

								<div
									className="tab-content shadow-sm p-3"
									id="affanTab3Content"
								>
									<div
										className="tab-pane fade show active"
										id="creative"
										role="tabpanel"
										aria-labelledby="creative-tab"
									>
										<h6 className="text-white">Creative design.</h6>
										<p className="mb-0 text-white">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
									<div
										className="tab-pane fade"
										id="modern"
										role="tabpanel"
										aria-labelledby="modern-tab"
									>
										<h6 className="text-white">Modern trends.</h6>
										<p className="mb-0 text-white">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
									<div
										className="tab-pane fade"
										id="latest"
										role="tabpanel"
										aria-labelledby="latest-tab"
									>
										<h6 className="text-white">Latest technology.</h6>
										<p className="mb-0 text-white">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Minimal Tab</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="minimal-tab">
								<ul className="nav nav-tabs mb-3" id="affanTab2" role="tablist">
									<li className="nav-item" role="presentation">
										<button
											className="btn active"
											id="sass-tab"
											data-bs-toggle="tab"
											data-bs-target="#sass"
											type="button"
											role="tab"
											aria-controls="sass"
											aria-selected="true"
										>
											Sass
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="btn"
											id="npm-tab"
											data-bs-toggle="tab"
											data-bs-target="#npm"
											type="button"
											role="tab"
											aria-controls="npm"
											aria-selected="false"
										>
											NPM
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="btn"
											id="gulp-tab"
											data-bs-toggle="tab"
											data-bs-target="#gulp"
											type="button"
											role="tab"
											aria-controls="gulp"
											aria-selected="false"
										>
											Gulp
										</button>
									</li>
								</ul>

								<div
									className="tab-content rounded-lg p-3"
									id="affanTab2Content"
								>
									<div
										className="tab-pane fade show active"
										id="sass"
										role="tabpanel"
										aria-labelledby="sass-tab"
									>
										<h6>Built with SASS</h6>
										<p className="mb-0">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
									<div
										className="tab-pane fade"
										id="npm"
										role="tabpanel"
										aria-labelledby="npm-tab"
									>
										<h6>Built with NPM</h6>
										<p className="mb-0">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
									<div
										className="tab-pane fade"
										id="gulp"
										role="tabpanel"
										aria-labelledby="gulp-tab"
									>
										<h6>Built with Gulp js</h6>
										<p className="mb-0">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Bootstrap Tab</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<ul className="nav nav-tabs" id="bootstrapTab" role="tablist">
								<li className="nav-item me-2" role="presentation">
									<button
										className="nav-link active"
										id="home-tab"
										data-bs-toggle="tab"
										data-bs-target="#home"
										type="button"
										role="tab"
										aria-controls="home"
										aria-selected="true"
									>
										Home
									</button>
								</li>
								<li className="nav-item me-2" role="presentation">
									<button
										className="nav-link"
										id="profile-tab"
										data-bs-toggle="tab"
										data-bs-target="#profile"
										type="button"
										role="tab"
										aria-controls="profile"
										aria-selected="false"
									>
										Profile
									</button>
								</li>
								<li className="nav-item" role="presentation">
									<button
										className="nav-link"
										id="contact-tab"
										data-bs-toggle="tab"
										data-bs-target="#contact"
										type="button"
										role="tab"
										aria-controls="contact"
										aria-selected="false"
									>
										Contact
									</button>
								</li>
							</ul>

							<div
								className="tab-content p-3 border-top-0"
								id="bootstrapTabContent"
							>
								<div
									className="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									<h6>Im tab one!</h6>
									<p className="mb-0">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Nam, impedit natus itaque fuga aperiam qui eos ut.
									</p>
								</div>
								<div
									className="tab-pane fade"
									id="profile"
									role="tabpanel"
									aria-labelledby="profile-tab"
								>
									<h6>Im tab two!</h6>
									<p className="mb-0">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Nam, impedit natus itaque fuga aperiam qui eos ut.
									</p>
								</div>
								<div
									className="tab-pane fade"
									id="contact"
									role="tabpanel"
									aria-labelledby="contact-tab"
								>
									<h6>Im tab three!</h6>
									<p className="mb-0">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Nam, impedit natus itaque fuga aperiam qui eos ut.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TabArea;
