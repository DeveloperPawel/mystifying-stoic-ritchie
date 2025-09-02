"use client";
import React from "react";

const SearchArea = () => {
	return (
		<>
			<div className="card mb-2">
				<div className="card-body p-2">
					<div className="chat-search-box">
						{/* <!-- Search Form --> */}
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="input-group">
								<span className="input-group-text" id="searchbox">
									<i className="bi bi-search"></i>
								</span>
								<input
									className="form-control"
									type="search"
									placeholder="Search users or messages"
									aria-describedby="searchbox"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchArea;
