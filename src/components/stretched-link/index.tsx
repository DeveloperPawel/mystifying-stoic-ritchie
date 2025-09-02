import React from "react";
import StretchedLinkArea from "./StretchedLinkArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const StretchedLink = () => {
	return (
		<>
			<HeaderSix links="elements" title="Stretched Link" />
			<StretchedLinkArea />
			<FooterTwo />
		</>
	);
};

export default StretchedLink;
