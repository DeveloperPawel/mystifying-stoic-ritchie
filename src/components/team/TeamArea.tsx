import team_data from "@/data/team_data";
import React from "react";

const TeamArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="team-member-wrapper direction-rtl">
					<div className="container">
						<div className="row g-3">
							{team_data.map((item, i) => (
								<div key={i} className="col-6">
									<div className="card team-member-card shadow">
										<div className="card-body">
											{/* <!-- Member Image--> */}
											<div className="team-member-img shadow-sm">
												<img src={item.img} alt="" />
											</div>
											{/* <!-- Team Info--> */}
											<div className="team-info">
												<h6 className="mb-1 fz-14">{item.name}</h6>
												<p className="mb-0 fz-12">{item.designation}</p>
											</div>
										</div>
										{/* <!-- Contact Info--> */}
										<div className={`contact-info bg-${item.color}`}>
											<p className="mb-0 text-truncate">{item.email}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TeamArea;
