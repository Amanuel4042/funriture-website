import React from "react";
import { useLanguage } from "../context/languagecontext";
import { FiGlobe } from "react-icons/fi";

const LanguageToggle = ({ variant = "header", isTransparent = false }) => {
	const { language, setLanguage, toggleLanguage, isAmharic } = useLanguage();

	if (variant === "drawer") {
		return (
			<div className='bg-grey-50 border border-grey-200 rounded-2xl p-3 flex items-center justify-between'>
				<div className='flex items-center gap-2.5 text-sm font-semibold text-primary'>
					<FiGlobe className='text-accent text-lg' />
					<span>ቋንቋ / Language</span>
				</div>
				<div className='flex items-center bg-white border border-grey-200 p-1 rounded-xl shadow-xs'>
					<button
						type='button'
						onClick={() => setLanguage("en")}
						className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
							language === "en"
								? "bg-accent text-white shadow-xs"
								: "text-grey-600 hover:text-primary"
						}`}
						aria-label='Switch to English'
					>
						EN
					</button>
					<button
						type='button'
						onClick={() => setLanguage("am")}
						className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
							language === "am"
								? "bg-accent text-white shadow-xs"
								: "text-grey-600 hover:text-primary"
						}`}
						aria-label='ወደ አማርኛ ቀይር'
					>
						አማ
					</button>
				</div>
			</div>
		);
	}

	// Default: Header pill toggle
	return (
		<div
			className={`inline-flex items-center p-0.5 rounded-full border transition-all duration-200 shadow-xs ${
				isTransparent
					? "bg-black/30 border-white/20 backdrop-blur-md text-white"
					: "bg-grey-100/90 border-grey-200 text-grey-700"
			}`}
			role='group'
			aria-label='Language Selector'
		>
			<button
				type='button'
				onClick={() => setLanguage("en")}
				className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
					language === "en"
						? "bg-accent text-white shadow-sm"
						: isTransparent
						? "text-white/80 hover:text-white hover:bg-white/10"
						: "text-grey-600 hover:text-primary hover:bg-white"
				}`}
				title='English'
				aria-pressed={language === "en"}
			>
				<span>EN</span>
			</button>

			<button
				type='button'
				onClick={() => setLanguage("am")}
				className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
					language === "am"
						? "bg-accent text-white shadow-sm"
						: isTransparent
						? "text-white/80 hover:text-white hover:bg-white/10"
						: "text-grey-600 hover:text-primary hover:bg-white"
				}`}
				title='አማርኛ'
				aria-pressed={language === "am"}
			>
				<span>አማ</span>
			</button>
		</div>
	);
};

export default LanguageToggle;
