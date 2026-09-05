import React from "react";
import { aboutData } from "../data";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const BrandTeaser = ({ onNavigate }) => {
	const { story } = aboutData;

	return (
		<section className='py-20 md:py-28 bg-white border-b border-grey-200'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
					{/* Workshop / Brand Image */}
					<div className='lg:col-span-6 relative'>
						<div className='relative rounded-3xl overflow-hidden shadow-card border border-grey-200 bg-grey-100'>
							<img
								src={story.workshopImage}
								alt='FurniCraft Workshop Craftsmanship'
								className='w-full h-auto max-h-[480px] object-cover'
							/>
						</div>
						{/* Floating trust badge */}
						<div className='absolute -bottom-6 -right-4 md:bottom-8 md:-right-6 bg-white rounded-2xl p-5 shadow-dropdown border border-grey-200 max-w-xs'>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-lg shrink-0'>
									<FiCheckCircle />
								</div>
								<div>
									<p className='text-xs font-bold text-primary'>100% Solid Hardwood</p>
									<p className='text-xs text-grey-500'>Lifetime structural warranty</p>
								</div>
							</div>
						</div>
					</div>

					{/* Brand Story Teaser Text */}
					<div className='lg:col-span-6'>
						<span className='text-xs font-bold uppercase tracking-widest text-accent'>
							About The Brand
						</span>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-2 mb-6'>
							{story.headline}
						</h2>
						<p className='text-grey-600 text-base leading-relaxed mb-6'>
							{story.subtitle}
						</p>
						<p className='text-grey-500 text-sm leading-relaxed mb-8'>
							{story.paragraphs[0]}
						</p>

						<div className='flex items-center gap-4'>
							<button
								type='button'
								onClick={() => onNavigate("/about")}
								className='btn-primary'
							>
								<span>Learn More About Us</span>
								<FiArrowRight />
							</button>
							<button
								type='button'
								onClick={() => onNavigate("/products")}
								className='btn-secondary'
							>
								<span>Browse Catalog</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrandTeaser;
