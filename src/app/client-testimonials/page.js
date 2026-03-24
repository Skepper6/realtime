import ClientTestimonialsMain from "@/components/layout/main/ClientTestimonialsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function ClientTestimonialsPage() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ClientTestimonialsMain />
		</PageWrapper>
	);
}
