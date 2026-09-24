import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import en from "../translations/en";
import am from "../translations/am";

const translations = { en, am };

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => {
		try {
			const saved = localStorage.getItem("tkcraft_language");
			return saved === "am" || saved === "en" ? saved : "en";
		} catch (e) {
			return "en";
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem("tkcraft_language", language);
		} catch (e) {
			// ignore localStorage error
		}
		// Set document lang attribute
		document.documentElement.lang = language === "am" ? "am" : "en";
	}, [language]);

	const toggleLanguage = useCallback(() => {
		setLanguage((prev) => (prev === "en" ? "am" : "en"));
	}, []);

	const currentTranslations = useMemo(() => {
		return translations[language] || translations.en;
	}, [language]);

	// Dot-notation translation helper: t('nav.home') or t('hero.title')
	const t = useCallback(
		(path, fallback = "") => {
			if (!path) return fallback;
			const keys = path.split(".");
			let current = currentTranslations;
			for (const key of keys) {
				if (current && typeof current === "object" && key in current) {
					current = current[key];
				} else {
					// Fallback to English if key missing in current language
					let enCurrent = translations.en;
					for (const enKey of keys) {
						if (enCurrent && typeof enCurrent === "object" && enKey in enCurrent) {
							enCurrent = enCurrent[enKey];
						} else {
							return fallback || path;
						}
					}
					return enCurrent || fallback || path;
				}
			}
			return typeof current === "string" || typeof current === "number" ? current : fallback || path;
		},
		[currentTranslations]
	);

	// Helper to translate product object dynamically based on active language
	const translateProduct = useCallback(
		(product) => {
			if (!product) return product;
			const localized = currentTranslations.products?.[product.id];
			const translatedCategory =
				currentTranslations.categories?.[product.category] || product.category;
			const translatedMaterial =
				currentTranslations.materials?.[product.material] || product.material;
			const translatedBadge = product.badge
				? currentTranslations.badges?.[product.badge] || product.badge
				: null;

			if (!localized) {
				return {
					...product,
					category: translatedCategory,
					material: translatedMaterial,
					badge: translatedBadge,
				};
			}

			return {
				...product,
				name: localized.name || product.name,
				description: localized.description || product.description,
				materialsDescription:
					localized.materialsDescription || product.materialsDescription,
				craftsmanship: localized.craftsmanship || product.craftsmanship,
				careNotes: localized.careNotes || product.careNotes,
				category: localized.category || translatedCategory,
				material: localized.material || translatedMaterial,
				badge: localized.badge !== undefined ? localized.badge : translatedBadge,
			};
		},
		[currentTranslations]
	);

	const translateCategory = useCallback(
		(cat) => {
			return currentTranslations.categories?.[cat] || cat;
		},
		[currentTranslations]
	);

	const translateMaterial = useCallback(
		(mat) => {
			return currentTranslations.materials?.[mat] || mat;
		},
		[currentTranslations]
	);

	const translateBadge = useCallback(
		(badge) => {
			if (!badge) return badge;
			return currentTranslations.badges?.[badge] || badge;
		},
		[currentTranslations]
	);

	const isAmharic = language === "am";

	const value = useMemo(
		() => ({
			language,
			setLanguage,
			toggleLanguage,
			isAmharic,
			t,
			currentTranslations,
			translateProduct,
			translateCategory,
			translateMaterial,
			translateBadge,
		}),
		[
			language,
			toggleLanguage,
			isAmharic,
			t,
			currentTranslations,
			translateProduct,
			translateCategory,
			translateMaterial,
			translateBadge,
		]
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

export default LanguageContext;