"use client";

import Link from "next/link";
import React, { useState } from "react";
import elements_data from "@/data/elements_data";

const ElementsArea = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event: any) => {
		setSearchTerm(event.target.value);
	};

	const filteredElements = elements_data
		.map((element) => ({
			...element,
			items: element.items.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
			),
		}))
		.filter((element) => element.items.length > 0);

	return (
		<>
			<div className="page-content-wrapper py-3" id="elementsSearchList">
				<div className="container">
					<div className="card">
						<div className="card-body p-3">
							<div className="form-group mb-0">
								<input
									type="text"
									id="elementsSearchInput"
									placeholder="Search element..."
									className="form-control"
									value={searchTerm}
									onChange={handleSearch}
								/>
							</div>
						</div>
					</div>

					{filteredElements.map((item, index) => (
						<React.Fragment key={index}>
							<div className="affan-element-item">
								<div className="element-heading-wrapper">
									<i className={item.icon}></i>
									<div className="heading-text">
										<h6 className="mb-1">{item.category}</h6>
										<span>{item.description}</span>
									</div>
								</div>
							</div>

							{item.items.map((link, i) => (
								<Link key={i} className="affan-element-item" href={link.href}>
									{link.name}
									<i className="bi bi-caret-right-fill fz-12"></i>
								</Link>
							))}
						</React.Fragment>
					))}
				</div>
			</div>
		</>
	);
};

export default ElementsArea;
