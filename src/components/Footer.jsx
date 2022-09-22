import React from "react";

import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        <section>
            <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-10`}>
                <div className="flex-1 flex flex-col justyfy-start mr-10">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[266px] h-[72px] object contain"
                    />
                    <p className={`${styles.paragraph} max-w-[310px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className="flex-[1.5] flex flex-row w-full  justify-between flex-wrap">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.key} className="flex flex-col SS:my-0 my-4  min-w-150px]">
                            <h4 className="font-popins font-medium text-[20px] text-white leading-[27px]">
                                {footerLink.title}
                            </h4>
                            <ul className="mt-4">
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name} className={`${index !== footerLink.length ? "mt-1" : "mt-0"} font-popins font-normal text-[16px] text-dimWhite hover:text-secondary cursor-pointer`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex md:flex-row  flex-col items-center justify-between mb-5 pt-6  border-t-[1px] border-t-[#3F3E45]">
                <p className="font-popins font-normal text-[18px] text-white leading-[27px] text-center">
                    Copyright &copy; 2021 HooBank. All Rights Reserved.
                </p>
                <div className="flex flex-row items center mt-5">
                    {socialMedia.map((social, index) => (
                        <div>
                            <img
                                key={social.id}
                                src={social.icon}
                                className="w-[21px] h-[21px] mr-5 cursor-pointer object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Footer;