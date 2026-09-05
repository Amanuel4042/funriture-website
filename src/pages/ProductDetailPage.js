import React from "react";
import { allProducts } from "../data";
import Breadcrumb from "../components/Breadcrumb";
import ProductGallery from "../components/ProductGallery";
import ProductInfoPanel from "../components/ProductInfoPanel";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetailPage = ({
	productId,
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
}) => {
	const product = allProducts.find((p) => p.id === productId) || allProducts[0];
	const isWishlisted = wishlist.some((item) => item.id === product.id);

	const relatedProducts = allProducts
		.filter((p) => p.id !== product.id && (p.category === product.category || p.featured))
		.slice(0, 3);

	const breadcrumbItems = [
		{ label: "Home", onClick: () => onNavigate("/") },
		{ label: "Products", onClick: () => onNavigate("/products") },
		{ label: product.category, onClick: () => onNavigate("/products") },
		{ label: product.name },
	];

	return (
		<div className='w-full pt-28 pb-24 bg-[#FBFBFB]'>
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
