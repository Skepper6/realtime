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
	const { enableOnMobile = false } = options;
	const serviceStack = gsap.utils.toArray(selector);

	if (!serviceStack.length) {
		return undefined;
	}

	if (enableOnMobile) {
		serviceStack.forEach(createStackTween);
		return undefined;
	}

	const mediaMatch = gsap.matchMedia();
	mediaMatch.add("(min-width: 992px)", () => {
		serviceStack.forEach(createStackTween);
	});

	return () => mediaMatch.revert();
};

export default tjStackAnimation;
