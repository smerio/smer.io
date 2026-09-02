import { useEffect } from 'react';
import Hero from '../components/ambit/Hero';
import Philosophy from '../components/ambit/Philosophy';
import RingsArchitecture from '../components/ambit/RingsArchitecture';
import Features from '../components/ambit/Features';
import Privacy from '../components/ambit/Privacy';
import Feedback from '../components/ambit/Feedback';
import Faq from '../components/ambit/Faq';

const Ambit = () => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = 'Ambit — The Circuit of a Life | Cyclical Time Tracker for Android';

        // Scroll to hash if present
        if (window.location.hash) {
            const el = document.getElementById(window.location.hash.slice(1));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }

        return () => {
            document.title = prevTitle;
        };
    }, []);

    return (
        <div>
            <Hero />
            <Philosophy />
            <RingsArchitecture />
            <Features />
            <Privacy />
            <Feedback />
            <Faq />
        </div>
    );
};

export default Ambit;
