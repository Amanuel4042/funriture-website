import React from "react";
import { aboutData } from "../data";
import BrandStory from "../components/BrandStory";
import MissionValues from "../components/MissionValues";
import MeetTeam from "../components/MeetTeam";
import CrossSellBanner from "../components/CrossSellBanner";
import { useLanguage } from "../context/languagecontext";

const AboutPage = ({ onNavigate }) => {
	const { story, values, team, crossSellCta } = aboutData;
	const { t } = useLanguage();

	return (
		<div className='w-full pb-20'>
			{/* SECTION 1: HERO HEADER */}
			<section className='relative bg-hero bg-cover bg-center text-white pt-36 pb-20 mb-16 overflow-hidden'>
				{/* Lighter architectural overlay matching home page hero */}
				<div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25 backdrop-blur-[0.5px]' />

				<div className='container mx-auto px-4 relative z-10 text-center max-w-3xl'>
					<span className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase mb-4 text-grey-100 border border-white/20 animate-fade-in'>
						<span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
						{t("aboutPage.heroBadge", "About TK Craft")}
					</span>
					<h1 className='text-3xl sm:text-5xl md:text-6xl font-primary font-bold text-white mt-2 mb-4 drop-shadow-sm'>
						{t("aboutPage.heroTitle", "Our Story & Heritage")}
					</h1>
					<p className='text-base sm:text-lg md:text-xl text-grey-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm'>
						{t(
							"aboutPage.heroSubtitle",
							"How a humble woodworking workshop grew into an architectural furniture design house dedicated to slow craftsmanship, sustainable forestry, and timeless living."
						)}
					</p>
				</div>
			</section>

			{/* SECTION 2: BRAND STORY BLOCK */}
			<BrandStory story={story} />

			{/* SECTION 3: MISSION & VALUES STRIP */}
			<MissionValues values={values} />

			{/* SECTION 4: MEET THE TEAM PHOTO GRID */}
			<MeetTeam team={team} />

			{/* SECTION 5: CROSS-SELL CTA BANNER */}
			<CrossSellBanner
				title={crossSellCta.title}
				subtitle={crossSellCta.subtitle}
				buttonText={crossSellCta.buttonText}
				onNavigate={onNavigate}
			/>
		</div>
	);
};

export default AboutPage;
