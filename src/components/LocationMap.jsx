import React from "react";
import {
	FiMapPin,
	FiNavigation,
	FiExternalLink,
	FiCompass,
	FiClock,
	FiPhone,
} from "react-icons/fi";
import { contactDetails } from "../data";
import { useLanguage } from "../context/languagecontext";

const LocationMap = () => {
	const { t, isAmharic } = useLanguage();
	// Unity University Gerji Campus exact coordinates
	const lat = 9.0008;
	const lng = 38.8068;
	
	// Real Google Maps Embed pointing directly to Unity University Gerji Campus, Addis Ababa
	const googleMapsEmbedUrl = "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sUnity+University+Gerji+Campus+Addis+Ababa";
	const googleMapsDirectUrl = "https://www.google.com/maps/search/?api=1&query=Unity+University+Gerji+Campus+Addis+Ababa";

	return (
		<section className='mt-16 pt-12 border-t border-grey-200'>
			{/* Section Header */}
			<div className='text-center max-w-2xl mx-auto mb-10'>
				<span className='text-xs font-bold uppercase tracking-widest text-accent'>
					{t("locationMap.badge", "Showroom Location & Directions")}
				</span>
				<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-2 mb-3'>
					{t("locationMap.title", "Visit Our Gerji Atelier")}
				</h2>
				<p className='text-sm sm:text-base text-grey-600 leading-relaxed'>
					{t(
						"locationMap.description",
						"Located right at Unity University Gerji Campus in Addis Ababa. Stop by to explore curated timber finishes, feel upholstery textiles, or consult with our master artisans."
					)}
				</p>
			</div>

			{/* Map Card */}
			<div className='bg-white rounded-3xl border border-grey-200 shadow-soft overflow-hidden'>
				{/* Top Map Action Bar */}
				<div className='p-4 sm:p-6 bg-grey-50 border-b border-grey-200 flex flex-wrap items-center justify-between gap-4'>
					<div className='flex items-center gap-3.5'>
						<div className='w-11 h-11 rounded-2xl bg-accent text-white flex items-center justify-center text-xl shadow-sm'>
							<FiMapPin />
						</div>
						<div>
							<h4 className='text-sm sm:text-base font-bold text-primary'>
								{t("locationMap.campusTitle", "Unity University – Gerji Campus")}
							</h4>
							<p className='text-xs text-grey-500'>
								{t("locationMap.coordinatesLabel", "Coordinates:")}{" "}
								<span className='font-mono font-semibold text-primary'>
									{lat}° N, {lng}° E (9.000789, 38.806811)
								</span>{" "}
								• {t("showroom.subCity", "Gerji, Bole Sub-City")}, {contactDetails.city}
							</p>
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<a
							href={googleMapsDirectUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='btn-primary text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl inline-flex items-center gap-2 shadow-sm'
						>
							<FiNavigation className='text-sm' />
							<span>{t("locationMap.openInGoogleMaps", "Open in Google Maps")}</span>
							<FiExternalLink className='text-xs opacity-80' />
						</a>
					</div>
				</div>

				{/* Map View */}
				<div className='relative w-full h-80 sm:h-96 md:h-[460px] bg-slate-100'>
					<iframe
						title='Unity University Gerji Campus Location Map'
						src={googleMapsEmbedUrl}
						className='w-full h-full border-0'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					/>

					{/* Floating Badge on Map */}
					<div className='absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-grey-200 shadow-xl text-xs'>
						<div className='flex items-center gap-2 font-bold text-primary mb-1'>
							<span className='w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse' />
							<span>{isAmharic ? "ቲኬ ክራፍት አውደ-ጥናት እና ሾውሩም" : "TK Craft Atelier & Showroom"}</span>
						</div>
						<p className='text-grey-600 mb-2'>
							{isAmharic
								? "ዩኒቲ ዩኒቨርሲቲ ገርጂ ካምፓስ አጠገብ፣ ወደ ኮሪያ ሆስፒታል (MCM) ቅርብ።"
								: "Unity University Gerji Campus area, near Korean Hospital (MCM)."}
						</p>
						<a
							href={`tel:${contactDetails.phone || "+251911234567"}`}
							className='text-accent hover:text-accent-hover font-semibold inline-flex items-center gap-1.5'
						>
							<FiPhone className='text-xs' />
							<span>{contactDetails.phone || "+251 911 234 567"}</span>
						</a>
					</div>
				</div>

				{/* Location Highlights Footer */}
				<div className='grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-grey-200 bg-white p-6'>
					<div className='px-4 py-3 flex items-start gap-3.5'>
						<div className='w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center shrink-0 text-base'>
							<FiCompass />
						</div>
						<div>
							<h5 className='text-xs font-bold uppercase tracking-wider text-primary mb-0.5'>
								{isAmharic ? "የካምፓስ መገኛ" : "Campus Location"}
							</h5>
							<p className='text-xs text-grey-600 leading-relaxed'>
								{contactDetails.address}, {contactDetails.city}
							</p>
						</div>
					</div>

					<div className='px-4 py-3 flex items-start gap-3.5'>
						<div className='w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center shrink-0 text-base'>
							<FiClock />
						</div>
						<div>
							<h5 className='text-xs font-bold uppercase tracking-wider text-primary mb-0.5'>
								{t("showroom.operatingHoursLabel", "Operating Hours")}
							</h5>
							<p className='text-xs text-grey-600 leading-relaxed'>
								{contactDetails.hours.monSat} • {contactDetails.hours.sun}
							</p>
						</div>
					</div>

					<div className='px-4 py-3 flex items-start gap-3.5'>
						<div className='w-8 h-8 rounded-lg bg-accent-light text-accent flex items-center justify-center shrink-0 text-base'>
							<FiNavigation />
						</div>
						<div>
							<h5 className='text-xs font-bold uppercase tracking-wider text-primary mb-0.5'>
								{isAmharic ? "አቅጣጫ እና መኪና ማቆሚያ" : "Directions & Parking"}
							</h5>
							<p className='text-xs text-grey-600 leading-relaxed'>
								{isAmharic
									? "ገርጂ ዋና መንገድ፣ ከኮሪያ ሆስፒታል (MCM) አጠገብ ከነጻ የጎብኝዎች መኪና ማቆሚያ ጋር"
									: "Gerji Main Road, near Korean Hospital (MCM) with free visitor parking"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LocationMap;
