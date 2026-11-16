# 🏠 RenoCompare v7.0 Ultimate Edition
### Smart Multi-Project Renovation Proposal Comparison & Transparency Platform

![Version](https://img.shields.io/badge/Version-7.0_Ultimate-059669?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-HTML5_%7C_CSS3_%7C_Vanilla_JS-0f172a?style=for-the-badge)
![Course](https://img.shields.io/badge/Project-CSE--326_CA2-d97706?style=for-the-badge)

---

## 📌 Problem Statement
Homeowners planning renovation work often receive multiple unstandardized contractor proposals and struggle to compare **scope inclusions, material brand grades, hidden cost buffers, execution timelines, and milestone payment schedules** side by side. Furthermore, off-platform negotiations often lead to scope disputes and upfront payment risks.

**RenoCompare v7.0** solves this by providing a centralized, role-based marketplace where homeowners can manage multiple renovation projects, benchmark fair area budgets, stress-test quotes with contingency/GST buffers, inspect itemized cost splits, negotiate counter-offers, and lock in digital milestone contracts.

---

## ✨ What's New in v7.0 Ultimate Edition

### 🎨 1. Multi-Theme Architectural Design System
* **Default Nordic Emerald & Soft Warm Sand (`#059669` / `#064e3b` / `#f7f5f0`):** Designed for high visual trust, calm readability, and WCAG AAA contrast.
* **Live 4-Theme Switcher Pill in Navbar:** Instant 1-click theme switching across:
  * 🌿 **Emerald Sand** (Nordic Architectural Studio — Default)
  * 🌸 **Soft Clay** (Warm Dusty Terracotta Blush & Rose-Sand)
  * 📐 **Blueprint Cobalt** (High-Contrast Engineering & FinTech Mode)
  * 🌙 **Dark Slate Mode** (Low-Light Charcoal & Emerald Interface)
* **Typography Hierarchy:** Combines **Plus Jakarta Sans** (headings), **Inter** (clean UI body), and **JetBrains Mono** (tabular numerals for currency, percentages, and match scores).

### 🧮 2. Smart Pre-Bid Area & Material Tier Budget Calculator
* Built-in calculator drawer inside the Project Banner.
* Homeowners input **Carpet Area (sq. ft.)** and select a **Material & Finish Tier**:
  * **Economy Tier:** `₹1,200 / sq.ft.`
  * **Premium Tier:** `₹1,850 / sq.ft.`
  * **Luxury Architectural Tier:** `₹2,600 / sq.ft.`
* Automatically computes the recommended target budget and applies it to the active project in one click.

### 🧠 3. Automated AI Decision Assistant & Contingency Simulator
* **Top-3 Smart Callouts:** Automatically highlights the **🏆 Best Overall Value & Scope Fit**, **💰 Most Budget-Friendly Bid**, and **⚡ Fastest Turnaround Time** for the active project.
* **Real-Time Stress Testing:** Includes an interactive **Contingency Buffer Slider (`0%` to `20%`)** and an **18% GST Estimator Toggle** that dynamically recalculates every contractor card, milestone stage, and comparison table cell.

### 📊 4. Itemized 55% / 30% / 15% Cost Split Bar
* Breaks down every lump-sum contractor quote into a transparent 3-part visual bar and currency split:
  * 🧱 **Materials (55%)**
  * 👷 **Labor & Civil Work (30%)**
  * ⚡ **MEP (Electrical, Plumbing & Design — 15%)**

### 🚩 5. Automated Red-Flag & Risk Detector
* Scans every proposal against homeowner requirements and displays instant diagnostic badges:
  * `⚠️ Lowball Risk: Verify Material Grades` (Triggered if a bid is $>15\%$ below the target budget)
  * `⚠️ Scope Gap: Missing X Item(s)` (Triggered when required scope checkboxes are excluded)
  * `🛡️ Zero-Risk Verified Bid` (Awarded to verified contractors with $100\%$ scope coverage and realistic pricing)

### 🤝 6. Counter-Offer & Price Negotiation Workflow
* Homeowners can click **"🤝 Counter-Offer"** on any proposal card to propose a revised price (₹) and target duration (Weeks).
* Submitting a counter-offer places a live **`💬 Counter-Offer Sent`** badge on the card, updates the Comparison Matrix, and logs an official negotiation entry directly inside the **Admin-Monitored On-Platform Chat**.

### 📅 7. Visual Week-by-Week Phase Schedule (Mini-Gantt Drawer)
* Every proposal card features a collapsible **4-Phase Execution Schedule** bar chart breaking the contractor's quoted weeks into:
  1. *Demolition & Site Prep (20%)*
  2. *Civil, Waterproofing & MEP Rough-In (30%)*
  3. *Tiling, Flooring & Modular Cabinetry (30%)*
  4. *Painting, Snag Clearance & Final Handover (20%)*

### 💰 8. Interactive 20% - 50% - 30% Milestone Tracker & Smart Contract PDF
* **Clickable Milestone Stepper:** Splits every quote into **20% Booking**, **50% Mid-Work**, and **30% Final Handover**. Users can click any stage to toggle its `Paid ✔` state.
* **Official Digital Renovation Agreement:** Selecting a proposal unlocks a printable **Smart Contract Modal** containing locked scope items, itemized cost splits, and digital signatures.

---

## 👥 Role-Based Access Control (RBAC)

Click **"Switch Role"** in the top navigation bar to test all 3 platform personas during your demonstration:

| Role | Default Demo User | Key Permissions & Capabilities |
| :--- | :--- | :--- |
| **🏠 Consumer** | `Aarav Sharma (Homeowner)` | Create/edit multiple renovation projects, use the Area Budget Calculator, change proposal statuses (*Blue / Amber / Green / Red*), send Counter-Offers, toggle paid milestones, chat with contractors, and generate Smart Contracts. |
| **🔨 Contractor** | `Apex Home Renovations` | Select any active homeowner project, submit new itemized bids with material & warranty specs, respond to homeowner counter-offers in chat, and rate homeowners. |
| **🛡️ Admin** | `Platform Admin` | Access the **Admin Control & Transparency Center**, verify/unverify contractor profiles (`✅`), audit all live Consumer–Contractor chat threads, and reset demo data. |

---

## 🧮 Algorithmic Formulas Used

1. **Smart Requirement Match Score ($100\text{ Points Max}$):**
   $$\text{Match Score} = \text{Scope Score } (60) + \text{Budget Score } (25) + \text{Timeline Score } (15)$$
   * **Scope Score:** $\left(\frac{\text{Matched Required Scope Items}}{\text{Total Required Scope Items}}\right) \times 60$
   * **Budget Score:** Full $25\text{ pts}$ if $\text{Quoted Price} \le \text{Target Budget}$; scales down proportionally if over budget.
   * **Timeline Score:** Full $15\text{ pts}$ if $\text{Quoted Weeks} \le \text{Target Weeks}$; deducts $4\text{ pts}$ per extra week.

2. **Simulated Total Price (Contingency + GST):**
   $$\text{Simulated Total} = \text{Base Quote} \times \left(1 + \frac{\text{Contingency \%}}{100}\right) \times \begin{cases} 1.18 & \text{if GST enabled} \\ 1.00 & \text{otherwise} \end{cases}$$

---

## 📂 Project Folder Structure

```text
📦 RenoCompare-v7.0
 ┣ 📜 index.html      # Semantic structure, modals, multi-project banner & forms
 ┣ 📜 style.css       # 4-theme CSS variables, 6px status accent cards, responsive grid
 ┣ 📜 script.js       # State management (localStorage), match algorithm, chat & CSV export
 ┗ 📜 README.md       # Project documentation & viva guide
```

---

## 🚀 How to Run Locally in VS Code
1. Download or clone the project folder containing `index.html`, `style.css`, `script.js`, and `README.md`.
2. Open the folder in **Visual Studio Code**.
3. Open `index.html` using the **Live Server** extension (or double-click `index.html` in any modern web browser).
4. **Data Persistence:** All custom projects, bids, counter-offers, milestone statuses, and chat logs are automatically saved in your browser's `localStorage` (`reno_v7_*` keys). You can reset to factory defaults anytime via **Switch Role → Admin → Reset Default Demo Data**.
