import { useState } from 'react';
import classes from './Docs.module.css';
import { FiMenu } from 'react-icons/fi';

const Docs = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setSidebarOpen(false); // Close mobile sidebar on click
        }
    };

    return (
        <div className={classes.container}>
            <button className={classes.mobileToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
                <FiMenu /> Table of Contents
            </button>

            <aside className={`${classes.sidebar} ${sidebarOpen ? classes.open : ''}`}>
                <nav>
                    <h3>Guide</h3>
                    <ul>
                        <li className={activeSection === 'intro' ? classes.active : ''} onClick={() => scrollToSection('intro')}>Introduction</li>
                        <li className={activeSection === 'install' ? classes.active : ''} onClick={() => scrollToSection('install')}>Installation</li>
                        <li className={activeSection === 'first-steps' ? classes.active : ''} onClick={() => scrollToSection('first-steps')}>First Steps</li>
                        <li className={activeSection === 'faq' ? classes.active : ''} onClick={() => scrollToSection('faq')}>FAQ</li>
                    </ul>
                    <h3>App Reference</h3>
                    <ul>
                        <li className={activeSection === 'dashboard' ? classes.active : ''} onClick={() => scrollToSection('dashboard')}>Dashboard</li>
                        <li className={activeSection === 'wealth' ? classes.active : ''} onClick={() => scrollToSection('wealth')}>Wealth & Accounts</li>
                        <li className={activeSection === 'transactions' ? classes.active : ''} onClick={() => scrollToSection('transactions')}>Transactions</li>
                        <li className={activeSection === 'portfolio' ? classes.active : ''} onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                        <li className={activeSection === 'planning' ? classes.active : ''} onClick={() => scrollToSection('planning')}>Envelope Planning</li>
                        <li className={activeSection === 'settings' ? classes.active : ''} onClick={() => scrollToSection('settings')}>Settings</li>
                    </ul>
                </nav>
            </aside>

            <main className={classes.content}>
                <section id="intro">
                    <h1>Introduction</h1>
                    <p>Smerio is a self-hosted personal finance application focused on privacy and multi-user collaboration. Unlike SaaS tools, Smerio is designed to be run on your own infrastructure using Docker.</p>
                </section>

                <hr className={classes.divider} />

                <section id="install">
                    <h2>Installation & Deployment</h2>
                    <p>This guide explains how to deploy <strong>Smerio</strong> using the universal deployment script.</p>

                    <h3>Directory Structure</h3>
                    <ul>
                        <li><code>Install/</code>: Contains deployment scripts (<code>deploy.sh</code>) and configuration.</li>
                        <li><code>Install/.env</code>: Deployment configuration (VPS IPs, Registry, etc).</li>
                        <li><code>Install/demo.db</code>: Database snapshot for Demo mode.</li>
                    </ul>

                    <div className={classes.note}><strong>Requirement:</strong> You need Docker and a Unix-like environment (Linux/macOS) to run the scripts.</div>

                    <h3>Step 1: Configuration</h3>
                    <p>1. Copy the template configuration:</p>
                    <pre className={classes.codeInline}>cp Install/.env.template Install/.env</pre>
                    <p>2. Edit <code>Install/.env</code> with your details (Required for Remote deployment).</p>

                    <h3>Step 2: Deployment</h3>
                    <p>Run the universal script:</p>
                    <pre className={classes.codeInline}>./Install/deploy.sh</pre>

                    <p><strong>Interactive Options:</strong></p>
                    <ul>
                        <li><strong>Target</strong>: Choose <strong>Local</strong> (Docker Compose) or <strong>Remote</strong> (VPS).</li>
                        <li><strong>Mode</strong>: Choose <strong>Production</strong>, <strong>Demo</strong> (resets every 60m), or <strong>Debug</strong>.</li>
                    </ul>

                    <h3>Remote Behavior</h3>
                    <p>When deploying to a VPS (Remote), the script will:</p>
                    <ul>
                        <li>Pull your configured Docker image.</li>
                        <li>Configure <strong>Nginx</strong> and <strong>SSL</strong> (Certbot) automatically.</li>
                        <li>Secure the admin panel (block direct access to <code>/_/</code>).</li>
                    </ul>
                </section>

                <hr className={classes.divider} />

                <section id="first-steps">
                    <h1>First Steps</h1>
                    <ul>
                        <li><strong>Create Admin Account:</strong> The first time you load the page, you will be prompted to create your admin login.</li>
                        <li><strong>Define Your Base Currency:</strong> In Settings, choose the primary currency you use for reporting (e.g., EUR, USD, RSD).</li>
                        <li><strong>Add Your First Asset:</strong> Go to the "Wealth" tab and click "Add Asset." Try adding your "Cash Wallet" or "Bank Account."</li>
                    </ul>
                </section>

                <hr className={classes.divider} />

                <section id="faq">
                    <h1>FAQ</h1>
                    <dl>
                        <dt>Is my data encrypted?</dt>
                        <dd>Smerio relies on your server's security. For maximum protection, we recommend running Smerio behind a reverse proxy (like Nginx or Caddy) with HTTPS enabled.</dd>

                        <dt>How do I backup my data?</dt>
                        <dd>All your data is stored in the <code>pb_data</code> folder. Simply copy this folder to a safe location to create a full backup.</dd>
                    </dl>
                </section>

                <hr className={classes.divider} />
                <h1>Application Reference</h1>

                <section id="dashboard">
                    <h2>Dashboard</h2>
                    <p>This is your financial command center. It aggregates data from all your Accounts, Transactions, and Portfolio assets.</p>
                    <p><strong>Key Metrics:</strong></p>
                    <ul>
                        <li>Net Worth: Total Assets - Debts.</li>
                        <li>Cashflow (YTD): Total Income minus Total Expenses for the current year.</li>
                        <li>Portfolio: Brokerage and Crypto holdings.</li>
                    </ul>
                </section>

                <section id="wealth">
                    <h2>Wealth & Accounts</h2>
                    <p>Your net worth is split into Assets (what you own) and Debts (what you owe).</p>
                    <h3>Field Descriptions</h3>
                    <table className={classes.table}>
                        <thead><tr><th>Field</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Class</strong></td><td>Asset or Debt (Loan)?</td></tr>
                            <tr><td><strong>Name</strong></td><td>Custom display name.</td></tr>
                            <tr><td><strong>Type</strong></td><td>Category (Bank, Car, Crypto, etc).</td></tr>
                            <tr><td><strong>Balance</strong></td><td>Current funds. for Brokerage/Crypto, leave as 0 to auto-calculate.</td></tr>
                            <tr><td><strong>Status</strong></td><td>Account Status (Active/Archived).</td></tr>
                            <tr><td><strong>Cur</strong></td><td>The currency of the account.</td></tr>
                            <tr><td><strong>Source</strong></td><td>The financial institution holding the asset/debt (e.g., Bank of America).</td></tr>
                            <tr><td><strong>Assigned to</strong></td><td>The internal owner of the asset/debt. Use a personal name or a group name.</td></tr>
                            <tr><td><strong>Purpose</strong></td><td>The primary goal for this asset/debt (e.g., Spending, Emergency Fund, Education).</td></tr>
                        </tbody>
                    </table>
                </section>

                <section id="transactions">
                    <h2>Transactions</h2>
                    <p><strong>Managing Records</strong></p>
                    <ul>
                        <li><strong>Add</strong>: Click "Add Transaction" to record a new income or expense.</li>
                        <li><strong>Edit</strong>: Click the pencil icon to modify a record.</li>
                        <li><strong>Duplicate</strong>: Click the file icon to copy a transaction.</li>
                        <li><strong>Delete</strong>: Click the trash icon to remove a record.</li>
                    </ul>

                    <p><strong>Filtering & Exporting</strong></p>
                    <ul>
                        <li><strong>Filter</strong>: Use the "Filters" section to search by date, type, category, or amount.</li>
                        <li><strong>Export</strong>: Click "Export CSV" to download your filtered results for external analysis.</li>
                    </ul>

                    <p><strong>Tips</strong></p>
                    <ul>
                        <li>Use <strong>Envelopes</strong> for budgeting expenses.</li>
                        <li>Use <strong>Subcategories</strong> for detailed tracking.</li>
                        <li><strong>Smart Suggestions</strong>: The app learns your category associations over time.</li>
                    </ul>

                    <h3>Field Descriptions (Transactions)</h3>
                    <table className={classes.table}>
                        <thead><tr><th>Field</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Envelope</strong> (Expense)</td><td>The budget category (e.g., Groceries, Rent).</td></tr>
                            <tr><td><strong>Subcategory</strong> (Expense)</td><td>Specific details (e.g., Shop Name, Item).</td></tr>
                            <tr><td><strong>Payee</strong> (Income)</td><td>Person, breadwinner or employer name.</td></tr>
                            <tr><td><strong>Source</strong> (Income)</td><td>Company name, type of work (freelance), gifts, or other income.</td></tr>
                            <tr><td><strong>Date</strong></td><td>Date of the transaction.</td></tr>
                            <tr><td><strong>Amount</strong></td><td>The value of the transaction.</td></tr>
                            <tr><td><strong>Currency</strong></td><td>Enter the currency you actually spent. It will be converted to your base currency.</td></tr>
                            <tr><td><strong>Amount (Base)</strong></td><td>The value in your main currency. You can manually override this.</td></tr>
                        </tbody>
                    </table>
                </section>

                <section id="portfolio">
                    <h2>Portfolio</h2>
                    <p><strong>Purpose & Accounts</strong></p>
                    <p>This page tracks your investment holdings (Stocks, ETFs, Crypto). Each asset is linked to a specific <strong>Account</strong> (e.g., "Brokerage"). The total value shown here contributes to your Net Worth on the Dashboard.</p>

                    <p><strong>Calculations</strong></p>
                    <ul>
                        <li><strong>Value</strong>: Calculated as <code>Quantity × Current Price</code>.</li>
                        <li><strong>Avg Price</strong>: The weighted average cost you paid per share.</li>
                        <li><strong>Result</strong>: Calculated as <code>(Current Price - Avg Price) × Quantity</code>.</li>
                    </ul>

                    <p><strong>Updating Prices</strong></p>
                    <p>Click <strong>Update Prices</strong> to fetch the latest market data for all your tickers. This ensures your Portfolio Value and Net Worth are always up to date.</p>

                    <h3>Field Descriptions (Assets)</h3>
                    <table className={classes.table}>
                        <thead><tr><th>Field</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Ticker Symbol</strong></td><td>Use Yahoo Finance symbols (e.g. AAPL).</td></tr>
                            <tr><td><strong>Quantity</strong></td><td>Number of shares or units held.</td></tr>
                            <tr><td><strong>Current Price</strong></td><td>Optional. We will try to update this value when you press "Update Prices".</td></tr>
                            <tr><td><strong>Linked Account</strong></td><td>The value of this asset will contribute to this account's balance.</td></tr>
                        </tbody>
                    </table>
                </section>

                <section id="planning">
                    <h2>Envelope Planning</h2>
                    <p><strong>Purpose</strong></p>
                    <p>This page helps you compare your <strong>Planned Budget</strong> against your <strong>Actual Spending</strong> for the current month. Use it to stay on track and adjust your habits.</p>

                    <p><strong>Planning Expenses</strong></p>
                    <ul>
                        <li><strong>Set Budget</strong>: Enter your target amount in the "Planned" column for each envelope.</li>
                        <li><strong>Save</strong>: Click the floppy disk icon to save your budget.</li>
                        <li><strong>Auto-Add</strong>: New envelopes appear automatically when you categorize transactions in the Transactions page.</li>
                    </ul>

                    <p><strong>Interpreting Results</strong></p>
                    <ul>
                        <li><strong>Actual</strong>: Total spending in this envelope for the current month.</li>
                        <li><strong>Avg (6m)</strong>: Your average monthly spending over the last 6 months (for reference).</li>
                        <li><strong>Remaining %</strong>: Cyan (Under Budget), Pink (Over Budget).</li>
                    </ul>
                </section>

                <section id="settings">
                    <h2>Settings</h2>
                    <p><strong>General Settings</strong></p>
                    <p>Set your <strong>Main Currency</strong> (e.g., USD, EUR). This is the currency used for all total calculations and reports. Changing this will trigger a recalculation of all historical data.</p>

                    <p><strong>Global Lists</strong></p>
                    <p>Manage your categories (Envelopes, Sources, Payees). You can <strong>Rename</strong> items or <strong>Transfer</strong> transactions from one category to another (merging them).</p>

                    <h3>Component Descriptions (Category Lists)</h3>
                    <table className={classes.table}>
                        <thead><tr><th>Feature</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Usage Count</strong></td><td>Shows how many times this category is used in transactions.</td></tr>
                            <tr><td><strong>Transfer Transactions</strong></td><td>Move all transactions from this category to another one before deleting.</td></tr>
                            <tr><td><strong>Rename</strong></td><td>Modify the category name.</td></tr>
                            <tr><td><strong>Delete</strong></td><td>Remove the category (disabled if in use).</td></tr>
                        </tbody>
                    </table>

                    <p><strong>Data Management</strong></p>
                    <ul>
                        <li><strong>Export</strong>: Download a full JSON backup of your data.</li>
                        <li><strong>Restore</strong>: Restore your data from a backup file.</li>
                        <li><strong>Import CSV</strong>: Bulk import transactions from a CSV file.</li>
                    </ul>

                    <h3>Specific Settings</h3>
                    <ul>
                        <li><strong>Main Currency</strong>: Changing this will recalculate the Base Amount for <strong>ALL</strong> historical transactions.</li>
                        <li><strong>AI Provider</strong>: Select the AI service provider you want to use.</li>
                        <li><strong>Passkeys</strong>: Login securely without a password using your device (FaceID, TouchID, etc). Note: You must enable 2FA first.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Docs;
