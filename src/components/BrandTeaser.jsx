import React from "react";
import { aboutData } from "../data";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";
import useInView from "../hooks/useInView";

const BrandTeaser = ({ onNavigate }) => {
	const { story } = aboutData;
	const { t } = useLanguage();
	const [sectionRef, isInView] = useInView({ threshold: 0.15 });

	return (
		<section
			ref={sectionRef}
			className='py-20 md:py-28 bg-white border-b border-grey-200 overflow-hidden'
		>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
					{/* Left: Workshop / Brand Image (Slides in from LEFT) */}
					<div
						className={`lg:col-span-6 relative transition-all duration-1000 ease-out ${
							isInView
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-16 pointer-events-none"
						}`}
					>
						<div className='relative rounded-3xl overflow-hidden shadow-card border border-grey-200 bg-grey-100 group'>
							<img
								src={story.workshopImage}
								alt='TK Craft Workshop Craftsmanship'
								className='w-full h-auto max-h-[480px] object-cover group-hover:scale-105 transition-transform duration-700'
							/>
						</div>
						{/* Floating trust badge with delayed entrance */}
						<div
							className={`absolute -bottom-6 -right-4 md:bottom-8 md:-right-6 bg-white rounded-2xl p-5 shadow-dropdown border border-grey-200 max-w-xs transition-all duration-1000 delay-300 ease-out ${
								isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
							}`}
						>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-lg shrink-0 shadow-sm'>
									<FiCheckCircle />
								</div>
								<div>
									<p className='text-xs font-bold text-primary'>
										{t("brandTeaser.badgeTitle", "100% Solid Hardwood")}
									</p>
									<p className='text-xs text-grey-500'>
										{t("brandTeaser.badgeSub", "Lifetime structural warranty")}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right: Brand Story Teaser Text (Slides in from RIGHT) */}
					<div
						className={`lg:col-span-6 transition-all duration-1000 ease-out delay-150 ${
							isInView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-16 pointer-events-none"
						}`}
					>
						<span className='inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent-light px-3 py-1 rounded-full mb-3'>
							{t("brandTeaser.badge", "About The Brand")}
						</span>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-1 mb-6'>
							{t("brandTeaser.headline", story.headline)}
						</h2>
						<p className='text-grey-600 text-base leading-relaxed mb-6 font-medium'>
							{t("brandTeaser.subtitle", story.subtitle)}
						</p>
						<p className='text-grey-500 text-sm md:text-base leading-relaxed mb-8'>
							{t("brandTeaser.paragraph", story.paragraphs[0])}
						</p>

						<div className='flex flex-wrap items-center gap-4'>
							<button
								type='button'
								onClick={() => onNavigate("/about")}
								className='btn-primary'
							>
								<span>{t("brandTeaser.learnMore", "Learn More About Us")}</span>
								<FiArrowRight />
							</button>
							<button
								type='button'
								onClick={() => onNavigate("/products")}
								className='btn-secondary'
							>
								<span>{t("brandTeaser.browseCatalog", "Browse Catalog")}</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrandTeaser;
