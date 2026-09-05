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
				sans: ["'Plus Jakarta Sans'", "sans-serif"],
				primary: ["'Saira'", "sans-serif"],
				display: ["'Saira'", "sans-serif"],
			},
			colors: {
				primary: {
					DEFAULT: "#1F242E",
					dark: "#14171E",
					light: "#2C3340",
				},
				accent: {
					DEFAULT: "#286F6C",
					hover: "#205956",
					light: "#EAF3F2",
					dark: "#1A4947",
				},
				amber: {
					star: "#F59E0B",
				},
				grey: {
					DEFAULT: "#8D929A",
					50: "#FAFAFA",
					100: "#F5F6F8",
					200: "#E9ECF0",
					300: "#D3D7DF",
					400: "#9DA3AF",
					500: "#6B7280",
					600: "#4B5563",
					700: "#374151",
					800: "#1F2937",
					900: "#111827",
				},
			},
			backgroundImage: {
				hero: 'url("/src/assets/images/hero-bg.png")',
				newsletter: 'url("/src/assets/images/newsletter.png")',
			},
			boxShadow: {
				soft: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
				card: "0 12px 36px rgba(18, 38, 63, 0.08)",
				dropdown: "0 10px 40px -10px rgba(0, 0, 0, 0.12)",
			},
		},
	},
	plugins: [],
};
