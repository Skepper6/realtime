"use client";
import React from "react";

export default function DesignBuildMaintain() {
    return (
        <section className="equation-section section-space">
            <div className="container">
                <div className="equation-wrapper">

                    {/* Row 1: Design + Designer Image */}
                    <div className="eq-row eq-row-1">
                        <div className="eq-text-group">
                            <h2 className=" italic text-black">Design<span className="green_text">+</span></h2>
                        </div>
                        <div className="eq-image left-illustration">
                            <img
                                src="https://theskepper.com/000_Skepper_test/real/uptime1.png"
                                alt="Design Illustration"
                            />
                        </div>
                    </div>

                    {/* Row 2: Build + Technicians Image */}
                    <div className="eq-row eq-row-2">
                        <div className="eq-text-group">
                            <h2 className=" italic green_text">Build<span className="green_text">+</span></h2>
                        </div>
                        <div className="eq-image right-illustration-top">
                            <img
                                src="https://theskepper.com/000_Skepper_test/real/uptime2.png"
                                alt="Build Illustration"
                            />
                        </div>
                    </div>

                    {/* Row 3: Maintain + Maintenance Image */}
                    <div className="eq-row eq-row-3">
                        <div className="eq-text-group">
                            <h2 className=" text-black">Maintain<span className="green_text">+</span></h2>
                        </div>
                        {/* The image for maintain and build are often grouped or slightly offset */}
                    </div>

                    {/* Row 4: Optimize = Final Image */}
                    <div className="eq-row eq-row-4">
                        <div className="eq-text-group text-center">
                            <h2 className=" green_text">Optimize<span className="green_text">=</span></h2>
                        </div>
                        <div className="eq-image bottom-illustration">
                            <img
                                src="https://theskepper.com/000_Skepper_test/real/uptime3.png"
                                alt="Optimize Illustration"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
