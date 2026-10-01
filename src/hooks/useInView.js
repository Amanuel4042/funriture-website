import { useState, useEffect, useRef } from "react";

export const useInView = (options = {}) => {
	const { threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options;
	const ref = useRef(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Fallback for environments without IntersectionObserver
		if (typeof IntersectionObserver === "undefined") {
			setIsInView(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					// Once triggered, unobserve to keep the visible state
					observer.unobserve(entry.target);
				}
			},
			{
				threshold,
				rootMargin,
			}
		);

		observer.observe(element);

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [threshold, rootMargin]);

	return [ref, isInView];
};

export default useInView;
