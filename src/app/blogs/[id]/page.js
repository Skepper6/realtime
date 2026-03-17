import { redirect } from "next/navigation";

export default async function BlogDetails({ params }) {
	const { id } = await params;
	redirect(`/resources/blogs/${id}`);
}
