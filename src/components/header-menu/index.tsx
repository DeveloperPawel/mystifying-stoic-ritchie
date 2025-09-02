import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import HeaderMenuArea from "./HeaderMenuArea";

const HeaderMenu = () => {
	return (
		<>
			<HeaderSix links="elements" title="Header Menu" />
			<HeaderMenuArea />
			<FooterTwo />
		</>
	);
};

export default HeaderMenu;
