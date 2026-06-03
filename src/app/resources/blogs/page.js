import BlogGridMain from "@/components/layout/main/BlogGridMain";
import BlogMain from "@/components/layout/main/BlogMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";
import { Suspense } from "react";

const FILTER_KEYS = ["category", "tag", "author_role", "search"];

export const metadata = buildMetadata({
	title: "Blogs",
	description:
		"Read insights, guides, and project thinking from Real Time Infra across HVAC, electrical systems, public health engineering, and building performance.",
	path: "/resources/blogs",
	keywords: ["blogs", "engineering insights", "building services articles"],
});

export default async function ResourceBlogsPage({ searchParams }) {
	const params = await searchParams;
	const hasFilters = FILTER_KEYS.some(key => {
		const value = params?.[key];
		return Array.isArray(value) ? value.length > 0 : Boolean(value);
	});

	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			{hasFilters ? (
				<Suspense fallback={<></>}>
					<BlogMain />
				</Suspense>
			) : (
				<BlogGridMain />
			)}
		</PageWrapper>
	);
}
