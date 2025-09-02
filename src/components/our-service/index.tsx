import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";
import ServiceArea from "./ServiceArea";

const OurService = () => {
	return (
		<>
			<HeaderFour links="pages" title="Service" />
			<ServiceArea />
			<FooterTwo />
		</>
	);
};

export default OurService;
