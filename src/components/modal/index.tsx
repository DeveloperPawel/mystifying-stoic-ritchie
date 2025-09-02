import React from "react";
import ModalArea from "./ModalArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import OfferModal from "../modalv2/OfferModal";

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
