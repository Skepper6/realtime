export const siteName = "Real Time Infra";
export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL || "https://realtime-three-zeta.vercel.app";
export const socialImage = "/images/home/design_time.jpg";

export const defaultTitle =
	"Real Time Infra | HVAC, Electrical, PHE & Building Management Solutions";
export const defaultDescription =
	"Real Time Infra delivers HVAC, electrical systems, public health engineering, building management systems, and annual maintenance services that keep buildings efficient, safe, and ready for uptime.";
export const defaultKeywords = [
	"Real Time Infra",
	"HVAC services",
	"electrical systems",
	"public health engineering",
	"PHE services",
	"building management system",
	"BMS automation",
	"annual maintenance services",
	"MEP solutions",
	"building infrastructure services",
	"facility maintenance",
];

const socialImageMetadata = [
	{
		url: socialImage,
		width: 1200,
		height: 630,
		alt: "Real Time Infra engineering and building services",
	},
];

export function buildMetadata({
	title,
	description = defaultDescription,
	path = "/",
	keywords = [],
	index = true,
	follow = true,
}) {
	const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
	const mergedKeywords = [...new Set([...defaultKeywords, ...keywords])];

	return {
		title: title || defaultTitle,
		description,
		keywords: mergedKeywords,
		alternates: {
			canonical: path,
		},
		openGraph: {
			title: fullTitle,
			description,
			url: path,
			siteName,
			type: "website",
			locale: "en_US",
			images: socialImageMetadata,
		},
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description,
			images: [socialImage],
		},
		robots: {
			index,
			follow,
			googleBot: {
				index,
				follow,
				"max-image-preview": "large",
				"max-snippet": -1,
				"max-video-preview": -1,
			},
		},
	};
}
