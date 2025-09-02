"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartOptions: ApexOptions = {
	chart: {
		height: 240,
		type: "bar",
		animations: {
			enabled: true,
			easing: "easeinout",
			speed: 1000,
		},
		dropShadow: {
			enabled: true,
			opacity: 0.1,
			blur: 2,
			left: -1,
			top: 5,
		},
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	subtitle: {
		text: "This week earnings",
		align: "left",
		margin: 0,
		offsetX: 0,
		offsetY: 0,
		floating: false,
		style: {
			fontSize: "14px",
			color: "#8480ae",
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: "60%",
		},
	},
	colors: ["#0134d4", "#f1b10f"],
	dataLabels: {
		enabled: false,
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
	legend: {
		position: "bottom",
		horizontalAlign: "center",
		offsetY: 6,
		fontSize: "12px",
		markers: {
			strokeWidth: 0,
			radius: 2,
		},
		itemMargin: {
			horizontal: 5,
			vertical: 0,
		},
	},
	tooltip: {
		theme: "light",
		marker: {
			show: true,
		},
		x: {
			show: false,
		},
	},
	stroke: {
		show: true,
		colors: ["transparent"],
		width: 3,
	},
	labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
	series: [
		{
			name: "Affan",
			data: [320, 420, 395, 350, 410, 355, 360],
		},
		{
			name: "Suha",
			data: [400, 395, 280, 520, 430, 385, 374],
		},
	],
	xaxis: {
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
			formatter: function (value: number) {
				return value / 1000 + "k";
			},
			offsetX: -10,
			offsetY: 0,
			style: {
				colors: "#8380ae",
				fontSize: "12px",
			},
		},
	},
};

const chartOptions2: ApexOptions = {
	chart: {
		height: 180,
		type: "bar",
		animations: {
			enabled: true,
			easing: "easeinout",
			speed: 1000,
		},
		dropShadow: {
			enabled: true,
			opacity: 0.1,
			blur: 2,
			left: -1,
			top: 5,
		},
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	title: {
		text: "",
		align: "left",
		margin: 0,
		offsetX: 0,
		offsetY: 0,
		floating: true,
		style: {
			fontSize: "14px",
			color: "#8480ae",
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: "60%",
		},
	},
	colors: ["#0134d4"],
	dataLabels: {
		enabled: false,
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
	tooltip: {
		theme: "dark",
		marker: {
			show: true,
		},
		x: {
			show: false,
		},
	},
	stroke: {
		show: true,
		colors: ["transparent"],
		width: 3,
	},
	labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
	series: [
		{
			name: "Affan",
			data: [320, 420, 395, 350, 410, 355, 360, 420],
		},
	],
	xaxis: {
		crosshairs: {
			show: true,
		},
		labels: {
			offsetX: 0,
			offsetY: 0,
			style: {
				colors: "#8380ae",
				fontSize: "10px",
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
				fontSize: "10px",
			},
		},
	},
};

const ColumnChartsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="element-heading">
						<h6>Column One</h6>
					</div>
				</div>
				<div className="container">
					<div className="card shadow-sm">
						<div className="card-body pb-2">
							<div className="charts-wrapper">
								<div id="columnChart1">
									<ApexCharts
										options={chartOptions}
										series={chartOptions.series}
										type="bar"
										height={240}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Column Two</h6>
					</div>
				</div>
				<div className="container">
					<div className="card shadow-sm">
						<div className="card-body pb-0">
							<div className="charts-wrapper">
								<div id="columnChart2">
									<ApexCharts
										options={chartOptions2}
										series={chartOptions2.series}
										type="bar"
										height={180}
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

export default ColumnChartsArea;
