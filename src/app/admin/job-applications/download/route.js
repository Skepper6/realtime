import contactApiConfig from "@/libs/contactApiConfig";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const getApiBaseUrl = () => contactApiConfig.jobBaseUrl.replace(/\/+$/, "");

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id") || "";

	if (!/^\d+$/.test(id)) {
		return Response.json(
			{
				success: false,
				message: "A valid job application id is required.",
			},
			{ status: 422 }
		);
	}

	const apiBaseUrl = getApiBaseUrl();

	if (!apiBaseUrl) {
		return Response.json(
			{
				success: false,
				message: "Contact backend URL is missing in contactApiConfig.js.",
			},
			{ status: 500 }
		);
	}

	try {
		const headers = {
			Accept: "application/pdf, application/json",
		};

		if (contactApiConfig.adminApiKey) {
			headers["x-admin-key"] = contactApiConfig.adminApiKey;
		}

		const response = await fetch(
			`${apiBaseUrl}/job-application-download.php?id=${encodeURIComponent(id)}`,
			{
				cache: "no-store",
				headers,
			}
		);

		if (!response.ok) {
			const errorBody = await response.text().catch(() => "");
			let errorMessage = "Unable to download the requested resume.";

			if (errorBody) {
				try {
					const parsedError = JSON.parse(errorBody);
					errorMessage = parsedError?.message || errorMessage;
				} catch {
					errorMessage = errorBody.trim() || errorMessage;
				}
			}

			return Response.json(
				{
					success: false,
					message: errorMessage,
				},
				{ status: response.status }
			);
		}

		const fileBuffer = await response.arrayBuffer();
		const outgoingHeaders = new Headers();

		["content-type", "content-disposition", "content-length", "cache-control"].forEach(
			headerName => {
				const headerValue = response.headers.get(headerName);

				if (headerValue) {
					outgoingHeaders.set(headerName, headerValue);
				}
			}
		);

		outgoingHeaders.set("x-content-type-options", "nosniff");

		return new Response(fileBuffer, {
			status: 200,
			headers: outgoingHeaders,
		});
	} catch (error) {
		const errorMessage =
			error instanceof Error && error.message.trim()
				? error.message.trim()
				: `PHP backend is not reachable at ${apiBaseUrl}.`;

		return Response.json(
			{
				success: false,
				message: errorMessage,
			},
			{ status: 502 }
		);
	}
}
