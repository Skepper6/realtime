import caseStudies from "../../public/fakedata/case-studies";

const getCaseStudies = () => {
	return caseStudies ? caseStudies : [];
};

export default getCaseStudies;
