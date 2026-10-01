import React from "react";
import { useLanguage } from "../context/languagecontext";
import { FiGlobe } from "react-icons/fi";

const LanguageToggle = ({ variant = "header", isTransparent = false }) => {
	const { language, toggleLanguage } = useLanguage();

	if (variant === "drawer") {
		return (
			<div
				onClick={toggleLanguage}
				className='bg-grey-50 border border-grey-200 hover:border-accent/40 rounded-2xl p-3 flex items-center justify-between cursor-pointer transition-all duration-200 select-none group focus:outline-none focus:ring-2 focus:ring-accent/50'
				role='button'
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						toggleLanguage();
					}
				}}
				title={language === "en" ? "ወደ አማርኛ ቀይር (Switch to Amharic)" : "Switch to English (ወደ እንግሊዝኛ ቀይር)"}
				aria-label='Toggle language between English and Amharic'
			>
				<div className='flex items-center gap-2.5 text-sm font-semibold text-primary'>
					<FiGlobe className='text-accent text-lg group-hover:rotate-45 transition-transform duration-300' />
					<span>{language === "en" ? "Language / ቋንቋ" : "ቋንቋ / Language"}</span>
				</div>
				<div className='relative flex items-center bg-white border border-grey-200 p-1 rounded-xl shadow-sm'>
					{/* Animated Sliding Pill */}
					<span
						aria-hidden='true'
						className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-accent shadow-sm transition-all duration-300 ease-in-out pointer-events-none ${
							language === "am" ? "left-[calc(50%+2px)]" : "left-1"
						}`}
					/>
					<span
						className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors duration-200 min-w-[36px] text-center ${
							language === "en"
								? "text-white"
								: "text-grey-600 group-hover:text-primary"
						}`}
					>
						EN
					</span>
					<span
						className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors duration-200 min-w-[36px] text-center ${
							language === "am"
								? "text-white"
								: "text-grey-600 group-hover:text-primary"
						}`}
					>
						አማ
					</span>
				</div>
			</div>
		);
	}

	// Default: Header pill toggle (works seamlessly both ways when clicking either side or the pill)
	return (
		<button
			type='button'
			onClick={toggleLanguage}
			role='switch'
			aria-checked={language === "am"}
			aria-label={`Current language is ${language === "en" ? "English" : "Amharic"}. Click to toggle language.`}
			title={language === "en" ? "Switch to አማርኛ" : "Switch to English"}
			className={`group relative inline-flex items-center p-1 rounded-full border transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-accent/50 ${
				isTransparent
					? "bg-black/35 border-white/25 hover:border-white/50 backdrop-blur-md text-white shadow-sm"
					: "bg-grey-100/90 border-grey-200 hover:border-accent/40 text-grey-700 shadow-sm"
			}`}
		>
			{/* Animated Sliding Pill */}
			<span
				aria-hidden='true'
				className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-accent shadow-md transition-all duration-300 ease-in-out pointer-events-none ${
					language === "am" ? "left-[calc(50%+2px)]" : "left-1"
				}`}
			/>

			<span
				className={`relative z-10 px-2.5 py-1 text-xs font-bold transition-colors duration-200 flex items-center justify-center min-w-[32px] ${
					language === "en"
						? "text-white"
						: isTransparent
						? "text-white/75 group-hover:text-white"
						: "text-grey-600 group-hover:text-primary"
				}`}
			>
				EN
			</span>

			<span
				className={`relative z-10 px-2.5 py-1 text-xs font-bold transition-colors duration-200 flex items-center justify-center min-w-[32px] ${
					language === "am"
						? "text-white"
						: isTransparent
						? "text-white/75 group-hover:text-white"
						: "text-grey-600 group-hover:text-primary"
				}`}
			>
				አማ
			</span>
		</button>
	);
};

export default LanguageToggle;
