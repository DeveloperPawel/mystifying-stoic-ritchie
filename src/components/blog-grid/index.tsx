import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import BlogGridArea from "./BlogGridArea";

const BlogGrid = () => {
	return (
		<>
			<HeaderSix links="pages" title="Blog Grid" />
			<BlogGridArea />
			<FooterTwo />
		</>
	);
};

export default BlogGrid;
