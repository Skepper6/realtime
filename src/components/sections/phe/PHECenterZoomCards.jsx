"use client";

import React, { useEffect, useRef, useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const clamp01 = (n) => Math.max(0, Math.min(1, n));

const PHECenterZoomCards = () => {
    const sectionRef = useRef(null);
    const centerRef = useRef(null);

    const [vars, setVars] = useState({ p: 0, q: 0, s: 1 });

    // ✅ Modal state + video ref
    const [open, setOpen] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const center = centerRef.current;
        if (!section || !center) return;

        let raf = 0;

        const update = () => {
            const rect = section.getBoundingClientRect();
            const vh = window.innerHeight;

            const total = section.offsetHeight - vh;
            const scrolled = -rect.top;
            const p = total > 0 ? clamp01(scrolled / total) : 0;

            const q = clamp01((p - 0.72) / 0.28);

            const baseW = center.offsetWidth || 1;
            const baseH = center.offsetHeight || 1;

            const sx = window.innerWidth / baseW;
            const sy = window.innerHeight / baseH;

            const s = Math.max(sx, sy);

            setVars({ p, q, s });
        };

        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", update);
        };
    }, []);

    // ✅ autoplay when modal opens, stop when closes
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        if (open) {
            // reset + play
            v.currentTime = 0;
            const playPromise = v.play();
            if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => { });
        } else {
            v.pause();
            v.currentTime = 0;
        }
    }, [open]);

    const images = {
        left: "https://theskepper.com/000_Skepper_test/real/phe_leftimg.png",
        center: "https://theskepper.com/000_Skepper_test/real/phe_centerimg.png",
        right: "https://theskepper.com/000_Skepper_test/real/phe_rightimg.png",
    };

    // ✅ put your MP4 here
    const videoSrc = "https://theskepper.com/public/images/uploads/home_page/4a981b766ec82f77261879a79c95c53f.mp4";
    useEffect(() => {
        if (!open) return;

        // lock scroll so sticky section doesn't shift
        const y = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${y}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";

        return () => {
            // restore scroll position
            const top = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";
            window.scrollTo(0, parseInt(top || "0", 10) * -1);
        };
    }, [open]);


    return (
        <section className="szc-section" ref={sectionRef}>
            <div
                className="szc-sticky"
                style={{
                    "--p": vars.p,
                    "--q": vars.q,
                    "--s": vars.s,
                }}
            >
                <div className="szc-stage">
                    <article className="szc-card szc-left" aria-hidden="true">
                        <img className="szc-img" src={images.left} alt="" />
                    </article>

                    <article className="szc-card szc-center" ref={centerRef}>
                        <img className="szc-img szc-centerImg" src={images.center} alt="Center visual" />

                        <div className={`szc-overlay ${vars.q > 0.15 ? "is-active" : ""}`}>
                            <div className="szc-overlayInner">
                                <h2 className="szc-title szc-step szc-step1 font48">
                                    Maintenance That Adapts to Every Condition
                                </h2>

                                <p className="szc-sub szc-step szc-step2 font18 text-white">
                                    HVAC needs shift every day. We monitor, diagnose, and fine-tune continuously to maintain
balanced, reliable airflow.
                                </p>
                                <div
                                    className="szc-step szc-step3"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setOpen(true);
                                    }}
                                >
                                    <ButtonPrimary text={"Watch the Full Video"} url={"#"} className={"hero-button"} />
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="szc-card szc-right" aria-hidden="true">
                        <img className="szc-img" src={images.right} alt="" />
                    </article>

                    {/* ✅ Modal (no bootstrap JS needed) */}
                    {open && (
                        <div className="szc-modal" role="dialog" aria-modal="true" aria-label="Video">
                            <div className="szc-modalBackdrop" onClick={() => setOpen(false)} />

                            <div className="szc-modalDialog">
                                <button className="szc-modalClose" type="button" onClick={() => setOpen(false)}>
                                    ×
                                </button>

                                <div className="szc-modalBody">
                                    <video
                                        ref={videoRef}
                                        src={videoSrc}
                                        controls
                                        playsInline
                                        preload="metadata"
                                        className="szc-modal-video"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PHECenterZoomCards;
