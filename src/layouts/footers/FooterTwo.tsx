"use client";

import Link from "next/link";
import React from "react";

const nav_data = [
	{ id: 1, icon: "house", title: "Home", link: "home" },
	{ id: 2, icon: "collection", title: "Pages", link: "pages" },
	{ id: 3, icon: "folder2-open", title: "Elements", link: "elements" },
	{ id: 4, icon: "chat-dots", title: "Chat", link: "chat-users" },
	{ id: 5, icon: "gear", title: "Settings", link: "settings" },
];

const FooterTwo = () => {
	return (
		<>
			<div className="footer-nav-area" id="footerNav">
				<div className="container px-0">
					<div className="footer-nav position-relative">
						<ul className="h-100 d-flex align-items-center justify-content-between ps-0">
							{nav_data.map((item, i) => (
								<li key={i}>
									<Link href={`/${item.link}`}>
										<i className={`bi bi-${item.icon}`}></i>
										<span>{item.title}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterTwo;
