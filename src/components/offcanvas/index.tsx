import React from "react";
import OffcanvasArea from "./OffcanvasArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Offcanvas = () => {
	return (
		<>
			<HeaderSix links="elements" title="Offcanvas" />
			<OffcanvasArea />
			<FooterTwo />
		</>
	);
};

export default Offcanvas;
