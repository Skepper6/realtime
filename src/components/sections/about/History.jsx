import modifyNumber from "@/libs/modifyNumber";

const History = () => {
    const history = [
        {
            title: "The Beginnings",
            desc: "Realtime Infra was established in 2010 with a simple belief: “Engineering Should Serve People, Not Just Buildings.” ",
            images: "https://theskepper.com/000_Skepper_test/real/history1.jpg",
            year: 2010,
        },
        {
            title: "Growth Years",
            desc: "Over the past decade, we have grown into a trusted HVAC and process-cooling partner across South India, known for integrity, commitment, and quality-driven execution. We focus on systems that directly impact comfort, efficiency, and operational continuity in environments where performance truly matters. ",
            images: "https://theskepper.com/000_Skepper_test/real/history1.jpg",
            year: 2015,
        },
        {
            title: "Innovation-Led Excellence",
            desc: "Every project we undertake, regardless of scale, receives focused attention, from thoughtful design and precise execution to delivery within defined timelines and budgets.",
            images: "https://theskepper.com/000_Skepper_test/real/history1.jpg",
            year: 2020,
        },
        {
            title: "Built for the Long Run",
            desc: "What started as a conviction became a discipline. And that discipline became a company built around one idea: A building should get better with time, not weaker.",
            images:"https://theskepper.com/000_Skepper_test/real/history1.jpg",
            year: 2025,
        }
    ];
    return (
        <section className="tj-history-area section-bottom-space ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="timeline">
                            {history?.length
                                ? history?.map(({ title, desc, images, year }, idx) => (
                                        <div
                                            key={idx}
                                            className="timeline-inner wow fadeInUp"
                                            // data-wow-delay={`0.${idx + 1 + idx}s`}
                                        >
                                            <div className="date">{year}</div>
                                            <div className="content">
                                                <div className="top">
                                                    {/* <span>{modifyNumber(idx + 1)}.</span> */}
                                                    <h4 className="title">{title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                                <div className="bottom">
                                                    {/* {images?.length */}
                                                        {/* // ? images?.map((img) => ( */}
                                                                <img
                                                                    src={
                                                                        images 
                                                                    }
                                                                    alt="history"
                                                                />
                                                        {/* //   )) */}
                                                        {/* // : ""} */}
                                                </div>
                                            </div>
                                        </div>
                                  ))
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
