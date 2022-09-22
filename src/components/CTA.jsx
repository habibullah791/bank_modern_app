import React from "react";

import styles from "../style";
import Button from "./Button";

const CTA = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} flex flex-col sm:flex-row bg-black-gradient box-shadow-2 rounded-[20px]`}>
            <div className="flex-1 flex flex-col">
                <h1 className={styles.heading2}>
                    Let’s try our service now!
                </h1>
                <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className="mb-10">
                <Button styles="mt-10 rounded-[7px]" />
            </div>
        </section>
    );
}
export default CTA;