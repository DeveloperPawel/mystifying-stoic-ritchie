import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import BootstrapCarouselArea from "./BootstrapCarouselArea";

const BootstrapCarousel = () => {
	return (
		<>
			<HeaderSix links="elements" title="Bootstrap Carousel" />
			<BootstrapCarouselArea />
			<FooterTwo />
		</>
	);
};

export default BootstrapCarousel;
