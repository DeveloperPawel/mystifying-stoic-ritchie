import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React from "react";
import BlogDetailsArea from "./BlogDetailsArea";

const BlogDetails = () => {
	return (
		<>
			<HeaderSix links="pages" title="Blog Details" />
			<BlogDetailsArea />
			<FooterTwo />
		</>
	);
};

export default BlogDetails;
