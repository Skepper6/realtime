import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";

const Contact5 = () => {
	return (
		<section className="tj-contact-area section-bottom-space">
			<div className="container">
				<div className="row rg-50">
					{/* <!-- contact form --> */}
					<div className="col-lg-6">
						<div
							className="contact-form-one style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<h3 className="title text-anim">
								Feel free to get in touch or <br/> visit our location.
							</h3>
							<form action="#">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												id="first"
												name="name"
												placeholder="Full name*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												id="emailOne"
												name="email"
												placeholder="Email address*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												id="tel"
												name="tel"
												placeholder="Phone number*"
												required=""
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<FormSelect
														id={"contact"}
														className="nice-select"
														defaultValue={"Choose a option"}
														items={[
															{ value: "1", name: "Choose a option" },
															{ value: "2", name: "HVAC Services" },
															{ value: "3", name: "Electrical Systems Services" },
															{ value: "4", name: "PHE Services" },
															{ value: "5", name: "Annual Maintenance" },
															{ value: "6", name: "Building Management Service" },
														]}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="form-input input-textarea">
											<textarea
												id="message"
												name="message"
												placeholder="Type message"
											></textarea>
										</div>
									</div>
									<div className="submit-button">
										<ButtonPrimary text={"Send message now"} type="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* <!-- contact map --> */}
					<div className="col-lg-6">
						<div className="google-map wow fadeInUp" data-wow-delay="0.3s">
							

							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4899794157604!2d77.62402817795015!3d13.068103354397103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1917e9a71ead%3A0xa3b0d3236103836b!2sREALTIME%20INFRA!5e0!3m2!1sen!2sin!4v1773307092856!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact5;
