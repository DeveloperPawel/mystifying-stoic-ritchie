import React from "react";
import FooterMenuArea from "./FooterMenuArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const FooterMenu = () => {
	return (
		<>
			<HeaderSix links="elements" title="Footer Menu" />
			<FooterMenuArea />
			<FooterTwo />
		</>
	);
};

export default FooterMenu;
