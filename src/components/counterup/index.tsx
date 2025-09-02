import React from "react";
import CounterupArea from "./CounterupArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Counterup = () => {
	return (
		<>
			<HeaderSix links="pages" title="Count Up" />
			<CounterupArea />
			<FooterTwo />
		</>
	);
};

export default Counterup;
