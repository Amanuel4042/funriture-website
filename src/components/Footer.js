import React from "react";
import Logo from "../assets/images/logo.svg";
import { footerData } from "../data";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoYoutube,
	IoLogoPinterest,
} from "react-icons/io";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const Footer = ({ onNavigate, onSelectCategory }) => {
	const { aboutText, showroom, quickLinks, categories, copyright } = footerData;

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
							className='flex items-center gap-3 cursor-pointer mb-5'
						>
							<img src={Logo} alt='FurniCraft Logo' className='h-8 w-auto brightness-200' />
							<span className='font-primary font-bold text-2xl text-white tracking-tight'>
								Furni<span className='text-accent'>Craft</span>
							</span>
						</div>
						<p className='text-sm text-grey-400 leading-relaxed mb-6 max-w-sm'>
							{aboutText}
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
							Navigation
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
							Collections
						</h4>
						<ul className='space-y-3 text-sm'>
							{categories.map((cat) => (
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
							Showroom & Inquiries
						</h4>
						<ul className='space-y-3.5 text-sm text-grey-400'>
							<li className='flex items-start gap-3'>
								<FiMapPin className='text-accent text-lg mt-0.5 shrink-0' />
								<span>
									{showroom.address}, {showroom.city}
								</span>
							</li>
							<li className='flex items-center gap-3'>
								<FiPhone className='text-accent text-base shrink-0' />
								<span>
									{showroom.phone} / {showroom.phoneInternational}
								</span>
							</li>
							<li className='flex items-center gap-3'>
								<FiMail className='text-accent text-base shrink-0' />
								<span>{showroom.email}</span>
							</li>
							<li className='flex items-start gap-3'>
								<FiClock className='text-accent text-base mt-0.5 shrink-0' />
								<div>
									<p>{showroom.hours.monSat}</p>
									<p className='text-xs text-grey-500'>{showroom.hours.sun}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-grey-500 gap-4'>
					<p>{copyright}</p>
					<div className='flex items-center gap-6'>
						<button
							type='button'
							onClick={() => handleNav("/about")}
							className='hover:text-grey-300 transition-colors'
						>
							Craftsmanship Guarantee
						</button>
						<span>•</span>
						<button
							type='button'
							onClick={() => handleNav("/contact")}
							className='hover:text-grey-300 transition-colors'
						>
							Bespoke Inquiries
						</button>
						<span>•</span>
						<button
							type='button'
							onClick={() => handleNav("/testimonials")}
							className='hover:text-grey-300 transition-colors'
						>
							Client Reviews
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
