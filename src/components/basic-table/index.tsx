import React from "react";
import BasicTableArea from "./BasicTableArea";
import HeaderSix from "@/layouts/headers/HeaderSix";
import FooterTwo from "@/layouts/footers/FooterTwo";

const BasicTable = () => {
	return (
		<>
			<HeaderSix links="pages" title="Basic Table" />
			<BasicTableArea />
			<FooterTwo />
		</>
	);
};

export default BasicTable;
