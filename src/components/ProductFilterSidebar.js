import React from "react";
import { categoriesList, materialsList, allProducts } from "../data";
import { FiFilter, FiRotateCcw } from "react-icons/fi";

const ProductFilterSidebar = ({
	selectedCategory,
	onSelectCategory,
	selectedMaterials,
	onToggleMaterial,
	maxPrice,
	onChangeMaxPrice,
	onResetFilters,
	isOpenMobile,
	onCloseMobile,
}) => {
	return (
		<aside
			className={`lg:col-span-3 bg-white rounded-2xl border border-grey-200 p-6 shadow-sm ${
				isOpenMobile
					? "fixed inset-x-4 top-24 bottom-6 z-50 overflow-y-auto max-h-[85vh] shadow-2xl block"
					: "hidden lg:block"
			}`}
		>
			<div className='flex items-center justify-between pb-4 mb-6 border-b border-grey-100'>
				<h3 className='font-primary font-bold text-lg text-primary flex items-center gap-2'>
					<FiFilter className='text-accent' />
					<span>Filters</span>
				</h3>
				<button
					type='button'
					onClick={onResetFilters}
					className='text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1'
				>
					<FiRotateCcw className='text-xs' />
					<span>Reset</span>
				</button>
			</div>

			{/* Category Options */}
			<div className='mb-7'>
				<h4 className='text-xs font-bold uppercase tracking-wider text-grey-500 mb-3'>
					Categories
				</h4>
				<div className='space-y-1.5'>
					{categoriesList.map((cat) => {
						const isSelected = selectedCategory === cat;
						const count =
							cat === "All"
								? allProducts.length
								: allProducts.filter((p) => p.category === cat).length;

						return (
							<button
								key={cat}
								type='button'
								onClick={() => onSelectCategory(cat)}
								className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left ${
									isSelected
										? "bg-accent-light text-accent font-bold"
										: "text-grey-600 hover:bg-grey-50"
								}`}
							>
								<span>{cat}</span>
								<span className='text-xs opacity-60 font-mono'>({count})</span>
							</button>
						);
					})}
				</div>
			</div>

			{/* Price Range Slider */}
			<div className='mb-7 pt-4 border-t border-grey-100'>
				<div className='flex items-center justify-between mb-2'>
					<h4 className='text-xs font-bold uppercase tracking-wider text-grey-500'>
						Max Price
					</h4>
					<span className='text-sm font-bold text-accent'>
						{maxPrice.toLocaleString()} Birr
					</span>
				</div>
				<input
					type='range'
					min='10000'
					max='100000'
					step='2500'
					value={maxPrice}
					onChange={(e) => onChangeMaxPrice(Number(e.target.value))}
					className='w-full accent-accent cursor-pointer'
				/>
				<div className='flex justify-between text-[11px] text-grey-400 mt-1'>
					<span>10,000 Birr</span>
					<span>100,000 Birr</span>
				</div>
			</div>

			{/* Material Filter Checkboxes */}
			<div className='mb-6 pt-4 border-t border-grey-100'>
				<h4 className='text-xs font-bold uppercase tracking-wider text-grey-500 mb-3'>
					Material
				</h4>
				<div className='space-y-2'>
					{materialsList.map((mat) => {
						const isChecked = selectedMaterials.includes(mat);
						return (
							<label
								key={mat}
								className='flex items-center gap-3 text-sm text-grey-600 cursor-pointer hover:text-primary select-none'
							>
								<input
									type='checkbox'
									checked={isChecked}
									onChange={() => onToggleMaterial(mat)}
									className='w-4 h-4 rounded border-grey-300 text-accent focus:ring-accent accent-accent'
								/>
								<span>{mat}</span>
							</label>
						);
					})}
				</div>
			</div>

			{isOpenMobile && (
				<button
					type='button'
					onClick={onCloseMobile}
					className='btn-primary w-full text-center py-2.5 mt-4 lg:hidden'
				>
					Apply Filters
				</button>
			)}
		</aside>
	);
};

export default ProductFilterSidebar;
