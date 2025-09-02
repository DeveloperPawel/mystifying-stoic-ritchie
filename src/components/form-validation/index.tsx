import React from "react";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import FormValidationArea from "./FormValidationArea";

const FormValidation = () => {
	return (
		<>
			<HeaderSix links="elements" title="Switches" />
			<FormValidationArea />
			<FooterTwo />
		</>
	);
};

export default FormValidation;
