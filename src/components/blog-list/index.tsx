import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import BlogListArea from "./BlogListArea";

const BlogList = () => {
	return (
		<>
			<HeaderSix links="pages" title="Blog Grid" />
			<BlogListArea />
			<FooterTwo />
		</>
	);
};

export default BlogList;
