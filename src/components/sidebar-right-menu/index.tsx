import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderEight from "@/layouts/headers/HeaderEight";
import SidebarLeftMenuArea from "../sidebar-left-menu/SidebarLeftMenuArea";

const SidebarRightMenu = () => {
	return (
		<>
			<HeaderEight links="elements" title="Left Sidebar" />
			<SidebarLeftMenuArea
				home="Home"
				elements="Elements"
				title="Right Sidebar"
				button_text="Click the button for right sidebar"
			/>
			<FooterTwo />
		</>
	);
};

export default SidebarRightMenu;
