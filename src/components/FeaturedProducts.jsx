import React from "react";
import ProductCard from "./ProductCard";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";

const FeaturedProducts = ({
	products = [],
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
}) => {
	const { t } = useLanguage();

	return (
		<section className='py-20 md:py-28 bg-grey-50 border-b border-grey-200'>
			<div className='container mx-auto'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
					<div>
						<span className='text-xs font-bold uppercase tracking-widest text-accent'>
							{t("featuredSection.badge", "Curated Selection")}
						</span>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-2'>
							{t("featuredSection.title", "Featured Products")}
						</h2>
						<p className='text-grey-500 text-sm md:text-base mt-2 max-w-lg'>
							{t(
								"featuredSection.subtitle",
								"Handcrafted pieces that redefine comfort and architectural form for your home."
							)}
						</p>
					</div>

					<button
						type='button'
						onClick={() => onNavigate("/products")}
						className='inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm mt-4 md:mt-0 transition-colors group'
					>
						<span>{t("featuredSection.exploreAll", "Explore All Products")}</span>
						<FiArrowRight className='transition-transform group-hover:translate-x-1' />
					</button>
				</div>

				{/* 4-Item Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							onSelectProduct={onSelectProduct}
							onInquire={onInquire}
							isWishlisted={wishlist.some((item) => item.id === product.id)}
							onToggleWishlist={onToggleWishlist}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
