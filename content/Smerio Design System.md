# **Smerio Design System 1.0**

Philosophy: "Cyberpunk Finance."  
A professional wealth tracking tool that combines the high-contrast excitement of neon cyberpunk with the trust and clarity of Swiss design.

## ---

**1\. Color System**

We use a **Strict 6-Color Palette**. No random greens, royal blues, or yellows are permitted.

### **A. The Core Palette (Variables)**

| Variable Name | Role | Light Mode Hex | Dark Mode Hex | Usage Note |
| :---- | :---- | :---- | :---- | :---- |
| var(--bg-app) | **Canvas** | \#F5F7FA | \#252A34 | The main background behind everything. |
| var(--bg-surface) | **Surface** | \#FFFFFF | \#2F3640 | Cards, Modals, Input backgrounds. |
| var(--text-primary) | **Headings** | \#252A34 | \#EAEAEA | Main titles, table values. |
| var(--text-secondary) | **Subtext** | \#788195 | \#959FA8 | Labels, dates, icons (default state). |
| var(--brand-pos) | **Positive** | \#08D9D6 | \#08D9D6 | **Neon Cyan**: Assets, Income, Active States. |
| var(--brand-neg) | **Negative** | \#FF2E63 | \#FF2E63 | **Neon Pink**: Debts, Expenses, Alerts. |

### **B. The "Readability" Rule (Crucial)**

**Never** use Neon Cyan (\#08D9D6) for text on a white background. It is invisible.

* **Charts/Buttons:** Use \#08D9D6.  
* **Text/Numbers (Light Mode):** Use **Dark Teal \#009E9B**.

## ---

**2\. Typography & Iconography**

* **Font Family:** System Sans-Serif (Inter, Roboto, San Francisco).  
* **Weights:**  
  * **Bold (700):** Headings, Money Values.  
  * **Regular (400):** Labels, Body text.  
  * **Monospace:** API Keys, Backup Codes, CSV Data.

### **Icon Rules**

* **Default State:** Icons are always **Secondary Grey** (var(--text-secondary)).  
* **Active/Hover State:** Icons glow **Cyan** or **Pink**.  
* **Forbidden Colors:** Do not use Yellow (Warning) or Standard Blue (Info).

## ---

**3\. UI Components**

### **Buttons**

**1\. Primary Button (Call to Action)**

* **Background:** var(--brand-pos) (Cyan).  
* **Text:** \#252A34 (Always Dark Gunmetal).  
* **Border:** None.  
* **Usage:** "Add Transaction", "Save", "Login".

**2\. Secondary / Ghost Button**

* **Background:** Transparent.  
* **Border:** 1px Solid var(--text-secondary).  
* **Text:** var(--text-secondary).  
* **Hover:** Border & Text become **Cyan** (\#08D9D6).  
* **Usage:** "Export", "Cancel", "Filter".

**3\. Negative Action**

* **Hover:** Border & Text become **Pink** (\#FF2E63).  
* **Usage:** "Delete", "Restore Backup".

### **Inputs**

* **Background:** var(--bg-surface).  
* **Border:** 1px Solid var(--text-secondary).  
* **Focus State:** Border glows **Cyan** (\#08D9D6).  
* **Padding:** 12px (Internal).

### **Cards (Widgets)**

Do not use solid colored backgrounds for widgets.

* **Background:** var(--bg-surface).  
* **Top Border:** 4px Solid var(--brand-pos) (Income) or var(--brand-neg) (Expense).  
* **Shadow:** Subtle (0 2px 8px rgba(0,0,0,0.05)).

## ---

**4\. Navigation (The "Anchor")**

**Rule:** The Top Navigation Bar is **Always Dark**, even in Light Mode.

* **Background:** \#252A34.  
* **Bottom Border:** 1px Solid **Cyan** (\#08D9D6) (The "Cyberpunk Line").  
* **Text Links:** White / Light Grey.  
* **Active Link:** Cyan.

## ---

**5\. Data Visualization**

### **Charts (Line & Area)**

* **Income / Net Worth:** Cyan Line.  
  * *Gradient:* Cyan (20% Opacity) fading to Transparent.  
* **Expense / Debt:** Pink Line.  
* **Visual Noise:** No grid lines on charts. Only the trend line matters.

### **Progress Bars**

**Logic:** Context-Aware Coloring.

* **Under Budget (Safe):** Cyan Bar \+ Dark Text (\#252A34).  
* **Over Budget (Danger):** Pink Bar \+ White Text (\#FFFFFF).  
* **Text Location:** Text must be inside the bar for contrast.

## ---

**6\. Layout & Spacing**

* **Global Padding:** 16px (Mobile), 32px (Desktop).  
* **Corner Radius:**  
  * **Buttons:** 4px (Sharp/Technical look).  
  * **Cards:** 8px (Slightly softer).  
* **Whitespace:** Use standard increments (8px, 16px, 32px).  
  * *Example:* A header should have 32px margin-top and 16px margin-bottom.

## ---

**7\. Do's and Don'ts**

| ✅ Do | ❌ Don't |
| :---- | :---- |
| **Do** use Cyan for "Good" and Pink for "Bad". | **Don't** use Standard Green (\#28a745) or Red (\#dc3545). |
| **Do** keep the Sidebar/Navbar dark in all themes. | **Don't** make the Navbar white in Light Mode (loses brand). |
| **Do** use outlines for secondary tags. | **Don't** use solid colored pills (looks like buttons). |
| **Do** use Dark Teal for text on white backgrounds. | **Don't** use Neon Cyan for text on white (unreadable). |
| **Do** use Grey for warning icons. | **Don't** use Yellow for warning icons. |

---

*This document serves as the single source of truth for the Smerio visual identity.*