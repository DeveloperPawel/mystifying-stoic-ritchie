import React from "react";
import BreadcrumbArea from "./BreadcrumbArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Breadcrumb = () => {
	return (
		<>
			<HeaderSix links="elements" title="Breadcrumb" />
			<BreadcrumbArea />
			<FooterTwo />
		</>
	);
};

export default Breadcrumb;
