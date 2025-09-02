import React from "react";
import ListGroupArea from "./ListGroupArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const ListGroup = () => {
	return (
		<>
			<HeaderSix links="elements" title="List Group" />
			<ListGroupArea />
			<FooterTwo />
		</>
	);
};

export default ListGroup;
