"use client";

import getNavItems from "@/libs/getNavItems";
import meanmenu from "@/libs/meanmenu";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useState } from "react";

const isInternalPath = path =>
	typeof path === "string" &&
	path.startsWith("/") &&
	!path.startsWith("//");

const getMenuPaths = menuItems => {
	const paths = new Set();

	const visitItems = items => {
		items?.forEach(item => {
			if (isInternalPath(item?.path)) {
				paths.add(item.path);
			}

			if (item?.submenu?.length) {
				visitItems(item.submenu);
			}

			if (item?.items?.length) {
				visitItems(item.items);
			}
		});
	};

	visitItems(menuItems);

	return [...paths];
};

const useHeaderFunction = isStickyHeader => {
	const [isSticky, setIsSticky] = useState(false);
	const router = useRouter();

	useEffect(() => {
		let destroy;
		// mobile menu related
		if (!isStickyHeader) {
			destroy = meanmenu("#main-menu", {
				meanMenuContainer: ".mobile_menu",
				meanScreenWidth: "991",
				meanExpand: ['<i class="tji-angle-down"></i>'],
			});
		}

		// Handlers
		const openMenu = () => {
			document.querySelector(".hamburger-area")?.classList.add("opened");
			document.querySelector(".body-overlay")?.classList.add("opened");
		};

		const closeMenu = () => {
			document.querySelector(".hamburger-area")?.classList.remove("opened");
			document.querySelector(".body-overlay")?.classList.remove("opened");
		};

		const overlayClose = e => {
			document.querySelector(".hamburger-area")?.classList.remove("opened");
			e.currentTarget.classList.remove("opened");
		};

		const openSearch = () => {
			document
				.querySelectorAll(".search_popup")
				.forEach(el => el.classList.add("search-opened"));
			document
				.querySelectorAll(".search-popup-overlay")
				.forEach(el => el.classList.add("opened"));
		};

		const closeSearch = () => {
			document
				.querySelectorAll(".search_popup")
				.forEach(el => el.classList.remove("search-opened"));
			document
				.querySelectorAll(".search-popup-overlay")
				.forEach(el => el.classList.remove("opened"));
		};

		const overlaySearchClose = e => {
			document
				.querySelectorAll(".search_popup")
				.forEach(el => el.classList.remove("search-opened"));
			e.currentTarget.classList.remove("opened");
		};

		const handleMobileMenuNavigation = e => {
			if (!(e.target instanceof Element)) {
				return;
			}

			const link = e.target.closest(".mean-nav a[href]");
			if (!link || link.classList.contains("mean-expand")) {
				return;
			}

			const href = link.getAttribute("href")?.trim();
			if (
				!isInternalPath(href) ||
				e.defaultPrevented ||
				e.button !== 0 ||
				e.metaKey ||
				e.ctrlKey ||
				e.shiftKey ||
				e.altKey ||
				link.target === "_blank" ||
				link.hasAttribute("download")
			) {
				return;
			}

			e.preventDefault();
			closeMenu();

			startTransition(() => {
				router.push(href);
			});
		};

		// Attach
		document
			.querySelectorAll(".menu_btn")
			.forEach(btn => btn.addEventListener("click", openMenu));
		document
			.querySelectorAll(".hamburgerCloseBtn")
			.forEach(btn => btn.addEventListener("click", closeMenu));
		document
			.querySelectorAll(".body-overlay")
			.forEach(overlay => overlay.addEventListener("click", overlayClose));
		document
			.querySelectorAll(".header_search")
			.forEach(button => button.addEventListener("click", openSearch));
		document
			.querySelectorAll(".search_close_btn")
			.forEach(button => button.addEventListener("click", closeSearch));
		document
			.querySelectorAll(".search-popup-overlay")
			.forEach(overlay =>
				overlay.addEventListener("click", overlaySearchClose)
			);
		if (!isStickyHeader) {
			document
				.querySelector(".mobile_menu")
				?.addEventListener("click", handleMobileMenuNavigation);

			getMenuPaths(getNavItems()).forEach(path => {
				router.prefetch(path);
			});
		}

		// Cleanup
		return () => {
			if (!isStickyHeader && destroy) destroy();

			document
				.querySelectorAll(".menu_btn")
				.forEach(btn => btn.removeEventListener("click", openMenu));
			document
				.querySelectorAll(".hamburgerCloseBtn")
				.forEach(btn => btn.removeEventListener("click", closeMenu));
			document
				.querySelectorAll(".body-overlay")
				.forEach(overlay => overlay.removeEventListener("click", overlayClose));
			document
				.querySelectorAll(".header_search")
				.forEach(button => button.removeEventListener("click", openSearch));
			document
				.querySelectorAll(".search_close_btn")
				.forEach(button => button.removeEventListener("click", closeSearch));
			document
				.querySelectorAll(".search-popup-overlay")
				.forEach(overlay =>
					overlay.removeEventListener("click", overlaySearchClose)
				);
			if (!isStickyHeader) {
				document
					.querySelector(".mobile_menu")
					?.removeEventListener("click", handleMobileMenuNavigation);
			}
		};
	}, [isStickyHeader, router]);

	// sticky header related
	useEffect(() => {
		if (!isStickyHeader) {
			return undefined;
		}

		const stickyDisabledQuery = window.matchMedia(
			"(min-width: 576px) and (max-width: 767.98px)"
		);
		let lastScrollTop = 0;

		const handleScroll = () => {
			if (stickyDisabledQuery.matches) {
				setIsSticky(false);
				return;
			}

			const st = window.scrollY;
			if (st > 500) {
				if (st > lastScrollTop) {
					// Scrolling down → remove sticky
					setIsSticky(false);
				} else {
					// Scrolling up → add sticky
					setIsSticky(true);
				}
			} else {
				// Reset when near top
				setIsSticky(false);
			}
			lastScrollTop = st;
		};

		const handleBreakpointChange = () => {
			lastScrollTop = window.scrollY;
			handleScroll();
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);

		if (stickyDisabledQuery.addEventListener) {
			stickyDisabledQuery.addEventListener("change", handleBreakpointChange);
		} else {
			stickyDisabledQuery.addListener(handleBreakpointChange);
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);

			if (stickyDisabledQuery.removeEventListener) {
				stickyDisabledQuery.removeEventListener(
					"change",
					handleBreakpointChange
				);
			} else {
				stickyDisabledQuery.removeListener(handleBreakpointChange);
			}
		};
	}, [isStickyHeader]);

	return isSticky;
};

export default useHeaderFunction;
