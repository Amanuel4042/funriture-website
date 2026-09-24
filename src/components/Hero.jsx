import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "../context/languagecontext";

const Hero = ({ onNavigate }) => {
	const { t } = useLanguage();

	const stats = [
		{ target: 7, suffix: "+", label: t("hero.stats.years", "Years of Craftsmanship") },
		{ target: 12, suffix: "k+", label: t("hero.stats.homes", "Homes Furnished") },
		{ target: 100, suffix: "%", label: t("hero.stats.sustainable", "Sustainable Timber") },
		{ target: 4.9, suffix: "/5", decimals: 1, label: t("hero.stats.satisfaction", "Customer Satisfaction") },
	];

	return (
		<section className='relative min-h-[90vh] flex items-center justify-center bg-hero bg-cover bg-center text-white pt-32 pb-20'>
			{/* Dark architectural overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 backdrop-blur-[1px]' />

			<div className='container mx-auto relative z-10 text-center max-w-4xl px-4'>
				{/* Top badge */}
				<div className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase mb-6 text-grey-100 border border-white/20 animate-fade-in'>
					<span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
					{t("hero.badge", "Bespoke Handcrafted Furniture")}
				</div>

				{/* Title */}
				<h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-primary font-bold leading-tight md:leading-[1.15] mb-6 drop-shadow-sm'>
					{t("hero.title", "Crafting Spaces That Inspire Everyday Living")}
				</h1>

				{/* Tagline */}
				<p className='text-base sm:text-lg md:text-xl text-grey-200 font-normal leading-relaxed max-w-2xl mx-auto mb-10'>
					{t(
						"hero.subtitle",
						"Discover bespoke, handcrafted furniture engineered for timeless elegance and architectural calm. Every piece tells a story of refined materials and master craftsmanship."
					)}
				</p>

				{/* CTA Buttons */}
				<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'>
					<button
						type='button'
						onClick={() => onNavigate("/products")}
						className='btn-primary text-base font-semibold py-4 px-9 rounded-xl shadow-lg w-full sm:w-auto hover:shadow-accent/40'
					>
						<span>{t("hero.primaryCta", "Shop Now")}</span>
						<FiArrowRight className='text-lg' />
					</button>

					<button
						type='button'
						onClick={() => onNavigate("/about")}
						className='inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold text-base py-4 px-8 rounded-xl transition-all duration-200 w-full sm:w-auto'
					>
						<span>{t("hero.secondaryCta", "Explore Our Story")}</span>
					</button>
				</div>

				{/* Stats Strip */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/15'>
					{stats.map((stat, idx) => (
						<div key={idx} className='p-3'>
							<div className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-white mb-1'>
								<AnimatedCounter
									target={stat.target}
									suffix={stat.suffix}
									decimals={stat.decimals || 0}
									duration={1800}
								/>
							</div>
							<div className='text-xs sm:text-sm text-grey-300 font-medium tracking-wide'>
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
