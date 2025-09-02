import React from "react";

const BadgeArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Badge</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="direction-rtl">
								{/* <!-- Badge --> */}
								<span className="m-1 badge bg-primary">Primary</span>
								<span className="m-1 badge bg-secondary">Secondary</span>
								<span className="m-1 badge bg-success">Success</span>
								<span className="m-1 badge bg-danger">Danger</span>
								<span className="m-1 badge bg-warning text-dark">Warning</span>
								<span className="m-1 badge bg-info">Info</span>
								<span className="m-1 badge bg-light text-dark">Light</span>
								<span className="m-1 badge bg-dark">Dark</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Pill badge</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="direction-rtl">
								{/* <!-- Pill Badge --> */}
								<span className="m-1 badge rounded-pill bg-primary">
									Primary
								</span>
								<span className="m-1 badge rounded-pill bg-secondary">
									Secondary
								</span>
								<span className="m-1 badge rounded-pill bg-success">
									Success
								</span>
								<span className="m-1 badge rounded-pill bg-danger">Danger</span>
								<span className="m-1 badge rounded-pill bg-warning text-dark">
									Warning
								</span>
								<span className="m-1 badge rounded-pill bg-info">Info</span>
								<span className="m-1 badge rounded-pill bg-light text-dark">
									Light
								</span>
								<span className="m-1 badge rounded-pill bg-dark">Dark</span>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Avater badge</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="badge-avater-wrap d-flex align-items-center mb-3">
								{/* <!-- Badge Avater Lg --> */}
								<a className="me-2 badge-avater badge-avater-lg" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user1.png"
										alt=""
									/>
									<span className="status bg-success"></span>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="me-2 badge-avater" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user2.png"
										alt=""
									/>
									<span className="status bg-success"></span>
								</a>

								{/* <!-- Badge Avater Sm --> */}
								<a className="me-2 badge-avater badge-avater-sm" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user3.png"
										alt=""
									/>
									<span className="status bg-success"></span>
								</a>

								{/* <!-- Badge Avater Lg --> */}
								<a
									className="me-2 badge-avater badge-avater-lg bg-primary"
									href="#"
								>
									A<span className="status bg-success"></span>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="me-2 badge-avater bg-primary" href="#">
									B<span className="status bg-success"></span>
								</a>

								{/* <!-- Badge Avater Sm --> */}
								<a
									className="me-2 badge-avater badge-avater-sm bg-primary"
									href="#"
								>
									C<span className="status bg-success"></span>
								</a>
							</div>

							{/* <!-- Badge Avater Group --> */}
							<div className="badge-avater-group">
								{/* <!-- Badge Avater Lg --> */}
								<a className="badge-avater badge-avater-lg" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user1.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater Lg --> */}
								<a className="badge-avater badge-avater-lg" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user2.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater Lg --> */}
								<a className="badge-avater badge-avater-lg" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user3.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater Lg --> */}
								<a className="badge-avater badge-avater-lg" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user4.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater Lg --> */}
								<a className="badge-avater badge-avater-lg bg-primary" href="#">
									+3
								</a>
							</div>

							<div className="mb-3"> </div>

							{/* <!-- Badge Avater Group --> */}
							<div className="badge-avater-group">
								{/* <!-- Badge Avater --> */}
								<a className="badge-avater" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user1.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user2.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user3.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user4.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater bg-primary" href="#">
									+3
								</a>
							</div>

							<div className="mb-3"></div>
							{/* <!-- Badge Avater Group --> */}
							<div className="badge-avater-group">
								{/* <!-- Badge Avater --> */}
								<a className="badge-avater badge-avater-sm" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user1.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater badge-avater-sm" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user2.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater badge-avater-sm" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user3.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater badge-avater-sm" href="#">
									<img
										className="img-circle"
										src="/assets/img/bg-img/user4.png"
										alt=""
									/>
								</a>

								{/* <!-- Badge Avater --> */}
								<a className="badge-avater badge-avater-sm bg-primary" href="#">
									+3
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Badge with button</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="direction-rtl">
								<a className="btn btn-primary m-1" href="#">
									Notification<span className="ms-1 badge bg-success">1</span>
								</a>
								<a className="btn btn-warning m-1" href="#">
									Cart<span className="ms-1 badge rounded-pill bg-dark">9</span>
								</a>
								<a className="btn btn-danger m-1" href="#">
									Profile
									<span className="ms-1 badge rounded-pill bg-primary">3</span>
								</a>
								<a className="btn btn-info m-1" href="#">
									Sales
									<span className="ms-1 badge rounded-pill bg-primary">
										1280
									</span>
								</a>
								<a className="btn btn-dark m-1" href="#">
									Revenue<span className="ms-1 badge bg-primary">$63</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Badge Notification</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="direction-rtl">
								<button
									className="btn btn-success position-relative"
									type="button"
								>
									Inbox
									<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
										26
									</span>
								</button>
								<button
									className="ms-3 btn btn-primary position-relative"
									type="button"
								>
									Spam
									<span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger p-2">
										<span className="visually-hidden">unread messages</span>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Badge with heading</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<h4>
								Hello Affan!<span className="badge bg-primary ms-2">badge</span>
							</h4>
							<h5>
								Hello Affan!<span className="badge bg-primary ms-2">badge</span>
							</h5>
							<h6 className="mb-0">
								Hello Affan!
								<span className="badge bg-primary ms-2">badge</span>
							</h6>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BadgeArea;
