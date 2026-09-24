import React, { useEffect, useState } from "react";
import Logo from "../assets/images/tk-logo.jpg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoIosHeart } from "react-icons/io";
import { useLanguage } from "../context/languagecontext";
import LanguageToggle from "./LanguageToggle";

const Header = ({
	currentPath,
	onNavigate,
	wishlistCount = 0,
	onWishlistClick,
}) => {
	const { t } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	const navItems = [
		{ name: t("nav.home", "Home"), path: "/" },
		{ name: t("nav.about", "About Us"), path: "/about" },
		{ name: t("nav.products", "Products"), path: "/products" },
		{ name: t("nav.testimonials", "Testimonials"), path: "/testimonials" },
		{ name: t("nav.contact", "Contact"), path: "/contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// All navigation pages have the dark hero section at top; header has dark shadow gradient when unscrolled
	const isTransparent = !scrolled;

	const handleNavClick = (path) => {
		onNavigate(path);
		setMobileOpen(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
				scrolled
					? "bg-white/95 backdrop-blur-md shadow-sm py-3.5 text-primary"
					: "bg-gradient-to-b from-black/75 via-black/35 to-transparent py-5 text-white"
			}`}
		>
			<div className='container mx-auto flex items-center justify-between'>
				{/* Brand Logo */}
				<button
					type='button'
					onClick={() => handleNavClick("/")}
					className='flex items-center gap-3 focus:outline-none group'
				>
					<div className='h-9 w-9 md:h-10 md:w-10 rounded-xl overflow-hidden bg-[#0a0f1d] flex items-center justify-center border border-white/20 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-200'>
						<img src={Logo} alt='TK Craft Logo' className='h-full w-full object-cover scale-110' />
					</div>
					<span
						className={`font-primary font-bold text-xl md:text-2xl tracking-tight transition-colors ${
							isTransparent ? "text-white" : "text-primary"
						}`}
					>
						TK <span className='text-accent'>Craft</span>
					</span>
				</button>

				{/* Desktop Navigation Links */}
				<nav className='hidden md:flex items-center gap-6 lg:gap-8'>
					{navItems.map((item) => {
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

				{/* Right Actions (Language Toggle, Wishlist) */}
				<div className='hidden md:flex items-center gap-3'>
					{/* Language Toggle */}
					<LanguageToggle isTransparent={isTransparent} />

					{/* Saved Items badge */}
					<button
						type='button'
						onClick={() => {
							if (onWishlistClick) {
								onWishlistClick();
							} else {
								handleNavClick("/products");
							}
						}}
						className={`relative p-2 rounded-full transition-colors ${
							isTransparent
								? "text-white hover:bg-white/10"
								: "text-grey-700 hover:bg-grey-100"
						}`}
						title={`${wishlistCount} ${
							wishlistCount === 1
								? t("nav.savedItems", "saved item")
								: t("nav.savedItemsPlural", "saved items")
						}`}
					>
						<IoIosHeart className='text-2xl text-rose-500' />
						{wishlistCount > 0 && (
							<span className='absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow'>
								{wishlistCount}
							</span>
						)}
					</button>
				</div>

				{/* Mobile Controls (Language Toggle + Wishlist + Burger Menu Button) */}
				<div className='flex items-center gap-2 md:hidden'>
					<LanguageToggle isTransparent={isTransparent} />

					{wishlistCount > 0 && (
						<button
							type='button'
							onClick={() => {
								if (onWishlistClick) {
									onWishlistClick();
								} else {
									handleNavClick("/products");
								}
							}}
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
					className='fixed inset-0 top-[64px] z-50 bg-black/50 backdrop-blur-sm md:hidden animate-fade-in'
					onClick={() => setMobileOpen(false)}
				>
					<div
						className='bg-white w-4/5 max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='flex flex-col gap-2'>
							<div className='pb-4 mb-2 border-b border-grey-100 flex items-center justify-between'>
								<div className='flex items-center gap-2.5'>
									<div className='h-8 w-8 rounded-lg overflow-hidden bg-[#0a0f1d] flex items-center justify-center border border-grey-200'>
										<img src={Logo} alt='TK Craft Logo' className='h-full w-full object-cover scale-110' />
									</div>
									<span className='font-primary font-bold text-lg text-primary tracking-tight'>
										TK <span className='text-accent'>Craft</span>
									</span>
								</div>
								<button
									type='button'
									onClick={() => setMobileOpen(false)}
									className='p-1 text-grey-500 hover:text-primary'
								>
									<CgClose className='text-xl' />
								</button>
							</div>

							{/* Mobile Language Switcher */}
							<div className='mb-2'>
								<LanguageToggle variant='drawer' />
							</div>

							{navItems.map((item) => {
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

							<button
								type='button'
								onClick={() => {
									setMobileOpen(false);
									if (onWishlistClick) {
										onWishlistClick();
									} else {
										handleNavClick("/products");
									}
								}}
								className='text-left px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between text-grey-700 hover:bg-grey-100'
							>
								<span className='inline-flex items-center gap-2'>
									<IoIosHeart className='text-rose-500 text-lg' />
									<span>{t("nav.likedItems", "Liked Items")}</span>
								</span>
								<span className='text-xs bg-rose-100 text-rose-600 px-2.5 py-0.5 rounded-full font-bold'>
									{wishlistCount}
								</span>
							</button>
						</div>

						<div className='pt-6 border-t border-grey-100'>
							<p className='text-center text-xs text-grey-400'>
								{t("nav.workingHours", "Mon–Sat 9am–6pm | +251 (0)11 629 8154")}
							</p>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
