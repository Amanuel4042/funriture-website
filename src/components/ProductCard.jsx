import React from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FiArrowUpRight, FiMessageSquare } from "react-icons/fi";
import StarRating from "./StarRating";
import { useLanguage } from "../context/languagecontext";

const ProductCard = ({
	product,
	onSelectProduct,
	onInquire,
	isWishlisted = false,
	onToggleWishlist,
}) => {
	const { translateProduct, t } = useLanguage();
	const localized = translateProduct(product);
	const { id, name, category, material, price, oldPrice, badge, rating, reviewsCount, image } =
		localized;
	const currencyText = t("currency", "Birr");

	return (
		<div className='group relative flex flex-col bg-white rounded-2xl border border-grey-200 overflow-hidden shadow-sm hover:shadow-card hover:border-grey-300 transition-all duration-300'>
			{/* Top Image Box */}
			<div
				className='relative h-64 w-full bg-grey-100 flex items-center justify-center p-6 cursor-pointer overflow-hidden'
				onClick={() => onSelectProduct && onSelectProduct(id)}
			>
				<img
					src={image}
					alt={name}
					className='h-full max-h-52 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105'
				/>

				{/* Badge */}
				{badge && (
					<span className='absolute top-4 left-4 bg-primary text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm'>
						{badge}
					</span>
				)}

				{/* Wishlist Button */}
				<button
					type='button'
					onClick={(e) => {
						e.stopPropagation();
						onToggleWishlist && onToggleWishlist(product);
					}}
					aria-label={isWishlisted ? "Remove from saved" : "Save to wishlist"}
					className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-sm ${
						isWishlisted
							? "bg-rose-50 text-rose-600 hover:bg-rose-100"
							: "bg-white/80 text-grey-600 hover:bg-white hover:text-rose-500"
					}`}
				>
					{isWishlisted ? (
						<IoIosHeart className='text-xl text-rose-600' />
					) : (
						<IoIosHeartEmpty className='text-xl' />
					)}
				</button>
			</div>

			{/* Info Body */}
			<div className='flex-1 flex flex-col p-5'>
				{/* Category & Material Badges */}
				<div className='flex items-center justify-between gap-2 text-xs text-grey-500 mb-2'>
					<span className='font-medium text-accent uppercase tracking-wider'>{category}</span>
					<span className='bg-grey-100 px-2 py-0.5 rounded text-[11px] font-medium text-grey-600'>
						{material}
					</span>
				</div>

				{/* Title */}
				<h3
					className='font-semibold text-lg text-primary line-clamp-1 hover:text-accent transition-colors cursor-pointer mb-1'
					onClick={() => onSelectProduct && onSelectProduct(id)}
				>
					{name}
				</h3>

				{/* Star Rating */}
				<div className='flex items-center gap-2 mb-3'>
					<StarRating rating={rating} size='text-sm' />
					<span className='text-xs text-grey-400'>({reviewsCount})</span>
				</div>

				{/* Price & Actions footer */}
				<div className='mt-auto pt-3 border-t border-grey-100 flex items-center justify-between'>
					<div>
						<span className='text-lg sm:text-xl font-bold text-primary'>
							{price.toLocaleString()} <span className='text-xs font-semibold text-accent'>{currencyText}</span>
						</span>
						{oldPrice && (
							<span className='ml-2 text-xs text-grey-400 line-through'>
								{oldPrice.toLocaleString()} {currencyText}
							</span>
						)}
					</div>

					<div className='flex items-center gap-1.5'>
						<button
							type='button'
							onClick={() => onInquire && onInquire(product)}
							title={t("productsPage.inquireBtn", "Inquire")}
							className='inline-flex items-center gap-1 text-xs font-semibold text-accent hover:bg-accent-light px-2.5 py-1.5 rounded-lg transition-colors'
						>
							<FiMessageSquare className='text-sm' />
							<span>{t("productsPage.inquireBtn", "Inquire")}</span>
						</button>

						<button
							type='button'
							onClick={() => onSelectProduct && onSelectProduct(id)}
							title='View product details'
							className='w-8 h-8 rounded-lg bg-grey-100 hover:bg-accent hover:text-white flex items-center justify-center text-grey-700 transition-colors'
						>
							<FiArrowUpRight className='text-base' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
