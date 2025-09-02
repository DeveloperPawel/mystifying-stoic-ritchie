import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import InvoiceArea from "./InvoiceArea";

const Invoice = () => {
	return (
		<>
			<HeaderSix links="pages" title="Invoice" />
			<InvoiceArea />
			<FooterTwo />
		</>
	);
};

export default Invoice;
