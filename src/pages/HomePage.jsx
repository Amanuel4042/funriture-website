import React from "react";
import { allProducts, testimonialsData } from "../data";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandTeaser from "../components/BrandTeaser";
import BespokeShowcase from "../components/BespokeShowcase";
import SustainabilityShowcase from "../components/SustainabilityShowcase";
import TestimonialsPreview from "../components/TestimonialsPreview";

const HomePage = ({
	onNavigate,
	onSelectProduct,
	onInquire,
	wishlist = [],
	onToggleWishlist,
}) => {
	const featured = allProducts.filter((p) => p.featured).slice(0, 4);
	const testimonials = testimonialsData.reviews.slice(0, 3);

	return (
		<div className='w-full'>
			{/* SECTION 1: HERO BANNER */}
			<Hero onNavigate={onNavigate} />

			{/* SECTION 2: FEATURED PRODUCTS SHOWCASE WITH ENTRANCE ANIMATIONS */}
			<FeaturedProducts
				products={featured}
				onNavigate={onNavigate}
				onSelectProduct={onSelectProduct}
				onInquire={onInquire}
				wishlist={wishlist}
				onToggleWishlist={onToggleWishlist}
			/>

			{/* SECTION 3: BRAND INTRODUCTION TEASER (Image Left / Text Right) */}
			<BrandTeaser onNavigate={onNavigate} />

			{/* SECTION 4: BESPOKE ARCHITECTURAL SHOWCASE (Text Left / Image Right) */}
			<BespokeShowcase onNavigate={onNavigate} />

			{/* SECTION 5: SUSTAINABILITY & WHITE GLOVE PROMISE (Image Left / Text Right) */}
			<SustainabilityShowcase onNavigate={onNavigate} />

			{/* SECTION 6: TESTIMONIALS PREVIEW */}
			<TestimonialsPreview
				testimonials={testimonials}
				onNavigate={onNavigate}
			/>
		</div>
	);
};

export default HomePage;
