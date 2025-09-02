import Link from "next/link";
import React from "react";

interface DataType {
	id: number;
	cls: string;
	icon: string;
	title: string;
	sm_info: string;
}

const natificataion_data: DataType[] = [
	{
		id: 1,
		cls: "unread",
		icon: "chat-dots",
		title: "New comment on your template",
		sm_info: `New comment on Affan - PWA Mobile HTML5 Template from designing world`,
	},
	{
		id: 2,
		cls: "unread",
		icon: "star",
		title: "A new rating has been received",
		sm_info: `A new rating has been received for Saasbox - Bootstrap 5 Multipurpose HTML Template for Saas & Agency`,
	},
	{
		id: 3,
		cls: "unread",
		icon: "check2-circle",
		title: "You sold an item!",
		sm_info: `Congratulations! You sold a Single License for Affan.`,
	},
	{
		id: 4,
		cls: "",
		icon: "chat-dots",
		title: "New comment on your template",
		sm_info: `New comment on Affan - PWA Mobile HTML5 Template from designing world`,
	},
	{
		id: 5,
		cls: "",
		icon: "star",
		title: "A new rating has been received",
		sm_info: `A new rating has been received for Saasbox - Bootstrap 5 Multipurpose HTML Template for Saas & Agency`,
	},
	{
		id: 6,
		cls: "",
		icon: "check2-circle",
		title: "You sold an item!",
		sm_info: `Congratulations! You sold a Single License for Affan.`,
	},
	{
		id: 7,
		cls: "",
		icon: "chat-dots",
		title: "New comment on your template",
		sm_info: `New comment on Affan - PWA Mobile HTML5 Template from designing world`,
	},
	{
		id: 8,
		cls: "",
		icon: "star",
		title: "A new rating has been received",
		sm_info: `A new rating has been received for Saasbox - Bootstrap 5 Multipurpose HTML Template for Saas & Agency`,
	},
	{
		id: 9,
		cls: "",
		icon: "check2-circle",
		title: "You sold an item!",
		sm_info: `Congratulations! You sold a Single License for Apland.`,
	},
];

const NotificationsArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				{/* <!-- Notifications Area --> */}
				<div className="notification-area">
					<div className="container">
						{natificataion_data.map((item, i) => (
							<Link key={i} href="/notification-details">
								<div
									className={`alert custom-alert-3 alert-primary ${item.cls}`}
									role="alert"
								>
									<i className={`bi bi-${item.icon} mt-0`}></i>
									<div className="alert-text w-75">
										<h6 className="text-truncate">{item.title}</h6>
										<span className="text-truncate">{item.sm_info}</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default NotificationsArea;
