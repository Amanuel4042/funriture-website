import React, { useState, useMemo } from "react";
import { testimonialsData, categoriesList, allProducts } from "../data";
import RatingSummary from "../components/RatingSummary";
import TestimonialCards from "../components/TestimonialCards";
import ReviewModal from "../components/ReviewModal";
import { FiEdit3 } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";

const TestimonialsPage = ({ onSelectProduct }) => {
	const { t, translateCategory } = useLanguage();
	const [activeCategory, setActiveCategory] = useState("All");
	const [reviewsList, setReviewsList] = useState(testimonialsData.reviews);
	const [showSubmitModal, setShowSubmitModal] = useState(false);

	const filteredReviews = useMemo(() => {
		if (activeCategory === "All") return reviewsList;
		return reviewsList.filter((r) => r.category === activeCategory);
	}, [activeCategory, reviewsList]);

	const handleAddReview = (formData) => {
		const newReview = {
			id: Date.now(),
			quote: `“${formData.quote.replace(/^[“"]|[”"]$/g, "")}”`,
			author: formData.name,
			location: formData.location || "Verified Client",
			role: "Homeowner",
			rating: Number(formData.rating),
			product: formData.productName,
			productId:
				allProducts.find((p) => p.name === formData.productName)?.id || "oak-lounge-chair",
			category: formData.category,
			avatar: testimonialsData.reviews[0].avatar,
			date: "Just now",
		};
		setReviewsList([newReview, ...reviewsList]);
	};

	return (
		<div className='w-full pb-24 bg-[#FBFBFB]'>
			{/* HERO SECTION */}
			<section className='relative bg-hero bg-cover bg-center text-white pt-36 pb-20 mb-12 overflow-hidden'>
				{/* Lighter architectural overlay matching home page hero */}
				<div className='absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25 backdrop-blur-[0.5px]' />

				<div className='container mx-auto px-4 relative z-10 text-center max-w-3xl'>
					<span className='inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase mb-4 text-grey-100 border border-white/20 animate-fade-in'>
						<span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
						{t("testimonialsPage.heroBadge", "Client Experiences")}
					</span>
					<h1 className='text-3xl sm:text-5xl md:text-6xl font-primary font-bold text-white mt-2 mb-4 drop-shadow-sm'>
						{t("testimonialsPage.heroTitle", "Loved by Designers & Homeowners")}
					</h1>
					<p className='text-base sm:text-lg md:text-xl text-grey-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm'>
						{t("testimonialsPage.heroSubtitle", "Discover genuine reviews, home installations, and testimonials from interior architects and homeowners who have furnished with TK Craft.")}
					</p>
				</div>
			</section>

			<div className='container mx-auto px-4 max-w-6xl'>
				{/* SECTION 1: RATING SUMMARY */}
				<RatingSummary />

				{/* SECTION 2: CATEGORY FILTER TABS */}
				<div className='flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12'>
					{categoriesList.map((cat) => {
						const isSelected = activeCategory === cat;
						const label = cat === "All" ? t("testimonialsPage.allCategory", "All") : translateCategory(cat);
						return (
							<button
								key={cat}
								type='button'
								onClick={() => setActiveCategory(cat)}
								className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
									isSelected
										? "bg-accent text-white shadow-sm"
										: "bg-white text-grey-600 border border-grey-200 hover:border-grey-300 hover:text-primary"
								}`}
							>
								{label}
							</button>
						);
					})}
				</div>

				{/* SECTION 3: TESTIMONIAL CARDS (2x2 GRID) */}
				<TestimonialCards
					reviews={filteredReviews}
					onSelectProduct={onSelectProduct}
				/>

				{/* SECTION 4: SUBMIT-A-REVIEW CTA BANNER */}
				<div className='bg-white rounded-3xl border border-grey-200 p-8 sm:p-12 text-center shadow-soft max-w-3xl mx-auto'>
					<span className='text-xs font-bold uppercase tracking-widest text-accent'>
						{t("testimonialsPage.shareExperience", "Share Your Experience")}
					</span>
					<h3 className='text-2xl sm:text-3xl font-primary font-bold text-primary mt-2 mb-3'>
						{t("testimonialsPage.shareTitle", "Happy with your purchase? Leave a review")}
					</h3>
					<p className='text-sm text-grey-500 max-w-md mx-auto mb-8'>
						{t("testimonialsPage.shareSubtitle", "Help fellow homeowners and interior designers discover the right handcrafted piece for their spaces.")}
					</p>

					<button
						type='button'
						onClick={() => setShowSubmitModal(true)}
						className='btn-primary px-8 py-3.5'
					>
						<FiEdit3 className='text-lg' />
						<span>{t("testimonialsPage.submitBtn", "Submit a testimonial")}</span>
					</button>
				</div>
			</div>

			{/* SUBMIT REVIEW MODAL */}
			<ReviewModal
				isOpen={showSubmitModal}
				onClose={() => setShowSubmitModal(false)}
				onSubmitReview={handleAddReview}
			/>
		</div>
	);
};

export default TestimonialsPage;
