import { gsap, SplitText } from "@/libs/gsap.config";

const shouldAnimateImmediatelyVisibleTitle = element => {
	if (!element) {
		return false;
	}

	if (element.closest(".rt-hero, .rt-hero-career")) {
		return false;
	}

	const rect = element.getBoundingClientRect();
	return rect.top > window.innerHeight || rect.bottom < 0;
};

const titleAnim = (contanerRef, isRtl) => {
	const animItems = document.querySelectorAll(".text-anim:not([data-title-anim])");
	if (animItems.length) {
		let staggerAmount = 0.03,
			translateXValue = 20,
			delayValue = 0.1,
			easeType = "power2.out",
			animatedTextElements = animItems;

		animatedTextElements.forEach(element => {
			element.setAttribute("data-title-anim", "true");

			if (!shouldAnimateImmediatelyVisibleTitle(element)) {
				return;
			}

			let animationSplitText = new SplitText(element, { type: "chars, words" });
			gsap.from(animationSplitText.chars, {
				duration: 1,
				delay: delayValue,
				x: translateXValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}
};

export default titleAnim;
