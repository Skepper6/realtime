import JobApplicationsAdminPage from "@/components/sections/careers/JobApplicationsAdminPage";
import contactApiConfig from "@/libs/contactApiConfig";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Job Applications",
	description: "Admin view for careers job applications.",
	path: "/admin/job-applications",
	index: false,
	follow: false,
});

const getApiBaseUrl = () => {
	return contactApiConfig.jobBaseUrl.replace(/\/+$/, "");
};

const getJobApplications = async () => {
	const apiBaseUrl = getApiBaseUrl();

	if (!apiBaseUrl) {
		return {
			applications: [],
			errorMessage: "Contact backend URL is missing in contactApiConfig.js.",
		};
	}

	try {
		const headers = {
			Accept: "application/json",
		};

		if (contactApiConfig.adminApiKey) {
			headers["x-admin-key"] = contactApiConfig.adminApiKey;
		}

		const response = await fetch(
			`${apiBaseUrl}/job-application-list.php?limit=200`,
			{
				cache: "no-store",
				headers,
			}
		);
		const result = await response.json().catch(() => null);

		if (!response.ok || !result?.success) {
			return {
				applications: [],
				errorMessage:
					result?.message ||
					"Unable to fetch job applications from the PHP backend.",
			};
		}

		return {
			applications: Array.isArray(result?.data) ? result.data : [],
			errorMessage: "",
		};
	} catch (error) {
		const fallbackMessage = `PHP backend is not reachable at ${apiBaseUrl}.`;
		const errorMessage =
			error instanceof Error ? error.message.trim() : "";

		return {
			applications: [],
			errorMessage:
				!errorMessage || errorMessage === "Failed to fetch"
					? fallbackMessage
					: errorMessage,
		};
	}
};

export default async function JobApplicationsPage() {
	const { applications, errorMessage } = await getJobApplications();

	return (
		<JobApplicationsAdminPage
			applications={applications}
			errorMessage={errorMessage}
		/>
	);
}
