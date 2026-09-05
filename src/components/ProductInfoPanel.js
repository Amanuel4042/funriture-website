import React from "react";
import StarRating from "./StarRating";
import {
	FiMessageSquare,
	FiTruck,
	FiShield,
	FiRotateCcw,
} from "react-icons/fi";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const ProductInfoPanel = ({
	product,
	isWishlisted = false,
	onToggleWishlist,
	onInquire,
}) => {
	return (
		<div className='lg:col-span-5 flex flex-col bg-white rounded-3xl border border-grey-200 p-8 sm:p-10 shadow-soft'>
			{/* Category & Rating */}
			<div className='flex items-center justify-between gap-4 mb-2'>
				<span className='text-xs font-bold uppercase tracking-wider text-accent bg-accent-light px-3 py-1 rounded-full'>
					{product.category}
				</span>
				<div className='flex items-center gap-1.5'>
					<StarRating rating={product.rating} size='text-sm' />
					<span className='text-xs text-grey-500 font-medium'>
						({product.reviewsCount} reviews)
					</span>
				</div>
			</div>

			{/* Product Title */}
			<h1 className='text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-primary mb-3'>
				{product.name}
			</h1>

			{/* Price */}
			<div className='flex items-baseline gap-3 mb-6'>
				<span className='text-3xl font-primary font-bold text-primary'>
					{product.price.toLocaleString()} <span className='text-lg font-semibold text-accent'>Birr</span>
				</span>
				{product.oldPrice && (
					<span className='text-lg text-grey-400 line-through'>
						{product.oldPrice.toLocaleString()} Birr
					</span>
				)}
				<span className='text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full'>
					Catalog Price
				</span>
			</div>

			{/* Short Description */}
			<p className='text-sm text-grey-600 leading-relaxed mb-6 pb-6 border-b border-grey-100'>
				{product.description}
			</p>

			{/* Key Specifications Table */}
			<div className='mb-8 space-y-3.5'>
				<h4 className='text-xs font-bold uppercase tracking-wider text-grey-400'>
					Key Specifications
				</h4>
				<div className='bg-grey-50 rounded-2xl p-4.5 space-y-2.5 text-xs sm:text-sm'>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500 font-medium'>Materials</span>
						<span className='text-primary font-semibold text-right max-w-[65%]'>
							{product.materialsDescription}
						</span>
					</div>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500 font-medium'>Dimensions</span>
						<span className='text-primary font-semibold'>{product.dimensions}</span>
					</div>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500 font-medium'>Material Class</span>
						<span className='text-primary font-semibold'>{product.material}</span>
					</div>
					<div className='flex justify-between py-1'>
						<span className='text-grey-500 font-medium'>Craftsmanship</span>
						<span className='text-primary font-semibold text-right max-w-[65%]'>
							Hand-finished mortise joinery
						</span>
					</div>
				</div>
			</div>

			{/* Care & Maintenance snippet */}
			<div className='mb-8 text-xs text-grey-500 leading-relaxed bg-accent-light/50 p-3.5 rounded-xl border border-accent/10'>
				<strong className='text-accent font-semibold block mb-1'>Care & Maintenance:</strong>
				{product.careNotes}
			</div>

			{/* Action Buttons: Inquire CTA & Save to Wishlist */}
			<div className='flex flex-col sm:flex-row items-center gap-3 pt-2'>
				<button
					type='button'
					onClick={() => onInquire && onInquire(product)}
					className='btn-primary w-full sm:flex-1 py-4 text-base font-semibold shadow-md hover:shadow-lg'
				>
					<FiMessageSquare className='text-lg' />
					<span>Inquire about this item</span>
				</button>

				<button
					type='button'
					onClick={() => onToggleWishlist && onToggleWishlist(product)}
					className={`w-full sm:w-auto px-6 py-4 rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
						isWishlisted
							? "bg-rose-50 border-rose-300 text-rose-600 shadow-sm"
							: "bg-white border-grey-200 text-grey-700 hover:border-grey-300 hover:bg-grey-50"
					}`}
				>
					{isWishlisted ? (
						<>
							<IoIosHeart className='text-xl text-rose-600' />
							<span>Saved</span>
						</>
					) : (
						<>
							<IoIosHeartEmpty className='text-xl' />
							<span>Save</span>
						</>
					)}
				</button>
			</div>

			{/* Trust Signals */}
			<div className='grid grid-cols-3 gap-2 text-center pt-8 mt-8 border-t border-grey-100 text-[11px] text-grey-500'>
				<div className='flex flex-col items-center gap-1'>
					<FiTruck className='text-accent text-base' />
					<span>White Glove Delivery</span>
				</div>
				<div className='flex flex-col items-center gap-1'>
					<FiShield className='text-accent text-base' />
					<span>Lifetime Structural Guarantee</span>
				</div>
				<div className='flex flex-col items-center gap-1'>
					<FiRotateCcw className='text-accent text-base' />
					<span>Custom Swatches Available</span>
				</div>
			</div>
		</div>
	);
};

export default ProductInfoPanel;
