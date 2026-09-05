import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({
	products = [],
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
}) => {
	if (!products || products.length === 0) return null;

	return (
		<div className='pt-12 border-t border-grey-200'>
			<div className='flex items-center justify-between mb-8'>
				<div>
					<span className='text-xs font-bold uppercase tracking-widest text-accent'>
						Curated Recommendations
					</span>
					<h2 className='text-xl sm:text-2xl font-primary font-bold text-primary mt-1'>
						Related Products
					</h2>
				</div>
				<button
					type='button'
					onClick={() => onNavigate("/products")}
					className='text-xs sm:text-sm font-semibold text-accent hover:text-accent-hover'
				>
					View Complete Catalog →
				</button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{products.map((rel) => (
					<ProductCard
						key={rel.id}
						product={rel}
						onSelectProduct={onSelectProduct}
						onInquire={onInquire}
						isWishlisted={wishlist.some((w) => w.id === rel.id)}
						onToggleWishlist={onToggleWishlist}
					/>
				))}
			</div>
		</div>
	);
};

export default RelatedProducts;
