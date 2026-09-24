import React, { useState, useMemo } from "react";
import { allProducts } from "../data";
import Breadcrumb from "../components/Breadcrumb";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import ProductGrid from "../components/ProductGrid";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoIosHeart } from "react-icons/io";
import { useLanguage } from "../context/languagecontext";

const ProductsPage = ({
	initialCategory = "All",
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
	wishlistOnly = false,
	onToggleWishlistOnly,
}) => {
	const { t, translateCategory } = useLanguage();
	const [selectedCategory, setSelectedCategory] = useState(initialCategory);
	const [selectedMaterials, setSelectedMaterials] = useState([]);
	const [maxPrice, setMaxPrice] = useState(100000);
	const [sortBy, setSortBy] = useState("popular");
	const [searchQuery, setSearchQuery] = useState("");
	const [visibleCount, setVisibleCount] = useState(6);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	const handleToggleMaterial = (mat) => {
		setSelectedMaterials((prev) =>
			prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
		);
	};

	const handleResetFilters = () => {
		setSelectedCategory("All");
		setSelectedMaterials([]);
		setMaxPrice(100000);
		setSearchQuery("");
		setSortBy("popular");
		if (onToggleWishlistOnly) onToggleWishlistOnly(false);
	};

	const filteredProducts = useMemo(() => {
		// When wishlistOnly is active, source products are ONLY those liked by the user
		const baseProducts = wishlistOnly
			? allProducts.filter((product) =>
					wishlist.some((item) => item.id === product.id)
			  )
			: allProducts;

		return baseProducts
			.filter((product) => {
				if (selectedCategory !== "All" && product.category !== selectedCategory) {
					return false;
				}
				if (
					selectedMaterials.length > 0 &&
					!selectedMaterials.includes(product.material)
				) {
					return false;
				}
				if (product.price > maxPrice) {
					return false;
				}
				if (searchQuery.trim() !== "") {
					const query = searchQuery.toLowerCase();
					const matchName = product.name.toLowerCase().includes(query);
					const matchDesc = product.description.toLowerCase().includes(query);
					const matchCategory = product.category.toLowerCase().includes(query);
					if (!matchName && !matchDesc && !matchCategory) {
						return false;
					}
				}
				return true;
			})
			.sort((a, b) => {
				if (sortBy === "price-low") return a.price - b.price;
				if (sortBy === "price-high") return b.price - a.price;
				if (sortBy === "newest") {
					if (a.badge === "New Arrival") return -1;
					if (b.badge === "New Arrival") return 1;
					return 0;
				}
				return b.rating - a.rating;
			});
	}, [wishlistOnly, wishlist, selectedCategory, selectedMaterials, maxPrice, sortBy, searchQuery]);

	const breadcrumbItems = [
		{ label: t("nav.home", "Home"), onClick: () => onNavigate("/") },
		{
			label: t("nav.products", "Products"),
			onClick: () => {
				if (onToggleWishlistOnly) onToggleWishlistOnly(false);
				if (selectedCategory !== "All") setSelectedCategory("All");
			},
		},
		...(wishlistOnly
			? [{ label: `${t("nav.likedItems", "Liked Items")} (${wishlist.length})` }]
			: selectedCategory !== "All"
			? [{ label: translateCategory(selectedCategory) }]
			: []),
	];

	return (
		<div className='w-full pb-24 bg-[#FBFBFB]'>
			{/* HERO SECTION */}
			<section className='relative bg-hero bg-cover bg-center text-white pt-36 pb-20 mb-10 overflow-hidden'>
				{/* Lighter architectural overlay matching home page hero */}
				<div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25 backdrop-blur-[0.5px]' />

				<div className='container mx-auto px-4 relative z-10 text-center max-w-3xl'>
					<span className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase mb-4 text-grey-100 border border-white/20 animate-fade-in'>
						<span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
						{wishlistOnly ? t("productsPage.heroBadgeLiked", "Personal Collection") : t("productsPage.heroBadgeCatalog", "Architectural Catalog")}
					</span>
					<h1 className='text-3xl sm:text-5xl md:text-6xl font-primary font-bold text-white mt-2 mb-4 drop-shadow-sm'>
						{wishlistOnly ? t("productsPage.heroTitleLiked", "Your Liked Furniture") : t("productsPage.heroTitleCatalog", "Curated Furniture Collection")}
					</h1>
					<p className='text-base sm:text-lg md:text-xl text-grey-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm'>
						{wishlistOnly
							? t("productsPage.heroSubtitleLiked", "Review and inquire about all the bespoke furniture pieces you have saved to your personal collection.")
							: t("productsPage.heroSubtitleCatalog", "Discover bespoke, handcrafted living room, bedroom, office, and outdoor pieces designed for architectural calm.")}
					</p>
				</div>
			</section>

			<div className='container mx-auto px-4'>
				{/* Top Bar: Breadcrumb + Search + Sort Controls */}
				<div className='flex flex-col md:flex-row md:items-center justify-between pb-2 mb-8 gap-4'>
					<Breadcrumb items={breadcrumbItems} />

					<div className='flex flex-wrap items-center gap-3 pb-6 border-b md:border-b-0 border-grey-200'>
						{/* Search Input */}
						<div className='relative flex-1 sm:w-64'>
							<FiSearch className='absolute left-3.5 top-1/2 -translate-y-1/2 text-grey-400 text-sm' />
							<input
								type='text'
								placeholder={t("productsPage.searchPlaceholder", "Search furniture...")}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className='w-full pl-9 pr-3 py-2 bg-white border border-grey-200 rounded-lg text-sm text-primary placeholder-grey-400 focus:outline-none focus:border-accent'
							/>
						</div>

						{/* Mobile Filters Toggle Button */}
						<button
							type='button'
							onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
							className='lg:hidden inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-grey-200 rounded-lg text-sm font-medium text-grey-700 hover:bg-grey-50'
						>
							<FiFilter className='text-accent' />
							<span>{t("productsPage.filtersBtn", "Filters")}</span>
						</button>

						{/* Sort Dropdown */}
						<div className='flex items-center gap-2 text-sm'>
							<label htmlFor='sort-select' className='text-grey-500 hidden sm:inline'>
								{t("productsPage.sortByLabel", "Sort by:")}
							</label>
							<select
								id='sort-select'
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className='bg-white border border-grey-200 rounded-lg px-3 py-2 text-sm text-primary font-medium focus:outline-none focus:border-accent cursor-pointer'
							>
								<option value='popular'>{t("productsPage.sortPopular", "Most Popular")}</option>
								<option value='price-low'>{t("productsPage.sortPriceLow", "Price: Low to High")}</option>
								<option value='price-high'>{t("productsPage.sortPriceHigh", "Price: High to Low")}</option>
								<option value='newest'>{t("productsPage.sortNewest", "Newest Arrivals")}</option>
							</select>
						</div>
					</div>
				</div>

				{/* Liked Items Active Mode Banner */}
				{wishlistOnly && (
					<div className='mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 flex flex-wrap items-center justify-between gap-4 shadow-sm'>
						<div className='flex items-center gap-3.5'>
							<div className='w-11 h-11 rounded-xl bg-rose-500 text-white flex items-center justify-center text-2xl shadow-sm'>
								<IoIosHeart />
							</div>
							<div>
								<h3 className='text-base font-bold text-primary'>
									{t("productsPage.likedBannerTitle", "Showing Liked Items Only")} ({wishlist.length})
								</h3>
								<p className='text-xs text-grey-600'>
									{t("productsPage.likedBannerSub", "Only the furniture pieces you have saved with the heart icon are displayed.")}
								</p>
							</div>
						</div>
						<button
							type='button'
							onClick={() => onToggleWishlistOnly && onToggleWishlistOnly(false)}
							className='text-xs font-bold text-rose-700 hover:text-rose-800 bg-white border border-rose-300 hover:bg-rose-100/50 px-4 py-2 rounded-xl transition-all shadow-sm'
						>
							{t("productsPage.showFullCatalog", "Show Full Catalog")}
						</button>
					</div>
				)}

				{/* Main Layout: Filter Sidebar + Product Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
					<ProductFilterSidebar
						selectedCategory={selectedCategory}
						onSelectCategory={setSelectedCategory}
						selectedMaterials={selectedMaterials}
						onToggleMaterial={handleToggleMaterial}
						maxPrice={maxPrice}
						onChangeMaxPrice={setMaxPrice}
						onResetFilters={handleResetFilters}
						isOpenMobile={mobileFiltersOpen}
						onCloseMobile={() => setMobileFiltersOpen(false)}
						wishlistCount={wishlist.length}
						wishlistOnly={wishlistOnly}
						onToggleWishlistOnly={onToggleWishlistOnly}
					/>

					<ProductGrid
						products={filteredProducts}
						totalCount={filteredProducts.length}
						visibleCount={visibleCount}
						onLoadMore={() => setVisibleCount((prev) => prev + 6)}
						onSelectProduct={onSelectProduct}
						onInquire={onInquire}
						wishlist={wishlist}
						onToggleWishlist={onToggleWishlist}
						selectedCategory={selectedCategory}
						selectedMaterials={selectedMaterials}
						maxPrice={maxPrice}
						searchQuery={searchQuery}
						onResetFilters={handleResetFilters}
						onRemoveCategoryFilter={() => setSelectedCategory("All")}
						onRemoveMaterialFilter={handleToggleMaterial}
						wishlistOnly={wishlistOnly}
						onToggleWishlistOnly={onToggleWishlistOnly}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
