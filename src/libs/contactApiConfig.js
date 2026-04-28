const legacyLocalBackendUrl = "http://localhost/realtime-contact-api";
const productionBackendUrl = "https://skepper.in/realtime-backend";
const normalizeBaseUrl = value => String(value || "").trim().replace(/\/+$/, "");

const localBackendUrl =
	normalizeBaseUrl(process.env.NEXT_PUBLIC_LOCAL_CONTACT_API_BASE_URL) ||
	legacyLocalBackendUrl;
const localJobBackendUrl =
	normalizeBaseUrl(process.env.NEXT_PUBLIC_LOCAL_JOB_API_BASE_URL) ||
	`${localBackendUrl}/job`;
const productionJobBackendUrl = `${productionBackendUrl}/job`;

const isEnabled = value =>
	["1", "true", "yes", "on"].includes(String(value || "").trim().toLowerCase());

const useLocalPhpBackend = () =>
	isEnabled(process.env.NEXT_PUBLIC_USE_LOCAL_PHP_BACKEND);

const getContactApiBaseUrl = () => {
	const configuredBaseUrl = normalizeBaseUrl(
		process.env.NEXT_PUBLIC_CONTACT_API_BASE_URL
	);

	if (configuredBaseUrl) {
		return configuredBaseUrl;
	}

	if (useLocalPhpBackend()) {
		return localBackendUrl;
	}

	return productionBackendUrl;
};

const getJobApiBaseUrl = () => {
	const configuredBaseUrl = normalizeBaseUrl(
		process.env.NEXT_PUBLIC_JOB_API_BASE_URL
	);

	if (configuredBaseUrl) {
		return configuredBaseUrl;
	}

	if (useLocalPhpBackend()) {
		return localJobBackendUrl;
	}

	return productionJobBackendUrl;
};

const contactApiConfig = {
	baseUrl: getContactApiBaseUrl(),
	jobBaseUrl: getJobApiBaseUrl(),
	adminApiKey: "",
};

export default contactApiConfig;
