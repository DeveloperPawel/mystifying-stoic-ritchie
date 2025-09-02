"use client";

import AudioCallingPopup from "@/components/common/AudioCallingPopup";
import VideoCallingPopup from "@/components/common/VideoCallingPopup";
import Link from "next/link";
import React, { useState } from "react";

const HeaderFive = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [isAudioOpen, setIsAudioOpen] = useState(false);

	return (
		<>
			<div className="header-area" id="headerArea">
				<div className="container">
					{/* <!-- Header Content --> */}
					<div className="header-content position-relative d-flex align-items-center justify-content-between">
						{/* <!-- Chat User Info --> */}
						<div className="chat-user--info d-flex align-items-center">
							{/* <!-- Back Button --> */}
							<div className="back-button">
								<Link href="/chat-users">
									<i className="bi bi-arrow-left-short"></i>
								</Link>
							</div>

							{/* <!-- User Thumbnail & Name --> */}
							<div className="user-thumbnail-name">
								<img src="/assets/img/bg-img/2.jpg" alt="" />
								<div className="info ms-1">
									<p>Affan</p>
									<span className="active-status">Active Now</span>
									{/* <!-- span.offline-status.text-muted Last actived 27m ago --> */}
								</div>
							</div>
						</div>

						{/* <!-- Call & Video Wrapper --> */}
						<div className="call-video-wrapper d-flex align-items-center">
							{/* <!-- Video Icon --> */}
							<div className="video-icon me-3">
								<a
									className="text-secondary"
									onClick={() => setIsVideoOpen(!isVideoOpen)}
									id="videoCallingButton"
									href="#"
								>
									<i className="bi bi-camera-video"></i>
								</a>
							</div>

							{/* <!-- Call Icon --> */}
							<div className="call-icon me-3">
								<a
									className="text-secondary"
									onClick={() => setIsAudioOpen(!isAudioOpen)}
									id="callingButton"
									href="#"
								>
									<i className="bi bi-telephone"></i>
								</a>
							</div>

							{/* <!-- Info Icon --> */}
							<div className="info-icon">
								<a className="text-secondary" href="#">
									<i className="bi bi-info-circle"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<VideoCallingPopup
				isVideoOpen={isVideoOpen}
				setIsVideoOpen={setIsVideoOpen}
			/>
			<AudioCallingPopup
				isAudioOpen={isAudioOpen}
				setIsAudioOpen={setIsAudioOpen}
			/>
		</>
	);
};

export default HeaderFive;
