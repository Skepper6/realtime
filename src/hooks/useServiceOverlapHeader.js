"use client";

import { useEffect } from "react";

const useServiceOverlapHeader = () => {
	useEffect(() => {
		const header = document.querySelector(".tj-header-area.header-absolute");
		const overlapSection = document.querySelector(
			".service-overlap-page > :not(.rt-hero)"
		);

		if (!header || !overlapSection) {
			return undefined;
		}

		const handleScroll = () => {
			const headerHeight = header.getBoundingClientRect().height;
			const overlapTop = overlapSection.getBoundingClientRect().top;
			const isCrossingHeader = overlapTop <= headerHeight;

			header.classList.toggle("header-under-overlap", isCrossingHeader);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			header.classList.remove("header-under-overlap");
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
};

export default useServiceOverlapHeader;
