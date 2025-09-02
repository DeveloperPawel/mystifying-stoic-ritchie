"use client";

import React, { useState } from "react";

interface DataRow {
	name: string;
	position: string;
	salary: string;
}

const DataTableArea: React.FC = () => {
	const [data, setData] = useState<DataRow[]>([
		{ name: "Tiger Nixon", position: "System Architect", salary: "$320,800" },
		{ name: "Garrett Winters", position: "Accountant", salary: "$170,750" },
		{
			name: "Ashton Cox",
			position: "Junior Technical Author",
			salary: "$86,000",
		},
		{
			name: "Cedric Kelly",
			position: "Senior Javascript Developer",
			salary: "$433,060",
		},
		{ name: "Airi Satou", position: "Accountant", salary: "$162,700" },
		{
			name: "Brielle Williamson",
			position: "Integration Specialist",
			salary: "$372,000",
		},
		{
			name: "Herrod Chandler",
			position: "Sales Assistant",
			salary: "$137,500",
		},
		{
			name: "Rhona Davidson",
			position: "Integration Specialist",
			salary: "$327,900",
		},
		{
			name: "Colleen Hurst",
			position: "Javascript Developer",
			salary: "$205,500",
		},
		{ name: "Sonya Frost", position: "Software Engineer", salary: "$103,600" },
		{
			name: "Aaonya Frost 2",
			position: "Software Engineer",
			salary: "$34,600",
		},
	]);
	const [searchQuery, setSearchQuery] = useState("");

	const sortData = (key: keyof DataRow) => {
		const sortedData = [...data].sort((a, b) => {
			if (key === "salary") {
				return (
					parseFloat(a[key].replace(/[\$,]/g, "")) -
					parseFloat(b[key].replace(/[\$,]/g, ""))
				);
			}
			return a[key].localeCompare(b[key]);
		});
		setData(sortedData);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const query = event.target.value.toLowerCase();
		setSearchQuery(query);
	};

	const filteredData = data.filter(
		(row) =>
			row.name.toLowerCase().includes(searchQuery) ||
			row.position.toLowerCase().includes(searchQuery) ||
			row.salary.toLowerCase().includes(searchQuery)
	);

	return (
		<>
			<div className="page-content-wrapper py-3 rk_table_2 rk_table">
				<div className="container">
					<div className="card">
						<div className="card-body">
							<div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
								<div className="dataTable-top d-flex justify-content-between">
									<div className="dataTable-dropdown">
										<label>
											<select className="dataTable-selector">
												<option value="10">10</option>
												<option value="20">20</option>
												<option value="30">30</option>
												<option value="40">40</option>
												<option value="50">50</option>
											</select>
										</label>
									</div>
									<div className="dataTable-search">
										<input
											className="dataTable-input"
											placeholder="Search"
											type="text"
											value={searchQuery}
											onChange={handleSearch}
										/>
									</div>
								</div>
								<div className="dataTable-container">
									<table className="w-100 dataTable-table" id="dataTable">
										<thead>
											<tr>
												<th
													data-sortable=""
													style={{ width: "32.1221%", padding: "8px" }}
													onClick={() => sortData("name")}
												>
													<a href="#" className="dataTable-sorter">
														Name
													</a>
												</th>
												<th
													data-sortable=""
													style={{ width: "48.2558%", padding: "8px" }}
													onClick={() => sortData("position")}
												>
													<a href="#" className="dataTable-sorter">
														Position
													</a>
												</th>
												<th
													data-sortable=""
													style={{ width: "19.6221%", padding: "8px" }}
													onClick={() => sortData("salary")}
												>
													<a href="#" className="dataTable-sorter">
														Salary
													</a>
												</th>
											</tr>
										</thead>
										<tbody>
											{filteredData.map((row, index) => (
												<tr key={index}>
													<td>{row.name}</td>
													<td>{row.position}</td>
													<td>{row.salary}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className="dataTable-bottom">
									<div className="dataTable-info">1 to 10 entries</div>
									<div className="dataTable-pagination">
										<li className="pager">
											<a href="#" data-page="1">
												<i className="bi bi-arrow-left-short"></i>
											</a>
										</li>
										<li className="active">
											<a href="#" data-page="1">
												1
											</a>
										</li>
										<li className="">
											<a href="#" data-page="2">
												2
											</a>
										</li>
										<li className="">
											<a href="#" data-page="3">
												3
											</a>
										</li>
										<li className="">
											<a href="#" data-page="4">
												4
											</a>
										</li>
										<li className="">
											<a href="#" data-page="5">
												5
											</a>
										</li>
										<li className="pager">
											<a href="#" data-page="2">
												<i className="bi bi-arrow-right-short"></i>
											</a>
										</li>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DataTableArea;
