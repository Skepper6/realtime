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

const ContactAdminPage = ({ submissions = [], errorMessage = "" }) => {
	return (
		<main className="contact-admin-page">
			<section className="contact-admin-hero">
				<div className="container">
					<div className="contact-admin-hero__content">
						<span className="hvacHero__pill font12">Admin Panel</span>
						<h1 className="sec-title font72 text-anim contact-admin-hero__title">
							Contact Form Details
						</h1>
					</div>
				</div>
			</section>

			<section className="section-bottom-space">
				<div className="container">
					<div className="contact-admin-summary">
						<div className="contact-admin-summary__card">
							<span className="contact-admin-summary__label">
								Total submissions
							</span>
							<strong>{submissions.length}</strong>
							{/* <span className="contact-admin-summary__subtext">
								Latest contact enquiries received from the website.
							</span> */}
						</div>
					</div>

					{errorMessage ? (
						<div className="alert alert-danger contact-admin-alert" role="alert">
							{errorMessage}
						</div>
					) : null}

					{submissions.length ? (
						<div className="contact-admin-table-wrap">
							<div
								data-lenis-prevent
								className="table-responsive contact-admin-table-scroll"
							>
								<table className="table contact-admin-table mb-0">
									<colgroup>
										<col style={{ width: "7%" }} />
										<col style={{ width: "14%" }} />
										<col style={{ width: "18%" }} />
										<col style={{ width: "14%" }} />
										<col style={{ width: "14%" }} />
										<col style={{ width: "18%" }} />
										<col style={{ width: "15%" }} />
									</colgroup>
									<thead>
										<tr>
											<th>S.No</th>
											<th>Name</th>
											<th>Email</th>
											<th>Phone</th>
											<th>Service</th>
											<th>Message</th>
											<th>Submitted</th>
										</tr>
									</thead>
									<tbody>
										{submissions.map((item, index) => (
											<tr key={item.id}>
												<td className="contact-admin-table__serial">
													{index + 1}
												</td>
												<td className="contact-admin-table__name-cell">
													<strong>
														{item.full_name || "Unknown Contact"}
													</strong>
												</td>
												<td className="contact-admin-table__email">
													<a href={`mailto:${item.email}`}>{item.email || "-"}</a>
												</td>
												<td className="contact-admin-table__phone">
													<a href={`tel:${item.phone}`}>{item.phone || "-"}</a>
												</td>
												<td className="contact-admin-table__service">
													<span>{item.service_interest || "-"}</span>
												</td>
												<td className="contact-admin-table__message">
													{item.message || "No message added."}
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
							No contact enquiries have been stored yet.
						</div>
					)}
				</div>
			</section>
		</main>
	);
};

export default ContactAdminPage;
