import React from "react";
import ScrollspyArea from "./ScrollspyArea";
import HeaderSix from "@/layouts/headers/HeaderSix";
import FooterTwo from "@/layouts/footers/FooterTwo";

const Scrollspy = () => {
	return (
		<>
			<HeaderSix links="elements" title="Scrollspy" />
			<ScrollspyArea />
			<FooterTwo />
		</>
	);
};

export default Scrollspy;
