"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import tjStackAnimation from "@/libs/tjStackAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

const PHEHoverCardImage = () => {
    const animContainerRef = useRef();

    // ✅ data INSIDE component (no getALlServices)
    // ✅ keep same keys your UI expects: title, desc, iconName, id, totalProject, img, svg
    const services = [
        {
            id: 1,
            title: "Advanced Metering",
            desc: "Our advanced metering solutions track real-time water usage, identify inefficiencies, and support accurate billing, auditing, and water optimization.",
            iconName: "tji-optimization",
            totalProject: 64,
            img: "https://theskepper.com/000_Skepper_test/real/h1-service-2.webp",
            svg: "",
        },
        {
            id: 2,
            title: "Water Quality Insights",
            desc: "We analyze flow patterns, pressure behavior, and system performance to help reduce wastage, improve efficiency, and support informed water management decisions.",
            iconName: "tji-optimization",
            totalProject: 85,
            img: "https://theskepper.com/000_Skepper_test/real/h1-service-2.webp",
            svg: "",
        },
        {
            id: 3,
            title: "Smart Automation",
            desc: "From automated valves to integrated monitoring, our smart automation solutions enhance reliability, responsiveness, and operational control across facilities.",
            iconName: "tji-optimization",
            totalProject: 64,
            img: "https://theskepper.com/000_Skepper_test/real/h1-service-2.webp",
            svg: "",
        }

    ].slice(0, 4);

    useGSAP(
        () => {
            tjStackAnimation(".service-stack");
        },
        { scope: animContainerRef }
    );

    return (
        <section className="h10-service-section electrical_card section-space hover_img_card" ref={animContainerRef}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="service-wrapper">
                            {services?.length
                                ? services?.map((service, idx) => {
                                    const { title, desc, iconName, id, totalProject, img, svg } =
                                        service || {};

                                    return (
                                        <div
                                            key={idx}
                                            className="h10-service-item wow fadeInUp"
                                            data-wow-delay=".3s"
                                        >
                                            <div className="service-content-wrap">
                                                <div className="service-title">
                                                    <h4 className="title font48">
                                                        <Link href={`/services/${id}`}>{title}</Link>
                                                    </h4>
                                                </div>

                                                <div className="service-content">
                                                    <p className="desc">

                                                        {desc}
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="service-reveal-bg"
                                                style={{
                                                    backgroundImage: `url('${img ? img : "/images/service/h1-service-1.webp"
                                                        }')`,
                                                }}
                                            ></div>
                                        </div>
                                    );
                                })
                                : ""}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default PHEHoverCardImage;
