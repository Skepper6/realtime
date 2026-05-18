import ErrorPrimary from "@/components/sections/error/ErrorPrimary";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Notfound() {
	return (
		<PageWrapper isHeaderTop={false} footerType={"inner"}>
			<main>
				<ErrorPrimary />
			</main>
		</PageWrapper>
	);
}
