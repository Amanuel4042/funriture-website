import React from "react";
import ProductCard from "./ProductCard";
import { FiSearch } from "react-icons/fi";
import { IoIosHeart } from "react-icons/io";
import { useLanguage } from "../context/languagecontext";

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
	wishlistOnly = false,
	onToggleWishlistOnly,
}) => {
	const { t, translateCategory, translateMaterial } = useLanguage();
	const paginatedProducts = products.slice(0, visibleCount);

	return (
		<div className='lg:col-span-9'>
			{/* Active filter pills & count */}
			<div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
				<div className='text-sm text-grey-500'>
					{t("productsPage.showingItems", "Showing")}{" "}
					<span className='font-bold text-primary'>{paginatedProducts.length}</span>{" "}
					{t("productsPage.of", "of")}{" "}
					<span className='font-bold text-primary'>{totalCount}</span>{" "}
					{t("productsPage.items", "items")}
				</div>

				{(selectedCategory !== "All" ||
					selectedMaterials.length > 0 ||
					maxPrice < 100000 ||
					searchQuery ||
					wishlistOnly) && (
					<div className='flex flex-wrap items-center gap-2'>
						{wishlistOnly && (
							<span className='inline-flex items-center gap-1.5 bg-rose-100 text-rose-700 text-xs px-2.5 py-1 rounded-md font-semibold'>
								<IoIosHeart className='text-rose-500' />
								<span>{t("productsPage.likedOnlyPill", "Liked Only")}</span>
								<button
									type='button'
									onClick={() => onToggleWishlistOnly && onToggleWishlistOnly(false)}
									className='hover:text-rose-900 ml-1 font-bold'
									title='Clear liked items filter'
								>
									×
								</button>
							</span>
						)}
						{selectedCategory !== "All" && (
							<span className='inline-flex items-center gap-1 bg-grey-100 text-grey-700 text-xs px-2.5 py-1 rounded-md'>
								{translateCategory(selectedCategory)}
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
								{translateMaterial(m)}
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
				<div className='bg-white rounded-2xl border border-grey-200 p-12 text-center my-8 shadow-sm'>
					<div
						className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl ${
							wishlistOnly
								? "bg-rose-50 text-rose-500"
								: "bg-grey-100 text-grey-400"
						}`}
					>
						{wishlistOnly ? <IoIosHeart /> : <FiSearch />}
					</div>
					<h3 className='font-primary font-bold text-xl text-primary mb-2'>
						{wishlistOnly
							? wishlist.length === 0
								? t("productsPage.noProductsFound", "You haven't liked any furniture pieces yet")
								: t("productsPage.noProductsFound", "No liked items match your chosen filters")
							: t("productsPage.noProductsFound", "No furniture found")}
					</h3>
					<p className='text-sm text-grey-500 max-w-md mx-auto mb-6'>
						{wishlistOnly
							? wishlist.length === 0
								? t("productsPage.heroSubtitleLiked", "Browse our furniture collection and click the heart icon on any piece you love to save it here.")
								: t("productsPage.noProductsSub", "Try resetting category, material, or price filters to view all your liked furniture pieces.")
							: t("productsPage.noProductsSub", "We couldn't find any pieces matching your chosen filters. Try clearing some filters or searching for a different keyword.")}
					</p>
					<button
						type='button'
						onClick={() => {
							if (wishlistOnly && onToggleWishlistOnly) {
								onToggleWishlistOnly(false);
							}
							onResetFilters();
						}}
						className='btn-primary font-semibold'
					>
						{t("productsPage.clearAllFilters", "Clear All Filters")}
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
						<span>{t("productsPage.loadMore", "Load More Products")}</span>
					</button>
					<p className='text-xs text-grey-400 mt-2'>
						{t("productsPage.showingItems", "Showing")} {paginatedProducts.length} {t("productsPage.of", "of")} {totalCount} {t("productsPage.items", "items")}
					</p>
				</div>
			)}
		</div>
	);
};

export default ProductGrid;
