import React from "react";
import NotificationsArea from "./NotificationsArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Notifications = () => {
	return (
		<>
			<HeaderSix links="pages" title="Notifications" />
			<NotificationsArea />
			<FooterTwo />
		</>
	);
};

export default Notifications;
