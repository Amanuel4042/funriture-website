import React from "react";
import StarRating from "./StarRating";
import { FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";

const TestimonialCards = ({ reviews = [], onSelectProduct }) => {
	const { t, translateCategory } = useLanguage();

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
			{reviews.map((rev) => (
				<div
					key={rev.id}
					className='bg-white rounded-3xl p-8 border border-grey-200 shadow-soft hover:shadow-card hover:border-grey-300 transition-all duration-300 flex flex-col justify-between'
				>
					<div>
						{/* Star Rating & Category */}
						<div className='flex items-center justify-between mb-4'>
							<StarRating rating={rev.rating} size='text-lg' />
							<span className='text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full'>
								{translateCategory(rev.category)}
							</span>
						</div>

						{/* Quote */}
						<p className='text-base sm:text-lg text-grey-700 font-normal leading-relaxed italic mb-8'>
							{rev.quote}
						</p>
					</div>

					{/* Author & Product Reference */}
					<div className='pt-6 border-t border-grey-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<img
								src={rev.avatar}
								alt={rev.author}
								className='w-12 h-12 rounded-full object-cover border border-grey-200 shadow-sm'
							/>
							<div>
								<div className='flex items-center gap-1.5'>
									<h4 className='font-bold text-sm text-primary'>{rev.author}</h4>
									<FiCheckCircle
										className='text-emerald-500 text-xs'
										title={t("testimonialsPage.verifiedBuyer", "Verified Buyer")}
									/>
								</div>
								<p className='text-xs text-grey-400'>{rev.location}</p>
							</div>
						</div>

						{/* Referenced Product */}
						{rev.product && (
							<div className='sm:text-right bg-grey-50 px-3 py-2 rounded-xl border border-grey-100'>
								<span className='text-[11px] text-grey-400 block'>
									{t("testimonialsPage.referencedPiece", "Referenced piece:")}
								</span>
								<button
									type='button'
									onClick={() => rev.productId && onSelectProduct(rev.productId)}
									className='text-xs font-semibold text-accent hover:underline'
								>
									{rev.product}
								</button>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default TestimonialCards;
