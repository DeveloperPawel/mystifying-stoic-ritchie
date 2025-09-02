import React from "react";
import TabArea from "./TabArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Tab = () => {
	return (
		<>
			<HeaderSix links="elements" title="Tabs" />
			<TabArea />
			<FooterTwo />
		</>
	);
};

export default Tab;
