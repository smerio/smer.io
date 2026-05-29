const SMERIO_SUBNAV = [
    { name: 'Docs', path: '/docs' },
    { name: 'Telegram Bot', path: '/features/telegram-bot' },
    { name: 'GitHub', path: 'https://github.com/smerio/smerio', external: true },
    { name: 'Get latest', path: 'https://github.com/smerio/smerio/releases', external: true, cta: true },
];

export const getSubNavItems = (pathname) => {
    if (pathname === '/' || pathname.startsWith('/docs') || pathname.startsWith('/features')) return SMERIO_SUBNAV;
    return [];
};
