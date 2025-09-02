import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import TextTruncationArea from "./TextTruncationArea";

const TextTruncation = () => {
	return (
		<>
			<HeaderSix links="elements" title="Text Truncation" />
			<TextTruncationArea />
			<FooterTwo />
		</>
	);
};

export default TextTruncation;
