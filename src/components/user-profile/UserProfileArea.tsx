"use client";
import React, { useState } from "react";

const UserProfileArea = () => {
	const [formData, setFormData] = useState({
		username: "@designing-world",
		fullname: "Jamil Rayhan",
		email: "care@example.com",
		job: "UX/UI Designer",
		portfolio: "https://themeforest.net/user/rk_theme",
		address: "28/C Green Road, BD",
		bio: "Working as UX/UI Designer at Designing World since 2016.",
	});

	const handleChange = (e: any) => {
		const { id, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[id]: value,
		}));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- User Information--> */}
					<div className="card user-info-card mb-3">
						<div className="card-body d-flex align-items-center">
							<div className="user-profile me-3">
								<img src="/assets/img/bg-img/2.jpg" alt="" />
								<i className="bi bi-pencil"></i>
								<form onSubmit={(e) => e.preventDefault()}>
									<input className="form-control" type="file" />
								</form>
							</div>
							<div className="user-info">
								<div className="d-flex align-items-center">
									<h5 className="mb-1">Affan Islam</h5>
									<span className="badge bg-warning ms-2 rounded-pill">
										Pro
									</span>
								</div>
								<p className="mb-0">UX/UI Designer</p>
							</div>
						</div>
					</div>

					{/* <!-- User Meta Data--> */}
					<div className="card user-data-card">
						<div className="card-body">
							<form onSubmit={handleSubmit}>
								<div className="form-group mb-3">
									<label className="form-label" htmlFor="username">
										Username
									</label>
									<input
										className="form-control"
										id="username"
										type="text"
										value={formData.username}
										placeholder="Username"
										onChange={handleChange}
									/>
								</div>

								<div className="form-group mb-3">
									<label className="form-label" htmlFor="fullname">
										Full Name
									</label>
									<input
										className="form-control"
										id="fullname"
										type="text"
										value={formData.fullname}
										placeholder="Full Name"
										readOnly
									/>
								</div>

								<div className="form-group mb-3">
									<label className="form-label" htmlFor="email">
										Email Address
									</label>
									<input
										className="form-control"
										id="email"
										type="text"
										value={formData.email}
										placeholder="Email Address"
										readOnly
									/>
								</div>

								<div className="form-group mb-3">
									<label className="form-label" htmlFor="job">
										Job Title
									</label>
									<input
										className="form-control"
										id="job"
										type="text"
										value={formData.job}
										placeholder="Job Title"
										onChange={handleChange}
									/>
								</div>

								<div className="form-group mb-3">
									<label className="form-label" htmlFor="portfolio">
										Portfolio URL
									</label>
									<input
										className="form-control"
										id="portfolio"
										type="url"
										value={formData.portfolio}
										placeholder="Portfolio URL"
										onChange={handleChange}
									/>
								</div>

								<div className="form-group mb-3">
									<label className="form-label" htmlFor="address">
										Address
									</label>
									<input
										className="form-control"
										id="address"
										type="text"
										value={formData.address}
										placeholder="Address"
										onChange={handleChange}
									/>
								</div>

								<div className="form-group mb-3">
									<label className="form-label" htmlFor="bio">
										Bio
									</label>
									<textarea
										className="form-control"
										id="bio"
										name="bio"
										cols={30}
										rows={10}
										value={formData.bio}
										placeholder="Bio"
										onChange={handleChange}
									></textarea>
								</div>

								<button className="btn btn-success w-100" type="submit">
									Update Now
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserProfileArea;
