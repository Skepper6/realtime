"use client";

import ErrorMain from "@/components/layout/main/ErrorMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Error() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ErrorMain title={"500"} text={"Something went wrong"} />
		</PageWrapper>
	);
}
