import { useEffect } from 'react';
import HomeHero from '../components/home/HomeHero';
import ProductGrid from '../components/home/ProductGrid';
import SovereigntyPillars from '../components/home/SovereigntyPillars';

const Home = () => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = 'Smerio — Radical Privacy & Local-First Sovereign Apps';

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
            <HomeHero />
            <ProductGrid />
            <SovereigntyPillars />
        </div>
    );
};

export default Home;
