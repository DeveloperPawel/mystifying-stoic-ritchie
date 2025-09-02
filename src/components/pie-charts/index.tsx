import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import PieChartsArea from "./PieChartsArea";

const PieCharts = () => {
	return (
		<>
			<HeaderSix links="elements" title="Pie/Donut Chart" />
			<PieChartsArea />
			<FooterTwo />
		</>
	);
};

export default PieCharts;
