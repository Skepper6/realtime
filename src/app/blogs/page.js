import { redirect } from "next/navigation";

export default async function Blogs({ searchParams }) {
	const params = await searchParams;
	const query = new URLSearchParams();

	Object.entries(params || {}).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach(item => {
				if (item) {
					query.append(key, item);
				}
			});
			return;
		}

		if (value) {
			query.set(key, value);
		}
	});

	const queryString = query.toString();
	redirect(queryString ? `/resources/blogs?${queryString}` : "/resources/blogs");
}
