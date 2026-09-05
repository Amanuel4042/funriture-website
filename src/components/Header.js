import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { navigation } from "../data";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoIosHeart } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

const Header = ({ currentPath, onNavigate, wishlistCount = 0 }) => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Determine if header is on top of dark hero background vs white pages
	const isHome = currentPath === "/";
	const isTransparent = isHome && !scrolled;

	const handleNavClick = (path) => {
		onNavigate(path);
		setMobileOpen(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
				scrolled
					? "bg-white/95 backdrop-blur-md shadow-sm py-4"
					: isHome
					? "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6 text-white"
					: "bg-white/95 backdrop-blur-md border-b border-grey-200 py-5"
			}`}
		>
			<div className='container mx-auto flex items-center justify-between'>
				{/* Brand Logo */}
				<button
					type='button'
					onClick={() => handleNavClick("/")}
					className='flex items-center gap-3 focus:outline-none'
				>
					<img src={Logo} alt='FurniCraft Logo' className='h-7 md:h-8 w-auto' />
					<span
						className={`font-primary font-bold text-xl md:text-2xl tracking-tight transition-colors ${
							isTransparent ? "text-white" : "text-primary"
						}`}
					>
						Furni<span className='text-accent'>Craft</span>
					</span>
				</button>

				{/* Desktop Navigation Links */}
				<nav className='hidden md:flex items-center gap-8 lg:gap-10'>
					{navigation.map((item) => {
						const isActive =
							currentPath === item.path ||
							(item.path !== "/" && currentPath.startsWith(item.path));

						return (
							<button
								key={item.path}
								type='button'
								onClick={() => handleNavClick(item.path)}
								className={`text-sm font-medium tracking-wide transition-all relative py-1 focus:outline-none ${
									isTransparent
										? isActive
											? "text-white font-semibold"
											: "text-white/80 hover:text-white"
										: isActive
										? "text-accent font-semibold"
										: "text-grey-700 hover:text-accent"
								}`}
							>
								{item.name}
								{isActive && (
									<span
										className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
											isTransparent ? "bg-white" : "bg-accent"
										}`}
									/>
								)}
							</button>
						);
					})}
				</nav>

				{/* Right Actions (Wishlist & Contact CTA) */}
				<div className='hidden md:flex items-center gap-4'>
					{/* Saved Items badge */}
					<button
						type='button'
						onClick={() => handleNavClick("/products")}
						className={`relative p-2 rounded-full transition-colors ${
							isTransparent
								? "text-white hover:bg-white/10"
								: "text-grey-700 hover:bg-grey-100"
						}`}
						title={`${wishlistCount} saved item${wishlistCount === 1 ? "" : "s"}`}
					>
						<IoIosHeart className='text-2xl text-rose-500' />
						{wishlistCount > 0 && (
							<span className='absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow'>
								{wishlistCount}
							</span>
						)}
					</button>

					{/* Primary Lead CTA */}
					<button
						type='button'
						onClick={() => handleNavClick("/contact")}
						className='btn-primary text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg'
					>
						<span>Get in Touch</span>
						<FiArrowRight className='text-sm' />
					</button>
				</div>

				{/* Mobile Burger Menu Button */}
				<div className='flex items-center gap-2 md:hidden'>
					{wishlistCount > 0 && (
						<button
							type='button'
							onClick={() => handleNavClick("/products")}
							className='relative p-2 text-rose-500'
						>
							<IoIosHeart className='text-2xl' />
							<span className='absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center'>
								{wishlistCount}
							</span>
						</button>
					)}
					<button
						type='button'
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label='Toggle navigation menu'
						className={`p-2 rounded-lg text-2xl transition-colors ${
							isTransparent ? "text-white" : "text-primary"
						}`}
					>
						{mobileOpen ? <CgClose /> : <CgMenuRight />}
					</button>
				</div>
			</div>

			{/* Mobile Drawer */}
			{mobileOpen && (
				<div
					className='fixed inset-0 top-[68px] z-50 bg-black/50 backdrop-blur-sm md:hidden animate-fade-in'
					onClick={() => setMobileOpen(false)}
				>
					<div
						className='bg-white w-4/5 max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='flex flex-col gap-1'>
							<div className='pb-4 mb-3 border-b border-grey-100 flex items-center justify-between'>
								<span className='text-xs font-bold uppercase tracking-widest text-grey-400'>
									Navigation
								</span>
								<button
									type='button'
									onClick={() => setMobileOpen(false)}
									className='p-1 text-grey-500 hover:text-primary'
								>
									<CgClose className='text-xl' />
								</button>
							</div>

							{navigation.map((item) => {
								const isActive =
									currentPath === item.path ||
									(item.path !== "/" && currentPath.startsWith(item.path));
								return (
									<button
										key={item.path}
										type='button'
										onClick={() => handleNavClick(item.path)}
										className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
											isActive
												? "bg-accent text-white"
												: "text-grey-700 hover:bg-grey-100"
										}`}
									>
										{item.name}
									</button>
								);
							})}
						</div>

						<div className='pt-6 border-t border-grey-100'>
							<button
								type='button'
								onClick={() => handleNavClick("/contact")}
								className='btn-primary w-full text-center py-3'
							>
								Inquire / Contact Us
							</button>
							<p className='text-center text-xs text-grey-400 mt-4'>
								Mon–Sat 9am–6pm | +1 (555) 234-8900
							</p>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
