# FurniCraft — Handcrafted Modern Furniture Catalog

A catalog-led, responsive React frontend application for a modern handcrafted furniture business, built according to comprehensive UX discovery, sitemap, and wireframe documentation.

## Features & Architecture

Built strictly according to UX documentation:

- **01 Client & Business Objectives**: Catalog-led architecture focusing on discovery and direct inquiry rather than cart checkout.
- **02 Sitemap & Navigation**: Persistent sticky global navigation across all 6 core pages:
  - **Home (`/`)**: Hero banner with value proposition, 4 featured products showcase, brand intro teaser, testimonials preview, and trust signals.
  - **About Us (`/about`)**: Brand story, founder & workshop photo, 3 core mission/value pillars with icons, "Meet the Team" photo grid, and cross-sell CTA.
  - **Products / Categories (`/products`)**: Breadcrumb, category filtering (Living Room, Bedroom, Office, Outdoor), price slider, material filters, sort dropdown, 3-column responsive grid, and "Load More" pagination.
  - **Product Detail (`/products/:id`)**: High-resolution gallery with interactive thumbnail selector, key specifications table (materials, dimensions, craftsmanship notes), and primary "Inquire about this item" CTA.
  - **Testimonials (`/testimonials`)**: Rating summary (4.9/5 stars), category filter tabs, 2x2 testimonial card layout with referenced product links, and interactive review submission modal.
  - **Contact & Inquiry (`/contact`)**: Lead capture form with automatic product reference pre-population from product detail pages, instant client-side validation with field focusing, confirmation screen with target response SLA (1 business day), map card, and showroom details.
- **03 User Flows**:
  - Primary Flow: Home $\rightarrow$ Browse Catalog $\rightarrow$ Select Category $\rightarrow$ Product Detail $\rightarrow$ Inquire about this item $\rightarrow$ Pre-filled Contact Form $\rightarrow$ Confirmation.
  - Secondary Flow: Client-side validated contact inquiry with error handling and response SLA.

## Technologies Used

- **React 18**: Component-based UI architecture
- **Tailwind CSS 3**: Utility-first styling with responsive design tokens and typography
- **React Icons**: Minimalist iconography for navigation, social links, and ratings

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd furniture-website-react
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Build for production:
   ```bash
   npm run build
   ```
