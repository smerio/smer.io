import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

// Route metadata configuration for smer.io multi-product hub
export const routesMeta = [
  {
    path: 'ambit',
    title: 'Ambit — The Circuit of a Life | Cyclical Time Tracker for Android',
    description: "Replace linear countdown anxiety with Seneca's concentric rings of time. 100% on-device astronomical clock, natural seasons, and evening reflections.",
    canonical: 'https://smer.io/ambit',
    ogTitle: 'Ambit — The Circuit of a Life (Android)',
    ogDescription: "Replace linear countdown anxiety with Seneca's concentric rings of time. 100% on-device astronomical clock, natural seasons, and evening reflections.",
    ogImage: 'https://smer.io/ambit/feature_graphic_1024x500.png',
    ogUrl: 'https://smer.io/ambit',
    twitterTitle: 'Ambit — The Circuit of a Life (Android)',
    twitterDescription: "Replace linear countdown anxiety with Seneca's concentric rings of time. 100% on-device astronomical clock, natural seasons, and evening reflections.",
    twitterImage: 'https://smer.io/ambit/feature_graphic_1024x500.png',
  },
  {
    path: 'privacy',
    title: 'Ambit — Privacy Policy | Zero Trackers, 100% On-Device',
    description: 'Privacy Policy for Ambit Android app. Zero trackers, no accounts, strictly on-device astronomical calculations, and zero third-party network transmission.',
    canonical: 'https://smer.io/privacy',
    ogTitle: 'Ambit — Privacy Policy (Android)',
    ogDescription: 'Privacy Policy for Ambit. 100% on-device astronomical calculations, zero trackers, and complete data sovereignty.',
    ogImage: 'https://smer.io/ambit/feature_graphic_1024x500.png',
    ogUrl: 'https://smer.io/privacy',
    twitterTitle: 'Ambit — Privacy Policy',
    twitterDescription: 'Zero trackers, no accounts, and strictly on-device astronomical calculations.',
    twitterImage: 'https://smer.io/ambit/feature_graphic_1024x500.png',
  },
  {
    path: 'nomos',
    title: 'Smerio Nomos — Privacy-First Modular Life & Habit Tracker for Android',
    description: '100% offline habit logging with Pixela heatmaps, N-of-1 statistical discovery, and 0 network permissions.',
    canonical: 'https://smer.io/nomos',
    ogTitle: 'Smerio Nomos — Privacy-First Modular Life & Habit Tracker for Android',
    ogDescription: '100% offline habit logging with Pixela heatmaps, N-of-1 statistical discovery, and 0 network permissions.',
    ogImage: 'https://smer.io/nomos/feature-graphic-B.png',
    ogUrl: 'https://smer.io/nomos',
    twitterTitle: 'Smerio Nomos — Privacy-First Modular Life & Habit Tracker for Android',
    twitterDescription: '100% offline habit logging with Pixela heatmaps, N-of-1 statistical discovery, and 0 network permissions.',
    twitterImage: 'https://smer.io/nomos/feature-graphic-B.png',
  },
  {
    path: 'nomos/privacy',
    title: 'Smerio Nomos — Privacy Policy | Zero Trackers, 0 Internet Permissions',
    description: 'Privacy Policy for Smerio Nomos Android app. Zero network permissions requested, zero trackers, and hardware-backed AES-256-GCM local encryption.',
    canonical: 'https://smer.io/nomos/privacy',
    ogTitle: 'Smerio Nomos — Privacy Policy (Android)',
    ogDescription: '0 internet permissions requested, zero trackers, and hardware-backed AES-256-GCM encryption on Android.',
    ogImage: 'https://smer.io/nomos/feature-graphic-B.png',
    ogUrl: 'https://smer.io/nomos/privacy',
    twitterTitle: 'Smerio Nomos — Privacy Policy',
    twitterDescription: 'Zero internet permissions, zero trackers, and 100% on-device encrypted storage.',
    twitterImage: 'https://smer.io/nomos/feature-graphic-B.png',
  },
  {
    path: 'nomos/discoveries',
    title: 'How Discoveries work — Smerio Nomos',
    description: 'Learn how Smerio Nomos detects on-device habit patterns, calculates lift and odds ratios, and guides N-of-1 personal trials.',
    canonical: 'https://smer.io/nomos/discoveries',
    ogTitle: 'How Discoveries work — Smerio Nomos',
    ogDescription: 'Learn how Smerio Nomos detects on-device habit patterns, calculates lift and odds ratios, and guides N-of-1 personal trials.',
    ogImage: 'https://smer.io/nomos/feature-graphic-B.png',
    ogUrl: 'https://smer.io/nomos/discoveries',
    twitterTitle: 'How Discoveries work — Smerio Nomos',
    twitterDescription: 'Learn how Smerio Nomos detects on-device habit patterns, calculates lift and odds ratios, and guides N-of-1 personal trials.',
    twitterImage: 'https://smer.io/nomos/feature-graphic-B.png',
  },
  {
    path: 'ledgent',
    title: 'Ledgent — Crypto Ledger Bot for Telegram | Smerio',
    description: 'Self-hosted Telegram crypto ledger and AI advisor bot. Automated transaction tracking, FIFO/LIFO tax lots, portfolio analytics, and complete data ownership.',
    canonical: 'https://smer.io/ledgent',
    ogTitle: 'Ledgent — Self-Hosted Crypto Ledger & Advisor Bot',
    ogDescription: 'Self-hosted Telegram bot for crypto portfolio tracking, FIFO/LIFO tax lots, and private AI advisory. 100% data ownership.',
    ogImage: 'https://smer.io/assets/og-card.png',
    ogUrl: 'https://smer.io/ledgent',
    twitterTitle: 'Ledgent — Crypto Ledger Bot for Telegram',
    twitterDescription: 'Track crypto transactions, calculate tax lots, and chat with your private portfolio advisor bot.',
    twitterImage: 'https://smer.io/assets/og-card.png',
  },
  {
    path: 'features/telegram-bot',
    title: 'Telegram Bot Integration - Stateless Personal Budget Tracking | Smerio',
    description: 'Log expenses and receipts instantly with the Smerio Telegram Bot. Paste free-format text or upload photos of bills for secure, stateless, and real-time AI budget tracking.',
    canonical: 'https://smer.io/features/telegram-bot',
    ogTitle: 'Smerio Telegram Bot — Instant Budget Tracking',
    ogDescription: 'Log expenses and receipts instantly with the Smerio Telegram Bot. Natural chat parsing, receipt OCR, and stateless zero-database serverless architecture.',
    ogImage: 'https://smer.io/assets/og-card.png',
    ogUrl: 'https://smer.io/features/telegram-bot',
    twitterTitle: 'Smerio Telegram Bot — Instant Budget Tracking',
    twitterDescription: 'Stateless serverless budget bot with multimodal OCR and natural language transaction capture.',
    twitterImage: 'https://smer.io/assets/og-card.png',
  },
  {
    path: 'integrations/telegram',
    title: 'Telegram Bot Integration - Stateless Personal Budget Tracking | Smerio',
    description: 'Log expenses and receipts instantly with the Smerio Telegram Bot. Paste free-format text or upload photos of bills for secure, stateless, and real-time AI budget tracking.',
    canonical: 'https://smer.io/integrations/telegram',
    ogTitle: 'Smerio Telegram Bot — Instant Budget Tracking',
    ogDescription: 'Log expenses and receipts instantly with the Smerio Telegram Bot. Natural chat parsing, receipt OCR, and stateless zero-database serverless architecture.',
    ogImage: 'https://smer.io/assets/og-card.png',
    ogUrl: 'https://smer.io/integrations/telegram',
    twitterTitle: 'Smerio Telegram Bot — Instant Budget Tracking',
    twitterDescription: 'Stateless serverless budget bot with multimodal OCR and natural language transaction capture.',
    twitterImage: 'https://smer.io/assets/og-card.png',
  },
  {
    path: 'docs',
    title: 'Documentation | Smerio Self-Hosted Wealth Tracker',
    description: 'Complete setup guide and reference for Smerio. Installation via Docker/PocketBase, wealth management, asset tracking, and envelope budgeting.',
    canonical: 'https://smer.io/docs',
    ogTitle: 'Smerio Documentation — Private Wealth Tracking',
    ogDescription: 'Learn how to deploy and configure Smerio on your own hardware. Full guide to Docker installation and budgeting.',
    ogImage: 'https://smer.io/assets/og-card.png',
    ogUrl: 'https://smer.io/docs',
    twitterTitle: 'Smerio Documentation',
    twitterDescription: 'Complete deployment and user guide for Smerio private wealth tracker.',
    twitterImage: 'https://smer.io/assets/og-card.png',
  },
];

export function generateRouteHtml(templateHtml, meta) {
  let html = templateHtml;

  // Replace <title>
  html = html.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);

  // Replace <meta name="description" content="..." />
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${meta.description}">`
  );

  // Replace canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}">`
  );

  // Replace Open Graph meta tags
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${meta.ogUrl}">`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${meta.ogTitle}">`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${meta.ogDescription}">`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${meta.ogImage}">`
  );

  // Replace Twitter card meta tags
  html = html.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:url" content="${meta.ogUrl}">`
  );
  html = html.replace(
    /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:title" content="${meta.twitterTitle}">`
  );
  html = html.replace(
    /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:description" content="${meta.twitterDescription}">`
  );
  html = html.replace(
    /<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:image" content="${meta.twitterImage}">`
  );

  return html;
}

export function generateAllRouteHtmls() {
  const rootIndexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(rootIndexHtmlPath)) {
    console.error(`Root dist/index.html not found at ${rootIndexHtmlPath}. Run 'vite build' first.`);
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(rootIndexHtmlPath, 'utf8');

  console.log(`Generating dedicated HTML entrypoints for ${routesMeta.length} routes...`);

  for (const meta of routesMeta) {
    const targetDir = path.join(distDir, meta.path);
    fs.mkdirSync(targetDir, { recursive: true });

    const targetFile = path.join(targetDir, 'index.html');
    const customizedHtml = generateRouteHtml(templateHtml, meta);
    fs.writeFileSync(targetFile, customizedHtml, 'utf8');

    console.log(`✓ Generated ${path.relative(distDir, targetFile)} [og:title: "${meta.ogTitle}"]`);
  }

  console.log('Successfully generated all route entrypoints.');
}

// Execute if run directly from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAllRouteHtmls();
}
