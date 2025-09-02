import React from "react";
import ModalArea from "./ModalArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const Modal = () => {
	return (
		<>
			<HeaderSix links="elements" title="Modal" />
			<ModalArea />
			<FooterTwo />
		</>
	);
};

export default Modal;
