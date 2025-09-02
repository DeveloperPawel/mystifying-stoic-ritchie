import React from "react";
import CountdownArea from "./CountdownArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Countdown = () => {
	return (
		<>
			<HeaderSix links="pages" title="Count down" />
			<CountdownArea />
			<FooterTwo />
		</>
	);
};

export default Countdown;
