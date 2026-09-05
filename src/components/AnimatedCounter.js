import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({
	target = 0,
	suffix = "",
	decimals = 0,
	duration = 1800,
}) => {
	const [count, setCount] = useState(0);
	const [started, setStarted] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started) {
					setStarted(true);

					const startTime = performance.now();
					const endVal = Number(target);

					const step = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);

						// Smooth ease-out cubic
						const easeOut = 1 - Math.pow(1 - progress, 3);
						const current = endVal * easeOut;

						setCount(current);

						if (progress < 1) {
							requestAnimationFrame(step);
						} else {
							setCount(endVal);
						}
					};

					requestAnimationFrame(step);
				}
			},
			{ threshold: 0.15 }
		);

		observer.observe(node);

		return () => {
			if (node) observer.unobserve(node);
		};
	}, [target, duration, started]);

	const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

	return (
		<span ref={ref} className='tabular-nums'>
			{formatted}
			{suffix}
		</span>
	);
};

export default AnimatedCounter;
