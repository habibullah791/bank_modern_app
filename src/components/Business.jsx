import React from "react";

import styles, { layout } from "../style";
import { features } from '../constants'

import Button from './Button'
// import FeaturedCard from "./FeaturedCard";

const Business = () => {
    return (
        <section className={`${layout.section}`}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business,<br className="sm:block hidden" /> we'll handel the money.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>
                <Button styles="mt-10" />
            </div>
        </section>
    );
}
export default Business;