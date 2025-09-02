import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import ToastsArea from "./ToastsArea";

const Toasts = () => {
	return (
		<>
			<HeaderSix links="pages" title="Toasts" />
			<ToastsArea />
			<FooterTwo />
		</>
	);
};

export default Toasts;
