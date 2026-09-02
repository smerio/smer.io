const SMERIO_SUBNAV = [
    { name: 'Docs', path: '/docs' },
    { name: 'Telegram Bot', path: '/features/telegram-bot' },
    { name: 'GitHub', path: 'https://github.com/smerio/smerio', external: true },
    { name: 'Get latest', path: 'https://github.com/smerio/smerio/releases', external: true, cta: true },
];

const AMBIT_SUBNAV = [
    { name: 'Philosophy', path: '#philosophy', anchor: true },
    { name: 'Rings', path: '#rings', anchor: true },
    { name: 'Features', path: '#features', anchor: true },
    { name: 'Privacy Policy', path: '#privacy', anchor: true },
    { name: 'FAQ', path: '#faq', anchor: true },
    { name: 'Feedback', path: 'mailto:feedback@smer.io?subject=Ambit%20Feedback%20%26%20Feature%20Request', external: true, cta: true },
];

export const getSubNavItems = (pathname) => {
    if (pathname === '/' || pathname.startsWith('/docs') || pathname.startsWith('/features')) return SMERIO_SUBNAV;
    if (pathname === '/ambit' || pathname.startsWith('/ambit') || pathname === '/privacy') return AMBIT_SUBNAV;
    return [];
};
