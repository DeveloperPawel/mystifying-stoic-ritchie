import React from "react";
import FormInputArea from "./FormInputArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const FormInput = () => {
	return (
		<>
			<HeaderSix links="elements" title="Form Input" />
			<FormInputArea />
			<FooterTwo />
		</>
	);
};

export default FormInput;
