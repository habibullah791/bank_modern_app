import React from "react";

import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
    return (
        <section className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[50%] h-[50%] rounded-full top-0 pink__gradient" />
                <div className="absolute z-[1] w-[40%] h-[50%] rounded-full bottom-0 white__gradient" />
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Easily control your <br className="sm:block hidden" /> billing & invoicing.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <a href="#" className="mr-8  w-[128px] h-[48px]">
                        <img src={google} alt="google store"/>
                    </a>
                    <a href="#" className=" w-[128px] h-[48px]">
                        <img src={apple} alt ="apple store"/>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default Billing;