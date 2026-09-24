import React from "react";
import Logo from "../assets/images/tk-logo.jpg";
import { contactDetails } from "../data";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoYoutube,
	IoLogoPinterest,
} from "react-icons/io";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";

const Footer = ({ onNavigate, onSelectCategory }) => {
	const { t, translateCategory } = useLanguage();

	const quickLinks = [
		{ name: t("nav.home", "Home"), path: "/" },
		{ name: t("nav.about", "About Us"), path: "/about" },
		{ name: t("nav.products", "Product Catalog"), path: "/products" },
		{ name: t("nav.testimonials", "Client Testimonials"), path: "/testimonials" },
		{ name: t("nav.contact", "Get in Touch"), path: "/contact" },
	];

	const footerCategories = [
		{ name: translateCategory("Living Room"), category: "Living Room" },
		{ name: translateCategory("Bedroom"), category: "Bedroom" },
		{ name: translateCategory("Office"), category: "Office" },
		{ name: translateCategory("Outdoor"), category: "Outdoor" },
	];

	const handleNav = (path) => {
		onNavigate(path);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleCategoryClick = (cat) => {
		if (onSelectCategory) {
			onSelectCategory(cat);
		}
		onNavigate("/products");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className='bg-primary text-grey-300 pt-16 pb-12 border-t border-grey-800'>
			<div className='container mx-auto'>
				{/* Top Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-grey-800'>
					{/* Brand Column */}
					<div className='lg:col-span-4'>
						<div
							onClick={() => handleNav("/")}
							className='flex items-center gap-3 cursor-pointer mb-5 group'
						>
							<div className='h-10 w-10 rounded-xl overflow-hidden bg-[#0a0f1d] flex items-center justify-center border border-white/20 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-200'>
								<img src={Logo} alt='TK Craft Logo' className='h-full w-full object-cover scale-110' />
							</div>
							<span className='font-primary font-bold text-2xl text-white tracking-tight'>
								TK <span className='text-accent'>Craft</span>
							</span>
						</div>
						<p className='text-sm text-grey-400 leading-relaxed mb-6 max-w-sm'>
							{t(
								"footer.aboutText",
								"TK Craft is an independent design house committed to sustainable, catalog-led architectural furniture that elevates everyday life."
							)}
						</p>

						{/* Social Icons */}
						<div className='flex items-center gap-3'>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noreferrer'
								aria-label='Instagram'
								className='w-10 h-10 rounded-full bg-grey-800 hover:bg-accent text-white flex items-center justify-center transition-colors'
							>
								<IoLogoInstagram className='text-lg' />
							</a>
							<a
								href='https://pinterest.com'
								target='_blank'
								rel='noreferrer'
								aria-label='Pinterest'
								className='w-10 h-10 rounded-full bg-grey-800 hover:bg-accent text-white flex items-center justify-center transition-colors'
							>
								<IoLogoPinterest className='text-lg' />
							</a>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noreferrer'
								aria-label='Facebook'
								className='w-10 h-10 rounded-full bg-grey-800 hover:bg-accent text-white flex items-center justify-center transition-colors'
							>
								<IoLogoFacebook className='text-lg' />
							</a>
							<a
								href='https://youtube.com'
								target='_blank'
								rel='noreferrer'
								aria-label='YouTube'
								className='w-10 h-10 rounded-full bg-grey-800 hover:bg-accent text-white flex items-center justify-center transition-colors'
							>
								<IoLogoYoutube className='text-lg' />
							</a>
						</div>
					</div>

					{/* Navigation Links */}
					<div className='lg:col-span-2'>
						<h4 className='text-white font-semibold text-sm tracking-wider uppercase mb-5'>
							{t("footer.navigationTitle", "Navigation")}
						</h4>
						<ul className='space-y-3 text-sm'>
							{quickLinks.map((link) => (
								<li key={link.path}>
									<button
										type='button'
										onClick={() => handleNav(link.path)}
										className='text-grey-400 hover:text-white transition-colors focus:outline-none'
									>
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Categories */}
					<div className='lg:col-span-2'>
						<h4 className='text-white font-semibold text-sm tracking-wider uppercase mb-5'>
							{t("footer.collectionsTitle", "Collections")}
						</h4>
						<ul className='space-y-3 text-sm'>
							{footerCategories.map((cat) => (
								<li key={cat.category}>
									<button
										type='button'
										onClick={() => handleCategoryClick(cat.category)}
										className='text-grey-400 hover:text-white transition-colors focus:outline-none'
									>
										{cat.name}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Showroom & Contact Info */}
					<div className='lg:col-span-4'>
						<h4 className='text-white font-semibold text-sm tracking-wider uppercase mb-5'>
							{t("footer.showroomTitle", "Showroom & Inquiries")}
						</h4>
						<ul className='space-y-3.5 text-sm text-grey-400'>
							<li className='flex items-start gap-3'>
								<FiMapPin className='text-accent text-lg mt-0.5 shrink-0' />
								<span>
									{contactDetails.address}, {contactDetails.city}
								</span>
							</li>
							<li className='flex items-center gap-3'>
								<FiPhone className='text-accent text-base shrink-0' />
								<span>
									{contactDetails.phone} / {contactDetails.phoneInternational}
								</span>
							</li>
							<li className='flex items-center gap-3'>
								<FiMail className='text-accent text-base shrink-0' />
								<span>{contactDetails.email}</span>
							</li>
							<li className='flex items-start gap-3'>
								<FiClock className='text-accent text-base mt-0.5 shrink-0' />
								<div>
									<p>{contactDetails.hours.monSat}</p>
									<p className='text-xs text-grey-500'>{contactDetails.hours.sun}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-grey-500 gap-4'>
					<p>{t("footer.copyright", `TK Craft © ${new Date().getFullYear()} — Handcrafted Furniture. All rights reserved.`)}</p>
					<div className='flex items-center gap-6'>
						<button
							type='button'
							onClick={() => handleNav("/about")}
							className='hover:text-grey-300 transition-colors'
						>
							{t("footer.craftsmanshipGuarantee", "Craftsmanship Guarantee")}
						</button>
						<span>•</span>
						<button
							type='button'
							onClick={() => handleNav("/contact")}
							className='hover:text-grey-300 transition-colors'
						>
							{t("footer.bespokeInquiries", "Bespoke Inquiries")}
						</button>
						<span>•</span>
						<button
							type='button'
							onClick={() => handleNav("/testimonials")}
							className='hover:text-grey-300 transition-colors'
						>
							{t("footer.clientReviews", "Client Reviews")}
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
