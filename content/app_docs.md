# Smerio Application Documentation

This document contains the help sections and field descriptions extracted from the application.

## Dashboard

**Overview**
This is your financial command center. It aggregates data from all your Accounts, Transactions, and Portfolio assets to give you a real-time snapshot of your financial health.

**Key Metrics**
- **Net Worth**: Total Assets - Debts.
- **Cashflow (YTD)**: Total Income minus Total Expenses for the current year.
- **Portfolio**: Brokerage and Crypto holdings.

**Analysis Widgets**
Scroll through the widgets below to analyze your:
- **Income** (by Payee/Source)
- **Expenses** (by Category)
- **Assets** (by Purpose/Type)

## Wealth & Accounts

**Assets & Debts**
Your net worth is split into Assets (what you own) and Debts (what you owe). Keep detailed records to track your financial health accurately.

**Portfolio Integration**
Brokerage and Crypto accounts can show detailed asset lists. Click the arrow icon on the account row to expand and manage your holdings.

**History**
View history for any account or individual asset by clicking the clock icon. You can edit past records if needed.

### Field Descriptions (Accounts)
| Field | Description |
|-------|-------------|
| **Class** | Is this an Asset (something you own) or a Debt (debt/loan)? |
| **Name** | A custom display name. If left blank, a name is auto-generated using the Source, Owner, and Type. |
| **Type** | The asset/debt category (e.g., Bank, Car, Crypto, Debt, etc.). |
| **Status** | Account Status (Active/Archived). |
| **Balance** | Current funds in the selected currency. For Brokerage or Crypto, leave as 0 to auto-calculate based on asset prices. |
| **Currency** | 3-letter currency code (e.g. USD). No crypto tokens (e.g. USDT). |
| **Source** | The financial institution holding the asset/debt (e.g., Bank of America). |
| **Assigned To** | The internal owner of the asset/debt. Use a personal name or a group name (e.g., Family, Vacation Fund). |
| **Account Holder** | The name of the legal account holder. |
| **Purpose** | The primary goal for this asset/debt (e.g., Spending, Emergency Fund, Education, or Retirement). |

## Transactions

**Managing Records**
- **Add**: Click "Add Transaction" to record a new income or expense.
- **Edit**: Click the pencil icon to modify a record.
- **Duplicate**: Click the file icon to copy a transaction.
- **Delete**: Click the trash icon to remove a record.

**Filtering & Exporting**
- **Filter**: Use the "Filters" section to search by date, type, category, or amount.
- **Export**: Click "Export CSV" to download your filtered results for external analysis.

**Tips**
- Use **Envelopes** for budgeting expenses.
- Use **Subcategories** for detailed tracking.
- **Smart Suggestions**: The app learns your category associations over time.

### Field Descriptions (Transactions)
| Field | Description |
|-------|-------------|
| **Envelope** (Expense) | The budget category (e.g., Groceries, Rent). |
| **Subcategory** (Expense) | Specific details (e.g., Shop Name, Item). |
| **Payee** (Income) | Person, breadwinner or employer name. |
| **Source** (Income) | Company name, type of work (freelance), gifts, or other income (CD, dividends). |
| **Date** | Date of the transaction. |
| **Amount** | The value of the transaction. |
| **Currency** | Enter the currency you actually spent (e.g., GBP, CHF). It will be converted to your base currency. |
| **Amount (Base)** | The value in your main currency. You can manually override this. |

## Portfolio

**Purpose & Accounts**
This page tracks your investment holdings (Stocks, ETFs, Crypto). Each asset is linked to a specific **Account** (e.g., "Brokerage"). The total value shown here contributes to your Net Worth on the Dashboard.

**Calculations**
- **Value**: Calculated as `Quantity × Current Price`.
- **Avg Price**: The weighted average cost you paid per share. This helps track your performance against the current market price.
- **Result**: Calculated as `(Current Price - Avg Price) × Quantity`.

**Updating Prices**
Click **Update Prices** to fetch the latest market data for all your tickers. This ensures your Portfolio Value and Net Worth are always up to date.

### Field Descriptions (Assets)
| Field | Description |
|-------|-------------|
| **Ticker Symbol** | Use Yahoo Finance symbols (e.g. AAPL). |
| **Quantity** | Number of shares or units held. |
| **Current Price** | Optional. We will try to update this value when you press "Update Prices". |
| **Linked Account** | The value of this asset will contribute to this account's balance. |

## Envelope Planning

**Purpose**
This page helps you compare your **Planned Budget** against your **Actual Spending** for the current month. Use it to stay on track and adjust your habits.

**Planning Expenses**
- **Set Budget**: Enter your target amount in the "Planned" column for each envelope.
- **Save**: Click the floppy disk icon to save your budget.
- **Auto-Add**: New envelopes appear automatically when you categorize transactions in the Transactions page.

**Interpreting Results**
- **Actual**: Total spending in this envelope for the current month.
- **Avg (6m)**: Your average monthly spending over the last 6 months (for reference).
- **Remaining %**: Cyan (Under Budget), Pink (Over Budget).

## Settings

**General Settings**
Set your **Main Currency** (e.g., USD, EUR). This is the currency used for all total calculations and reports. Changing this will trigger a recalculation of all historical data.

**Global Lists**
Manage your categories (Envelopes, Sources, Payees). You can **Rename** items or **Transfer** transactions from one category to another (merging them).

### Compontent Descriptions (Category Lists)
| Feature | Description |
|---------|-------------|
| **Usage Count** | Shows how many times this category is used in transactions. |
| **Transfer Transactions** | Move all transactions from this category to another one before deleting. |
| **Rename** | Modify the category name. |
| **Delete** | Remove the category (disabled if in use).

**Data Management**
- **Export**: Download a full JSON backup of your data.
- **Restore**: Restore your data from a backup file.
- **Import CSV**: Bulk import transactions from a CSV file.

### Specific Settings
- **Main Currency**: Changing this will recalculate the Base Amount for **ALL** historical transactions.
- **AI Provider**: Select the AI service provider you want to use.
- **Passkeys**: Login securely without a password using your device (FaceID, TouchID, etc). Note: You must enable 2FA first.
