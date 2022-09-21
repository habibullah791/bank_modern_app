import React from "react";

const Button = ({styles}) => {
    return (
        <button type="button" className={`py-6 px-4 bg-blue-gradient font-popins font medium  text-[18px] text-primary outline-none px-[40px] ${styles}`}>
            Get Started
        </button>
    );
}
export default Button;