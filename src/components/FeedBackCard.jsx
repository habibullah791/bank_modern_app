import React from "react";

import { quotes } from "../assets";
import styles from "../style";

const FeedBackCard = ({ content, name, title, img }) => {
    return (
        <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[350px] md:mr10  sm:mr-5 mr-0 my-5 feedback-card ">
            <img src={quotes} alt="Double Quotes" className="w-[42px] h-27px] object-contain" />
            <p className="font-popins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
            <div className="flex flex-row justify-start items-center">
                <img src={img} alt="People Img" />
                <div className="flex flex-col ml-4">
                    <h4 className="font-popins font-normal text-[20px] leading-[32px] text-white">{name}</h4>
                    <p className="font-popins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
                </div>
            </div>
        </div>
    );
}
export default FeedBackCard;