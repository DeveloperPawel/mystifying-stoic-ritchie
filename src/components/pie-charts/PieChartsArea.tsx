"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import react-apexcharts
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const pieChartOptions: ApexOptions = {
	chart: {
		width: 280,
		type: "pie",
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: false,
		},
	},
	colors: ["#0134d4", "#2ecc4a", "#ea4c62", "#1787b8"],
	series: [100, 55, 63, 77],
	labels: ["Business", "Marketing", "Admin", "Ecommerce"],
};

const donutChartOptions: ApexOptions = {
	chart: {
		width: 280,
		type: "donut",
		sparkline: {
			enabled: true,
		},
		dropShadow: {
			enabled: false,
		},
	},
	colors: ["#0134d4", "#2ecc4a", "#ea4c62", "#1787b8"],
	series: [100, 55, 63, 77],
	labels: ["Business", "Marketing", "Admin", "Ecommerce"],
};

const PieChartsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Pie Chart</h6>
					</div>
				</div>

				<div className="container">
					<div className="card shadow-sm direction-rtl">
						<div className="card-body">
							<div className="chart-wrapper">
								<div id="pieChart">
									<ApexCharts
										options={pieChartOptions}
										series={pieChartOptions.series}
										type="pie"
										width={280}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="element-heading mt-3">
						<h6>Donut Chart</h6>
					</div>
				</div>

				<div className="container">
					<div className="card shadow-sm direction-rtl">
						<div className="card-body">
							<div className="chart-wrapper">
								<div id="donutChart">
									<ApexCharts
										options={donutChartOptions}
										series={donutChartOptions.series}
										type="donut"
										width={280}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PieChartsArea;
