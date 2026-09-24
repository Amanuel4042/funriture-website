import React, { useState, useEffect, useRef } from "react";
import {
	FiAlertCircle,
	FiCheckCircle,
	FiClock,
	FiSend,
	FiX,
	FiArrowRight,
} from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";

const InquiryForm = ({
	inquiryProduct,
	onClearInquiryProduct,
	onNavigate,
}) => {
	const { t, translateProduct, isAmharic } = useLanguage();
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

	const localizedProduct = inquiryProduct ? translateProduct(inquiryProduct) : null;
	const currencyText = t("currency", "Birr");

	useEffect(() => {
		if (localizedProduct) {
			setProductRef(
				`${localizedProduct.name} (${localizedProduct.price.toLocaleString()} ${currencyText}) [SKU: ${localizedProduct.id.toUpperCase()}]`
			);
			setMessage(
				(prev) =>
					prev ||
					(isAmharic
						? `${t("inquiryForm.defaultMsgPrefix", "ጤና ይስጥልኝ የቲኬ ክራፍት ቡድን፣\n\nስለ \"")}${localizedProduct.name}${t("inquiryForm.defaultMsgSuffix", "\" የቤት ዕቃ ማወቅ ፈልጌ ነበር። የማድረሻ ጊዜውን፣ የእንጨት ቀለሞችን እና የማድረሻ ሁኔታውን ቢገልፁልኝ ደስ ይለኛል።")}`
						: `Hello TK Craft team,\n\nI am interested in inquiring about the "${localizedProduct.name}" (${localizedProduct.price.toLocaleString()} ${currencyText}). Could you please share lead times, available wood finishes, and delivery options to my location?`)
			);
		}
	}, [localizedProduct, isAmharic, currencyText, t]);

	const validate = () => {
		const newErrors = {};

		if (!name.trim()) {
			newErrors.name = t("inquiryForm.errorName", "Full name is required.");
		}

		if (!email.trim()) {
			newErrors.email = t("inquiryForm.errorEmail", "Email address is required.");
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			newErrors.email = t("inquiryForm.errorEmailValid", "Please enter a valid email address.");
		}

		if (!message.trim()) {
			newErrors.message = t("inquiryForm.errorMessage", "Please include a message or inquiry details.");
		} else if (message.trim().length < 10) {
			newErrors.message = t("inquiryForm.errorMessageLength", "Inquiry message must be at least 10 characters.");
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
				phone: phone || (isAmharic ? "አልተጠቀሰም" : "Not provided"),
				productRef: productRef || (isAmharic ? "አጠቃላይ ጥያቄ" : "General Inquiry"),
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
					{t("inquiryForm.confirmedBadge", "Inquiry Confirmed")}
				</span>

				<h2 className='text-2xl sm:text-3xl font-primary font-bold text-primary mb-3'>
					{t("inquiryForm.thankYouTitle", "Thank You,")} {submittedReceipt.name}!
				</h2>

				{/* Stated Response SLA */}
				<div className='bg-emerald-50 border border-emerald-200 rounded-2xl p-4.5 my-6 text-left'>
					<div className='flex items-start gap-3'>
						<FiClock className='text-emerald-700 text-lg mt-0.5 shrink-0' />
						<div>
							<h4 className='text-sm font-bold text-emerald-900'>
								{t("inquiryForm.slaTitle", "Target Response SLA")}
							</h4>
							<p className='text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed'>
								{t("inquiryForm.slaText", "Our interior consultant will review your inquiry and follow up via")}{" "}
								<strong>{contactMethod === "email" ? t("inquiryForm.contactViaEmail", "Email") : contactMethod === "phone" ? t("inquiryForm.contactViaPhone", "Phone") : "Telegram"}</strong>{" "}
								{t("inquiryForm.slaWithin", "within")}{" "}
								<strong>{t("inquiryForm.slaTime", "1 business day")}</strong>.
							</p>
						</div>
					</div>
				</div>

				{/* Receipt details */}
				<div className='bg-grey-50 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 border border-grey-100 mb-8'>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500'>{t("inquiryForm.refNumber", "Reference Number:")}</span>
						<span className='font-mono font-bold text-primary'>
							{submittedReceipt.refNumber}
						</span>
					</div>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500'>{t("inquiryForm.productRef", "Product Referenced:")}</span>
						<span className='font-semibold text-accent text-right'>
							{submittedReceipt.productRef}
						</span>
					</div>
					<div className='flex justify-between py-1 border-b border-grey-200/60'>
						<span className='text-grey-500'>{t("inquiryForm.emailAddress", "Email Address:")}</span>
						<span className='font-medium text-primary'>{submittedReceipt.email}</span>
					</div>
					<div className='flex justify-between py-1'>
						<span className='text-grey-500'>{t("inquiryForm.dateTime", "Date & Time:")}</span>
						<span className='text-grey-600'>{submittedReceipt.timestamp}</span>
					</div>
				</div>

				<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
					<button
						type='button'
						onClick={() => onNavigate("/products")}
						className='btn-primary w-full sm:w-auto px-8'
					>
						<span>{t("inquiryForm.continueBrowsing", "Continue Browsing Catalog")}</span>
						<FiArrowRight />
					</button>

					<button
						type='button'
						onClick={handleResetForm}
						className='btn-secondary w-full sm:w-auto px-6 text-xs'
					>
						{t("inquiryForm.sendAnother", "Send Another Inquiry")}
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='lg:col-span-7 bg-white rounded-3xl border border-grey-200 p-8 sm:p-10 shadow-soft'>
			<div className='mb-6'>
				<h2 className='text-xl sm:text-2xl font-primary font-bold text-primary'>
					{t("inquiryForm.title", "Catalog Inquiry Form")}
				</h2>
				<p className='text-xs sm:text-sm text-grey-500 mt-1'>
					{t(
						"inquiryForm.subtitle",
						"Fill out the fields below. We provide quotes, material samples, and lead-time estimates."
					)}
				</p>
			</div>

			{/* Auto-filled Product Reference Banner */}
			{localizedProduct && (
				<div className='mb-6 bg-accent-light/70 border border-accent/20 rounded-2xl p-4 flex items-center justify-between gap-4'>
					<div className='flex items-center gap-3'>
						<img
							src={localizedProduct.image}
							alt={localizedProduct.name}
							className='w-12 h-12 rounded-xl object-contain bg-white p-1 border border-accent/20'
						/>
						<div>
							<span className='text-[10px] font-bold uppercase tracking-wider text-accent'>
								{t("inquiryForm.inquiringAbout", "Inquiring About:")}
							</span>
							<h4 className='font-bold text-sm text-primary'>{localizedProduct.name}</h4>
							<p className='text-xs text-grey-500'>
								{t("inquiryForm.catalogPrice", "Catalog Price:")} {localizedProduct.price.toLocaleString()} {currencyText}
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
						{t("inquiryForm.nameLabel", "Name")} <span className='text-rose-500'>*</span>
					</label>
					<input
						ref={nameRef}
						type='text'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
							if (errors.name) setErrors({ ...errors, name: null });
						}}
						placeholder={t("inquiryForm.namePlaceholder", "Your Full Name")}
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
							{t("inquiryForm.emailLabel", "Email Address")} <span className='text-rose-500'>*</span>
						</label>
						<input
							ref={emailRef}
							type='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								if (errors.email) setErrors({ ...errors, email: null });
							}}
							placeholder={t("inquiryForm.emailPlaceholder", "name@example.com")}
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
							{t("inquiryForm.phoneLabel", "Phone Number")}
						</label>
						<input
							type='tel'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder={t("inquiryForm.phonePlaceholder", "+251 911 234 567 (Optional)")}
							className='w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors'
						/>
					</div>
				</div>

				{/* Product Reference */}
				<div>
					<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
						{t("inquiryForm.productRef", "Product Ref:")}
					</label>
					<input
						type='text'
						value={productRef}
						onChange={(e) => setProductRef(e.target.value)}
						placeholder={isAmharic ? "ምሳሌ፡ የኦክ እንጨት ላውንጅ ወንበር" : "e.g. Oak Lounge Chair or Custom Table"}
						className='w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors'
					/>
				</div>

				{/* Preferred Contact Method */}
				<div>
					<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
						{t("inquiryForm.preferredContactLabel", "Preferred Contact Method")}
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
							<span>{t("inquiryForm.contactViaEmail", "Email")}</span>
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
							<span>{t("inquiryForm.contactViaPhone", "Phone Call / SMS")}</span>
						</label>
					</div>
				</div>

				{/* Message */}
				<div>
					<label className='block text-xs font-bold uppercase tracking-wider text-grey-700 mb-1.5'>
						{t("inquiryForm.messageLabel", "Message / Inquiry Details")} <span className='text-rose-500'>*</span>
					</label>
					<textarea
						ref={messageRef}
						rows='5'
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
							if (errors.message) setErrors({ ...errors, message: null });
						}}
						placeholder={t("inquiryForm.messagePlaceholder", "Please describe the room, dimensions, or questions regarding our materials and delivery...")}
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
							{t("inquiryForm.submittingBtn", "Sending Inquiry...")}
						</span>
					) : (
						<span className='inline-flex items-center gap-2'>
							<FiSend />
							<span>{t("inquiryForm.submitBtn", "Send Inquiry")}</span>
						</span>
					)}
				</button>
			</form>
		</div>
	);
};

export default InquiryForm;
