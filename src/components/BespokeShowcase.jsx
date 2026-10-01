import React from "react";
import Features2Img from "../assets/images/features-2.png";
import { FiArrowRight, FiSliders, FiCompass } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";
import useInView from "../hooks/useInView";

const BespokeShowcase = ({ onNavigate }) => {
	const { t } = useLanguage();
	const [sectionRef, isInView] = useInView({ threshold: 0.15 });

	return (
		<section
			ref={sectionRef}
			className='py-20 md:py-28 bg-grey-50 border-b border-grey-200 overflow-hidden'
		>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
					{/* Left Column: Text & CTAs (Slides in from LEFT) */}
					<div
						className={`lg:col-span-6 order-2 lg:order-1 transition-all duration-1000 ease-out ${
							isInView
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-16 pointer-events-none"
						}`}
					>
						<span className='inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent-light px-3 py-1 rounded-full mb-3'>
							{t("bespokeSection.badge", "Bespoke Custom Orders")}
						</span>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-1 mb-6'>
							{t(
								"bespokeSection.headline",
								"Engineered for Your Space & Unique Architecture"
							)}
						</h2>
						<p className='text-grey-600 text-base leading-relaxed mb-6 font-medium'>
							{t(
								"bespokeSection.subtitle",
								"From custom dining dimensions to hand-selected upholstery fabrics, we sculpt furniture tailored precisely to your living space."
							)}
						</p>
						<p className='text-grey-500 text-sm md:text-base leading-relaxed mb-8'>
							{t(
								"bespokeSection.paragraph",
								"Collaborate directly with our master woodworkers to select timbers, custom dimensions, and finishes that harmonize with your architectural vision."
							)}
						</p>

						{/* Quick Features List */}
						<div className='grid grid-cols-2 gap-4 mb-8 pt-2 border-t border-grey-200/80'>
							<div className='flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-primary'>
								<div className='w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0'>
									<FiSliders className='text-sm' />
								</div>
								<span>{t("bespokeSection.badgeTitle", "Custom Dimensions")}</span>
							</div>
							<div className='flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-primary'>
								<div className='w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0'>
									<FiCompass className='text-sm' />
								</div>
								<span>{t("bespokeSection.badgeSub", "15+ Hand-rubbed timber finishes")}</span>
							</div>
						</div>

						<div className='flex flex-wrap items-center gap-4'>
							<button
								type='button'
								onClick={() => onNavigate("/contact")}
								className='btn-primary'
							>
								<span>
									{t(
										"bespokeSection.requestConsultation",
										"Request Bespoke Consultation"
									)}
								</span>
								<FiArrowRight />
							</button>
							<button
								type='button'
								onClick={() => onNavigate("/products")}
								className='btn-secondary'
							>
								<span>
									{t(
										"bespokeSection.exploreMaterials",
										"Explore Materials & Finishes"
									)}
								</span>
							</button>
						</div>
					</div>

					{/* Right Column: Architectural Image (Slides in from RIGHT) */}
					<div
						className={`lg:col-span-6 order-1 lg:order-2 relative transition-all duration-1000 ease-out delay-150 ${
							isInView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-16 pointer-events-none"
						}`}
					>
						<div className='relative rounded-3xl overflow-hidden shadow-card border border-grey-200 bg-grey-100 group'>
							<img
								src={Features2Img}
								alt='Bespoke architectural furniture craftsmanship'
								className='w-full h-auto max-h-[480px] object-cover group-hover:scale-105 transition-transform duration-700'
							/>
						</div>

						{/* Floating Architectural Badge */}
						<div
							className={`absolute -bottom-6 -left-4 md:bottom-8 md:-left-6 bg-white rounded-2xl p-5 shadow-dropdown border border-grey-200 max-w-xs transition-all duration-1000 delay-300 ease-out ${
								isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
							}`}
						>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-lg shrink-0 shadow-sm'>
									<FiSliders />
								</div>
								<div>
									<p className='text-xs font-bold text-primary'>
										{t("bespokeSection.badgeTitle", "Custom Dimensions")}
									</p>
									<p className='text-xs text-grey-500'>
										{t("bespokeSection.badgeSub", "15+ Hand-rubbed timber finishes")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BespokeShowcase;
