import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const StarRating = ({ rating = 5, totalStars = 5, size = "text-base", showValue = false }) => {
	const stars = [];

	for (let i = 1; i <= totalStars; i++) {
		if (rating >= i) {
			stars.push(<IoIosStar key={i} className={`text-amber-500 ${size}`} />);
		} else if (rating >= i - 0.5) {
			stars.push(<IoIosStarHalf key={i} className={`text-amber-500 ${size}`} />);
		} else {
			stars.push(<IoIosStarOutline key={i} className={`text-grey-300 ${size}`} />);
		}
	}

	return (
		<div className='inline-flex items-center gap-1'>
			<div className='flex items-center'>{stars}</div>
			{showValue && (
				<span className='ml-1 text-sm font-semibold text-primary'>{rating.toFixed(1)}</span>
			)}
		</div>
	);
};

export default StarRating;
