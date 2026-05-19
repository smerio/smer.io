import { useEffect } from 'react';
import Hero from '../components/ledgent/Hero';
import Problem from '../components/ledgent/Problem';
import Features from '../components/ledgent/Features';
import HowItWorks from '../components/ledgent/HowItWorks';
import Deploy from '../components/ledgent/Deploy';
import OpenSource from '../components/ledgent/OpenSource';
import Faq from '../components/ledgent/Faq';

const Ledgent = () => {
    useEffect(() => {
        const prev = document.title;
        document.title = 'Ledgent — Crypto Ledger Bot for Telegram | Smerio';
        return () => { document.title = prev; };
    }, []);

    return (
        <div>
            <Hero />
            <Problem />
            <Features />
            <HowItWorks />
            <Deploy />
            <OpenSource />
            <Faq />
        </div>
    );
};

export default Ledgent;
