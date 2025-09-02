import React from "react";
import FormFileUploadArea from "./FormFileUploadArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const FormFileUpload = () => {
	return (
		<>
			<HeaderSix links="elements" title="File Upload" />
			<FormFileUploadArea />
			<FooterTwo />
		</>
	);
};

export default FormFileUpload;
