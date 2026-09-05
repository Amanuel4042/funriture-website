import React, { useState, useEffect, useRef } from "react";
import {
	FiAlertCircle,
	FiCheckCircle,
	FiClock,
	FiSend,
	FiX,
	FiArrowRight,
} from "react-icons/fi";

const InquiryForm = ({
	inquiryProduct,
	onClearInquiryProduct,
	onNavigate,
}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [productRef, setProductRef] = useState("");
	const [message, setMessage] = useState("");
	const [contactMethod, setContactMethod] = useState("email");

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submittedReceipt, setSubmittedReceipt] = useState(null);

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);

	useEffect(() => {
		if (inquiryProduct) {
			setProductRef(
				`${inquiryProduct.name} (${inquiryProduct.price.toLocaleString()} Birr) [SKU: ${inquiryProduct.id.toUpperCase()}]`
			);
			setMessage(
				(prev) =>
					prev ||
					`Hello FurniCraft team,\n\nI am interested in inquiring about the "${inquiryProduct.name}" (${inquiryProduct.price.toLocaleString()} Birr). Could you please share lead times, available wood finishes, and delivery options to my location?`
			);
		}
	}, [inquiryProduct]);

	const validate = () => {
		const newErrors = {};

		if (!name.trim()) {
			newErrors.name = "Full name is required.";
		}

		if (!email.trim()) {
			newErrors.email = "Email address is required.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			newErrors.email = "Please enter a valid email address.";
		}

		if (!message.trim()) {
			newErrors.message = "Please include a message or inquiry details.";
		} else if (message.trim().length < 10) {
			newErrors.message = "Inquiry message must be at least 10 characters.";
		}

		setErrors(newErrors);

		if (newErrors.name && nameRef.current) {
			nameRef.current.focus();
		} else if (newErrors.email && emailRef.current) {
			emailRef.current.focus();
		} else if (newErrors.message && messageRef.current) {
			messageRef.current.focus();
		}

		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validate()) {
			return;
		}

		setIsSubmitting(true);

		setTimeout(() => {
			const refNumber = "INQ-" + Math.floor(100000 + Math.random() * 900000);
			setSubmittedReceipt({
				refNumber,
				name,
				email,
				phone: phone || "Not provided",
				productRef: productRef || "General Inquiry",
				timestamp: new Date().toLocaleString(),
			});
			setIsSubmitting(false);
			setIsSubmitted(true);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 600);
	};

	const handleResetForm = () => {
		setName("");
		setEmail("");
		setPhone("");
		setProductRef("");
		setMessage("");
		setErrors({});
		setIsSubmitted(false);
		setSubmittedReceipt(null);
		if (onClearInquiryProduct) onClearInquiryProduct();
	};

	if (isSubmitted && submittedReceipt) {
		return (
			<div className='lg:col-span-12 bg-white rounded-3xl border border-grey-200 p-8 sm:p-14 shadow-card max-w-2xl mx-auto text-center animate-fade-in'>
				<div className='w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 text-3xl shadow-sm'>
					<FiCheckCircle />
				</div>

				<span className='inline-block bg-accent-light text-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3'>
					Inquiry Confirmed
				</span>

				<h2 className='text-2xl sm:text-3xl font-primary font-bold text-primary mb-3'>
					Thank You, {submittedReceipt.name}!
				</h2>

				{/* Stated Response SLA per Section 3 Flow 2 */}
				<div className='bg-emerald-50 border border-emerald-200 rounded-2xl p-4.5 my-6 text-left'>
					<div className='flex items-start gap-3'>
						<FiClock className='text-emerald-700 text-lg mt-0.5 shrink-0' />
						<div>
							<h4 className='text-sm font-bold text-emerald-900'>Target Response SLA</h4>
							<p className='text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed'>
								Our interior consultant will review your inquiry and follow up via{" "}
								<strong>{contactMethod}</strong> within <strong>1 business day</strong>.
							</p>
						</div>
					</div>
				</div>

				{/* Receipt details */}
				<div className='bg-grey-50 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 border border-grey-100 mb-8'>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500'>Reference Number:</span>
						<span className='font-mono font-bold text-primary'>
							{submittedReceipt.refNumber}
						</span>
					</div>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500'>Product Referenced:</span>
						<span className='font-semibold text-accent text-right'>
							{submittedReceipt.productRef}
						</span>
					</div>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500'>Email Address:</span>
						<span className='font-medium text-primary'>{submittedReceipt.email}</span>
					</div>
					<div className='flex justify-between py-1'>
						<span className='text-grey-500'>Date & Time:</span>
						<span className='text-grey-600'>{submittedReceipt.timestamp}</span>
					</div>
				</div>

				<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
					<button
						type='button'
						onClick={() => onNavigate("/products")}
						className='btn-primary w-full sm:w-auto px-8'
					>
						<span>Continue Browsing Catalog</span>
						<FiArrowRight />
					</button>

					<button
						type='button'
						onClick={handleResetForm}
						className='btn-secondary w-full sm:w-auto px-6 text-xs'
					>
						Send Another Inquiry
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='lg:col-span-7 bg-white rounded-3xl border border-grey-200 p-8 sm:p-10 shadow-soft'>
			<div className='mb-6'>
				<h2 className='text-xl sm:text-2xl font-primary font-bold text-primary'>
					Catalog Inquiry Form
				</h2>
				<p className='text-xs sm:text-sm text-grey-500 mt-1'>
					Fill out the fields below. We provide quotes, material samples, and lead-time
					estimates.
				</p>
			</div>

			{/* Auto-filled Product Reference Banner */}
			{inquiryProduct && (
				<div className='mb-6 bg-accent-light/70 border border-accent/20 rounded-2xl p-4 flex items-center justify-between gap-4'>
					<div className='flex items-center gap-3'>
						<img
							src={inquiryProduct.image}
							alt={inquiryProduct.name}
							className='w-12 h-12 rounded-xl object-contain bg-white p-1 border border-accent/20'
						/>
						<div>
							<span className='text-[10px] font-bold uppercase tracking-wider text-accent'>
								Inquiring About:
							</span>
							<h4 className='font-bold text-sm text-primary'>{inquiryProduct.name}</h4>
							<p className='text-xs text-grey-500'>
								Catalog Price: {inquiryProduct.price.toLocaleString()} Birr
							</p>
						</div>
					</div>
					<button
						type='button'
						onClick={onClearInquiryProduct}
						className='p-1.5 rounded-lg text-grey-400 hover:text-primary hover:bg-white/60 transition-colors'
						title='Clear attached product'
					>
						<FiX className='text-lg' />
					</button>
				</div>
			)}

			<form onSubmit={handleSubmit} noValidate className='space-y-5'>
				{/* Name */}
				<div>
					<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
						Name <span className='text-rose-500'>*</span>
					</label>
					<input
						ref={nameRef}
						type='text'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
							if (errors.name) setErrors({ ...errors, name: null });
						}}
						placeholder='Your Full Name'
						className={`w-full px-4 py-3 bg-grey-50 border rounded-xl text-sm transition-colors focus:outline-none ${
							errors.name
								? "border-rose-400 bg-rose-50/50 focus:border-rose-500"
								: "border-grey-200 focus:border-accent focus:bg-white"
						}`}
					/>
					{errors.name && (
						<p className='text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium'>
							<FiAlertCircle />
							<span>{errors.name}</span>
						</p>
					)}
				</div>

				{/* Email & Phone */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
					<div>
						<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
							Email <span className='text-rose-500'>*</span>
						</label>
						<input
							ref={emailRef}
							type='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								if (errors.email) setErrors({ ...errors, email: null });
							}}
							placeholder='name@example.com'
							className={`w-full px-4 py-3 bg-grey-50 border rounded-xl text-sm transition-colors focus:outline-none ${
								errors.email
									? "border-rose-400 bg-rose-50/50 focus:border-rose-500"
									: "border-grey-200 focus:border-accent focus:bg-white"
							}`}
						/>
						{errors.email && (
							<p className='text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium'>
								<FiAlertCircle />
								<span>{errors.email}</span>
							</p>
						)}
					</div>

					<div>
						<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
							Phone <span className='text-grey-400 text-[10px]'>(optional)</span>
						</label>
						<input
							type='tel'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder='+1 (555) 000-0000'
							className='w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors'
						/>
					</div>
				</div>

				{/* Product Reference */}
				<div>
					<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
						Product Ref:{" "}
						<span className='text-grey-400 text-[10px]'>
							(auto-filled if coming from product detail)
						</span>
					</label>
					<input
						type='text'
						value={productRef}
						onChange={(e) => setProductRef(e.target.value)}
						placeholder='e.g. Oak Lounge Chair or Custom Table'
						className='w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors'
					/>
				</div>

				{/* Preferred Contact Method */}
				<div>
					<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
						Preferred Contact Method
					</label>
					<div className='flex items-center gap-4 text-sm text-grey-600'>
						<label className='inline-flex items-center gap-2 cursor-pointer'>
							<input
								type='radio'
								name='contactMethod'
								value='email'
								checked={contactMethod === "email"}
								onChange={(e) => setContactMethod(e.target.value)}
								className='text-accent focus:ring-accent accent-accent'
							/>
							<span>Email</span>
						</label>
						<label className='inline-flex items-center gap-2 cursor-pointer'>
							<input
								type='radio'
								name='contactMethod'
								value='phone'
								checked={contactMethod === "phone"}
								onChange={(e) => setContactMethod(e.target.value)}
								className='text-accent focus:ring-accent accent-accent'
							/>
							<span>Phone</span>
						</label>
					</div>
				</div>

				{/* Message */}
				<div>
					<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
						Message / Inquiry Details <span className='text-rose-500'>*</span>
					</label>
					<textarea
						ref={messageRef}
						rows='5'
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
							if (errors.message) setErrors({ ...errors, message: null });
						}}
						placeholder='Please describe the room, dimensions, or questions regarding our materials and delivery...'
						className={`w-full px-4 py-3 bg-grey-50 border rounded-xl text-sm transition-colors focus:outline-none ${
							errors.message
								? "border-rose-400 bg-rose-50/50 focus:border-rose-500"
								: "border-grey-200 focus:border-accent focus:bg-white"
						}`}
					/>
					{errors.message && (
						<p className='text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium'>
							<FiAlertCircle />
							<span>{errors.message}</span>
						</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					disabled={isSubmitting}
					className='btn-primary w-full py-4 text-base font-semibold shadow-md hover:shadow-lg disabled:opacity-60'
				>
					{isSubmitting ? (
						<span className='inline-flex items-center gap-2'>
							<span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
							Processing Inquiry...
						</span>
					) : (
						<span className='inline-flex items-center gap-2'>
							<FiSend />
							<span>Submit Inquiry</span>
						</span>
					)}
				</button>

				<p className='text-center text-xs text-grey-400'>
					We protect your privacy. Your information is only used to respond to this request.
				</p>
			</form>
		</div>
	);
};

export default InquiryForm;
