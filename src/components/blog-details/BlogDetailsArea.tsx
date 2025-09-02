import React from "react";

const BlogDetailsArea = () => {
	return (
		<>
			<div className="page-content-wrapper">
				<div className="container">
					<div className="pt-3 d-block"></div>

					<div className="blog-details-post-thumbnail position-relative">
						{/* <!-- Post Image --> */}
						<img
							className="w-100 rounded-lg"
							src="/assets/img/bg-img/24.jpg"
							alt=""
						/>
						{/* <!-- Post Bookmark --> */}
						<a className="post-bookmark position-absolute card-badge" href="#">
							<i className="bi bi-bookmark"></i>
						</a>
					</div>
				</div>

				<div className="blog-description py-3">
					<div className="container">
						<a className="badge bg-primary mb-2 d-inline-block" href="#">
							News
						</a>
						<h3 className="mb-3">
							A collection of textile samples lay spread out on the table
						</h3>

						<div className="d-flex align-items-center mb-4">
							<a className="badge-avater" href="#">
								<img
									className="img-circle"
									src="/assets/img/bg-img/user1.png"
									alt=""
								/>
							</a>
							<span className="ms-2">Jarah Clark</span>
						</div>

						<p className="fz-14">
							One morning, when Gregor Samsa woke from troubled dreams, he found
							himself transformed in his bed into a horrible vermin.
						</p>
						<p className="fz-14">
							He lay on his armour-like back, and if he lifted his head a little
							he could see his brown belly, slightly domed and divided by arches
							into stiff sections.
						</p>
						<p className="fz-14">
							The bedding was hardly able to cover it and seemed ready to slide
							off any moment.
						</p>
						<p className="fz-14">
							His many legs, pitifully thin compared with the size of the rest
							of him, waved about helplessly as he looked. Whats happened to
							me?  he thought.
						</p>
						<p className="fz-14">
							It wasnt a dream. His room, a proper human room although a little
							too small, lay peacefully between its four familiar walls.
						</p>
						<p className="fz-14">
							A collection of textile samples lay spread out on the table -
							Samsa was a travelling salesman - and above it there hung a
							picture that he had recently cut out of an illustrated magazine
							and housed in a nice, gilded frame.
						</p>
						<p className="fz-14">
							It showed a lady fitted out with a fur hat and fur boa who sat
							upright, raising a heavy fur muff that covered the whole of her
							lower arm towards the viewer. Gregor then turned to look out the
							window at the dull weather.
						</p>
					</div>
				</div>

				{/* <!-- All Comments --> */}
				<div className="rating-and-review-wrapper pb-3 mt-3">
					<div className="container">
						<h6 className="mb-3">All comments</h6>
						{/* <!-- Rating Review --> */}
						<div className="rating-review-content">
							<ul className="ps-2">
								<li className="single-user-review d-flex">
									<div className="user-thumbnail mt-0">
										<img src="/assets/img/bg-img/2.jpg" alt="" />
									</div>
									<div className="rating-comment">
										<p className="comment mb-1">
											I strongly recommend this agency to everyone interested in
											running a business.
										</p>
										<span className="name-date">12 Dec 2022</span>
									</div>
								</li>
								<li className="single-user-review d-flex">
									<div className="user-thumbnail mt-0">
										<img src="/assets/img/bg-img/20.jpg" alt="" />
									</div>
									<div className="rating-comment">
										<p className="comment mb-1">
											Youve saved our business! Thanks guys, keep up the good
											work! The best on the net!
										</p>
										<span className="name-date">8 Dec 2022</span>
									</div>
								</li>
								<li className="single-user-review d-flex">
									<div className="user-thumbnail mt-0">
										<img src="/assets/img/bg-img/21.jpg" alt="" />
									</div>
									<div className="rating-comment">
										<p className="comment mb-1">
											Absolutely wonderful! I wish I would have thought of it
											first. I would be lost without agency.
										</p>
										<span className="name-date">28 Nov 2022</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Comment Form --> */}
				<div className="ratings-submit-form pb-3">
					<div className="container">
						<h6 className="mb-3">Submit a comment</h6>
						<form action="#">
							<div className="form-group">
								<textarea
									className="form-control mb-3 border-0"
									name="comment"
									cols={30}
									rows={10}
									placeholder="Write a comment"
								></textarea>
							</div>
							<button className="btn w-100 btn-primary" type="submit">
								Post Comment
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogDetailsArea;
