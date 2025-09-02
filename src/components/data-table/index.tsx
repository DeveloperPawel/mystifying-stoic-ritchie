import React from "react";
import DataTableArea from "./DataTableArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const DataTable = () => {
	return (
		<>
			<HeaderSix links="pages" title="Data Table" />
			<DataTableArea />
			<FooterTwo />
		</>
	);
};

export default DataTable;
