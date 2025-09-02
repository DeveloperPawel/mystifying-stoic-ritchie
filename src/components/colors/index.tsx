import React from "react";
import ColorsArea from "./ColorsArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Colors = () => {
	return (
		<>
			<HeaderSix links="elements" title="Colors" />
			<ColorsArea />
			<FooterTwo />
		</>
	);
};

export default Colors;
