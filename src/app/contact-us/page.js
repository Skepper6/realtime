import ContactMain from "@/components/layout/main/ContactMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { buildMetadata } from "@/libs/seo";

export const metadata = buildMetadata({
	title: "Contact Us",
	description:
		"Contact Real Time Infra for HVAC, electrical, PHE, building management, and annual maintenance solutions tailored to your project.",
	path: "/contact-us",
	keywords: ["contact Real Time Infra", "HVAC consultation", "MEP consultation"],
});

export default function ContactUsPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ContactMain />
		</PageWrapper>
	);
}
