import React from "react";
import ShopGridArea from "./ShopGridArea";
import HeaderFour from "@/layouts/headers/HeaderFour";
import FooterTwo from "@/layouts/footers/FooterTwo";

const ShopGrid = () => {
	return (
		<>
			<HeaderFour links="pages" title="Shop Grid" />
			<ShopGridArea />
			<FooterTwo />
		</>
	);
};

export default ShopGrid;
