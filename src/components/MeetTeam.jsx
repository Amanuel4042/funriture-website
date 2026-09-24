import React from "react";
import { useLanguage } from "../context/languagecontext";

const MeetTeam = ({ team = [] }) => {
	const { t, isAmharic } = useLanguage();

	const teamKeys = ["liam", "elena", "marcus", "sophie"];

	return (
		<section className='container mx-auto px-4 mb-24'>
			<div className='text-center max-w-2xl mx-auto mb-14'>
				<span className='text-xs font-bold uppercase tracking-widest text-accent'>
					{t("aboutPage.teamBadge", "The Artisans & Designers")}
				</span>
				<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-2 mb-3'>
					{t("aboutPage.teamTitle", "Meet the Team")}
				</h2>
				<p className='text-grey-500 text-sm sm:text-base'>
					{t(
						"aboutPage.teamSubtitle",
						"Architects, woodturners, and interior consultants dedicated to sculpting your sanctuary."
					)}
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
				{team.map((member, idx) => {
					const key = teamKeys[idx] || "liam";
					const role = t(`aboutPage.teamMembers.${key}.role`, member.role);
					const bio = t(`aboutPage.teamMembers.${key}.bio`, member.bio);
					const localizedName = isAmharic
						? idx === 0
							? "ሊያም ቫንስ"
							: idx === 1
							? "ኤሌና ሮስቶቫ"
							: idx === 2
							? "ማርከስ ቼን"
							: "ሶፊ ሎረንት"
						: member.name;

					return (
						<div
							key={idx}
							className='bg-white rounded-2xl p-6 border border-grey-200 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group'
						>
							<div className='w-28 h-28 rounded-full overflow-hidden mb-5 border-2 border-grey-200 group-hover:border-accent transition-colors shadow-sm'>
								<img
									src={member.avatar}
									alt={localizedName}
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
								/>
							</div>
							<h3 className='font-primary font-bold text-lg text-primary mb-1'>
								{localizedName}
							</h3>
							<p className='text-xs font-semibold text-accent uppercase tracking-wider mb-3'>
								{role}
							</p>
							<p className='text-xs text-grey-500 leading-relaxed'>{bio}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default MeetTeam;
