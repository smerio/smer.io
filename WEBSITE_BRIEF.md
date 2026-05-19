# Website Brief — Ledgent (working title)
### For the web-page agent building smer.io/ledgent (or similar)

---

## 1. What is Ledgent?

**Ledgent** is a self-hosted, open-source Telegram bot that acts as a
personal crypto financial ledger and AI investment advisor.

You log trades, transfers, and P2P purchases by typing natural-language
messages in Telegram — the bot parses them with an LLM, stores structured
records in AWS DynamoDB, and answers questions about your portfolio on
demand.

**One-line pitch:**
> *Your crypto portfolio, understood — tracked in Telegram, powered by AI,
> deployed on AWS in minutes.*

---

## 2. The problem it solves

Most people who actively trade crypto across multiple exchanges, wallets,
and P2P platforms end up with a mess of spreadsheets. They know roughly
what they hold, but:

- They can't easily compute accurate realized PnL with proper FIFO cost basis
- FX gains/losses (buying BTC with RUB, selling for EUR) are invisible
- There's no quick way to ask "if I sell 1 BTC right now, what's my profit?"
- Spreadsheet maintenance is manual and error-prone

Ledgent replaces the spreadsheet with a conversational interface that
stores every transaction, runs the accounting engine automatically, and
lets you ask questions in plain English.

---

## 3. Key features

### Ledger & accounting
- **Natural-language transaction entry** — type `Bought 0.01 BTC for 800 USDT on Binance`
  and the bot parses, validates, and stores it
- **FIFO cost basis** — each asset tracked as individual lots, oldest consumed first on sells
- **Multi-currency support** — handles RUB, EUR, USD, USDT, BTC, ETH and any mix
- **Realized PnL** decomposed into asset price gains and FX rate movements
- **Unrealized PnL** at live prices (CoinGecko, 5-min cache)
- **Fees tracking** — per asset, valued at historical trade prices
- **Balance reconciliation** — `/set BTC Ledger 1.5` snaps a location to reality

### Analysis commands
- `/balance` — current holdings grouped by exchange/wallet
- `/pnl` — realized PnL since inception (asset + FX components)
- `/unrealized` — open position PnL at live prices
- `/history [N]` — last N transactions
- `/fees` — total fees paid, by asset
- `/stats [asset]` — DCA cadence and average buy price
- `/sim sell <amount> <asset>` — **exact FIFO sell simulation**: shows
  per-lot breakdown, cost basis, proceeds, net PnL — no LLM math involved

### AI advisor
- `/ask <question>` — multi-turn conversation with full portfolio context
  (open lots in FIFO order, live prices, realized PnL, recent transactions)
- `/strategy` — evaluates your next move against your saved DCA strategy
- `/context set <note>` — persistent instruction injected into every
  advisor call (e.g. "ignore reconciliation entries from May 2025")
- Advisor correctly uses FIFO lot detail for sell-PnL questions

### Virtual funds
- `/fund create <slug> <name>` — named sub-portfolios (e.g. pension, education)
- `/fund alloc <slug> <usd>` — record monthly allocations with auto-fetched BTC rate
- `/funds` — overview of all funds with P&L, avg cost, days since last contribution

---

## 4. Technical architecture

```
Telegram ──▶ API Gateway (HTTP) ──▶ Lambda (webhook, ~100ms)
                                         │
                              async self-invoke (fire & forget)
                                         │
                                    Lambda (processor, up to 60s)
                                         │
                          ┌──────────────┼──────────────┐
                          ▼              ▼              ▼
                      DynamoDB      Anthropic       CoinGecko
                    (single table)  (Haiku 4.5)    (price feed)
```

- **Serverless** — zero always-on cost; Lambda + DynamoDB pay-per-request
- **Single DynamoDB table** — transactions, open lots, config, sessions,
  fund records, price cache — all in one table with composite keys
- **LLM-agnostic parser** — pluggable backend (Claude / Gemini / OpenAI)
  selectable at deploy time via `LLM_PROVIDER` env var
- **Infrastructure as code** — full Terraform configuration; one `terraform apply`
  deploys everything (Lambda, DynamoDB, API Gateway, IAM, EventBridge)
- **Self-healing accounting** — unrealized PnL guards against balance/lot
  drift from import gaps; proportional scaling prevents phantom profits

---

## 5. Example interactions

### Logging a trade
```
Ivan:  Bought 1215 USDT using 94000 RUB on Binance P2P, May 7
Bot:   ✅ P2P_BUY logged — 1215 USDT @ 77.37 RUB
       Balance: USDT +1215 @ Binance P2P
```

### Asking about a sell
```
Ivan:  /ask if I sell 0.00433 BTC what's my PnL?
Bot:   Thinking…
       Cost basis: 0.00433 BTC from 2023-12-22 @ $43,757/BTC
       Current price: $105,234/BTC
       PnL on this sale: +$266.19 (+141%)
       This is your oldest lot (FIFO) — deep in profit.
```

### Exact simulation
```
Ivan:  /sim sell 1 BTC
Bot:   FIFO sell simulation: 1 BTC @ $105,234

       2023-12-22  0.00268 BTC  @$43,757   +$164.38
       2024-01-15  0.02736 BTC  @$40,203   +$1,783.93
       2024-02-01  0.03160 BTC  @$47,476   +$1,826.58
       ... (9 more lots)

       Cost basis:   $73,190
       Proceeds:     $105,234
       Net PnL:      +$32,044  (+43.8%)
```

### P2P arbitrage P&L
```
Ivan:  /pnl
Bot:   Realized PnL ≈ $74,126 USD
         • Asset price changes: +$121,432
         • FX rate movements:   -$47,306
         • Fees paid:           -$892
       Net ≈ $73,234 USD
```

---

## 6. Who is it for?

**Primary audience:**
- Individual crypto investors who DCA into BTC/ETH across multiple platforms
- P2P traders who buy crypto with local fiat (RUB, EUR, etc.) and need FX-accurate PnL
- Technically proficient users comfortable with AWS and Terraform

**Not for:**
- Users who want a polished mobile app with charts (this is a Telegram bot)
- High-frequency traders (designed for DCA/long-term holding patterns)
- Users unwilling to manage their own AWS infrastructure

---

## 7. Deployment

**Prerequisites:** AWS account, Telegram bot token (@BotFather), LLM API key

```bash
git clone https://github.com/smerio/ledgent
cp .env.example .env          # fill in tokens
cp terraform/terraform.tfvars.example terraform/terraform.tfvars
cd terraform && terraform init && terraform apply
# Telegram webhook is set automatically; bot is live
```

**Estimated AWS cost:** ~$1–5/month for typical single-user usage
(Lambda invocations + DynamoDB reads/writes; no always-on compute)

**LLM cost:** ~$0.01–0.05/day with Claude Haiku 4.5 for active use

---

## 8. Open source & license

- **License:** MIT
- **Repository:** https://github.com/smerio/ledgent
- **Stack:** Python 3.12, AWS Lambda + DynamoDB + API Gateway, Terraform,
  Anthropic / Google Gemini / OpenAI SDK

---

## 9. Suggested page structure

1. **Hero** — one-line pitch + Telegram screenshot mockup
2. **Problem** — spreadsheet pain, FX blind spots, no quick PnL answer
3. **Features** — three columns: Ledger / Advisor / Funds
4. **How it works** — architecture diagram (simplified) + 2-3 example conversations
5. **Deploy in minutes** — 4-step code snippet
6. **Open source** — GitHub link, license, "self-host, own your data"
7. **FAQ** — cost, privacy, supported assets, LLM providers

---

## 10. Tone & positioning

- **Tone:** technical but approachable; honest about what it is (a power-user
  tool, not a consumer app)
- **Positioning:** "the spreadsheet replacement for serious crypto investors
  who prefer owning their infrastructure"
- **Differentiators to emphasise:**
  1. Exact FIFO accounting (not just portfolio value tracking)
  2. FX PnL decomposition (asset gain vs currency movement)
  3. AI advisor with real lot-level context, not just totals
  4. Zero-infrastructure cost model (serverless, pay-per-use)
  5. Full data ownership — no third-party service, your AWS account

