import React from "react";
import TextArea from "./TextArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Text = () => {
	return (
		<>
			<HeaderSix links="elements" title="Text" />
			<TextArea />
			<FooterTwo />
		</>
	);
};

export default Text;
