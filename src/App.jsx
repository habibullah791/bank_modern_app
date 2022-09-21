import React from "react";
import styles from './style'

import {
    Navbar, FeedBackCard, Button, Billing, CardDeal, Business, GetStarted, Clients,
    CTA, Stats, Footer, Testimonials, Hero,
} from './components'


const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        {/* NavBaar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        {/* Hero Section */}
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>
        {/* After Hero Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
            </div>
        </div>
    </div>
);

export default App;