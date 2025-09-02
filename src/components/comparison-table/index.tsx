import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import ComparisonTableArea from "./ComparisonTableArea";

const ComparisonTable = () => {
	return (
		<>
			<HeaderSix links="pages" title="Comparison Table" />
			<ComparisonTableArea />
			<FooterTwo />
		</>
	);
};

export default ComparisonTable;
