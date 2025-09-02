"use client";

import React from "react";

import dynamic from "next/dynamic";
const MyTimer = dynamic(() => import("../../components/common/Timer"), {
	ssr: false,
});

const CountdownArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Countdown 01</h6>
					</div>
				</div>

				<div className="container">
					<div
						className="card shadow-sm bg-img"
						style={{ backgroundImage: `url(/assets/img/core-img/2.png)` }}
					>
						<div className="card-body text-center p-5">
							<h2>Coming Soon</h2>
							<p>
								It is very nicely designed & coded with the latest technology.
							</p>

							<div className="countdown1 clockdiv">
								<MyTimer />
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Countdown 02</h6>
					</div>
				</div>

				<div className="container">
					<div
						className="card bg-info coming-soon-card text-center bg-img"
						style={{ backgroundImage: `url(/assets/img/core-img/1.png)` }}
					>
						<div className="card-body p-5">
							<div className="icon-wrap">
								<i className="bi bi-clock text-info"></i>
							</div>

							<h2 className="text-white">Coming Soon</h2>
							<p className="text-white">
								It is very nicely designed & coded with the latest technology.
							</p>

							<div
								className="countdown3 clockdiv"
								data-date="December 22, 2023 21:14:01"
							>
								<MyTimer />
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Countdown 03</h6>
					</div>
				</div>

				<div
					className="card bg-img bg-overlay rounded-0 py-5"
					style={{ backgroundImage: `url(/assets/img/bg-img/30.jpg)` }}
				>
					<div className="card-body py-2">
						<div className="container direction-rtl">
							<h2 className="text-white">
								New
								<span className="text-warning ms-2">update</span>
								<br /> available in:
							</h2>

							<div className="countdown2 clockdiv">
								<MyTimer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CountdownArea;
