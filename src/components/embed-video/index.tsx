import React from "react";
import EmbedVideoArea from "./EmbedVideoArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const EmbedVideo = () => {
	return (
		<>
			<HeaderSix links="elements" title="Embed Video" />
			<EmbedVideoArea />
			<FooterTwo />
		</>
	);
};

export default EmbedVideo;
