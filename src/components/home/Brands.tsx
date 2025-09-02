import React from "react";

interface DataType {
	id: number;
	img: string;
	title: string;
}

const bands_data: DataType[] = [
	{ id: 1, img: "/assets/img/demo-img/pwa.png", title: "PWA Ready" },
	{ id: 2, img: "/assets/img/demo-img/bootstrap.png", title: "Bootstrap 5" },
	{ id: 3, img: "/assets/img/demo-img/js.png", title: "React JS" },
];

const Brands = () => {
	return (
		<>
			<div className="pt-3"></div>

			<div className="container direction-rtl">
				<div className="card mb-3">
					<div className="card-body">
						<div className="row g-3">
							{bands_data.map((item, i) => (
								<div key={i} className="col-4">
									<div className="feature-card mx-auto text-center">
										<div className="card mx-auto bg-gray">
											<img src={item.img} alt="" />
										</div>
										<p className="mb-0">{item.title}</p>
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

export default Brands;
