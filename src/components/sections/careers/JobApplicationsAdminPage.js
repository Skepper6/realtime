import Link from "next/link";

const formatSubmittedAt = value => {
	if (!value) {
		return "-";
	}

	const submittedAt = new Date(value);

	if (Number.isNaN(submittedAt.getTime())) {
		return value;
	}

	return submittedAt.toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short",
	});
};

const getLatestSubmission = items => {
	const latestApplication = items.reduce((latestItem, currentItem) => {
		const latestTime = new Date(latestItem?.created_at || 0).getTime();
		const currentTime = new Date(currentItem?.created_at || 0).getTime();

		if (Number.isNaN(currentTime)) {
			return latestItem;
		}

		if (!latestItem || currentTime > latestTime) {
			return currentItem;
		}

		return latestItem;
	}, null);

	return latestApplication ? formatSubmittedAt(latestApplication.created_at) : "-";
};

const JobApplicationsAdminPage = ({ applications = [], errorMessage = "" }) => {
	const totalApplications = applications.length;
	const uniqueRoles = new Set(
		applications.map(item => item.job_title || "Open position")
	).size;
	const uniqueApplicants = new Set(
		applications.map(item => String(item.email || "").trim()).filter(Boolean)
	).size;
	const latestSubmission = getLatestSubmission(applications);

	return (
		<main className="contact-admin-page">
			<section className="contact-admin-hero">
				<div className="contact-admin-hero__content">
					<div>
						<span className="contact-admin-hero__eyebrow">Careers dashboard</span>
						<h1 className="contact-admin-hero__title">Job applications</h1>
					</div>

					<div className="contact-admin-hero__actions">
						<Link
							href="/admin/contact-details"
							className="contact-admin-toolbar__action"
						>
							Open contact enquiries
						</Link>
					</div>
				</div>
			</section>

			<section className="contact-admin-summary">
				<div className="contact-admin-summary__card">
					<span className="contact-admin-summary__label">Total applications</span>
					<strong>{totalApplications}</strong>
				</div>
				<div className="contact-admin-summary__card">
					<span className="contact-admin-summary__label">Open roles</span>
					<strong>{uniqueRoles}</strong>
				</div>
				<div className="contact-admin-summary__card">
					<span className="contact-admin-summary__label">Unique applicants</span>
					<strong>{uniqueApplicants}</strong>
				</div>
				<div className="contact-admin-summary__card">
					<span className="contact-admin-summary__label">Latest received</span>
					<strong>{latestSubmission}</strong>
				</div>
			</section>

			{errorMessage ? (
				<div className="alert alert-danger contact-admin-alert" role="alert">
					{errorMessage}
				</div>
			) : null}

			<section className="contact-admin-panel">
				<div className="contact-admin-panel__header">
					<div>
						<h2 className="contact-admin-panel__title">Application records</h2>
					</div>
					<span className="contact-admin-panel__count">
						{totalApplications} {totalApplications === 1 ? "entry" : "entries"}
					</span>
				</div>

				{applications.length ? (
					<div className="contact-admin-table-wrap">
						<div
							data-lenis-prevent
							className="table-responsive contact-admin-table-scroll"
						>
							<table className="table contact-admin-table contact-admin-table--jobs mb-0">
								<colgroup>
									<col style={{ width: "80px" }} />
									<col style={{ width: "230px" }} />
									<col style={{ width: "250px" }} />
									<col style={{ width: "270px" }} />
									<col style={{ width: "190px" }} />
									<col style={{ width: "270px" }} />
									<col style={{ width: "180px" }} />
									<col style={{ width: "240px" }} />
								</colgroup>
								<thead>
									<tr>
										<th>S.No</th>
										<th>Job</th>
										<th>Applicant</th>
										<th>Email</th>
										<th>Phone</th>
										<th>Cover letter</th>
										<th>Resume</th>
										<th>Submitted</th>
									</tr>
								</thead>
								<tbody>
									{applications.map((item, index) => (
										<tr key={item.id}>
											<td className="contact-admin-table__serial">
												{index + 1}
											</td>
											<td className="contact-admin-table__service">
												<span>{item.job_title || "Open position"}</span>
											</td>
											<td className="contact-admin-table__name-cell">
												<strong>{item.full_name || "Unknown applicant"}</strong>
											</td>
											<td className="contact-admin-table__email">
												<a href={`mailto:${item.email}`}>{item.email || "-"}</a>
											</td>
											<td className="contact-admin-table__phone">
												<a href={`tel:${item.phone}`}>{item.phone || "-"}</a>
											</td>
											<td className="contact-admin-table__message">
												{item.cover_letter || "No cover letter added."}
											</td>
											<td className="contact-admin-table__resume">
												{item.id ? (
													<a
														className="contact-admin-download-link"
														href={`/admin/job-applications/download?id=${item.id}`}
													>
														Download PDF
													</a>
												) : (
													<span>-</span>
												)}
											</td>
											<td className="contact-admin-table__submitted">
												{formatSubmittedAt(item.created_at)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				) : (
					<div className="contact-admin-empty">
						No job applications have been stored yet.
					</div>
				)}
			</section>
		</main>
	);
};

export default JobApplicationsAdminPage;
