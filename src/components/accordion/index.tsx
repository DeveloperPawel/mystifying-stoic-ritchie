import React from "react";
import AccordionArea from "./AccordionArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Accordion = () => {
	return (
		<>
			<HeaderSix links="elements" title="Accordion" />
			<AccordionArea />
			<FooterTwo />
		</>
	);
};

export default Accordion;
