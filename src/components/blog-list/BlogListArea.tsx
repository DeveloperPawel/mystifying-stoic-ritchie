import blog_data from "@/data/blog_data";
import Link from "next/link";
import React from "react";

const BlogListArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="row g-3 justify-content-center">
						{blog_data.map((item, i) => (
							<div key={i} className="col-12 col-md-8 col-lg-7 col-xl-6">
								<div className="card shadow-sm blog-list-card">
									<div className="d-flex align-items-center">
										<div
											className="card-blog-img position-relative"
											style={{ backgroundImage: `url(${item.img})` }}
										>
											<span className="badge bg-warning text-dark position-absolute card-badge">
												{item.category}
											</span>
										</div>
										<div className="card-blog-content">
											<span className="badge bg-danger rounded-pill mb-2 d-inline-block">
												{item.date}
											</span>
											<Link
												className="blog-title d-block mb-3 text-dark"
												href="/blog-details"
											>
												{item.title}
											</Link>
											<Link
												className="btn btn-primary btn-sm"
												href="/blog-details"
											>
												Read More
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-8 col-lg-7 col-xl-6">
							<div className="card mt-3">
								<div className="card-body p-3">
									<nav aria-label="Page navigation example">
										<ul className="pagination justify-content-center pagination-one direction-rtl">
											<li className="page-item disabled">
												<a className="page-link" href="#" aria-label="Previous">
													<i className="bi bi-chevron-left"></i>
												</a>
											</li>
											<li className="page-item active">
												<a className="page-link" href="#">
													1
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													2
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													...
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#">
													9
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="#" aria-label="Next">
													<i className="bi bi-chevron-right"></i>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogListArea;
