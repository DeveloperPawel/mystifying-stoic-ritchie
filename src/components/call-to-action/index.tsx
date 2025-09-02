import React from "react";
import CallToActionArea from "./CallToActionArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const CallToAction = () => {
	return (
		<>
			<HeaderSix links="elements" title="Call To Action" />
			<CallToActionArea />
			<FooterTwo />
		</>
	);
};

export default CallToAction;
