import React from "react";

import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client) => (
                    <div key={client.id} className={`${styles.flexCenter} sm:max-w[190px] w-[150px]`}>
                        <img
                            src={client.logo}
                            className="sm:max-w[190px] w-[110px] cursor-pointer" />
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Clients;