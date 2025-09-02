import React from "react";
import TooltipsArea from "./TooltipsArea";
import HeaderSix from "@/layouts/headers/HeaderSix";
import FooterTwo from "@/layouts/footers/FooterTwo";

const Tooltips = () => {
	return (
		<>
			<HeaderSix links="elements" title="Tooltip" />
			<TooltipsArea />
			<FooterTwo />
		</>
	);
};

export default Tooltips;
