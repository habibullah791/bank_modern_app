import React from "react";

import styles from "../style";
import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
            <div className="w-full flex-justify-between items-center md:flex-row flex-col sm:mb-q6 mb-6 relative z-[1]">
                <h1 className={`${styles.heading2}`}>What people are <br className="sm:block hidden" /> saying about us</h1>
                <div className="w-full md:mt-0 mt-6 text-left">
                    <p className={`${styles.paragraph} max-w-[450px]`}>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card) => (
                    <FeedBackCard
                        key={card.id}
                        {...card}
                    />
                ))}
            </div>
            <div className="absolute z-[0] w-[60%] h-[60%] rounded-full -right-80 blue__gradient" />
        </section>
    );
}
export default Testimonials;