import React, { useState } from "react";
import { FiX, FiCheck } from "react-icons/fi";

const ReviewModal = ({ isOpen, onClose, onSubmitReview }) => {
	const [formData, setFormData] = useState({
		name: "",
		location: "",
		productName: "Oak Lounge Chair",
		category: "Living Room",
		rating: 5,
		quote: "",
	});
	const [submittedSuccess, setSubmittedSuccess] = useState(false);

	if (!isOpen) return null;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name.trim() || !formData.quote.trim()) return;

		onSubmitReview(formData);
		setSubmittedSuccess(true);
		setTimeout(() => {
			setSubmittedSuccess(false);
			onClose();
			setFormData({
				name: "",
				location: "",
				productName: "Oak Lounge Chair",
				category: "Living Room",
				rating: 5,
				quote: "",
			});
		}, 1800);
	};

	return (
		<div
			className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4'
			onClick={onClose}
		>
			<div
				className='bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-fade-in max-h-[90vh] overflow-y-auto'
				onClick={(e) => e.stopPropagation()}
			>
				<button
					type='button'
					onClick={onClose}
					className='absolute top-6 right-6 text-grey-400 hover:text-primary'
				>
					<FiX className='text-xl' />
				</button>

				{submittedSuccess ? (
					<div className='text-center py-12'>
						<div className='w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl'>
							<FiCheck />
						</div>
						<h4 className='font-primary font-bold text-2xl text-primary mb-2'>
							Thank You for Your Review!
						</h4>
						<p className='text-sm text-grey-500'>
							Your feedback has been submitted and added to our testimonials showcase.
						</p>
					</div>
				) : (
					<>
						<div className='mb-6'>
							<span className='text-xs font-bold uppercase tracking-widest text-accent'>
								Client Feedback
							</span>
							<h3 className='text-xl font-primary font-bold text-primary mt-1'>
								Submit a Testimonial
							</h3>
							<p className='text-xs text-grey-500 mt-1'>
								Share how your FurniCraft piece looks and performs in your home.
							</p>
						</div>

						<form onSubmit={handleSubmit} className='space-y-4'>
							<div>
								<label className='block text-xs font-semibold text-grey-700 mb-1'>
									Your Full Name *
								</label>
								<input
									type='text'
									required
									placeholder='e.g. Sarah Jenkins'
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className='w-full px-3.5 py-2.5 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent'
								/>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div>
									<label className='block text-xs font-semibold text-grey-700 mb-1'>
										Location / City
									</label>
									<input
										type='text'
										placeholder='e.g. Boston, MA'
										value={formData.location}
										onChange={(e) =>
											setFormData({ ...formData, location: e.target.value })
										}
										className='w-full px-3.5 py-2.5 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent'
									/>
								</div>

								<div>
									<label className='block text-xs font-semibold text-grey-700 mb-1'>
										Rating *
									</label>
									<select
										value={formData.rating}
										onChange={(e) =>
											setFormData({ ...formData, rating: Number(e.target.value) })
										}
										className='w-full px-3.5 py-2.5 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent'
									>
										<option value='5'>★★★★★ (5 Stars)</option>
										<option value='4'>★★★★☆ (4 Stars)</option>
										<option value='3'>★★★☆☆ (3 Stars)</option>
									</select>
								</div>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div>
									<label className='block text-xs font-semibold text-grey-700 mb-1'>
										Furniture Category
									</label>
									<select
										value={formData.category}
										onChange={(e) =>
											setFormData({ ...formData, category: e.target.value })
										}
										className='w-full px-3.5 py-2.5 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent'
									>
										<option value='Living Room'>Living Room</option>
										<option value='Bedroom'>Bedroom</option>
										<option value='Office'>Office</option>
										<option value='Outdoor'>Outdoor</option>
									</select>
								</div>

								<div>
									<label className='block text-xs font-semibold text-grey-700 mb-1'>
										Product Purchased
									</label>
									<input
										type='text'
										placeholder='e.g. Oak Lounge Chair'
										value={formData.productName}
										onChange={(e) =>
											setFormData({ ...formData, productName: e.target.value })
										}
										className='w-full px-3.5 py-2.5 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent'
									/>
								</div>
							</div>

							<div>
								<label className='block text-xs font-semibold text-grey-700 mb-1'>
									Your Review / Experience *
								</label>
								<textarea
									rows='4'
									required
									placeholder='Tell us about the craftsmanship, delivery, and how it looks in your space...'
									value={formData.quote}
									onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
									className='w-full px-3.5 py-2.5 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent'
								/>
							</div>

							<div className='pt-2 flex items-center justify-end gap-3'>
								<button
									type='button'
									onClick={onClose}
									className='btn-secondary py-2.5 px-4 text-xs'
								>
									Cancel
								</button>
								<button type='submit' className='btn-primary py-2.5 px-6 text-xs'>
									Submit Review
								</button>
							</div>
						</form>
					</>
				)}
			</div>
		</div>
	);
};

export default ReviewModal;
