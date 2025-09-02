"use client";

import Link from "next/link";
import HeaderThree from "@/layouts/headers/HeaderThree";
import React, { useEffect, useRef, useState } from "react";

 

interface PasswordStrengthMeterOptions {
	containerElement: string;
	passwordInput: string;
	height?: number;
	borderRadius?: number;
	colorScore1?: string;
	colorScore2?: string;
	colorScore3?: string;
	colorScore4?: string;
	pswMinLength?: number;
	showMessage?: boolean;
	messageContainer?: string;
	messagesList?: string[];
}

function passwordStrengthMeter(options: PasswordStrengthMeterOptions) {
	const styleElement = document.createElement('style');
	document.body.prepend(styleElement);

	styleElement.innerHTML = `
    ${options.containerElement} {
        height: ${options.height || 4}px;
        background-color: #e2e9fe;
        position: relative;
        overflow: hidden;
        border-radius: ${options.borderRadius?.toString() || '2'}px;
    }
    ${options.containerElement} .password-strength-meter-score {
      height: inherit;
      width: 0%;
      transition: .5s ease;
      background: ${options.colorScore1 || '#ea4c62'};
    }
    ${options.containerElement} .password-strength-meter-score.psms-25 {width: 25%; background: ${options.colorScore1 || '#ea4c62'};}
    ${options.containerElement} .password-strength-meter-score.psms-50 {width: 50%; background: ${options.colorScore2 || '#f1b10f'};}
    ${options.containerElement} .password-strength-meter-score.psms-75 {width: 75%; background: ${options.colorScore3 || '#1787b8'};}
    ${options.containerElement} .password-strength-meter-score.psms-100 {width: 100%; background: ${options.colorScore4 || '#2ecc4a'};}
  `;

	const containerElement = document.getElementById(options.containerElement.slice(1));
	if (!containerElement) return;

	containerElement.classList.add('password-strength-meter');

	const scoreElement = document.createElement('div');
	scoreElement.classList.add('password-strength-meter-score');
	containerElement.appendChild(scoreElement);

	const passwordInputElement = document.getElementById(options.passwordInput.slice(1)) as HTMLInputElement;
	if (!passwordInputElement) return;

	let currentPassword = '';

	const updateMeter = () => {
		currentPassword = passwordInputElement.value;
		const score = calculateScore();
		updateScoreDisplay(score);
	};

	passwordInputElement.addEventListener('input', updateMeter);

	const minLength = options.pswMinLength || 8;
	const messageElement = options.showMessage ? document.getElementById(options.messageContainer?.slice(1) || '') : null;
	const messages = options.messagesList || ['No data', 'Too simple', 'Simple', 'That\s OK', 'Great password!'];

	function calculateScore() {
		let score = 0;
		const hasLowerCase = /(?=.*[a-z])/.test(currentPassword);
		const hasUpperCase = /(?=.*[A-Z])/.test(currentPassword);
		const hasNumbers = /(?=.*[0-9])/.test(currentPassword);
		const hasMinLength = new RegExp(`(?=.{${minLength},})`).test(currentPassword);

		if (hasLowerCase) score++;
		if (hasUpperCase) score++;
		if (hasNumbers) score++;
		if (hasMinLength) score++;
		if (score === 0 && currentPassword.length > 0) score++;

		return score;
	}

	function updateScoreDisplay(score: number) {
		switch (score) {
			case 1:
				scoreElement.className = 'password-strength-meter-score psms-25';
				if (messageElement) messageElement.textContent = messages[1] || 'Too simple';
				if (containerElement) {
					containerElement.dispatchEvent(new Event('onScore1', { bubbles: true }));
				}
				break;
			case 2:
				scoreElement.className = 'password-strength-meter-score psms-50';
				if (messageElement) messageElement.textContent = messages[2] || 'Simple';
				if (containerElement) {
					containerElement.dispatchEvent(new Event('onScore2', { bubbles: true }));
				}

				break;
			case 3:
				scoreElement.className = 'password-strength-meter-score psms-75';
				if (messageElement) messageElement.textContent = messages[3] || 'That\s OK';
				if (containerElement) {
					containerElement.dispatchEvent(new Event('onScore3', { bubbles: true }));
				}


				break;
			case 4:
				scoreElement.className = 'password-strength-meter-score psms-100';
				if (messageElement) messageElement.textContent = messages[4] || 'Great password!';
				if (containerElement) {
					containerElement.dispatchEvent(new Event('onScore4', { bubbles: true }));
				}

				break;
			default:
				scoreElement.className = 'password-strength-meter-score';
				if (messageElement) messageElement.textContent = messages[0] || 'No data';
				if (containerElement) {
					containerElement.dispatchEvent(new Event('onScore0', { bubbles: true }));
				}

		}
	}

	if (messageElement) {
		messageElement.textContent = messages[0] || 'No data';
	}

	return { containerElement, getScore: calculateScore };
}




const ChangePassword = () => {
	const [password, setPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
 

	const passwordInputRef = useRef<HTMLInputElement | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);


	const toggleShowPassword = () => {
		setShowPassword(prevState => !prevState);

		if (passwordInputRef.current) {
			passwordInputRef.current.classList.toggle('form-control-clicked');
		}

		if (inputRef.current) {
			inputRef.current.classList.toggle('form-control-clicked');
		}
	};
 




	const [focusedInput, setFocusedInput] = useState(null);

	const handleFocus = (inputName: any) => {
		setFocusedInput(inputName);
	};
	const handleBlur = () => {
		setFocusedInput(null);
	};


	// password strong 
	const pswmeterRef = useRef<HTMLDivElement | null>(null);
	const messageRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (passwordInputRef.current && pswmeterRef.current) {
			passwordStrengthMeter({
				containerElement: '#pswmeter',
				passwordInput: '#psw-input',
				height: 4,
				borderRadius: 4,
				pswMinLength: 10,
				showMessage: true,
				messageContainer: '#pswmeter-message',
			});
		}
	}, []);


	// show elements 
	const handleInputClick = () => {
		if (pswmeterRef.current && messageRef.current) {
			pswmeterRef.current.style.display = 'block';
			messageRef.current.style.display = 'block';
		}
	};

	const handleInputBlur = () => {
		setFocusedInput(null);
		if (pswmeterRef.current && messageRef.current) {
			pswmeterRef.current.style.display = 'none';
			messageRef.current.style.display = 'none';
		}
	};


	return (
		<>
			<HeaderThree links="login" />
			<div className="login-wrapper d-flex align-items-center justify-content-center">
				<div className="custom-container">
					<div className="text-center px-4">
						<img
							className="login-intro-img"
							src="/assets/img/bg-img/36.png"
							alt=""
						/>
					</div>

					{/* <!-- Register Form --> */}
					<div className="register-form mt-4">
						<form>
							<h6 className="mb-3 text-center">Update your password</h6>

							<div className="form-group text-start mb-3">
								<input
									className={`form-control ${focusedInput === "code" ? "form-control-clicked" : ""
										}`}
									onFocus={() => handleFocus("code")}
									onBlur={handleBlur}
									type="text"
									placeholder="Enter 8 digit security code"
								/>
							</div>

							<div className="form-group text-start mb-3 position-relative">
								<input
									className={`form-control ${focusedInput === "password" ? "form-control-clicked" : ""
										}`}
									id="psw-input"
									onFocus={() => handleFocus("password")} 
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="New password"
									ref={passwordInputRef}
									onClick={handleInputClick}
									onBlur={handleInputBlur} 

								/>
								<div
									className={`position-absolute ${showPassword ? "active" : ""
										}`}
									id="password-visibility"
									onClick={toggleShowPassword}
									style={{
										cursor: "pointer",
										top: "50%",
										right: "10px",
										transform: "translateY(-50%)",
									}}
								>
									{showPassword ? (
										<i className="bi bi-eye-slash"></i>
									) : (
										<i className="bi bi-eye"></i>
									)}
								</div>
							</div>
 
							<div className="mb" id="pswmeter" ref={pswmeterRef} style={{ display: 'none' }}></div>
							<div id="pswmeter-message" ref={messageRef} style={{ display: 'none' }}></div>




							<div className="form-group text-start mb-3">
								<input
									className={`form-control ${focusedInput === "password2" ? "form-control-clicked" : ""
										}`}
									onFocus={() => handleFocus("password2")}
									onBlur={handleBlur}
									type="password"
									placeholder="Re-write password"
								/>
							</div>
							<Link href="/login">
								<button className="btn btn-primary w-100" type="submit">
									Update Password
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChangePassword;
