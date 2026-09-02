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
    { name: 'Alpha Testing', path: '#testing', anchor: true, cta: true },
];

const NOMOS_SUBNAV = [
    { name: 'Pillars', path: '#principles', anchor: true },
    { name: '1-Tap Log', path: '#fast-log', anchor: true },
    { name: 'Momentum', path: '#momentum', anchor: true },
    { name: 'Causal Engine', path: '#causal-discovery', anchor: true },
    { name: 'Screens', path: '#gallery', anchor: true },
    { name: 'Privacy Policy', path: '#privacy', anchor: true },
    { name: 'FAQ', path: '#faq', anchor: true },
    { name: 'Closed Beta', path: '#testing', anchor: true, cta: true },
];

export const getSubNavItems = (pathname) => {
    if (pathname === '/' || pathname.startsWith('/docs') || pathname.startsWith('/features')) return SMERIO_SUBNAV;
    if (pathname === '/ambit' || pathname.startsWith('/ambit') || pathname === '/privacy') return AMBIT_SUBNAV;
    if (pathname === '/nomos' || pathname.startsWith('/nomos')) return NOMOS_SUBNAV;
    return [];
};
