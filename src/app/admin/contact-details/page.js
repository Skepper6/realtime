import ContactAdminPage from "@/components/sections/contacts/ContactAdminPage";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import contactApiConfig from "@/libs/contactApiConfig";

export const metadata = {
	title: "Contact Details | Real Time Infra",
	description: "Admin view for contact form submissions.",
};

const getApiBaseUrl = () => {
	return contactApiConfig.baseUrl.replace(/\/+$/, "");
};

const getContactSubmissions = async () => {
	const apiBaseUrl = getApiBaseUrl();

	if (!apiBaseUrl) {
		return {
			submissions: [],
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

		const response = await fetch(`${apiBaseUrl}/contact-list.php?limit=200`, {
			cache: "no-store",
			headers,
		});
		const result = await response.json().catch(() => null);

		if (!response.ok || !result?.success) {
			return {
				submissions: [],
				errorMessage:
					result?.message ||
					"Unable to fetch contact submissions from the PHP backend.",
			};
		}

		return {
			submissions: Array.isArray(result?.data) ? result.data : [],
			errorMessage: "",
		};
	} catch (error) {
		const fallbackMessage =
			"PHP backend is not reachable at http://localhost/realtime-contact-api.";
		const errorMessage =
			error instanceof Error ? error.message.trim() : "";

		return {
			submissions: [],
			errorMessage:
				!errorMessage || errorMessage === "Failed to fetch"
					? fallbackMessage
					: errorMessage,
		};
	}
};

export default async function ContactDetailsPage() {
	const { submissions, errorMessage } = await getContactSubmissions();

	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ContactAdminPage
				submissions={submissions}
				errorMessage={errorMessage}
			/>
		</PageWrapper>
	);
}
