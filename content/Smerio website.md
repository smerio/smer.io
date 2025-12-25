### **1\. Landing Page Content (index.html)**

**Hero Section (The First Impression)**

* **Headline:** True Financial Sovereignty.  
* **Sub-headline:** The open-source, self-hosted wealth tracker for families who don't trust the cloud with their financial data.  
* **Primary Button:** Get Started  
* **Secondary Button:** View on GitHub

**The "Problem" Section (Why Smerio exists)**

* **Headline:** Stop trading privacy for convenience.  
* **Body:** Most modern finance apps require you to hand over your bank login credentials and store your spending history on their servers. Spreadsheets are private, but they are tedious and impossible to share with your partner. Smerio bridges the gap.

**The "Features" Grid (What it does)**

* **Total Wealth View:** Move beyond simple budgeting. Track your real Net Worth by managing **Assets** (Real Estate, Cash, Crypto, Vehicles) alongside **Liabilities** (Mortgages, Loans).  
* **Multi-Currency Native:** Live internationally? Smerio handles multiple currencies effortlessly, automatically converting foreign accounts to your base currency for accurate reporting.  
* **Family & Sharing:** Create private vaults for every family member. Share specific budgets (like "Groceries" or "Travel") with your partner via secure API tokens without revealing your personal spending.  
* **Physically Yours:** Smerio runs on your hardware—whether that's a Raspberry Pi at home or a private VPS. Your data lives in a single SQLite file that you control.

**The "How it Works" Section (Technical Reassurance)**

* **Headline:** Simplicity by Design.  
* **Step 1:** **Deploy.** Run a single Docker container. No complex database setup required.  
* **Step 2:** **Connect.** Access your private dashboard from any browser on your local network.  
* **Step 3:** **Track.** Manually input transactions or import CSVs. Your data never leaves your device.

**Footer**

* **Links:** Documentation • GitHub • License (AGPLv3)  
* **Copyright:** © 2025 Smerio. Open Source Financial Tools.

### ---

**2\. Documentation Page Content (docs.html or docs/index.html)**

**Sidebar / Table of Contents**

1. Introduction  
2. Installation  
3. First Steps  
4. FAQ

**Content Area**

1\. Introduction  
Smerio is a self-hosted personal finance application focused on privacy and multi-user collaboration. Unlike SaaS tools, Smerio is designed to be run on your own infrastructure using Docker.  
2\. Installation  
The recommended way to run Smerio is via Docker Compose.  
*Prerequisites:* You need docker and docker-compose installed on your machine.

Step 1: Create a configuration file  
Create a file named docker-compose.yml and paste the following:

YAML

services:  
  smerio:  
    image: smerio/smerio:latest  
    container\_name: smerio  
    restart: unless-stopped  
    ports:  
      \- "8090:8090"  
    volumes:  
      \- ./pb\_data:/pb\_data  
    environment:  
      \- TZ=Europe/Belgrade  \# Change to your timezone

Step 2: Start the application  
Run the following command in your terminal:  
docker compose up \-d  
Step 3: Access Smerio  
Open your browser and visit http://localhost:8090.  
**3\. First Steps**

* **Create Admin Account:** The first time you load the page, you will be prompted to create your admin login.  
* **Define Your Base Currency:** In Settings, choose the primary currency you use for reporting (e.g., EUR, USD, RSD).  
* **Add Your First Asset:** Go to the "Wealth" tab and click "Add Asset." Try adding your "Cash Wallet" or "Bank Account."

**4\. FAQ**

* Is my data encrypted?  
  Smerio relies on your server's security. For maximum protection, we recommend running Smerio behind a reverse proxy (like Nginx or Caddy) with HTTPS enabled.  
* How do I backup my data?  
  All your data is stored in the pb\_data folder. Simply copy this folder to a safe location (or a USB drive) to create a full backup.  
* Can I import from Mint/YNAB?  
  Smerio supports standard CSV imports. You can map columns from your bank export directly during the import process.