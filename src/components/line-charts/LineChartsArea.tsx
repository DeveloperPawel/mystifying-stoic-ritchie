"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import react-apexcharts
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const lineChartOptions: ApexOptions = {
	chart: {
		height: 180,
		type: "line",
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	colors: ["#0134d4"],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
	},
	title: {
		text: "Last 6 month sales",
		align: "center",
		margin: 0,
		offsetX: 0,
		offsetY: 0,
		floating: true,
		style: {
			fontSize: "14px",
			color: "#8480ae",
		},
	},
	tooltip: {
		theme: "dark",
		marker: {
			show: true,
		},
		x: {
			show: false,
		},
	},
	grid: {
		borderColor: "#dbeaea",
		strokeDashArray: 4,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	series: [
		{
			name: "Affan",
			data: [100, 401, 305, 501, 409, 602],
		},
	],
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		crosshairs: {
			show: true,
		},
		labels: {
			offsetX: 0,
			offsetY: 0,
			style: {
				colors: "#8380ae",
				fontSize: "12px",
			},
		},
		tooltip: {
			enabled: false,
		},
	},
	yaxis: {
		labels: {
			offsetX: -10,
			offsetY: 0,
			style: {
				colors: "#8380ae",
				fontSize: "12px",
			},
		},
	},
};

const lineChartOptions2: ApexOptions = {
	chart: {
		height: 160,
		type: "line",
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	colors: ["#2ecc4a"],
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
	},
	title: {
		text: "",
		align: "center",
		margin: 0,
		offsetX: 0,
		offsetY: 0,
		floating: true,
		style: {
			fontSize: "14px",
			color: "#8480ae",
		},
	},
	tooltip: {
		theme: "dark",
		marker: {
			show: true,
		},
		x: {
			show: false,
		},
	},
	grid: {
		borderColor: "#dbeaea",
		strokeDashArray: 4,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	series: [
		{
			name: "Affan",
			data: [15, 18, 16, 17, 14, 13, 19],
		},
	],
	xaxis: {
		categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
		crosshairs: {
			show: true,
		},
		labels: {
			offsetX: 0,
			offsetY: 0,
			style: {
				colors: "#8380ae",
				fontSize: "12px",
			},
		},
		tooltip: {
			enabled: false,
		},
	},
	yaxis: {
		labels: {
			offsetX: -10,
			offsetY: 0,
			style: {
				colors: "#8380ae",
				fontSize: "12px",
			},
		},
	},
};

const LineChartsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Line One</h6>
					</div>
				</div>

				<div className="container">
					<div className="card shadow-sm">
						<div className="card-body pb-0">
							<div className="chart-wrapper">
								<div id="lineChart1">
									<ApexCharts
										options={lineChartOptions}
										series={lineChartOptions.series}
										type="line"
										height={180}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="element-heading mt-3">
						<h6>Line Two</h6>
					</div>
				</div>

				<div className="container">
					<div className="card shadow-sm">
						<div className="card-body pb-0">
							<div className="chart-wrapper">
								<div id="lineChart2">
									<ApexCharts
										options={lineChartOptions2}
										series={lineChartOptions2.series}
										type="line"
										height={160}
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

export default LineChartsArea;
