import classes from './FeatureGrid.module.css';
import { FiGlobe, FiLayout, FiLock, FiCpu } from 'react-icons/fi';

const FeatureGrid = () => {
    const features = [
        {
            icon: <FiLayout />,
            title: "Total Wealth View",
            description: "Move beyond simple budgeting. Track your real Net Worth by managing Assets (Real Estate, Crypto, Vehicles) alongside Liabilities."
        },
        {
            icon: <FiGlobe />,
            title: "Multi-Currency Native",
            description: "Live internationally? Smerio handles multiple currencies effortlessly, automatically converting foreign accounts to your base currency."
        },
        {
            icon: <FiCpu />,
            title: "AI Wealth Manager",
            description: "Connect ChatGPT, Gemini, Claude, or local Ollama models to analyze your own financial data as your personal wealth manager."
        },
        {
            icon: <FiLock />,
            title: "Physically Yours",
            description: "Smerio runs on your hardware. Your data lives in a single SQLite file that you control. No cloud, no spying."
        }
    ];

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2>Stop trading privacy for convenience.</h2>
                    <p>Standard finance apps sell your data. We don't even have a server to store it.</p>
                </div>
                <div className={classes.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={classes.card}>
                            <div className={classes.icon}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
