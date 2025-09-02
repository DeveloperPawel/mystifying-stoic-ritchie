"use client";

import React from "react";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartOptions: ApexOptions = {
	chart: {
		height: 240,
		type: "area",
		animations: {
			enabled: true,
			easing: "easeinout",
			speed: 1000,
		},
		dropShadow: {
			enabled: true,
			opacity: 0.1,
			blur: 1,
			left: -5,
			top: 18,
		},
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	colors: ["#0134d4", "#ea4c62"],
	dataLabels: {
		enabled: false,
	},
	fill: {
		type: "gradient",
		gradient: {
			type: "vertical",
			shadeIntensity: 1,
			inverseColors: true,
			opacityFrom: 0.15,
			opacityTo: 0.02,
			stops: [40, 100],
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
	legend: {
		position: "bottom",
		horizontalAlign: "center",
		offsetY: 4,
		fontSize: "14px",
		markers: {
			strokeWidth: 0,
			radius: 20,
		},
		itemMargin: {
			horizontal: 5,
			vertical: 0,
		},
	},
	title: {
		text: "$5,394",
		align: "left",
		margin: 0,
		offsetX: 0,
		offsetY: 20,
		floating: false,
		style: {
			fontSize: "16px",
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
	subtitle: {
		text: "This week sales",
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
	stroke: {
		show: true,
		curve: "smooth",
		width: 3,
	},
	labels: ["S", "S", "M", "T", "W", "T", "F"],
	series: [
		{
			name: "Affan",
			data: [320, 420, 395, 350, 410, 355, 360],
		},
		{
			name: "Suha",
			data: [400, 395, 350, 395, 430, 385, 374],
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
				colors: "#8480ae",
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
				colors: "#8480ae",
				fontSize: "12px",
			},
		},
	},
};

const chartOptions2: ApexOptions = {
	chart: {
		height: 220,
		type: "area",
		animations: {
			enabled: true,
			easing: "easeinout",
			speed: 1000,
		},
		dropShadow: {
			enabled: true,
			opacity: 0.1,
			blur: 1,
			left: -5,
			top: 5,
		},
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
	fill: {
		type: "gradient",
		gradient: {
			type: "vertical",
			shadeIntensity: 1,
			inverseColors: true,
			opacityFrom: 0.15,
			opacityTo: 0.05,
			stops: [40, 100],
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
	legend: {
		position: "top",
		horizontalAlign: "right",
		offsetY: -60,
		fontSize: "14px",
		markers: {
			strokeWidth: 0,
			radius: 20,
		},
		itemMargin: {
			horizontal: 5,
			vertical: 0,
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
			fontSize: "16px",
			color: "#8480ae",
		},
	},
	subtitle: {
		text: "",
		align: "left",
		margin: 0,
		offsetX: 0,
		offsetY: 20,
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
	stroke: {
		show: true,
		curve: "smooth",
		width: 3,
	},
	labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	series: [
		{
			name: "Sales",
			data: [1420, 14602, 24741, 24119, 48224, 40635],
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
				colors: "#8480ae",
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
				colors: "#8480ae",
				fontSize: "12px",
			},
		},
	},
};

const AreaChartsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Area One</h6>
					</div>
				</div>

				<div className="container">
					<div className="card shadow-sm">
						<div className="card-body pb-2">
							<div className="chart-wrapper">
								{/* <div id="areaChart1"></div> */}
								<ApexCharts
									options={chartOptions}
									series={chartOptions.series}
									type="area"
									height={240}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Area Two</h6>
					</div>
				</div>

				<div className="container">
					<div className="card shadow-sm">
						<div className="card-body pb-2">
							<div className="chart-wrapper">
								{/* <div id="areaChart2"></div> */}
								<ApexCharts
									options={chartOptions2}
									series={chartOptions2.series}
									type="area"
									height={220}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AreaChartsArea;
