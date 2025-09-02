"use client";

import React, { useEffect, useState } from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const OnlineOfflineDetection = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/js/dist/toast");
	}

	// const [isOnline, setIsOnline] = useState<boolean>(false);
	// const [isOffline, setIsOffline] = useState<boolean>(false);

	const [isOnline, setIsOnline] = useState<boolean>(false);
	const [isOffline, setIsOffline] = useState<boolean>(false);

	// Effect to ensure only one state is true at a time
	useEffect(() => {
		if (isOnline) {
			setIsOffline(false);
		} else if (isOffline) {
			setIsOnline(false);
		}

		const timer = setTimeout(() => {
			setIsOnline(false);
			setIsOffline(false);
		}, 5000);

		return () => clearTimeout(timer); // Cleanup the timer on component unmount
	}, [isOnline, isOffline]); // Run the effect when either state changes

	// Example functions to set the states
	const handleOnline = () => {
		setIsOnline(true);
	};

	const handleOffline = () => {
		setIsOffline(true);
	};


	return (
		<>
			<HeaderSix links="elements" title="Offline Detection" />

			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card offline-online-card">
						<div className="card-body text-center">
							<h6 className="border-bottom pb-2">Offline/Online Detection</h6>
							<p>
								Press the button to view offline/online notifications. These
								buttons are used for demo purposes.
							</p>

							<a className="mx-1 offline-detection btn btn-danger" style={{ cursor: 'pointer' }}
								onClick={handleOffline}
							>
								Offline Detect
							</a>
							<a className="mx-1 online-detection btn btn-success" style={{ cursor: 'pointer' }}
								onClick={handleOnline}
							>
								Online Detect
							</a>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="card mt-4 offline-online-card">
						<div className="card-body">
							<h6>How it works?</h6>
							<p className="mb-2">
								Offline / online detection
								<strong className="mx-1 text-primary">
									works automatically.
								</strong>
								No coding required, it works by default on each page.
							</p>
							<p className="mb-0">
								Disconnect your WiFi or mobile internet connection, you will be
								notified. When your connection returns, you will be notified
								again.
							</p>
						</div>
					</div>
				</div>


				<div className="internet-connection-status" id="internetStatus" style={{ display: isOnline ? 'block' : 'none', backgroundColor: "rgb(0, 184, 148)" }}>Your internet connection is back.</div>
				<div className="internet-connection-status" id="internetStatus" style={{ display: isOffline ? 'block' : 'none', backgroundColor: "rgb(234, 76, 98)" }}>Oops! No internet connection.</div>



			</div>

			<FooterTwo />
		</>
	);
};

export default OnlineOfflineDetection;
