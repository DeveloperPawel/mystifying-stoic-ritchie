"use client";

import React, { useState } from "react";

const ChatArea = () => {
	const [fileOpen, setFileOpen] = useState(false);

	return (
		<>
			<div className="page-content-wrapper py-3" id="chat-wrapper">
				<div className="container">
					<div className="chat-content-wrap">
						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username.--> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</div>

							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<p>Hello, Are you there?</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:39 AM</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item outgoing">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/user3.png" alt="" />
							</div>
							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<p>Yes, How can I help you?</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:46 AM</div>
									<div className="sent-status seen">
										<i className="bi bi-check"></i>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</div>

							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<p>I want to buy your Affan template.</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="message-content">
									<div className="single-message">
										<p>Affan - PWA Mobile HTML Template</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:46 AM</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item outgoing">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/user3.png" alt="" />
							</div>
							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<div className="gallery-img">
											<a href="img/bg-img/30.jpg">
												<img src="/assets/img/bg-img/30.jpg" alt="" />
											</a>
										</div>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:39 AM</div>
									<div className="sent-status seen">
										<i className="bi bi-check"></i>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</div>
							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<p>Would you please provide a purchase link?</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:39 AM</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item outgoing">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/user3.png" alt="" />
							</div>
							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<p>
											Sure, Here are the purchase link. Please click the
											purchase now button, then fill up your all payment info.
										</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="message-content">
									<div className="single-message">
										<a
											className="btn btn-success rounded-pill"
											href="https://themeforest.net/item/affan-pwa-mobile-html-template/29715548"
											target="_blank"
										>
											Buy Now - $24
										</a>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:46 AM</div>
									<div className="sent-status seen">
										<i className="bi bi-check"></i>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</div>
							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<p>Thanks!</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:39 AM</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</div>

							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<div className="download-file-wrap d-flex align-items-center">
											<div className="download-avatar bg-light">
												<div className="dl-icon">
													<i className="bi bi-file-earmark-zip-fill"></i>
												</div>
												<a className="download-btn" href="#">
													<i className="bi bi-download"></i>
												</a>
											</div>
											<div className="download-file-info">
												<div className="file-name text-truncate">
													affan-pwa-mobile-html-template.zip
												</div>
												<div className="file-size">11.69 MB</div>
											</div>
										</div>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:39 AM</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item outgoing">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/user3.png" alt="" />
							</div>
							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<p>You are welcome &</p>
									</div>

									{/* <!-- Options --> */}
									<div className="dropstart">
										<button
											className="btn btn-options dropdown-toggle"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi bi-three-dots-vertical"></i>
										</button>
										<ul className="dropdown-menu">
											<li>
												<a href="#">
													<i className="bi bi-reply"></i>Reply
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-forward"></i>Forward
												</a>
											</li>
											<li>
												<a href="#">
													<i className="bi bi-trash"></i>Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Time and Status --> */}
								<div className="message-time-status">
									<div className="sent-time">11:46 AM</div>
									<div className="sent-status delivered">
										<i className="bi bi-check"></i>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Single Chat Item --> */}
						<div className="single-chat-item">
							{/* <!-- User Avatar --> */}
							<div className="user-avatar mt-1">
								{/* <!-- If the user avatar isnt available, will visible the first letter of the username. --> */}
								<span className="name-first-letter">A</span>
								<img src="/assets/img/bg-img/2.jpg" alt="" />
							</div>

							{/* <!-- User Message --> */}
							<div className="user-message">
								<div className="message-content">
									<div className="single-message">
										<div className="typing">
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="chat-footer">
				<div className="container h-100">
					<div className="chat-footer-content h-100 d-flex align-items-center">
						<form onSubmit={(e) => e.preventDefault()}>
							{/* <!-- Message --> */}
							<input
								className="form-control"
								type="text"
								placeholder="Type here..."
							/>

							{/* <!-- Emoji --> */}
							<button className="btn btn-emoji mx-2" type="button">
								<i className="bi bi-emoji-smile"></i>
							</button>

							{/* <!-- Add File --> */}
							<div className="dropup me-2">
								<button
									onClick={() => setFileOpen(!fileOpen)}
									className={`btn btn-add-file dropdown-toggle ${
										fileOpen ? "show" : ""
									}`}
									type="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<i className="bi bi-plus-circle"></i>
								</button>
								<ul
									className={`dropdown-menu ${fileOpen ? "show" : ""}`}
									style={{
										position: "absolute",
										inset: "auto auto 0px 0px",
										margin: "0px",
										transform: "translate(0px, -34px)",
									}}
								>
									<li>
										<a href="#">
											<i className="bi bi-files"></i>Files
										</a>
									</li>
									<li>
										<a href="#">
											<i className="bi bi-mic"></i>Audio
										</a>
									</li>
									<li>
										<a href="#">
											<i className="bi bi-file-earmark"></i>Document
										</a>
									</li>
									<li>
										<a href="#">
											<i className="bi bi-file-bar-graph"></i>Pull
										</a>
									</li>
									<li>
										<a href="#">
											<i className="bi bi-geo-alt"></i>Location
										</a>
									</li>
								</ul>
							</div>

							{/* <!-- Send --> */}
							<button className="btn btn-submit" type="submit">
								<i className="bi bi-cursor"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatArea;
