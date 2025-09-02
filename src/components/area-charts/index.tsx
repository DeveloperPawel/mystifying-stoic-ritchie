import React from "react";
import AreaChartsArea from "./AreaChartsArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const AreaCharts = () => {
	return (
		<>
			<HeaderSix links="pages" title="Area Charts" />
			<AreaChartsArea />
			<FooterTwo />
		</>
	);
};

export default AreaCharts;
