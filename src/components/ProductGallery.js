import React, { useState } from "react";

const ProductGallery = ({ product }) => {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	const currentGallery =
		product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
	const activeImage = currentGallery[activeImageIndex] || product.image;

	return (
		<div className='lg:col-span-7 flex flex-col gap-5'>
			{/* Main Large Image Canvas */}
			<div className='relative w-full h-[400px] sm:h-[480px] lg:h-[540px] bg-white rounded-3xl border border-grey-200 p-8 sm:p-12 flex items-center justify-center shadow-soft overflow-hidden group'>
				<img
					src={activeImage}
					alt={product.name}
					className='max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105'
				/>

				{product.badge && (
					<span className='absolute top-6 left-6 bg-primary text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm'>
						{product.badge}
					</span>
				)}
			</div>

			{/* Thumbnail Gallery Strip */}
			{currentGallery.length > 1 && (
				<div className='flex items-center gap-3 overflow-x-auto pb-2'>
					{currentGallery.map((img, idx) => (
						<button
							key={idx}
							type='button'
							onClick={() => setActiveImageIndex(idx)}
							className={`relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl bg-white border-2 p-2 flex items-center justify-center transition-all ${
								activeImageIndex === idx
									? "border-accent shadow-sm scale-105"
									: "border-grey-200 hover:border-grey-300 opacity-70 hover:opacity-100"
							}`}
						>
							<img
								src={img}
								alt={`${product.name} view ${idx + 1}`}
								className='max-h-full max-w-full object-contain'
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default ProductGallery;
