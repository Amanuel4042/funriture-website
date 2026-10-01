import React from "react";
import ProductCard from "./ProductCard";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";
import useInView from "../hooks/useInView";

const FeaturedProducts = ({
	products = [],
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
}) => {
	const { t } = useLanguage();
	const [sectionRef, isInView] = useInView({ threshold: 0.1 });

	return (
		<section
			ref={sectionRef}
			className='py-20 md:py-28 bg-grey-50 border-b border-grey-200 overflow-hidden'
		>
			<div className='container mx-auto'>
				{/* Header with slide-up & fade animation */}
				<div
					className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-1000 ease-out ${
						isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
					<div>
						<span className='inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent-light px-3 py-1 rounded-full mb-2'>
							{t("featuredSection.badge", "Curated Selection")}
						</span>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-1'>
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
						className='inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm mt-4 md:mt-0 transition-colors group self-start md:self-auto'
					>
						<span>{t("featuredSection.exploreAll", "Explore All Products")}</span>
						<FiArrowRight className='transition-transform group-hover:translate-x-1' />
					</button>
				</div>

				{/* 4-Item Grid with Staggered Entrance Animations */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{products.map((product, index) => {
						const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
						const delayClass = delays[index % delays.length];

						return (
							<div
								key={product.id}
								className={`transition-all duration-700 ease-out ${delayClass} ${
									isInView
										? "opacity-100 translate-y-0 scale-100"
										: "opacity-0 translate-y-12 scale-95"
								}`}
							>
								<ProductCard
									product={product}
									onSelectProduct={onSelectProduct}
									onInquire={onInquire}
									isWishlisted={wishlist.some((item) => item.id === product.id)}
									onToggleWishlist={onToggleWishlist}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
