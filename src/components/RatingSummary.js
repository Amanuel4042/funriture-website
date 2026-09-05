import React from "react";
import { testimonialsData } from "../data";
import { IoIosStar } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";

const RatingSummary = () => {
	const { ratingSummary } = testimonialsData;

	return (
		<div className='text-center max-w-3xl mx-auto mb-14'>
			<span className='text-xs font-bold uppercase tracking-widest text-accent'>
				Client Testimonials
			</span>
			<h1 className='text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-primary mt-2 mb-6'>
				What Our Customers Say
			</h1>

			{/* Overall Rating Summary Card */}
			<div className='inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-grey-200 rounded-3xl p-6 sm:px-10 shadow-soft'>
				<div className='flex items-center gap-4'>
					<span className='text-4xl sm:text-5xl font-primary font-bold text-primary'>
						{ratingSummary.average}
					</span>
					<div>
						<div className='flex items-center text-amber-500 text-xl'>
							{[...Array(5)].map((_, i) => (
								<IoIosStar key={i} />
							))}
						</div>
						<p className='text-xs text-grey-400 mt-1'>Overall rating summary</p>
					</div>
				</div>

				<div className='hidden sm:block w-px h-12 bg-grey-200' />

				<div className='text-center sm:text-left'>
					<p className='text-sm font-semibold text-primary'>
						Based on {ratingSummary.totalReviews}+ verified patron reviews
					</p>
					<p className='text-xs text-accent font-medium mt-0.5 flex items-center justify-center sm:justify-start gap-1'>
						<FiCheckCircle className='text-emerald-500' />
						<span>98% of clients recommend FurniCraft pieces</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default RatingSummary;
