import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = ({ items = [] }) => {
	return (
		<nav
			aria-label='Breadcrumb'
			className='flex items-center flex-wrap gap-2 text-xs sm:text-sm text-grey-500 font-medium pb-6 mb-8 border-b border-grey-200'
		>
			{items.map((item, index) => {
				const isLast = index === items.length - 1;

				return (
					<React.Fragment key={index}>
						{item.onClick && !isLast ? (
							<button
								type='button'
								onClick={item.onClick}
								className='hover:text-accent transition-colors'
							>
								{item.label}
							</button>
						) : (
							<span className={isLast ? "text-primary font-bold" : ""}>
								{item.label}
							</span>
						)}

						{!isLast && <FiChevronRight className='text-grey-400 text-xs shrink-0' />}
					</React.Fragment>
				);
			})}
		</nav>
	);
};

export default Breadcrumb;
