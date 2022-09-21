import React from "react";

import styles from '../style'
import { stats } from "../constants";

const Stats = () => {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat, index) => (
                <div key={stat.id} className="flex-1 flex justify-start items-center m-3">
                    <h4 className="font-popins font-semibold xs:text-[40px] text-[48px] sx:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
                    <p className="font-popins font-normal xs:text-[20px] text-[15px] sx:leading-[27px] leading-[23px] text-gradient uppercase ml-3">{stat.title}</p>
                </div>
            ))}
        </section>
    );
}
export default Stats;