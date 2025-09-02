import React from "react";
import TimelineArea from "./TimelineArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Timeline = () => {
	return (
		<>
			<HeaderSix links="elements" title="Timeline" />
			<TimelineArea />
			<FooterTwo />
		</>
	);
};

export default Timeline;
