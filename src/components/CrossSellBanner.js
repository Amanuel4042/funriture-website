import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CrossSellBanner = ({
	title = "Like what you see? Explore our products",
	subtitle = "Browse our complete catalog of curated tables, seating, storage, and lighting.",
	buttonText = "View Products",
	onNavigate,
}) => {
	return (
		<section className='container mx-auto px-4'>
			<div className='relative bg-primary text-white rounded-3xl p-10 sm:p-14 md:p-16 overflow-hidden shadow-card text-center max-w-5xl mx-auto'>
				{/* Subtle background glow */}
				<div className='absolute -right-20 -top-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl pointer-events-none' />
				<div className='absolute -left-20 -bottom-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none' />

				<div className='relative z-10 max-w-2xl mx-auto'>
					<span className='text-xs font-bold uppercase tracking-widest text-emerald-400'>
						Explore The Craft
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-white mt-2 mb-4'>
						{title}
					</h2>
					<p className='text-sm sm:text-base text-grey-300 leading-relaxed mb-8'>
						{subtitle}
					</p>

					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<button
							type='button'
							onClick={() => onNavigate("/products")}
							className='btn-primary bg-accent hover:bg-emerald-600 text-white py-3.5 px-8 text-base shadow-lg w-full sm:w-auto'
						>
							<span>{buttonText}</span>
							<FiArrowRight />
						</button>
						<button
							type='button'
							onClick={() => onNavigate("/contact")}
							className='btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/20 py-3.5 px-8 text-base w-full sm:w-auto'
						>
							<span>Request Bespoke Consultation</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CrossSellBanner;
