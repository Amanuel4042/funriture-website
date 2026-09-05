import React, { useState, useMemo } from "react";
import { testimonialsData, categoriesList, allProducts } from "../data";
import RatingSummary from "../components/RatingSummary";
import TestimonialCards from "../components/TestimonialCards";
import ReviewModal from "../components/ReviewModal";
import { FiEdit3 } from "react-icons/fi";

const TestimonialsPage = ({ onSelectProduct }) => {
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
		<div className='w-full pt-28 pb-24 bg-[#FBFBFB]'>
			<div className='container mx-auto px-4 max-w-6xl'>
				{/* SECTION 1: RATING SUMMARY */}
				<RatingSummary />

				{/* SECTION 2: CATEGORY FILTER TABS */}
				<div className='flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12'>
					{categoriesList.map((cat) => {
						const isSelected = activeCategory === cat;
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
								{cat}
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
						Share Your Experience
					</span>
					<h3 className='text-2xl sm:text-3xl font-primary font-bold text-primary mt-2 mb-3'>
						Happy with your purchase? Leave a review
					</h3>
					<p className='text-sm text-grey-500 max-w-md mx-auto mb-8'>
						Help fellow homeowners and interior designers discover the right handcrafted piece for
						their spaces.
					</p>

					<button
						type='button'
						onClick={() => setShowSubmitModal(true)}
						className='btn-primary px-8 py-3.5'
					>
						<FiEdit3 className='text-lg' />
						<span>Submit a testimonial</span>
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
