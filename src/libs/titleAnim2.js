import { gsap, SplitText } from "@/libs/gsap.config";

const shouldAnimateImmediatelyVisibleHeroTitle = element => {
	if (!element) {
		return false;
	}

	const rect = element.getBoundingClientRect();
	return rect.top > window.innerHeight || rect.bottom < 0;
};

const titleAnim2 = contanerRef => {
	const animItems = document.querySelectorAll(
		".hero-text-anim:not([data-hero-title-anim])"
	);
	if (animItems.length) {
		let staggerAmount = 0.05,
			delayValue = 0.4,
			easeType = "power1.out",
			heroTextElements = animItems;

		heroTextElements.forEach(element => {
			element.setAttribute("data-hero-title-anim", "true");

			if (!shouldAnimateImmediatelyVisibleHeroTitle(element)) {
				return;
			}

			let animationSplitText = new SplitText(element, { type: "chars, words" });
			gsap.from(animationSplitText.chars, {
				opacity: 0,
				duration: 0.4,
				delay: delayValue,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}
};

export default titleAnim2;
