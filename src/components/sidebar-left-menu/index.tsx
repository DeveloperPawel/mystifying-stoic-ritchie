
"use client"
import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderEight from "@/layouts/headers/HeaderEight";
import SidebarLeftMenuArea from "./SidebarLeftMenuArea";


const SidebarLeftMenu = () => {
	if(typeof window !== 'undefined'){
		require("bootstrap/dist/js/bootstrap")
	}
	
	return (
		<>
			<HeaderEight links="elements" title="Left Sidebar" />
			<SidebarLeftMenuArea
				home="Home"
				elements="Elements"
				title="Left Sidebar"
				button_text="Click the button for left sidebar"
			/>
			<FooterTwo />
		</>
	);
};

export default SidebarLeftMenu;
