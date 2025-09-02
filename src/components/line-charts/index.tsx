import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import LineChartsArea from "./LineChartsArea";

const LineCharts = () => {
	return (
		<>
			<HeaderSix links="elements" title="Line Charts" />
			<LineChartsArea />
			<FooterTwo />
		</>
	);
};

export default LineCharts;
