import React from "react";
import { FiShield, FiFeather, FiSmile } from "react-icons/fi";

const MissionValues = ({ values = [] }) => {
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

	return (
		<section className='bg-[#F8F9FA] py-20 border-y border-grey-200 mb-24'>
			<div className='container mx-auto px-4'>
				<div className='text-center max-w-2xl mx-auto mb-14'>
					<span className='text-xs font-bold uppercase tracking-widest text-accent'>
						Our Principles
					</span>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-primary font-bold text-primary mt-2 mb-3'>
						Mission & Core Values
					</h2>
					<p className='text-grey-500 text-sm sm:text-base'>
						Every design decision is guided by three non-negotiable promises to our patrons.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{values.map((v) => (
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
