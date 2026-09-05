import React, { useState, useMemo } from "react";
import { allProducts } from "../data";
import Breadcrumb from "../components/Breadcrumb";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import ProductGrid from "../components/ProductGrid";
import { FiFilter, FiSearch } from "react-icons/fi";

const ProductsPage = ({
	initialCategory = "All",
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
}) => {
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
	};

	const filteredProducts = useMemo(() => {
		return allProducts
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
	}, [selectedCategory, selectedMaterials, maxPrice, sortBy, searchQuery]);

	const breadcrumbItems = [
		{ label: "Home", onClick: () => onNavigate("/") },
		{
			label: "Products",
			onClick: selectedCategory !== "All" ? () => setSelectedCategory("All") : null,
		},
		...(selectedCategory !== "All" ? [{ label: selectedCategory }] : []),
	];

	return (
		<div className='w-full pt-28 pb-24 bg-[#FBFBFB]'>
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
								placeholder='Search furniture...'
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
							<span>Filters</span>
						</button>

						{/* Sort Dropdown */}
						<div className='flex items-center gap-2 text-sm'>
							<label htmlFor='sort-select' className='text-grey-500 hidden sm:inline'>
								Sort by:
							</label>
							<select
								id='sort-select'
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className='bg-white border border-grey-200 rounded-lg px-3 py-2 text-sm text-primary font-medium focus:outline-none focus:border-accent cursor-pointer'
							>
								<option value='popular'>Most Popular</option>
								<option value='price-low'>Price: Low to High</option>
								<option value='price-high'>Price: High to Low</option>
								<option value='newest'>Newest Arrivals</option>
							</select>
						</div>
					</div>
				</div>

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
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
