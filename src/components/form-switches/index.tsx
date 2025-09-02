import React from "react";
import FormSwitchesArea from "./FormSwitchesArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const FormSwitches = () => {
	return (
		<>
			<HeaderSix links="elements" title="Switches" />
			<FormSwitchesArea />
			<FooterTwo />
		</>
	);
};

export default FormSwitches;
