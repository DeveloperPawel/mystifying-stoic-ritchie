import React from "react";

const ScrollspyArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Scrollspy</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Horizontal Scrollspy --> */}
							<nav className="scrollspy-indicatiors mb-3" id="scrollspyWrapper">
								<ul className="d-flex ps-0">
									<li>
										<a className="nav-link" href="#sec1">
											Section 1
										</a>
									</li>
									<li>
										<a className="nav-link" href="#sec2">
											Section 2
										</a>
									</li>
									<li>
										<a className="nav-link" href="#sec3">
											Section 3
										</a>
									</li>
								</ul>
							</nav>

							<div
								className="data-scrollspy"
								data-bs-spy="scroll"
								data-bs-target="#scrollspyWrapper"
								data-bs-smooth-scroll="true"
								data-bs-offset="0"
								tabIndex={0}
							>
								<h5 id="sec1">Section 1</h5>
								<p>
									Section 1 Sorem ipsum dolor, sit amet consectetur adipisicing
									elit. Vitae, repellendus hic. Laboriosam voluptatum explicabo
									commodi quaerat consequatur, officiis tempore suscipit
									quisquam ratione enim nihil, molestiae maiores dicta error at
									repellat asperiores unde ab! Repudiandae assumenda fugit
									architecto debitis facere et mollitia inventore quibusdam!
									Blanditiis voluptatem quaerat, modi ipsa omnis aliquid amet
									numquam quod quis tenetur rerum qui pariatur sit vero
									consequuntur, id dolores debitis hic perspiciatis
									exercitationem.
								</p>

								<h5 id="sec2">Section 2</h5>
								<p>
									Section 2 Rorem ipsum dolor, sit amet consectetur adipisicing
									elit. Vitae, repellendus hic. Laboriosam voluptatum explicabo
									commodi quaerat consequatur, officiis tempore suscipit
									quisquam ratione enim nihil, molestiae maiores dicta error at
									repellat asperiores unde ab! Repudiandae assumenda fugit
									architecto debitis facere et mollitia inventore quibusdam!
									Blanditiis voluptatem quaerat, modi ipsa omnis aliquid amet
									numquam quod quis tenetur rerum qui pariatur sit vero
									consequuntur, id dolores debitis hic perspiciatis
									exercitationem.
								</p>

								<h5 id="sec3">Section 3</h5>
								<p>
									Section 3 Worem ipsum dolor, sit amet consectetur adipisicing
									elit. Vitae, repellendus hic. Laboriosam voluptatum explicabo
									commodi quaerat consequatur, officiis tempore suscipit
									quisquam ratione enim nihil, molestiae maiores dicta error at
									repellat asperiores unde ab! Repudiandae assumenda fugit
									architecto debitis facere et mollitia inventore quibusdam!
									Blanditiis voluptatem quaerat, modi ipsa omnis aliquid amet
									numquam quod quis tenetur rerum qui pariatur sit vero
									consequuntur, id dolores debitis hic perspiciatis
									exercitationem.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Vertical Scrollspy</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							{/* <!-- Vertical Scrollspy --> */}
							<div className="vertical-scrollspy d-flex">
								<nav className="scrollspy-indicatiors" id="scrollspyWrapper2">
									<ul className="ps-0">
										<li>
											<a className="nav-link" href="#sec4">
												Section 1
											</a>
										</li>
										<li>
											<a className="nav-link" href="#sec5">
												Section 2
											</a>
										</li>
										<li>
											<a className="nav-link" href="#sec6">
												Section 3
											</a>
										</li>
									</ul>
								</nav>

								<div
									className="data-scrollspy"
									data-bs-spy="scroll"
									data-bs-target="#scrollspyWrapper2"
									data-bs-offset="0"
								>
									<h5 id="sec4">Section 1</h5>
									<p>
										Section 1 Porem ipsum dolor, sit amet consectetur
										adipisicing elit. Vitae, repellendus hic. Laboriosam
										voluptatum explicabo commodi quaerat consequatur, officiis
										tempore suscipit quisquam ratione enim nihil, molestiae
										maiores dicta error at repellat asperiores unde ab!
										Repudiandae assumenda fugit architecto debitis facere et
										mollitia inventore quibusdam! Blanditiis voluptatem quaerat,
										modi ipsa omnis aliquid amet numquam quod quis tenetur rerum
										qui pariatur sit vero consequuntur, id dolores debitis hic
										perspiciatis exercitationem. Aperiam, accusamus autem? Dolor
										labore quam molestiae alias earum a unde corporis quibusdam
										esse, perferendis blanditiis distinctio est, sunt velit
										mollitia dolorem nostrum eveniet, recusandae iure quasi
										officia. Placeat cumque nihil, architecto quidem tempora
										exercitationem iste laudantium, eveniet nisi sequi impedit
										sint voluptates?
									</p>

									<h5 id="sec5">Section 2</h5>
									<p>
										Section 2 Korem ipsum dolor, sit amet consectetur
										adipisicing elit. Vitae, repellendus hic. Laboriosam
										voluptatum explicabo commodi quaerat consequatur, officiis
										tempore suscipit quisquam ratione enim nihil, molestiae
										maiores dicta error at repellat asperiores unde ab!
										Repudiandae assumenda fugit architecto debitis facere et
										mollitia inventore quibusdam! Blanditiis voluptatem quaerat,
										modi ipsa omnis aliquid amet numquam quod quis tenetur rerum
										qui pariatur sit vero consequuntur, id dolores debitis hic
										perspiciatis exercitationem. Aperiam, accusamus autem? Dolor
										labore quam molestiae alias earum a unde corporis quibusdam
										esse, perferendis blanditiis distinctio est, sunt velit
										mollitia dolorem nostrum eveniet, recusandae iure quasi
										officia. Placeat cumque nihil, architecto quidem tempora
										exercitationem iste laudantium, eveniet nisi sequi impedit
										sint voluptates?
									</p>

									<h5 id="sec6">Section 3</h5>
									<p>
										Section 3 Morem ipsum dolor, sit amet consectetur
										adipisicing elit. Vitae, repellendus hic. Laboriosam
										voluptatum explicabo commodi quaerat consequatur, officiis
										tempore suscipit quisquam ratione enim nihil, molestiae
										maiores dicta error at repellat asperiores unde ab!
										Repudiandae assumenda fugit architecto debitis facere et
										mollitia inventore quibusdam! Blanditiis voluptatem quaerat,
										modi ipsa omnis aliquid amet numquam quod quis tenetur rerum
										qui pariatur sit vero consequuntur, id dolores debitis hic
										perspiciatis exercitationem. Aperiam, accusamus autem? Dolor
										labore quam molestiae alias earum a unde corporis quibusdam
										esse, perferendis blanditiis distinctio est, sunt velit
										mollitia dolorem nostrum eveniet, recusandae iure quasi
										officia. Placeat cumque nihil, architecto quidem tempora
										exercitationem iste laudantium, eveniet nisi sequi impedit
										sint voluptates?
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

export default ScrollspyArea;
