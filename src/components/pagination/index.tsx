import React from "react";
import PaginationArea from "./PaginationArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Pagination = () => {
	return (
		<>
			<HeaderSix links="elements" title="Pagination" />
			<PaginationArea />
			<FooterTwo />
		</>
	);
};

export default Pagination;
