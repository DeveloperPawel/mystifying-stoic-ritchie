import React from "react";
import ColumnChartsArea from "./ColumnChartsArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const ColumnCharts = () => {
	return (
		<>
			<HeaderSix links="elements" title="Column Charts" />
			<ColumnChartsArea />
			<FooterTwo />
		</>
	);
};

export default ColumnCharts;
