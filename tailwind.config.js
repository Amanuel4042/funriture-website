/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.25rem",
				sm: "1.5rem",
				lg: "2rem",
				xl: "2.5rem",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
		},
		extend: {
			fontFamily: {
				sans: ["'Plus Jakarta Sans'", "'Noto Sans Ethiopic'", "sans-serif"],
				primary: ["'Outfit'", "'Plus Jakarta Sans'", "'Noto Sans Ethiopic'", "sans-serif"],
				display: ["'Outfit'", "'Plus Jakarta Sans'", "'Noto Sans Ethiopic'", "sans-serif"],
			},
			colors: {
				primary: {
					DEFAULT: "#111827",
					dark: "#0B0F17",
					light: "#1F2937",
					surface: "#28303F",
				},
				accent: {
					DEFAULT: "#C2782A",
					hover: "#AA631B",
					light: "#FBF3EA",
					dark: "#8A4B0E",
					subtle: "#F4E7D7",
				},
				amber: {
					star: "#F59E0B",
				},
				grey: {
					DEFAULT: "#968A79",
					50: "#FAF8F5",
					100: "#F2ECE2",
					200: "#E3DACD",
					300: "#C7BCAB",
					400: "#968A79",
					500: "#6B6051",
					600: "#4C4337",
					700: "#312B23",
					800: "#1E1A16",
					900: "#12100D",
				},
			},
			backgroundImage: {
				hero: 'url("/src/assets/images/hero-bg.png")',
				newsletter: 'url("/src/assets/images/newsletter.png")',
			},
			boxShadow: {
				soft: "0 10px 30px -5px rgba(18, 24, 39, 0.04), 0 4px 12px -2px rgba(18, 24, 39, 0.02)",
				card: "0 14px 38px -6px rgba(17, 24, 39, 0.08), 0 4px 16px -2px rgba(17, 24, 39, 0.03)",
				dropdown: "0 14px 44px -10px rgba(11, 15, 23, 0.16)",
			},
		},
	},
	plugins: [],
};
