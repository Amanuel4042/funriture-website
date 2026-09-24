// Images
import Features1Img from "./assets/images/features-1.png";
import Features2Img from "./assets/images/features-2.png";
import ChairImg from "./assets/images/chair.png";
import BedImg from "./assets/images/bed.png";
import CupboardImg from "./assets/images/cupboard.png";
import LightingImg from "./assets/images/lighting.png";
import Product1Img from "./assets/images/products/product-1.png";
import Product2Img from "./assets/images/products/product-2.png";
import Product3Img from "./assets/images/products/product-3.png";
import Product4Img from "./assets/images/products/product-4.png";
import Product5Img from "./assets/images/products/product-5.png";
import Product6Img from "./assets/images/products/product-6.png";
import Product7Img from "./assets/images/products/product-7.png";
import Product8Img from "./assets/images/products/product-8.png";
import Product9Img from "./assets/images/products/product-9.png";
import Product10Img from "./assets/images/products/product-10.png";
import TestimonialImg from "./assets/images/testimonial.png";
import Avatar1Img from "./assets/images/avatar-1.png";
import Avatar2Img from "./assets/images/avatar-2.png";
import Avatar3Img from "./assets/images/avatar-3.png";
import Avatar4Img from "./assets/images/avatar-4.png";

export const navigation = [
	{ name: "Home", path: "/" },
	{ name: "About Us", path: "/about" },
	{ name: "Products", path: "/products" },
	{ name: "Testimonials", path: "/testimonials" },
	{ name: "Contact", path: "/contact" },
];

export const heroData = {
	title: "Crafting Spaces That Inspire Everyday Living",
	subtitle:
		"Discover bespoke, handcrafted furniture engineered for timeless elegance and architectural calm. Every piece tells a story of refined materials and master craftsmanship.",
	primaryCta: "Shop Now",
	secondaryCta: "Explore Our Story",
};

export const statsData = [
	{ target: 7, suffix: "+", label: "Years of Craftsmanship" },
	{ target: 12, suffix: "k+", label: "Homes Furnished" },
	{ target: 100, suffix: "%", label: "Sustainable Timber" },
	{ target: 4.9, suffix: "/5", decimals: 1, label: "Customer Satisfaction" },
];

export const categoriesList = [
	"All",
	"Living Room",
	"Bedroom",
	"Office",
	"Outdoor",
];

export const materialsList = ["Wood", "Metal", "Fabric", "Leather"];

export const currency = "Birr";
export const formatPrice = (amount) =>
	`${Number(amount).toLocaleString()} ${currency}`;

export const allProducts = [
	{
		id: "oak-lounge-chair",
		name: "Oak Lounge Chair",
		category: "Living Room",
		material: "Wood",
		price: 34900,
		oldPrice: 42000,
		rating: 5.0,
		reviewsCount: 34,
		badge: "Best Seller",
		featured: true,
		image: ChairImg,
		gallery: [ChairImg, Product2Img, Product6Img],
		dimensions: "75 x 80 x 90 cm",
		materialsDescription: "Solid white oak frame, natural linen upholstery, eco-wax finish.",
		description:
			"A quintessential centerpiece for the contemporary lounge. Sculpted with steam-bent solid white oak and cushioned with high-density, breathable linen foam that conforms comfortably to your posture.",
		craftsmanship:
			"Hand-mortised corner joints with brushed non-toxic matte lacquer. Tested to withstand over 150kg with lifetime structural integrity.",
		careNotes:
			"Dust with dry microfiber cloth. Avoid continuous direct sunlight. Clean upholstery with specialized water-free solvent cleaners.",
	},
	{
		id: "nordic-minimalist-bed",
		name: "Nordic Minimalist Bed",
		category: "Bedroom",
		material: "Wood",
		price: 68000,
		oldPrice: 75000,
		rating: 4.9,
		reviewsCount: 22,
		badge: "Featured",
		featured: true,
		image: BedImg,
		gallery: [BedImg, Product4Img, Product10Img],
		dimensions: "160 x 200 x 95 cm (Queen)",
		materialsDescription: "FSC-certified solid ash wood, reinforced beech slats, brushed steel supports.",
		description:
			"A low-profile floating bed platform designed to induce deep serenity. Featuring an integrated angled headboard tailored for bedtime reading and seamless cable channels.",
		craftsmanship:
			"Precision acoustic dampening gaskets prevent creaking. Floating silhouette with hidden recessed heavy-gauge steel supports.",
		careNotes:
			"Wipe wood surfaces using warm water with a drop of organic soap. Dry immediately with a clean towel.",
	},
	{
		id: "archival-credenza-cupboard",
		name: "Archival Credenza Cupboard",
		category: "Living Room",
		material: "Wood",
		price: 52000,
		oldPrice: 59000,
		rating: 4.8,
		reviewsCount: 19,
		badge: "New Arrival",
		featured: true,
		image: CupboardImg,
		gallery: [CupboardImg, Product3Img, Product9Img],
		dimensions: "140 x 45 x 85 cm",
		materialsDescription: "Walnut veneer, solid core panels, soft-close Blum hardware, matte brass pulls.",
		description:
			"Architectural storage meets sculptural form. Features ribbed tambour sliding doors, adjustable interior shelving, and custom wire-management ports for modern AV setups.",
		craftsmanship:
			"German soft-close hinges, reinforced internal doweling, and anti-tip wall anchoring hardware included.",
		careNotes:
			"Use coasters under hot beverages. Polish twice yearly with natural beeswax conditioner.",
	},
	{
		id: "aurora-pendant-lighting",
		name: "Aurora Ambient Pendant",
		category: "Office",
		material: "Metal",
		price: 18000,
		oldPrice: 21500,
		rating: 4.9,
		reviewsCount: 41,
		badge: "Popular",
		featured: true,
		image: LightingImg,
		gallery: [LightingImg, Product1Img],
		dimensions: "40 x 40 x 32 cm",
		materialsDescription: "Spun aluminum shade, hand-blown frosted glass diffuser, brass rod accents.",
		description:
			"Cast a warm, glare-free architectural glow over dining areas or executive desks. The spun shade balances direct task radiance with soft ambient ceiling wash.",
		craftsmanship:
			"UL-listed electrical components with dimmable warm LED module (2700K Warm White, 90+ CRI).",
		careNotes:
			"Disconnect power before wiping frosted glass with a lightly damp microfiber cloth.",
	},
	{
		id: "xora-executive-corner-desk",
		name: "XORA Executive Corner Desk",
		category: "Office",
		material: "Metal",
		price: 49000,
		oldPrice: 55000,
		rating: 4.7,
		reviewsCount: 18,
		badge: null,
		featured: false,
		image: Product7Img,
		gallery: [Product7Img, Product8Img],
		dimensions: "150 x 120 x 76 cm",
		materialsDescription: "Matte black powder-coated structural steel, waterproof oak veneer top.",
		description:
			"Designed for deep focus and productivity. An expansive L-shaped surface accommodating multi-monitor arrays, magnetic cable routing, and smooth beveled wrist rests.",
		craftsmanship:
			"Heavy gauge cold-rolled steel frame with laser-welded seams and micro-adjustable leveling feet.",
		careNotes:
			"Clean with mild neutral detergent. Avoid abrasive pads or harsh chemical sprays.",
	},
	{
		id: "treos-seroes-lounge-chair",
		name: "Treos Seroes Armchair",
		category: "Living Room",
		material: "Fabric",
		price: 29900,
		oldPrice: 34000,
		rating: 4.9,
		reviewsCount: 29,
		badge: "Best Seller",
		featured: false,
		image: Product5Img,
		gallery: [Product5Img, ChairImg],
		dimensions: "82 x 78 x 84 cm",
		materialsDescription: "Bouclé textured wool fabric, internal steel frame, memory-foam core.",
		description:
			"Sublime comfort meets sculptural minimalism. The cocooning silhouette envelopes the body, upholstered in heavy-weight tactile bouclé that feels heavenly to the touch.",
		craftsmanship:
			"Dual-density high resilience foam over s-spring suspension for lifetime sag-free posture.",
		careNotes:
			"Gently vacuum with soft brush attachment. Treat accidental liquid spills immediately by blotting.",
	},
	{
		id: "black-forest-coffee-table",
		name: "Black Forest Coffee Table",
		category: "Living Room",
		material: "Wood",
		price: 24500,
		oldPrice: 28000,
		rating: 4.8,
		reviewsCount: 15,
		badge: null,
		featured: false,
		image: Product8Img,
		gallery: [Product8Img, Product6Img],
		dimensions: "110 x 60 x 42 cm",
		materialsDescription: "Solid blackened oak, natural grain retention, organic perimeter bevel.",
		description:
			"A conversational anchor for modern seating areas. Rich charcoal grain patterns contrast gently against soft floor rugs, grounded by three sculptural cylindrical legs.",
		craftsmanship:
			"Deep pigment oil stain finished with hardwearing moisture-resistant protective sealer.",
		careNotes:
			"Wipe dry immediately after spills. Clean using non-acidic wood soap.",
	},
	{
		id: "ole-gundorse-spring-stool",
		name: "Ole Gundorse Stool",
		category: "Outdoor",
		material: "Fabric",
		price: 13500,
		oldPrice: 16000,
		rating: 4.6,
		reviewsCount: 12,
		badge: null,
		featured: false,
		image: Product4Img,
		gallery: [Product4Img, Product10Img],
		dimensions: "45 x 45 x 48 cm",
		materialsDescription: "Weather-resistant solution-dyed acrylic, anodized aluminum base.",
		description:
			"Versatile accent seating suitable for covered patios, verandas, or dressing rooms. Compact, lightweight, and engineered with UV-stabilized exterior textiles.",
		craftsmanship:
			"Rustproof stainless hardware with mold-resistant quick-dry reticulated foam cushion.",
		careNotes:
			"Hose down or wipe with soapy sponge. Store under shelter during extreme winters.",
	},
	{
		id: "verona-terrace-dining-set",
		name: "Verona Terrace Dining Table",
		category: "Outdoor",
		material: "Metal",
		price: 62000,
		oldPrice: 71000,
		rating: 4.9,
		reviewsCount: 26,
		badge: "New",
		featured: false,
		image: Product6Img,
		gallery: [Product6Img, Product2Img],
		dimensions: "180 x 90 x 75 cm",
		materialsDescription: "Electro-coated rustproof aluminum, slatted teak tabletop insert.",
		description:
			"Bring sophisticated interior aesthetics out into the open air. Features self-draining slatted construction and UV-resistant matte powder-coat frame.",
		craftsmanship:
			"Grade-A sustainably harvested teak inserts bonded to thermal-expansion aluminum channel rails.",
		careNotes:
			"Allow teak to naturally develop a silver patina, or apply teak shield twice per season.",
	},
	{
		id: "solarium-paper-cupboard",
		name: "Solarium Modular Cupboard",
		category: "Bedroom",
		material: "Wood",
		price: 38000,
		oldPrice: 42000,
		rating: 4.7,
		reviewsCount: 16,
		badge: null,
		featured: false,
		image: Product3Img,
		gallery: [Product3Img, Product9Img],
		dimensions: "90 x 40 x 120 cm",
		materialsDescription: "Solid birch, Japanese washi-inspired woven paper door panels, brass latch.",
		description:
			"Warm, translucent door panels diffuse interior shadows while keeping linens and apparel impeccably ventilated. A poetic harmony of traditional and Scandinavian craft.",
		craftsmanship:
			"Hand-stretched moisture-treated woven cord panels set into mortise-and-tenon birch frames.",
		careNotes:
			"Dust panels gently with feather duster. Keep away from direct open water splashing.",
	},
	{
		id: "haven-boucle-sofa",
		name: "Haven Deep Lounge Sofa",
		category: "Living Room",
		material: "Fabric",
		price: 89000,
		oldPrice: 99000,
		rating: 5.0,
		reviewsCount: 38,
		badge: "Best Seller",
		featured: false,
		image: Features1Img,
		gallery: [Features1Img, ChairImg],
		dimensions: "220 x 95 x 78 cm",
		materialsDescription: "Kiln-dried hardwood frame, plush pocket coil seating, heavy woven upholstery.",
		description:
			"The ultimate statement sofa. Deep proportions, generous feather-down wrapped cushions, and tailored seams create a serene haven in any open-plan residence.",
		craftsmanship:
			"Kiln-dried European beech frame with reinforced corner blocks and sinuous spring suspension.",
		careNotes:
			"Fluff cushions bi-weekly to retain optimal loft. Professional upholstery clean recommended yearly.",
	},
	{
		id: "artisan-sculptural-sideboard",
		name: "Artisan Sculptural Sideboard",
		category: "Living Room",
		material: "Wood",
		price: 74000,
		oldPrice: 82000,
		rating: 4.9,
		reviewsCount: 21,
		badge: null,
		featured: false,
		image: Features2Img,
		gallery: [Features2Img, CupboardImg],
		dimensions: "160 x 48 x 80 cm",
		materialsDescription: "Smoked oak, fluted cabinet doors, brushed bronze plinth base.",
		description:
			"Sculptural vertical fluting plays with light and shadow throughout the day. Ample storage concealing four independent soft-close compartments.",
		craftsmanship:
			"Continuous grain matching across all cabinet door fronts with custom integrated touch-latches.",
		careNotes:
			"Dust with soft microfiber cloth. Apply natural wood paste wax once a year.",
	},
];

export const aboutData = {
	story: {
		headline: "Rooted in Slow Craftsmanship & Lasting Beauty",
		subtitle:
			"Founded in 2017, we began with a simple counter-cultural conviction: furniture should never be disposable.",
		paragraphs: [
			"In an era of mass-manufactured, flat-pack trends, TK Craft was born in an independent workshop with a mission to revive timeless joinery and architectural reverence.",
			"Every piece in our catalog is born from conscious design and sustainably harvested timbers. We collaborate closely with multi-generational woodturners, metalsmiths, and upholstery artisans who share our obsession for detail.",
			"Our furniture is not merely meant to decorate an empty room—it is sculpted to anchor daily life, foster intimate conversations, and patina gracefully across decades.",
		],
		image: Features2Img,
		workshopImage: Features1Img,
	},
	values: [
		{
			id: "craftsmanship",
			title: "Quality Craftsmanship",
			description:
				"Precision hand-mortised joints, structural internal steel supports, and non-toxic protective finishes built to endure daily family life.",
			iconType: "craft",
		},
		{
			id: "sustainable",
			title: "Sustainable Materials",
			description:
				"100% FSC-certified timber, natural linen, non-toxic organic stains, and zero plastic packaging across our supply chain.",
			iconType: "sustainability",
		},
		{
			id: "service",
			title: "Customer-First Service",
			description:
				"Dedicated interior advisors, complimentary material swatches, white-glove assembly, and a lifetime structural guarantee.",
			iconType: "service",
		},
	],
	team: [
		{
			name: "Liam Vance",
			role: "Founder & Creative Director",
			avatar: Avatar1Img,
			bio: "Trained in Copenhagen architecture, Liam leads TK Craft's minimalist design philosophy.",
		},
		{
			name: "Elena Rostova",
			role: "Master Woodcraft Artisan",
			avatar: Avatar2Img,
			bio: "With over 18 years in artisanal joinery, Elena oversees workshop fabrication and grain matching.",
		},
		{
			name: "Marcus Chen",
			role: "Head of Sustainable Materials",
			avatar: Avatar3Img,
			bio: "Marcus ensures every plank of oak, ash, and walnut comes from responsibly reforested reserves.",
		},
		{
			name: "Sophie Laurent",
			role: "Lead Interior Consultant",
			avatar: Avatar4Img,
			bio: "Sophie partners directly with architects and homeowners to curate bespoke living spaces.",
		},
	],
	crossSellCta: {
		title: "Like what you see? Explore our products",
		subtitle: "Browse our complete catalog of curated tables, seating, storage, and lighting.",
		buttonText: "View Products",
	},
};

export const testimonialsData = {
	ratingSummary: {
		average: 4.9,
		totalReviews: 148,
		starsCount: 5,
		percentageRecommend: 98,
		categoriesSummary: "Rated #1 in Artisanal Modern Furniture 2026",
	},
	heroImage: TestimonialImg,
	reviews: [
		{
			id: 1,
			quote: "“The Oak Lounge Chair is beautifully made and arrived exactly as pictured. The joinery is so smooth and the seat comfort is second to none.”",
			author: "Joshua Smith",
			location: "New York, NY",
			role: "Architectural Digest Subscriber",
			rating: 5,
			product: "Oak Lounge Chair",
			productId: "oak-lounge-chair",
			category: "Living Room",
			avatar: Avatar1Img,
			date: "March 2026",
		},
		{
			id: 2,
			quote: "“Fast response and great advice from the design team. They sent wood swatches within two days and helped us choose the ideal desk dimensions.”",
			author: "Brandi Johns",
			location: "Austin, TX",
			role: "Design Studio Lead",
			rating: 5,
			product: "XORA Executive Corner Desk",
			productId: "xora-executive-corner-desk",
			category: "Office",
			avatar: Avatar2Img,
			date: "February 2026",
		},
		{
			id: 3,
			quote: "“The oak table is stunning! Everyone who visits our home compliments the clean lines and deep grain finish. It completely transformed our living area.”",
			author: "Paula Prefer",
			location: "Seattle, WA",
			role: "Homeowner",
			rating: 5,
			product: "Black Forest Coffee Table",
			productId: "black-forest-coffee-table",
			category: "Living Room",
			avatar: Avatar3Img,
			date: "January 2026",
		},
		{
			id: 4,
			quote: "“Delivery was smooth, courteous, and right on time. Assembly took less than 15 minutes because every bolt lined up with surgical precision.”",
			author: "David Miller",
			location: "Chicago, IL",
			role: "Verified Purchaser",
			rating: 5,
			product: "Nordic Minimalist Bed",
			productId: "nordic-minimalist-bed",
			category: "Bedroom",
			avatar: Avatar4Img,
			date: "February 2026",
		},
		{
			id: 5,
			quote: "“The Solarium cupboard has elevated our bedroom. The woven panels give such a calm Japanese-Scandinavian aesthetic that we couldn't find anywhere else.”",
			author: "Claire Moreau",
			location: "San Francisco, CA",
			role: "Interior Designer",
			rating: 5,
			product: "Solarium Modular Cupboard",
			productId: "solarium-paper-cupboard",
			category: "Bedroom",
			avatar: Avatar2Img,
			date: "March 2026",
		},
		{
			id: 6,
			quote: "“We used the Verona dining set on our covered patio all through summer. Zero fading, completely sturdy, and cleans up with a quick wipe down.”",
			author: "Alexander Reed",
			location: "Denver, CO",
			role: "Verified Homeowner",
			rating: 5,
			product: "Verona Terrace Dining Table",
			productId: "verona-terrace-dining-set",
			category: "Outdoor",
			avatar: Avatar1Img,
			date: "April 2026",
		},
	],
};

export const contactDetails = {
	address: "Unity University Gerji Campus, Bole Sub-City",
	city: "Addis Ababa, Ethiopia",
	coordinates: {
		lat: 9.0008,
		lng: 38.8068,
		exact: "9.000789, 38.806811",
		formatted: "9.0008° N, 38.8068° E",
		landmark: "Unity University Gerji Campus (near Korean Hospital MCM)",
	},
	phone: "+251 (0)11 629 8154",
	phoneInternational: "+251 911 234 567",
	email: "contact@tkcraft.et",
	hours: {
		monSat: "Mon – Sat: 9:00 AM – 6:00 PM",
		sun: "Sunday: Closed (By Appointment Only)",
	},
	slaNote: "Target response SLA: Our team replies to all product inquiries within 1 business day.",
};

export const footerData = {
	aboutText:
		"TK Craft is an independent design house committed to sustainable, catalog-led architectural furniture that elevates everyday life.",
	showroom: contactDetails,
	quickLinks: [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Product Catalog", path: "/products" },
		{ name: "Client Testimonials", path: "/testimonials" },
		{ name: "Get in Touch", path: "/contact" },
	],
	categories: [
		{ name: "Living Room", category: "Living Room" },
		{ name: "Bedroom", category: "Bedroom" },
		{ name: "Office", category: "Office" },
		{ name: "Outdoor Furniture", category: "Outdoor" },
	],
	social: [
		{ name: "Instagram", href: "https://instagram.com" },
		{ name: "Pinterest", href: "https://pinterest.com" },
		{ name: "Facebook", href: "https://facebook.com" },
		{ name: "YouTube", href: "https://youtube.com" },
	],
	copyright: `TK Craft © ${new Date().getFullYear()} — Handcrafted Furniture. All rights reserved.`,
};
