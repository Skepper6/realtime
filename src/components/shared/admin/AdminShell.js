"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{
		href: "/admin/job-applications",
		title: "Job applications",
		description: "Careers inbox",
	},
	{
		href: "/admin/contact-details",
		title: "Contact enquiries",
		description: "Website leads",
	},
];

const getPageLabel = pathname => {
	const activeItem = navItems.find(item => pathname.startsWith(item.href));

	return activeItem ? activeItem.title : "Admin dashboard";
};

const AdminShell = ({ children }) => {
	const pathname = usePathname();
	const currentPageLabel = getPageLabel(pathname);

	return (
		<div className="admin-shell">
			<aside className="admin-shell__sidebar">
				<div className="admin-shell__brand">
					<div className="admin-shell__brand-mark">RT</div>
					<div className="admin-shell__brand-copy">
						<strong>Realtime Admin</strong>
						<span>Operations dashboard</span>
					</div>
				</div>

				<nav className="admin-shell__nav" aria-label="Admin navigation">
					{navItems.map(item => {
						const isActive =
							pathname === item.href || pathname.startsWith(`${item.href}/`);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`admin-shell__nav-link ${
									isActive ? "is-active" : ""
								}`}
							>
								<span className="admin-shell__nav-copy">
									<strong>{item.title}</strong>
									<small>{item.description}</small>
								</span>
								<span className="admin-shell__nav-arrow">/</span>
							</Link>
						);
					})}
				</nav>

				<div className="admin-shell__sidebar-card">
					<span className="admin-shell__sidebar-label">Quick access</span>
					<p>Use this area to review new applications and contact leads.</p>
					<Link href="/" className="admin-shell__website-link">
						Open website
					</Link>
				</div>
			</aside>

			<div className="admin-shell__main">
				<header className="admin-shell__topbar">
					<div className="admin-shell__topbar-copy">
						<span className="admin-shell__eyebrow">Administration</span>
						<h1>Dashboard</h1>
					</div>

					<div className="admin-shell__topbar-meta">
						<span className="admin-shell__topbar-label">Current view</span>
						<strong>{currentPageLabel}</strong>
					</div>
				</header>

				<div className="admin-shell__content">{children}</div>
			</div>
		</div>
	);
};

export default AdminShell;
