import Link from "next/link";
import React from "react";

const HeaderThree = ({ links }: any) => {
	return (
		<>
			<div className="login-back-button">
				<Link href={`/${links}`}>
					<i className="bi bi-arrow-left-short"></i>
				</Link>
			</div>
		</>
	);
};

export default HeaderThree;
