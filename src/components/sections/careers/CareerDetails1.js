"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useCurrentItem } from "@/context_api/CurrentItemContext";
import getCareers from "@/libs/getCareers";
import getCareerRoleConfigs from "@/libs/getCareerRoleConfigs";
import getPortfolio from "@/libs/getPortfolio";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import getServices from "@/libs/getServices";
import contactApiConfig from "@/libs/contactApiConfig";

const careerApplicationApiBaseUrl = contactApiConfig.jobBaseUrl.replace(
	/\/+$/,
	""
);
const maxResumeSizeMb = 5;
const maxResumeSizeBytes = maxResumeSizeMb * 1024 * 1024;

const initialFeedback = {
	type: "",
	message: "",
};

const initialFieldErrors = {
	name: "",
	email: "",
	tel: "",
	cover_letter: "",
	resume: "",
};

const cleanText = value =>
	String(value || "")
		.replace(/\u00E2\u20AC\u2122/g, "'")
		.replace(/\u00C2/g, " ")
		.replace(/\s+/g, " ")
		.trim();

const normalizePrice = value =>
	cleanText(value)
		.replace(/-\&(?=\d)/g, "-$")
		.replace(/\$+/g, "$");

const careerRoleConfigs = getCareerRoleConfigs();
const serviceItems = getServices();
const projectItems = getPortfolio();

const getCareerDetailContent = career => {
	const fallbackService = serviceItems[0] || {};
	const fallbackProject = projectItems[0] || {};
	const roleKey = cleanText(career?.title).toLowerCase();
	const roleConfig =
		careerRoleConfigs[roleKey] || careerRoleConfigs["project coordinator"];
	const service =
		serviceItems.find(item => item.id === roleConfig.serviceId) || fallbackService;
	const project =
		projectItems.find(item => item.id === roleConfig.projectId) || fallbackProject;
	const careerTitle = cleanText(career?.title) || "Career opportunity";
	const location = cleanText(career?.location) || "Bangalore, India";
	const serviceTitle = cleanText(service?.title);
	const projectTitle = cleanText(project?.title);
	const serviceDesc = cleanText(service?.desc);
	const projectDesc = cleanText(project?.desc);
	const price = normalizePrice(career?.price);
	const duration = cleanText(career?.duration);
	const compensation = [price, duration].filter(Boolean).join(" / ");

	return {
		description: [
			roleConfig.descriptionLead,
			`${careerTitle} will contribute to our ${serviceTitle} work in ${location}, using the ${projectTitle} delivery model as the working reference for this role.`,
			[projectDesc, serviceDesc].filter(Boolean).join(" "),
		].filter(Boolean),
		requirementIntro: roleConfig.requirementIntro,
		requirements: roleConfig.requirements,
		responsibilityIntro: roleConfig.responsibilityIntro,
		responsibilities: roleConfig.responsibilities,
		infoRows: [
			{ label: "Job ID", value: `SKP-${String(career?.id || 0).padStart(3, "0")}` },
			{ label: "Service", value: serviceTitle },
			{ label: "Reference project", value: projectTitle },
			{ label: "Employment type", value: cleanText(career?.category) },
			{ label: "Location", value: location },
			{ label: "Compensation", value: compensation },
			{ label: "Project scope", value: cleanText(service?.totalProject) },
			{ label: "Priority", value: cleanText(career?.need) },
		].filter(item => item.value),
	};
};

const validateEmail = value =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

const validateName = value =>
	/^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(String(value || "").trim());

const getPhoneDigits = value => String(value || "").replace(/\D/g, "");

const validateResumeFile = file => {
	if (!file) {
		return "Please upload your resume in PDF format.";
	}

	if (!/\.pdf$/i.test(String(file.name || ""))) {
		return "Only PDF resumes are allowed.";
	}

	if (file.size <= 0) {
		return "The selected PDF file is empty.";
	}

	if (file.size > maxResumeSizeBytes) {
		return `Resume must be ${maxResumeSizeMb} MB or smaller.`;
	}

	return "";
};

const validateField = (fieldName, value) => {
	const normalizedValue = String(value || "").trim();

	switch (fieldName) {
		case "name":
			if (!normalizedValue) return "Please enter your full name.";
			if (normalizedValue.length < 3)
				return "Name must be at least 3 characters.";
			if (!validateName(normalizedValue))
				return "Enter a valid name using letters only.";
			return "";

		case "email":
			if (!normalizedValue) return "Please enter your email address.";
			if (!validateEmail(normalizedValue))
				return "Please enter a valid email address.";
			return "";

		case "tel": {
			if (!normalizedValue) return "Please enter your phone number.";
			const digits = getPhoneDigits(normalizedValue);
			if (digits.length < 10 || digits.length > 15)
				return "Phone number must be between 10 and 15 digits.";
			return "";
		}

		case "cover_letter":
			if (!normalizedValue) return "Please enter your cover letter.";
			if (normalizedValue.length < 10)
				return "Cover letter must be at least 10 characters.";
			return "";

		case "resume":
			return validateResumeFile(value);

		default:
			return "";
	}
};

const validatePayload = payload => ({
	name: validateField("name", payload.name),
	email: validateField("email", payload.email),
	tel: validateField("tel", payload.tel),
	cover_letter: validateField("cover_letter", payload.cover_letter),
	resume: validateField("resume", payload.resume),
});

const CareerDetails1 = () => {
	const items = getCareers();
	const currentId = useCurrentItem();
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentId);
	const { id, title, iconName, category, need, location } = currentItem || {};
	const careerContent = getCareerDetailContent(currentItem);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState(initialFeedback);
	const [fieldErrors, setFieldErrors] = useState(initialFieldErrors);

	const handleFieldChange = event => {
		const { name, value } = event.target;

		if (!name) {
			return;
		}

		setFieldErrors(previousErrors => ({
			...previousErrors,
			[name]: validateField(name, value),
		}));

		if (feedback.message) {
			setFeedback(initialFeedback);
		}
	};

	const handleFileChange = event => {
		const file = event.target.files?.[0] || null;

		setFieldErrors(previousErrors => ({
			...previousErrors,
			resume: validateField("resume", file),
		}));

		if (feedback.message) {
			setFeedback(initialFeedback);
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (isSubmitting) {
			return;
		}

		const jobId = id || currentId;
		const jobTitle = title || "Open position";

		if (!jobId || !jobTitle) {
			setFeedback({
				type: "error",
				message:
					"The selected job could not be identified. Please refresh and try again.",
			});
			return;
		}

		const form = event.currentTarget;
		const formData = new FormData(form);
		const rawResume = formData.get("resume");
		const resumeFile =
			rawResume instanceof File && rawResume.size > 0 ? rawResume : null;

		const payload = {
			name: String(formData.get("name") || "").trim(),
			email: String(formData.get("email") || "").trim(),
			tel: String(formData.get("tel") || "").trim(),
			cover_letter: String(formData.get("cover_letter") || "").trim(),
			resume: resumeFile,
		};

		if (!careerApplicationApiBaseUrl) {
			setFeedback({
				type: "error",
				message: "Contact backend URL is missing in contactApiConfig.js.",
			});
			return;
		}

		const errors = validatePayload(payload);
		setFieldErrors(errors);

		if (Object.values(errors).some(Boolean)) {
			setFeedback({
				type: "error",
				message: "Please correct the highlighted fields before submitting.",
			});
			return;
		}

		formData.set("job_id", String(jobId));
		formData.set("job_title", jobTitle);
		formData.set(
			"page_url",
			typeof window !== "undefined" ? window.location.href : `/careers/${jobId}`
		);

		setIsSubmitting(true);
		setFeedback(initialFeedback);

		try {
			const response = await fetch(
				`${careerApplicationApiBaseUrl}/job-application-submit.php`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
					},
					body: formData,
				}
			);

			const result = await response.json().catch(() => null);

			if (!response.ok || !result?.success) {
				throw new Error(
					result?.message ||
						"Something went wrong while saving your job application."
				);
			}

			form.reset();
			setFieldErrors(initialFieldErrors);
			setFeedback({
				type: "success",
				message:
					result?.message ||
					"We have received your application. Our team will contact you regarding the next steps soon",
			});
		} catch (error) {
			const fallbackMessage = `PHP backend is not reachable at ${careerApplicationApiBaseUrl}.`;
			const errorMessage =
				error instanceof Error ? error.message.trim() : "";

			setFeedback({
				type: "error",
				message:
					!errorMessage || errorMessage === "Failed to fetch"
						? fallbackMessage
						: errorMessage,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="tj-careers-details career_detail_sec section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post">
								<div className="tj-careers-top mb-30">
									<div className="tj-careers-top-icon">
										<i className={iconName ? iconName : "tji-manage"}></i>
									</div>
									<div className="tj-careers-top-content">
										<div className="tj-careers-tag">
											<span>{category}</span> <span>{need}</span>
										</div>
										<h3 className="tj-careers-top-title text-anim">{title}</h3>
										<span className="location">
											<i className="tji-location"></i>
											{location}
										</span>
									</div>
								</div>
								<div className="tj-entry-content">
									<h4 className="text-anim">Job Description</h4>
									{careerContent.description.map((paragraph, index) => (
										<p
											key={paragraph}
											className="wow fadeInUp"
											data-wow-delay={index === 0 ? "0.1s" : "0.3s"}
										>
											{paragraph}
										</p>
									))}
									<div className="tj-check-list">
										<h4 className="text-anim">Requirements</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											{careerContent.requirementIntro}
										</p>
									</div>
									<div
										className="service-check-list mt-4 mb-4 wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ul>
											{careerContent.requirements.map(item => (
												<li key={item}>
													<i className="tji-double-check"></i>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="tj-check-list">
										<h4 className="text-anim">Responsibilities</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											{careerContent.responsibilityIntro}
										</p>
										<ul className="wow fadeInUp" data-wow-delay="0.3s">
											{careerContent.responsibilities.map(item => (
												<li key={item}>
													<i className="tji-double-check"></i> {item}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/careers/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/careers"} className="tj-nav-post__grid">
									<i className="tji-square-cube"></i>
								</Link>
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/careers/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-blog-sidebar">
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">Job information</h5>
								<div className="project_catagory">
									<ul>
										{careerContent.infoRows.map(item => (
											<li key={item.label}>
												<span className="first-child">{item.label}</span>
												<span>{item.value}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h5 className="tj-sidebar-widget-title">Apply online</h5>
								<div className="tj-careers-form">
									<form onSubmit={handleSubmit} noValidate>
										<div className="form-input">
											<input
												type="text"
												name="name"
												placeholder="Full name*"
												className={fieldErrors.name ? "contact-input-error" : ""}
												onChange={handleFieldChange}
												onBlur={handleFieldChange}
											/>
											<p className="contact-field-error">
												{fieldErrors.name || ""}
											</p>
										</div>
										<div className="form-input">
											<input
												type="email"
												name="email"
												placeholder="Enter email*"
												className={fieldErrors.email ? "contact-input-error" : ""}
												onChange={handleFieldChange}
												onBlur={handleFieldChange}
											/>
											<p className="contact-field-error">
												{fieldErrors.email || ""}
											</p>
										</div>
										<div className="form-input">
											<input
												type="tel"
												name="tel"
												placeholder="Phone number*"
												className={fieldErrors.tel ? "contact-input-error" : ""}
												onChange={handleFieldChange}
												onBlur={handleFieldChange}
											/>
											<p className="contact-field-error">
												{fieldErrors.tel || ""}
											</p>
										</div>
										<div className="form-input">
											<textarea
												name="cover_letter"
												placeholder="Cover letter*"
												className={
													fieldErrors.cover_letter ? "contact-input-error" : ""
												}
												onChange={handleFieldChange}
												onBlur={handleFieldChange}
											></textarea>
											<p className="contact-field-error">
												{fieldErrors.cover_letter || ""}
											</p>
										</div>
										<div className="form-input reduce">
											<label className="label" htmlFor="inputFile">
												Attach resume*
											</label>
											<input
												type="file"
												id="inputFile"
												name="resume"
												accept="application/pdf,.pdf"
												className={fieldErrors.resume ? "contact-input-error" : ""}
												onChange={handleFileChange}
												onBlur={handleFileChange}
											/>
											<p className="career-form-file-note">
												PDF only, max {maxResumeSizeMb} MB.
											</p>
											<p className="contact-field-error">
												{fieldErrors.resume || ""}
											</p>
										</div>
										{feedback.message ? (
											<p
												className={`contact-form-feedback contact-form-feedback--${feedback.type}`}
											>
												{feedback.message}
											</p>
										) : null}
										<div className="tj-careers-button">
											<ButtonPrimary
												text={isSubmitting ? "Submitting..." : "Submit now"}
												type="submit"
											/>
										</div>
									</form>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CareerDetails1;
