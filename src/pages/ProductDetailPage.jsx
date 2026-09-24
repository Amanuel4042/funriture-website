import React from "react";
import { allProducts } from "../data";
import Breadcrumb from "../components/Breadcrumb";
import ProductGallery from "../components/ProductGallery";
import ProductInfoPanel from "../components/ProductInfoPanel";
import RelatedProducts from "../components/RelatedProducts";
import { useLanguage } from "../context/languagecontext";

const ProductDetailPage = ({
	productId,
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
}) => {
	const { t, translateProduct } = useLanguage();
	const rawProduct = allProducts.find((p) => p.id === productId) || allProducts[0];
	const product = translateProduct(rawProduct);
	const isWishlisted = wishlist.some((item) => item.id === rawProduct.id);

	const relatedProducts = allProducts
		.filter((p) => p.id !== rawProduct.id && (p.category === rawProduct.category || p.featured))
		.slice(0, 3);

	const breadcrumbItems = [
		{ label: t("nav.home", "Home"), onClick: () => onNavigate("/") },
		{ label: t("nav.products", "Products"), onClick: () => onNavigate("/products") },
		{ label: product.category, onClick: () => onNavigate("/products") },
		{ label: product.name },
	];

	return (
		<div className='w-full pb-24 bg-[#FBFBFB]'>
			{/* HERO SECTION */}
			<section className='relative bg-hero bg-cover bg-center text-white pt-36 pb-14 mb-10 overflow-hidden'>
				{/* Lighter architectural overlay matching home page hero */}
				<div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25 backdrop-blur-[0.5px]' />

				<div className='container mx-auto px-4 relative z-10 text-center max-w-3xl'>
					<span className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase mb-3 text-grey-100 border border-white/20 animate-fade-in'>
						<span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
						{product.category}
					</span>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white mt-1 mb-3 drop-shadow-sm'>
						{product.name}
					</h1>
					<p className='text-base sm:text-lg text-grey-200 font-normal leading-relaxed max-w-xl mx-auto drop-shadow-sm'>
						{product.tagline || product.description}
					</p>
				</div>
			</section>

			<div className='container mx-auto px-4'>
				{/* Breadcrumb */}
				<Breadcrumb items={breadcrumbItems} />

				{/* Product Main Section: Gallery + Info Panel */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24'>
					<ProductGallery product={product} />

					<ProductInfoPanel
						product={product}
						isWishlisted={isWishlisted}
						onToggleWishlist={onToggleWishlist}
						onInquire={onInquire}
					/>
				</div>

				{/* Related Products */}
				<RelatedProducts
					products={relatedProducts}
					onNavigate={onNavigate}
					onSelectProduct={onSelectProduct}
					onInquire={onInquire}
					wishlist={wishlist}
					onToggleWishlist={onToggleWishlist}
				/>
			</div>
		</div>
	);
};

export default ProductDetailPage;
