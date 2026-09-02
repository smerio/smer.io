import { useEffect } from 'react';
import Hero from '../components/nomos/Hero';
import Principles from '../components/nomos/Principles';
import InteractiveHeatmap from '../components/nomos/InteractiveHeatmap';
import CausalEngine from '../components/nomos/CausalEngine';
import AppGallery from '../components/nomos/AppGallery';
import DataPortability from '../components/nomos/DataPortability';
import Privacy from '../components/nomos/Privacy';
import Feedback from '../components/nomos/Feedback';
import Faq from '../components/nomos/Faq';

const Nomos = () => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = 'Smerio Nomos — Privacy-First Modular Life & Habit Tracker for Android';

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
            <Principles />
            <InteractiveHeatmap />
            <CausalEngine />
            <AppGallery />
            <DataPortability />
            <Privacy />
            <Feedback />
            <Faq />
        </div>
    );
};

export default Nomos;
