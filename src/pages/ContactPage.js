import React from "react";
import InquiryForm from "../components/InquiryForm";
import ShowroomInfo from "../components/ShowroomInfo";

const ContactPage = ({ inquiryProduct, onClearInquiryProduct, onNavigate }) => {
	return (
		<div className='w-full pt-28 pb-24 bg-[#FBFBFB]'>
			<div className='container mx-auto px-4 max-w-6xl'>
				{/* PAGE HEADER */}
				<div className='text-center max-w-2xl mx-auto mb-14'>
					<span className='text-xs font-bold uppercase tracking-widest text-accent'>
						Contact & Inquiries
					</span>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-primary mt-2 mb-4'>
						Get in Touch
					</h1>
					<p className='text-base text-grey-600 leading-relaxed'>
						Have questions about custom dimensions, wood finishes, or placing a catalog inquiry?
						Our design specialists are here to assist.
					</p>
				</div>

				{/* MAIN GRID: INQUIRY FORM + SHOWROOM & BUSINESS DETAILS */}
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start'>
					<InquiryForm
						inquiryProduct={inquiryProduct}
						onClearInquiryProduct={onClearInquiryProduct}
						onNavigate={onNavigate}
					/>

					<ShowroomInfo />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
