import React from "react";
import UserRatingsArea from "./UserRatingsArea";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";

const UserRatings = () => {
	return (
		<>
			<HeaderSix links="elements" title="User Ratings" />
			<UserRatingsArea />
			<FooterTwo />
		</>
	);
};

export default UserRatings;
