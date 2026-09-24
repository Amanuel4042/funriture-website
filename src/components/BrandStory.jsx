import React from "react";
import { useLanguage } from "../context/languagecontext";

const BrandStory = ({ story }) => {
	const { t, isAmharic } = useLanguage();

	const headline = t("brandTeaser.headline", story.headline);
	const subtitle = t("brandTeaser.subtitle", story.subtitle);
	const paragraphs = isAmharic
		? [
				t("brandTeaser.paragraph", story.paragraphs[0]),
				"በካታሎጋችን ውስጥ የሚገኝ እያንዳንዱ ምርት ከዘላቂ ደኖች ከተገኙ እንጨቶች በከፍተኛ ጥንቃቄ የተሰራ ነው። ዝርዝር ጥራትን ከሚወዱ ባለሙያዎቻችን ጋር በቅርበት እንሰራለን።",
				"የቤት ዕቃዎቻችን ባዶ ክፍልን ለማስጌጥ ብቻ ሳይሆን፤ ለዕለታዊ ኑሮዎ ምቾትን ለመስጠት፣ የቤተሰብ ፍቅርን ለማጠንከርና ለረጅም ዓመታት በውበታቸው እንዲቆዩ ሆነው የተሰሩ ናቸው።",
		  ]
		: story.paragraphs;

	return (
		<section className='container mx-auto px-4 mb-24'>
			<div className='bg-white rounded-3xl border border-grey-200 p-8 sm:p-12 lg:p-16 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
				{/* Text Column */}
				<div className='lg:col-span-6 space-y-5'>
					<span className='inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent-light px-3 py-1 rounded-full'>
						{t("aboutPage.philosophyBadge", "Craftsmanship Philosophy")}
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary leading-tight'>
						{headline}
					</h2>
					<p className='text-base text-grey-700 font-medium leading-relaxed'>
						{subtitle}
					</p>
					{paragraphs.map((p, idx) => (
						<p key={idx} className='text-sm sm:text-base text-grey-500 leading-relaxed'>
							{p}
						</p>
					))}
				</div>

				{/* Workshop / Founder Photo */}
				<div className='lg:col-span-6 relative'>
					<div className='rounded-2xl overflow-hidden shadow-card border border-grey-200 bg-grey-100'>
						<img
							src={story.image}
							alt='Workshop artisan crafting wood'
							className='w-full h-auto max-h-[500px] object-cover'
						/>
					</div>
					<div className='mt-4 text-center lg:text-left'>
						<p className='text-xs text-grey-400 italic'>
							{t("aboutPage.workshopCaption", "Master artisan Elena inspects kiln-dried oak timber in our Addis Ababa design atelier.")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrandStory;
