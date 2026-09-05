import React from "react";
import { aboutData } from "../data";
import BrandStory from "../components/BrandStory";
import MissionValues from "../components/MissionValues";
import MeetTeam from "../components/MeetTeam";
import CrossSellBanner from "../components/CrossSellBanner";

const AboutPage = ({ onNavigate }) => {
	const { story, values, team, crossSellCta } = aboutData;

	return (
		<div className='w-full pt-28 pb-20'>
			{/* SECTION 1: PAGE HEADER */}
			<section className='container mx-auto px-4 mb-16 text-center max-w-3xl'>
				<span className='text-xs font-bold uppercase tracking-widest text-accent'>
					About FurniCraft
				</span>
				<h1 className='text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-primary mt-2 mb-4'>
					Our Story
				</h1>
				<p className='text-base sm:text-lg text-grey-600 leading-relaxed'>
					How a humble woodworking workshop grew into an architectural furniture design house
					dedicated to slow craftsmanship, sustainable forestry, and timeless living.
				</p>
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
