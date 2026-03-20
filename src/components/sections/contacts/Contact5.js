"use client";

import { useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import contactApiConfig from "@/libs/contactApiConfig";

const contactApiBaseUrl = contactApiConfig.baseUrl.replace(/\/+$/, "");

const serviceOptions = [
	{ value: "", name: "Choose an option" },
	{ value: "HVAC Services", name: "HVAC Services" },
	{
		value: "Electrical Systems Services",
		name: "Electrical Systems Services",
	},
	{ value: "PHE Services", name: "PHE Services" },
	{ value: "Annual Maintenance", name: "Annual Maintenance" },
	{
		value: "Building Management Service",
		name: "Building Management Service",
	},
];

const initialFeedback = {
	type: "",
	message: "",
};

const initialFieldErrors = {
	name: "",
	email: "",
	tel: "",
	service: "",
	message: "",
};

const validateEmail = value =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const validateName = value =>
	/^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(value.trim());

const getPhoneDigits = value => value.replace(/\D/g, "");

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

		case "service":
			if (!normalizedValue) return "Please choose a service.";
			return "";

		case "message":
			if (!normalizedValue) return "Please enter your message.";
			if (normalizedValue.length < 10)
				return "Message must be at least 10 characters.";
			return "";

		default:
			return "";
	}
};

const validatePayload = payload => ({
	name: validateField("name", payload.name),
	email: validateField("email", payload.email),
	tel: validateField("tel", payload.tel),
	service: validateField("service", payload.service),
	message: validateField("message", payload.message),
});

const Contact5 = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState(initialFeedback);
	const [fieldErrors, setFieldErrors] = useState(initialFieldErrors);
	const [selectKey, setSelectKey] = useState(0);

	const updateFieldError = (fieldName, value) => {
		setFieldErrors(previousErrors => ({
			...previousErrors,
			[fieldName]: validateField(fieldName, value),
		}));
	};

	const handleFieldChange = event => {
		const { name, value } = event.target;

		if (!name) {
			return;
		}

		updateFieldError(name, value);

		if (feedback.message) {
			setFeedback(initialFeedback);
		}
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (isSubmitting) {
			return;
		}

		const form = event.currentTarget;
		const formData = new FormData(form);
		const payload = {
			name: String(formData.get("name") || "").trim(),
			email: String(formData.get("email") || "").trim(),
			tel: String(formData.get("tel") || "").trim(),
			service: String(formData.get("service") || "").trim(),
			message: String(formData.get("message") || "").trim(),
			page_url:
				typeof window !== "undefined" ? window.location.href : "/contact-us",
		};

		if (!contactApiBaseUrl) {
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

		setIsSubmitting(true);
		setFeedback(initialFeedback);

		try {
			const response = await fetch(`${contactApiBaseUrl}/contact-submit.php`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(payload),
			});

			const result = await response.json().catch(() => null);

			if (!response.ok || !result?.success) {
				throw new Error(
					result?.message ||
						"Something went wrong while saving your contact request."
				);
			}

			form.reset();
			setSelectKey(currentKey => currentKey + 1);
			setFieldErrors(initialFieldErrors);
			setFeedback({
				type: "success",
				message:
					result?.message ||
					"Thanks, your contact request has been saved successfully.",
			});
		} catch (error) {
			const fallbackMessage = `PHP backend is not reachable at ${contactApiBaseUrl}.`;
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
		<section className="tj-contact-area section-bottom-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-6">
						<div
							className="contact-form-one style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<h3 className="title text-anim">
								Feel free to get in touch or <br /> visit our location.
							</h3>
							<form onSubmit={handleSubmit} noValidate>
								<div className="row">
									<div className="col-sm-6">
										<div className="contact-field-group">
											<div className="form-input">
												<input
													type="text"
													id="first"
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
										</div>
									</div>
									<div className="col-sm-6">
										<div className="contact-field-group">
											<div className="form-input">
												<input
													type="email"
													id="emailOne"
													name="email"
													placeholder="Email address*"
													className={fieldErrors.email ? "contact-input-error" : ""}
													onChange={handleFieldChange}
													onBlur={handleFieldChange}
												/>
												<p className="contact-field-error">
													{fieldErrors.email || ""}
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="contact-field-group">
											<div className="form-input">
												<input
													type="tel"
													id="tel"
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
										</div>
									</div>
									<div className="col-sm-6">
										<div className="contact-field-group">
											<div className="form-input">
												<div className="tj-nice-select-box">
													<div className="tj-select">
														<FormSelect
															key={selectKey}
															id="contact-service"
															name="service"
															className={`nice-select ${
																fieldErrors.service ? "contact-input-error" : ""
															}`}
															defaultValue=""
															items={serviceOptions}
															onChange={handleFieldChange}
															onBlur={handleFieldChange}
														/>
													</div>
												</div>
												<p className="contact-field-error">
													{fieldErrors.service || ""}
												</p>
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="contact-field-group contact-field-group--textarea">
											<div className="form-input input-textarea">
												<textarea
													id="message"
													name="message"
													placeholder="Type message"
													className={fieldErrors.message ? "contact-input-error" : ""}
													onChange={handleFieldChange}
													onBlur={handleFieldChange}
												></textarea>
												<p className="contact-field-error">
													{fieldErrors.message || ""}
												</p>
											</div>
										</div>
									</div>
									{feedback.message ? (
										<div className="col-12">
											<p
												className={`contact-form-feedback contact-form-feedback--${feedback.type}`}
											>
												{feedback.message}
											</p>
										</div>
									) : null}
									<div className="submit-button">
										<ButtonPrimary
											text={isSubmitting ? "Sending..." : "Send message now"}
											type="submit"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="google-map wow fadeInUp" data-wow-delay="0.3s">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4899794157604!2d77.62402817795015!3d13.068103354397103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1917e9a71ead%3A0xa3b0d3236103836b!2sREALTIME%20INFRA!5e0!3m2!1sen!2sin!4v1773307092856!5m2!1sen!2sin"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact5;
