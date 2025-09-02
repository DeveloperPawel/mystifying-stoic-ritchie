
 


// hooks/useRTLMode.ts
import { useState, useEffect } from "react";

export const useRTLMode = () => {
	const [viewMode, setViewMode] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("rtl") || "ltr";
		}
		return "ltr";
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.documentElement.setAttribute("view-mode", viewMode);
			localStorage.setItem("rtl", viewMode);
		}
	}, [viewMode]);

	const toggleViewMode = () => {
		setViewMode((prevMode) => (prevMode === "rtl" ? "ltr" : "rtl"));
	};

	const handleRTLToggling = () => {
		if (typeof window !== "undefined") {
			const rmContainer = document.querySelector(
				".rtl-mode-switching"
			) as HTMLElement;
			if (rmContainer) {
				rmContainer.style.display = "block";
				rmContainer.style.opacity = "1";

				setTimeout(() => {
					const fadeOut = setInterval(() => {
						if (parseFloat(rmContainer.style.opacity) > 0) {
							rmContainer.style.opacity = (
								parseFloat(rmContainer.style.opacity) - 0.1
							).toString();
						} else {
							clearInterval(fadeOut);
							rmContainer.style.display = "none";
						}
					}, 20);
				}, 1000);
			}
		}
		toggleViewMode();
	};

	return { viewMode, toggleViewMode, handleRTLToggling };
};
