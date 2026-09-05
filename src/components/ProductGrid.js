import React from "react";
import ProductCard from "./ProductCard";
import { FiSearch } from "react-icons/fi";

const ProductGrid = ({
	products = [],
	totalCount = 0,
	visibleCount = 6,
	onLoadMore,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
	selectedCategory,
	selectedMaterials = [],
	maxPrice,
	searchQuery,
	onResetFilters,
	onRemoveCategoryFilter,
	onRemoveMaterialFilter,
}) => {
	const paginatedProducts = products.slice(0, visibleCount);

	return (
		<div className='lg:col-span-9'>
			{/* Active filter pills & count */}
			<div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
				<div className='text-sm text-grey-500'>
					Showing <span className='font-bold text-primary'>{paginatedProducts.length}</span> of{" "}
					<span className='font-bold text-primary'>{totalCount}</span> items
				</div>

				{(selectedCategory !== "All" ||
					selectedMaterials.length > 0 ||
					maxPrice < 100000 ||
					searchQuery) && (
					<div className='flex flex-wrap items-center gap-2'>
						{selectedCategory !== "All" && (
							<span className='inline-flex items-center gap-1 bg-grey-100 text-grey-700 text-xs px-2.5 py-1 rounded-md'>
								{selectedCategory}
								<button
									type='button'
									onClick={onRemoveCategoryFilter}
									className='hover:text-red-500 ml-1 font-bold'
								>
									×
								</button>
							</span>
						)}
						{selectedMaterials.map((m) => (
							<span
								key={m}
								className='inline-flex items-center gap-1 bg-grey-100 text-grey-700 text-xs px-2.5 py-1 rounded-md'
							>
								{m}
								<button
									type='button'
									onClick={() => onRemoveMaterialFilter(m)}
									className='hover:text-red-500 ml-1 font-bold'
								>
									×
								</button>
							</span>
						))}
					</div>
				)}
			</div>

			{/* Grid */}
			{paginatedProducts.length > 0 ? (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{paginatedProducts.map((product) => (
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
			) : (
				<div className='bg-white rounded-2xl border border-grey-200 p-12 text-center my-8'>
					<div className='w-16 h-16 rounded-full bg-grey-100 flex items-center justify-center mx-auto mb-4 text-grey-400 text-2xl'>
						<FiSearch />
					</div>
					<h3 className='font-primary font-bold text-xl text-primary mb-2'>
						No furniture found
					</h3>
					<p className='text-sm text-grey-500 max-w-md mx-auto mb-6'>
						We couldn't find any pieces matching your chosen filters. Try clearing some filters or
						searching for a different keyword.
					</p>
					<button
						type='button'
						onClick={onResetFilters}
						className='btn-secondary font-semibold'
					>
						Clear All Filters
					</button>
				</div>
			)}

			{/* Load More Pagination */}
			{visibleCount < totalCount && (
				<div className='text-center mt-12 pt-8 border-t border-grey-200'>
					<button
						type='button'
						onClick={onLoadMore}
						className='btn-secondary px-8 py-3 font-semibold text-sm shadow-sm hover:shadow'
					>
						<span>Load More Furniture</span>
					</button>
					<p className='text-xs text-grey-400 mt-2'>
						Showing {paginatedProducts.length} of {totalCount} products
					</p>
				</div>
			)}
		</div>
	);
};

export default ProductGrid;
