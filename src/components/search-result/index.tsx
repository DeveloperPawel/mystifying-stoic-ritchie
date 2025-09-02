import React from "react";
import SearchResultArea from "./SearchResultArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";

const SearchResult = () => {
	return (
		<>
			<HeaderFour links="pages" title="Search Result" />
			<SearchResultArea />
			<FooterTwo />
		</>
	);
};

export default SearchResult;
