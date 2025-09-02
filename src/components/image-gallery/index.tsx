import React from "react";
// import ImageGalleryArea from "./ImageGalleryArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";


import dynamic from 'next/dynamic';
const ImageGalleryArea = dynamic(() => import('./ImageGalleryArea'), { ssr: false });



const ImageGallery = () => {
	return (
		<>
			<HeaderSix links="elements" title="Image Gallery" />
			<ImageGalleryArea />
			<FooterTwo />
		</>
	);
};

export default ImageGallery;
