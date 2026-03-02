"use client";
import { usePathname } from "next/navigation";

const normalizePath = path => (path ? path.split("#")[0].split("?")[0] : "");

// make forcely inactive for some paths
const makeForcelyInactive = (pathname, currentPathname) => {
	const normalizedPathname = normalizePath(pathname);
	const normalizedCurrentPathname = normalizePath(currentPathname);
	const isInactive = [
		"/services",
		"/services/1",
		"/portfolios",
		"/portfolios/1",
		"/blogs",
		"/blogs/1",
		"/blog-grid",
		"/blog-sidebar",
		"/contact",
	].includes(normalizedPathname);
	return isInactive ? false : normalizedPathname === normalizedCurrentPathname;
};

const isPathMatch = (pathname, currentPathname, isRestricted) =>
	isRestricted
		? makeForcelyInactive(pathname, currentPathname)
		: normalizePath(pathname) === normalizePath(currentPathname);

// check active link
const checkActive = (mainObject, currentPathname, isRestricted) => {
	if (!mainObject) return false;
	const { path, submenu } = mainObject;
	const isActiveLink =
		isPathMatch(path, currentPathname, isRestricted) ||
		submenu?.some(
			({ items, path: path1 }) =>
				isPathMatch(path1, currentPathname, isRestricted) ||
				items?.some(({ path: path2 }) =>
					isPathMatch(path2, currentPathname, isRestricted)
				)
		);
	return isActiveLink;
};

export default function useActiveLink() {
	const currentPathname = usePathname();

	const makeActiveLink = modifiableObject => {
		if (!modifiableObject) return {};
		const { name } = modifiableObject;
		const isPages = name === "Pages" ? true : false;
		const currentObject = {
			...modifiableObject,
			isActive: checkActive(modifiableObject, currentPathname, isPages),
			submenu: modifiableObject?.submenu?.length
				? modifiableObject?.submenu?.map(submenuItem => ({
						...submenuItem,
						isActive: checkActive(submenuItem, currentPathname),
						items: submenuItem?.items?.length
							? submenuItem?.items?.map(item => ({
									...item,
									isActive: checkActive(item, currentPathname, isPages),
							  }))
							: [],
				  }))
				: [],
		};

		return currentObject;
	};
	return makeActiveLink;
}
