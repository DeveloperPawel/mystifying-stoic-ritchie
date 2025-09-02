import React from "react";
import PriceTableArea from "./PriceTableArea";
import HeaderSix from "@/layouts/headers/HeaderSix";
import FooterTwo from "@/layouts/footers/FooterTwo";

const PriceTable = () => {
	return (
		<>
			<HeaderSix links="pages" title="Price Table" />
			<PriceTableArea />
			<FooterTwo />
		</>
	);
};

export default PriceTable;
