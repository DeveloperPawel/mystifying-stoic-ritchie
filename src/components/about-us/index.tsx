
"use client"
import React from "react";
// import AboutArea from "./AboutArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";

import dynamic from 'next/dynamic';
const AboutArea = dynamic(() => import('./AboutArea'), { ssr: false });



const Aboutus = () => {
	return (
		<>
			<HeaderFour links="pages" title="About Us" />
			<AboutArea />
			<FooterTwo />
		</>
	);
};

export default Aboutus;
