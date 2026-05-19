import AdminShell from "@/components/shared/admin/AdminShell";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Admin",
	description: "Admin tools for Real Time Infra.",
	path: "/admin",
	index: false,
	follow: false,
});

export default function AdminLayout({ children }) {
	return <AdminShell>{children}</AdminShell>;
}
