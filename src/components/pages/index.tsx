import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import Link from "next/link";
import React from "react";

const authentication_data = [
	{ icon: "shield-lock", title: "Login", link: "login" },
	{ icon: "shield-lock", title: "Social", link: "social-login" },
	{ icon: "shield-lock", title: "Register", link: "register" },
	{ icon: "phone-flip", title: "OTP", link: "otp" },
	{ icon: "phone-flip", title: "OTP Confirm", link: "otp-confirm" },
	{ icon: "key", title: "Forget Password", link: "forget-password" },
	{
		icon: "key",
		title: "Forget Password Success",
		link: "forget-password-success",
	},
	{ icon: "key", title: "Change Password", link: "change-password" },
	{
		icon: "key",
		title: "Forget Password Failed",
		link: "forget-password-failed",
	},
];

const chats_data = [
	{ icon: "people", title: "Chat Users", link: "chat-users" },
	{ icon: "chat-dots", title: "Chats", link: "chat" },
	{ icon: "camera-video", title: "Video Call", link: "video-call" },
];

const eCommerce_data = [
	{ icon: "basket", title: "Shop Grid", link: "shop-grid" },
	{ icon: "basket", title: "Shop List", link: "shop-list" },
	{ icon: "basket", title: "Shop Details", link: "shop-details" },
	{ icon: "basket", title: "Cart", link: "cart" },
	{ icon: "basket", title: "Checkout", link: "checkout" },
	{ icon: "basket", title: "Order Confirmed", link: "payment-confirm" },
];

const miscellaneous_data = [
	{ icon: "card-text", title: "About", link: "about-us" },
	{ icon: "people", title: "Team", link: "team" },
	{ icon: "grid-3x3-gap", title: "Service", link: "our-service" },
	{ icon: "hash", title: "Privacy Policy", link: "privacy-policy" },
	{ icon: "receipt", title: "Invoice", link: "invoice" },
	{ icon: "envelope", title: "Contact", link: "contact" },
	{ icon: "question-octagon", title: "FAQ", link: "faq" },
	{ icon: "globe2", title: "Language", link: "language" },
	{ icon: "exclamation-circle", title: "Notifications", link: "notifications" },
	{
		icon: "exclamation-circle",
		title: "Notification Details",
		link: "notification-details",
	},
	{ icon: "search", title: "Search Result", link: "search-result" },
	{ icon: "wifi-off", title: "Fallback/Offline Page", link: "fallback" },
	{ icon: "clock", title: "Coming Soon", link: "coming-soon" },
	{ icon: "person", title: "User Profile", link: "user-profile" },
	{ icon: "bug", title: "404 - Not Found", link: "404" },
];

const blog_data = [
	{ icon: "newspaper", title: "Blog Grid", link: "blog-grid" },
	{ icon: "newspaper", title: "Blog List", link: "blog-list" },
	{ icon: "newspaper", title: "Blog Details", link: "blog-details" },
];

const Pages = () => {
	return (
		<>
			<HeaderTwo />
			<div className="page-content-wrapper py-3">
				<div className="container">
					<div className="card">
						<div className="card-body p-3">
							<p className="ps-2">Authentication</p>

							{authentication_data.map((item, i) => (
								<Link key={i} className="affan-page-item" href={`/${item.link}`}>
									<div className="icon-wrapper">
										<i className={`bi bi-${item.icon}`}></i>
									</div>
									{item.title}
									<i className="bi bi-caret-right-fill fz-12"></i>
								</Link>
							))}

							<p className="mt-3 ps-2">Chats</p>
							{chats_data.map((item, i) => (
								<Link key={i} className="affan-page-item" href={`/${item.link}`}>
									<div className="icon-wrapper">
										<i className={`bi bi-${item.icon}`}></i>
									</div>
									{item.title}
									<i className="bi bi-caret-right-fill fz-12"></i>
								</Link>
							))}

							<p className="mt-3 ps-2">eCommerce</p>
							{eCommerce_data.map((item, i) => (
								<Link key={i} className="affan-page-item" href={`/${item.link}`}>
									<div className="icon-wrapper">
										<i className={`bi bi-${item.icon}`}></i>
									</div>
									{item.title}
									<i className="bi bi-caret-right-fill fz-12"></i>
								</Link>
							))}

							<p className="mt-3 ps-2">Miscellaneous</p>
							{miscellaneous_data.map((item, i) => (
								<Link key={i} className="affan-page-item" href={`/${item.link}`}>
									<div className="icon-wrapper">
										<i className={`bi bi-${item.icon}`}></i>
									</div>
									{item.title}
									<i className="bi bi-caret-right-fill fz-12"></i>
								</Link>
							))}

							<p className="mt-3 ps-2">Blog</p>
							{blog_data.map((item, i) => (
								<Link key={i} className="affan-page-item" href={`/${item.link}`}>
									<div className="icon-wrapper">
										<i className={`bi bi-${item.icon}`}></i>
									</div>
									{item.title}
									<i className="bi bi-caret-right-fill fz-12"></i>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<FooterTwo />
		</>
	);
};

export default Pages;
