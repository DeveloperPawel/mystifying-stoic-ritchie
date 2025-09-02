import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import TeamArea from "./TeamArea";

const Team = () => {
	return (
		<>
			<HeaderFour links="pages" title="Team" />
			<TeamArea />
			<FooterTwo />
		</>
	);
};

export default Team;
