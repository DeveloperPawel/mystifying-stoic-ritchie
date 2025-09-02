import React from "react";

const language_data = [
	"English",
	"Afrikaans",
	"Albanian",
	"Amharic",
	"Arabic",
	"Armenian",
	"Azerbaijani",
	"Basque",
	"Belarusian",
	"Bengali",
	"Bosnian",
	"Bulgarian",
	"Catalan",
	"Cebuano",
	"Chichewa",
	"Chinese",
	"Corsican",
	"Croatian",
	"Czech",
	"Danish",
	"Dutch",
];

const LanguageArea = () => {
	return (
		<>
			<div className="page-content-wrapper py-3">
				<div className="container">
					{/* <!-- Language Area --> */}
					<div className="card">
						<div className="card-body">
							<div className="language-area-wrapper">
								<ul className="ps-0 language-lists">
									{language_data.map((item, i) => (
										<li key={i}>
											<div className="form-check">
												<input
													className="form-check-input"
													type="radio"
													name="languageRadio"
													id={item}
													defaultChecked={i === 0}
												/>
												<label className="form-check-label" htmlFor={item}>
													{item}
												</label>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LanguageArea;
