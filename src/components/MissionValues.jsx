import React from "react";
import { FiShield, FiFeather, FiSmile } from "react-icons/fi";
import { useLanguage } from "../context/languagecontext";

const MissionValues = ({ values = [] }) => {
	const { t, currentTranslations } = useLanguage();

	const getIcon = (type) => {
		switch (type) {
			case "craft":
				return <FiShield className='text-2xl text-accent' />;
			case "sustainability":
				return <FiFeather className='text-2xl text-accent' />;
			case "service":
			default:
				return <FiSmile className='text-2xl text-accent' />;
		}
	};

	const localizedValues = [
		{
			id: "craftsmanship",
			title: t("aboutPage.values.craftsmanship.title", "Quality Craftsmanship"),
			description: t(
				"aboutPage.values.craftsmanship.desc",
				"Precision hand-mortised joints, structural internal steel supports, and non-toxic protective finishes built to endure daily family life."
			),
			iconType: "craft",
		},
		{
			id: "sustainable",
			title: t("aboutPage.values.sustainable.title", "Sustainable Materials"),
			description: t(
				"aboutPage.values.sustainable.desc",
				"100% FSC-certified timber, natural linen, non-toxic organic stains, and zero plastic packaging across our supply chain."
			),
			iconType: "sustainability",
		},
		{
			id: "service",
			title: t("aboutPage.values.service.title", "Customer-First Service"),
			description: t(
				"aboutPage.values.service.desc",
				"Dedicated interior advisors, complimentary material swatches, white-glove assembly, and a lifetime structural guarantee."
			),
			iconType: "service",
		},
	];

	return (
		<section className='bg-[#F8F9FA] py-20 border-y border-grey-200 mb-24'>
			<div className='container mx-auto px-4'>
				<div className='text-center max-w-2xl mx-auto mb-14'>
					<span className='text-xs font-bold uppercase tracking-widest text-accent'>
						{t("aboutPage.principlesBadge", "Our Principles")}
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-2 mb-3'>
						{t("aboutPage.principlesTitle", "Mission & Core Values")}
					</h2>
					<p className='text-grey-500 text-sm sm:text-base'>
						{t(
							"aboutPage.principlesSubtitle",
							"Every design decision is guided by three non-negotiable promises to our patrons."
						)}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{localizedValues.map((v) => (
						<div
							key={v.id}
							className='bg-white rounded-2xl p-8 border border-grey-200 shadow-sm hover:shadow-card hover:border-grey-300 transition-all duration-300 flex flex-col items-start'
						>
							<div className='w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mb-6 shadow-sm'>
								{getIcon(v.iconType)}
							</div>
							<h3 className='font-primary font-bold text-xl text-primary mb-3'>
								{v.title}
							</h3>
							<p className='text-sm text-grey-500 leading-relaxed'>{v.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MissionValues;
