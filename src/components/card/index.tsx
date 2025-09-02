import React from "react";
import CardArea from "./CardArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Card = () => {
	return (
		<>
			<HeaderSix links="elements" title="Card" />
			<CardArea />
			<FooterTwo />
		</>
	);
};

export default Card;
