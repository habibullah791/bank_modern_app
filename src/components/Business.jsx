import React from "react";

import styles, { layout } from "../style";
import { features } from '../constants'

import Button from './Button'

const FeaturedCard = (features) => {
    return (
        <div className={`flex flex-row p-6 rounded-[26px] feature-card ${features.id !== features.length ? "mb-6" : "bg-white"}`}>
            <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
                <img src={features.icon} alt="pix" className="w-[50%] h-[50%] object-contain" />
            </div>

            <div className="fleex-2 flex flex-col ml-3 text-white">
                <h4 className="font-popins font-semibold tet-white text-[20px] leading-[23px] mb-1 ">{features.title}</h4>
                <p className="font-popins font-normal tet-dimwhite text-[16px] leading-[18px] mb-1">{features.content}</p>
            </div>
        </div>
    );
}

const Business = () => {
    return (
        <section className={`${layout.section}`}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business,<br className="sm:block hidden" /> we'll handel the money.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>
                <Button styles="mt-10 rounded-[7px]" />
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map(FeaturedCard)}
            </div>
        </section>
    );
}
export default Business;