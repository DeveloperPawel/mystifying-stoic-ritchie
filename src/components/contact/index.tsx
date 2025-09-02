import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<HeaderSix links="pages" title="Contact" />
			<ContactArea />
			<FooterTwo />
		</>
	);
};

export default Contact;
