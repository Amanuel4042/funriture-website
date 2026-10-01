import React from "react";
import StarRating from "./StarRating";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";
import useInView from "../hooks/useInView";

const TestimonialsPreview = ({ testimonials = [], onNavigate }) => {
	const { t, currentTranslations, translateCategory } = useLanguage();
	const [sectionRef, isInView] = useInView({ threshold: 0.1 });

	// Use localized reviews if available
	const localizedReviews = currentTranslations.testimonialsPage?.reviews?.slice(0, 3) || testimonials;

	return (
		<section
			ref={sectionRef}
			className='py-20 md:py-28 bg-grey-50 border-t border-grey-200 overflow-hidden'
		>
			<div className='container mx-auto'>
				<div
					className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-1000 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
					<span className='inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent-light px-3 py-1 rounded-full mb-2'>
						{t("testimonialsSection.badge", "Client Stories")}
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-1 mb-3'>
						{t("testimonialsSection.title", "Loved in Homes Across the Country")}
					</h2>
					<p className='text-grey-500 text-sm sm:text-base'>
						{t(
							"testimonialsSection.subtitle",
							"Hear from homeowners and interior designers who furnished their sanctuary with us."
						)}
					</p>
				</div>

				{/* 3 Selected Quotes with Staggered Entrance */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
					{localizedReviews.map((item, idx) => {
						const original = testimonials[idx] || item;
						const delays = ["delay-100", "delay-200", "delay-300"];
						const delayClass = delays[idx % delays.length];

						return (
							<div
								key={item.id || idx}
								className={`bg-white rounded-2xl p-7 border border-grey-200 shadow-sm hover:shadow-card transition-all duration-700 ease-out flex flex-col justify-between ${delayClass} ${
									isInView
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-12"
								}`}
							>
								<div>
									<div className='flex items-center justify-between mb-4'>
										<StarRating rating={item.rating || 5} size='text-sm' />
										<span className='text-xs font-semibold text-accent uppercase tracking-wider'>
											{translateCategory(item.category || original.category)}
										</span>
									</div>
									<p className='text-grey-700 text-sm md:text-base leading-relaxed italic mb-6'>
										{item.quote}
									</p>
								</div>

								<div className='flex items-center gap-3 pt-4 border-t border-grey-100'>
									<img
										src={original.avatar}
										alt={item.author}
										className='w-11 h-11 rounded-full object-cover border border-grey-200'
									/>
									<div>
										<h4 className='font-bold text-sm text-primary'>{item.author}</h4>
										<p className='text-xs text-grey-500'>
											{item.role} • <span className='text-accent'>{item.product}</span>
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* View All Testimonials button */}
				<div
					className={`text-center mt-12 transition-all duration-1000 delay-300 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
					}`}
				>
					<button
						type='button'
						onClick={() => onNavigate("/testimonials")}
						className='btn-secondary font-semibold'
					>
						<span>{t("testimonialsSection.readAll", "Read All Customer Reviews")}</span>
						<FiArrowRight />
					</button>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsPreview;
