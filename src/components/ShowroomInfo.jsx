import React from "react";
import { contactDetails } from "../data";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import {
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoYoutube,
	IoLogoPinterest,
} from "react-icons/io";
import { useLanguage } from "../context/languagecontext";

const ShowroomInfo = () => {
	const { t } = useLanguage();

	return (
		<div className='lg:col-span-5 space-y-6'>
			{/* Map / Showroom Location Visual */}
			<div className='bg-white rounded-3xl border border-grey-200 overflow-hidden shadow-soft'>
				<div className='relative h-56 bg-slate-800 flex items-center justify-center p-6 text-center text-white overflow-hidden'>
					<div
						className='absolute inset-0 opacity-20 bg-[radial-gradient(#286f6c_1px,transparent_1px)]'
						style={{ backgroundSize: "16px 16px" }}
					/>
					<div className='relative z-10 flex flex-col items-center gap-2'>
						<div className='w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl shadow-lg ring-4 ring-white/20 animate-bounce'>
							<FiMapPin />
						</div>
						<h4 className='font-primary font-bold text-lg text-white'>
							{t("showroom.atelierTitle", "Gerji Atelier & Showroom")}
						</h4>
						<p className='text-xs text-grey-300 max-w-xs'>
							{t("showroom.atelierSub", "Adjacent to Unity University Gerji Campus, Addis Ababa")}
						</p>
					</div>
				</div>
				<div className='p-6 bg-grey-50 border-t border-grey-100 flex items-center justify-between text-xs text-grey-600'>
					<span>{t("showroom.subCity", "Gerji, Bole Sub-City")}</span>
					<span className='font-bold text-accent'>{t("showroom.parkingNote", "Free Secure Parking")}</span>
				</div>
			</div>

			{/* Business Details Card */}
			<div className='bg-white rounded-3xl border border-grey-200 p-8 shadow-soft'>
				<h3 className='font-primary font-bold text-xl text-primary mb-6'>
					{t("showroom.businessDetails", "Business Details")}
				</h3>

				<ul className='space-y-5 text-sm text-grey-600'>
					<li className='flex items-start gap-3.5'>
						<div className='w-9 h-9 rounded-xl bg-accent-light text-accent flex items-center justify-center shrink-0 text-base'>
							<FiMapPin />
						</div>
						<div>
							<strong className='block text-primary text-xs uppercase tracking-wider mb-0.5'>
								{t("showroom.addressLabel", "Showroom Address")}
							</strong>
							<p>{contactDetails.address}</p>
							<p className='text-grey-400'>{contactDetails.city}</p>
						</div>
					</li>

					<li className='flex items-start gap-3.5'>
						<div className='w-9 h-9 rounded-xl bg-accent-light text-accent flex items-center justify-center shrink-0 text-base'>
							<FiPhone />
						</div>
						<div>
							<strong className='block text-primary text-xs uppercase tracking-wider mb-0.5'>
								{t("showroom.telephoneLabel", "Telephone")}
							</strong>
							<p>{contactDetails.phone}</p>
							<p className='text-xs text-grey-400'>
								{t("showroom.international", "International:")} {contactDetails.phoneInternational}
							</p>
						</div>
					</li>

					<li className='flex items-start gap-3.5'>
						<div className='w-9 h-9 rounded-xl bg-accent-light text-accent flex items-center justify-center shrink-0 text-base'>
							<FiMail />
						</div>
						<div>
							<strong className='block text-primary text-xs uppercase tracking-wider mb-0.5'>
								{t("showroom.emailLabel", "Direct Email")}
							</strong>
							<p>{contactDetails.email}</p>
						</div>
					</li>

					<li className='flex items-start gap-3.5'>
						<div className='w-9 h-9 rounded-xl bg-accent-light text-accent flex items-center justify-center shrink-0 text-base'>
							<FiClock />
						</div>
						<div>
							<strong className='block text-primary text-xs uppercase tracking-wider mb-0.5'>
								{t("showroom.operatingHoursLabel", "Operating Hours")}
							</strong>
							<p>{contactDetails.hours.monSat}</p>
							<p className='text-xs text-grey-400'>{contactDetails.hours.sun}</p>
						</div>
					</li>
				</ul>

				{/* Social Media Strip */}
				<div className='pt-6 mt-6 border-t border-grey-100 flex items-center justify-between'>
					<span className='text-xs font-bold uppercase tracking-wider text-grey-400'>
						{t("showroom.followWork", "Follow Our Work:")}
					</span>
					<div className='flex items-center gap-2'>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noreferrer'
							className='w-8 h-8 rounded-full bg-grey-100 hover:bg-accent hover:text-white flex items-center justify-center text-grey-600 transition-colors'
						>
							<IoLogoFacebook />
						</a>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noreferrer'
							className='w-8 h-8 rounded-full bg-grey-100 hover:bg-accent hover:text-white flex items-center justify-center text-grey-600 transition-colors'
						>
							<IoLogoInstagram />
						</a>
						<a
							href='https://pinterest.com'
							target='_blank'
							rel='noreferrer'
							className='w-8 h-8 rounded-full bg-grey-100 hover:bg-accent hover:text-white flex items-center justify-center text-grey-600 transition-colors'
						>
							<IoLogoPinterest />
						</a>
						<a
							href='https://youtube.com'
							target='_blank'
							rel='noreferrer'
							className='w-8 h-8 rounded-full bg-grey-100 hover:bg-accent hover:text-white flex items-center justify-center text-grey-600 transition-colors'
						>
							<IoLogoYoutube />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowroomInfo;
