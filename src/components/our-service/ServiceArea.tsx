import React from "react";
import service_data from "@/data/service_data";

const ServiceArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					{service_data.map((item, i) => (
						<div
							key={i}
							className={`card service-card bg-${item.color} bg-gradient mb-3`}
						>
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div className="service-text">
										<h5>{item.title}</h5>
										<p className="mb-0">{item.sm_info}</p>
									</div>
									<div className="service-img">
										<img src={item.img} alt="" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ServiceArea;
