import { gsap } from "@/libs/gsap.config";

const createStackTween = item => {
	gsap.to(item, {
		opacity: 0,
		scale: 0.9,
		y: 50,
		scrollTrigger: {
			trigger: item,
			scrub: true,
			start: "top top",
			pin: true,
			pinSpacing: false,
			invalidateOnRefresh: true,
			markers: false,
		},
	});
};

const tjStackAnimation = (selector, options = {}) => {
	const { enableOnMobile = false, disableQueries = [] } = options;
	const serviceStack = gsap.utils.toArray(selector);

	if (!serviceStack.length) {
		return undefined;
	}

	const mediaMatch = gsap.matchMedia();

	const conditions = {
		isEnabledRange: enableOnMobile ? "(min-width: 0px)" : "(min-width: 992px)",
	};

	disableQueries.forEach((query, idx) => {
		conditions[`isDisabled${idx}`] = query;
	});

	mediaMatch.add(conditions, context => {
		const { isEnabledRange, ...restConditions } = context.conditions;
		const isDisabled = Object.values(restConditions).some(Boolean);

		if (!isEnabledRange || isDisabled) {
			return undefined;
		}

		serviceStack.forEach(createStackTween);
	});

	return () => mediaMatch.revert();
};

export default tjStackAnimation;
