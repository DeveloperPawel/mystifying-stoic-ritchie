import React from "react";
import AlertsArea from "./AlertsArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Alerts = () => {
	return (
		<>
			<HeaderSix links="pages" title="Alerts" />
			<AlertsArea />
			<FooterTwo />
		</>
	);
};

export default Alerts;
