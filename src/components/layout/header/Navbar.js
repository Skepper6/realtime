import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const resolveMenuPath = path => {
	if (!path || path === "#") return "javascript:void(0)";
	return path;
};

const Navbar = ({ option, isStickyHeader }) => {
	const { headerType } = option;
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems()?.map(item => makeActiveLink(item)) || [];

	const renderStandardSubmenu = submenu =>
		submenu?.map((item, idx) => {
			const hasNestedItems = item?.items?.length > 0;

			if (hasNestedItems) {
				return (
					<li
						key={`${item?.id || idx}-${item?.name || "nested"}`}
						className={`has-dropdown ${
							item?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={resolveMenuPath(item?.path)}>{item?.name}</Link>
						<ul className="sub-menu">
							{item?.items?.map((nestedItem, nestedIdx) => (
								<li
									key={`${nestedItem?.id || nestedIdx}-${nestedItem?.name || "item"}`}
									className={nestedItem?.isActive ? "current-menu-item" : ""}
								>
									<Link href={resolveMenuPath(nestedItem?.path)}>
										{nestedItem?.name}
									</Link>
								</li>
							))}
						</ul>
					</li>
				);
			}

			return (
				<li
					key={`${item?.id || idx}-${item?.name || "submenu"}`}
					className={item?.isActive ? "current-menu-item" : ""}
				>
					<Link href={resolveMenuPath(item?.path)}>
						{item?.name ? item?.name : "Menu Item"}
					</Link>
				</li>
			);
		});

	return (
		<div
			className={`mainmenu ${
				(headerType === 3 || headerType === 4) && !isStickyHeader ? "menu-3" : ""
			} d-lg-block d-none`}
			id={isStickyHeader ? "mainmenu" : "main-menu"}
		>
			<ul>
				{navItems?.map((item, idx) => {
					const hasSubmenu = item?.submenu?.length > 0;
					const isServiceStyledMenu =
						hasSubmenu && item?.submenuStyle === "service";

					return (
						<li
							key={`${item?.id || idx}-${item?.name || "menu"}`}
							className={`${hasSubmenu ? "has-dropdown " : ""}${
								item?.isActive ? "current-menu-ancestor" : ""
							}`}
						>
							<Link href={resolveMenuPath(item?.path)}>
								{item?.name ? item?.name : "Menu"}
							</Link>

							{hasSubmenu ? (
								isServiceStyledMenu ? (
									<ul className="sub-menu mega-menu-service">
										{item?.submenu?.map((serviceItem, serviceIdx) => (
											<li key={`${serviceItem?.id || serviceIdx}-${serviceItem?.name}`}>
												<Link
													className="mega-menu-service-single"
													href={resolveMenuPath(serviceItem?.path)}
												>
													<span className="mega-menu-service-icon">
														<i
															className={
																serviceItem?.icon
																	? serviceItem?.icon
																	: "tji-optimization"
															}
														></i>
													</span>
													<span className="mega-menu-service-title">
														{serviceItem?.name
															? serviceItem?.name
															: "Service"}
													</span>
													<span className="mega-menu-service-nav">
														<i className="tji-arrow-right"></i>
														<i className="tji-arrow-right"></i>
													</span>
												</Link>
											</li>
										))}
									</ul>
								) : (
									<ul className="sub-menu">
										{renderStandardSubmenu(item?.submenu)}
									</ul>
								)
							) : (
								""
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
