"use client";

import CaseStudyCard from "@/components/shared/cards/CaseStudyCard";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getCaseStudies from "@/libs/getCaseStudies";
import { useEffect, useMemo, useState } from "react";
import styles from "./CaseStudiesPrimary.module.css";

const ITEMS_PER_PAGE = 6;

const CaseStudiesPrimary = () => {
	const caseStudies = getCaseStudies();
	const [selectedService, setSelectedService] = useState("all");
	const [searchKeyword, setSearchKeyword] = useState("");

	const serviceOptions = useMemo(() => {
		const values = caseStudies?.map(item => item?.service).filter(Boolean) || [];
		return ["all", ...new Set(values)];
	}, [caseStudies]);

	const filteredItems = useMemo(() => {
		const keyword = searchKeyword.trim().toLowerCase();
		return caseStudies?.filter(item => {
			const matchesService =
				selectedService === "all" ? true : item?.service === selectedService;
			const matchesSearch = keyword
				? `${item?.title || ""} ${item?.industry || ""} ${item?.service || ""}`
						.toLowerCase()
						.includes(keyword)
				: true;

			return matchesService && matchesSearch;
		});
	}, [caseStudies, searchKeyword, selectedService]);

	const {
		currentItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		totalPages,
		handleCurrentPage,
		firstItem,
		lastItem,
	} = usePagination(filteredItems, ITEMS_PER_PAGE);

	useEffect(() => {
		setCurrentpage(0);
	}, [selectedService, searchKeyword, setCurrentpage]);

	const hasFilteredItems = filteredItems?.length > 0;
	const hasPagination = filteredItems?.length > currentItems?.length;
	const hasActiveFilter = selectedService !== "all" || searchKeyword.trim();

	const handleReset = () => {
		setSelectedService("all");
		setSearchKeyword("");
		setCurrentpage(0);
	};

	return (
		<section className="tj-blog-section-two section-space blog_lists">
			<div className="container">
				<div className={styles.toolbar}>
					<select
						className={styles.control}
						value={selectedService}
						onChange={e => setSelectedService(e.target.value)}
						aria-label="Filter by service"
					>
						<option value="all">Service</option>
						{serviceOptions
							?.filter(option => option !== "all")
							?.map(option => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
					</select>

					<button
						type="button"
						className={styles.resetBtn}
						onClick={handleReset}
						disabled={!hasActiveFilter}
					>
						Reset Filter
					</button>

					<div className={styles.searchWrap}>
						<i className={`fa-light fa-magnifying-glass ${styles.searchIcon}`}></i>
						<input
							className={`${styles.control} ${styles.searchInput}`}
							type="search"
							placeholder="Search by Name"
							value={searchKeyword}
							onChange={e => setSearchKeyword(e.target.value)}
							aria-label="Search case studies by name"
						/>
					</div>
				</div>

				{hasFilteredItems ? (
					<div className="row rg-30">
						{currentItems?.map((item, idx) => (
							<div className="col-xl-4 col-md-6" key={item?.id || idx}>
								<CaseStudyCard caseStudy={item} idx={idx} />
							</div>
						))}
					</div>
				) : (
					<p className={styles.emptyState}>
						No case studies found for the current filter/search.
					</p>
				)}

				{hasPagination ? (
					<Paginations
						paginationDetails={{
							currentItems,
							currentpage,
							setCurrentpage,
							paginationItems,
							currentPaginationItems,
							totalPages,
							handleCurrentPage,
							firstItem,
							lastItem,
						}}
					/>
				) : (
					""
				)}
			</div>
		</section>
	);
};

export default CaseStudiesPrimary;
