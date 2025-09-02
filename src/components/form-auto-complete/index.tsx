
"use client"

import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderSix from "@/layouts/headers/HeaderSix";
import React, { useState } from "react";

const FormAutoComplete = () => {


	const countries = [
		"Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla",
		"Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia",
		"Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
		"Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda",
		"Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil",
		"British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso",
		"Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
		"Cayman Islands", "Central Arfrican Republic", "Chad", "Chile",
		"China", "Colombia", "Congo", "Cook Islands", "Costa Rica",
		"Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus",
		"Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
		"Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
		"Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji",
		"Finland", "France", "French Polynesia", "French West Indies",
		"Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar",
		"Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey",
		"Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras",
		"Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran",
		"Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica",
		"Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
		"Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
		"Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
		"Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi",
		"Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
		"Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
		"Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
		"Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands",
		"Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua",
		"Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan",
		"Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
		"Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar",
		"Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon",
		"Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
		"Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
		"Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
		"South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis",
		"St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland",
		"Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
		"Thailand", "Timor LEste", "Togo", "Tonga", "Trinidad & Tobago",
		"Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu",
		"Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
		"United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
		"Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)",
		"Yemen", "Zambia", "Zimbabwe"
	];

	const places = [
		'Kabul', 'Tirana', 'Algiers', 'Luanda', 'Saint', 'John\s', 'Buenos',
		'Aires', 'Yerevan', 'Canberra', 'Vienna', 'Baku', 'Nassau', 'Manama',
		'Dhaka', 'Bridgetown', 'Minsk', 'Brussels', 'Belmopan', 'Porto', 'Novo',
		'Thimphu', 'Sarajevo', 'Gaborone', 'Brasilia', 'Sofia', 'Ouagadougou',
		'Gitega', 'Praia', 'Phnom', 'Penh', 'Yaounde', 'Ottawa', 'Bangui',
		'Djamena', 'Santiago', 'Beijing', 'Bogotá', 'Moroni', 'Kinshasa',
		'Brazzaville', 'San', 'Jose', 'Yamoussoukro', 'Zagreb', 'Havana',
		'Nicosia', 'Prague', 'Suva', 'Helsinki', 'Paris', 'Libreville',
		'Banjul', 'Tbilisi', 'Berlin', 'Accra', 'Athens', 'Saint', 'George\s',
		'Guatemala', 'City', 'Conakry', 'Bissau', 'Georgetown', 'Reykjavik',
		'New Delhi', 'Jakarta', 'Tehran', 'Baghdad', 'Dublin', 'Jerusalem',
		'Rome', 'Kingston', 'Tokyo', 'Amman', 'NurSultan', 'Nairobi', 'Tarawa',
		'Pristina', 'Kuwait City', 'Bishkek', 'Vientiane', 'Riga', 'Beirut',
		'Maseru', 'Monrovia', 'Tripoli', 'Vaduz', 'Vilnius', 'Luxembourg'
	];


	const [inputValue, setInputValue] = useState<string>('');
	const [suggestions, setSuggestions] = useState<string[]>([]);

	const filterSuggestions = (value: string) => {
		if (value.trim() === '') {
			setSuggestions([]);
			return;
		}
		const filteredData = countries.filter(item =>
			item.toLowerCase().includes(value.toLowerCase())
		);
		setSuggestions(filteredData);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputValue(value);
		filterSuggestions(value);
	};

	const handleSuggestionClick = (suggestion: string) => {
		setInputValue(suggestion);
		setSuggestions([]);
		// Focus the input field after a suggestion is selected
		const inputField = document.getElementById("autoCompleteCountries");
		if (inputField) {
			(inputField as HTMLInputElement).value = suggestion;
			inputField.focus();
		}
	};



	const [inputValue2, setInputValue2] = useState<string>('');
	const [suggestions2, setSuggestions2] = useState<string[]>([]);

	const filterSuggestions2 = (value: string) => {
		if (value.trim() === '') {
			setSuggestions2([]);
			return;
		}
		const filteredData = places.filter(item =>
			item.toLowerCase().includes(value.toLowerCase())
		);
		setSuggestions2(filteredData);
	};

	const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputValue2(value);
		filterSuggestions2(value);
	};

	const handleSuggestionClick2 = (suggestion: string) => {
		setInputValue2(suggestion);
		setSuggestions2([]);
		// Focus the input field after a suggestion is selected
		const inputField = document.getElementById("autoCompletePlace");
		if (inputField) {
			(inputField as HTMLInputElement).value = suggestion;
			inputField.focus();
		}
	};









	return (
		<>
			<HeaderSix links="elements" title="Auto Complete" />

			<div className="page-content-wrapper py-3">
				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading">
						<h6>Auto complete countries</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form action="#" autoComplete="off">
								<div className="form-group mb-0">
									<input
										className="form-control"
										id="autoCompleteCountries"
										type="text"
										name="myCountry"
										placeholder="Type a country name"
										onChange={handleInputChange}
										value={inputValue}
									/>
								</div>
							</form>

							{suggestions.length > 0 && (
								<div className="suggestions-container">
									{suggestions.map((suggestion, index) => (
										<div
											key={index}
											className="suggestion-item"
											onMouseDown={() => handleSuggestionClick(suggestion)}
											style={{ cursor: 'pointer', padding: '8px', borderBottom: '1px solid #ddd' }}
										>
											{suggestion}
										</div>
									))}
								</div>
							)}

						</div>
					</div>
				</div>

				{/* <!-- Element Heading --> */}
				<div className="container">
					<div className="element-heading mt-3">
						<h6>Auto complete place</h6>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="card-body">
							<form action="#" autoComplete="off">
								<div className="form-group mb-0">
									<input
										className="form-control"
										id="autoCompletePlace"
										type="text"
										name="place"
										placeholder="Type a place name"
										value={inputValue2}
										onChange={handleInputChange2}
									/>
								</div>
							</form>

							{suggestions2.length > 0 && (
								<div>
									{suggestions2.map((suggestion, index) => (
										<div
											key={index}
											onMouseDown={() => handleSuggestionClick2(suggestion)}
										>
											{suggestion}
										</div>
									))}
								</div>
							)}

						</div>
					</div>
				</div>
			</div>

			<FooterTwo />
		</>
	);
};



export default FormAutoComplete;
