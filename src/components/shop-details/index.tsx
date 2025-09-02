import React from "react";
import HeaderFour from "@/layouts/headers/HeaderFour";
import ShopDetailsArea from "./ShopDetailsArea";
import FooterTwo from "@/layouts/footers/FooterTwo";

const ShopDetails = () => {
	return (
		<>
			<HeaderFour links="pages" title="Product Details" />
			<ShopDetailsArea />
			<FooterTwo />
		</>
	);
};

export default ShopDetails;
