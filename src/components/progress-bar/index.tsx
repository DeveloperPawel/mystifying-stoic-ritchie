import React from "react";
import ProgressBarArea from "./ProgressBarArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const ProgressBar = () => {
	return (
		<>
			<HeaderSix links="elements" title="Progress Bar" />
			<ProgressBarArea />
			<FooterTwo />
		</>
	);
};

export default ProgressBar;
