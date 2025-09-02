import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import ShopListArea from "./ShopListArea";

const ShopList = () => {
	return (
		<>
			<HeaderFour links="pages" title="Shop List" />
			<ShopListArea />
			<FooterTwo />
		</>
	);
};

export default ShopList;
