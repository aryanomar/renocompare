const MASTER_SCOPE_CATALOG = [
  "Demolition & Debris Removal",
  "Modular Cabinetry",
  "Countertop Installation",
  "Flooring & Tiling",
  "Electrical & Plumbing",
  "Painting & Finishing",
  "False Ceiling & Lighting",
  "Waterproofing"
];

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Master Kitchen & Living Room Remodel",
    description:
      "Complete modular kitchen upgrade with quartz countertops, living room vitrified flooring, concealed wiring, and premium wall painting.",
    budget: 650000,
    timelineWeeks: 6,
    requiredScope: [
      "Demolition & Debris Removal",
      "Modular Cabinetry",
      "Countertop Installation",
      "Flooring & Tiling",
      "Electrical & Plumbing",
      "Painting & Finishing"
    ]
  },
  {
    id: 2,
    title: "Master Bathroom & Balcony Waterproofing",
    description:
      "Full anti-skid tiling, chemical waterproofing membrane, concealed diverter plumbing, and false ceiling with warm LED lighting.",
    budget: 280000,
    timelineWeeks: 3,
    requiredScope: [
      "Demolition & Debris Removal",
      "Flooring & Tiling",
      "Electrical & Plumbing",
      "False Ceiling & Lighting",
      "Waterproofing"
    ]
  }
];

const DEFAULT_PROPOSALS = [
  {
    id: 1,
    projectId: 1,
    contractorName: "Apex Home Renovations",
    profileInfo: "12 Yrs Exp • 4.9 ★",
    verified: true,
    quotedPrice: 640000,
    timelineWeeks: 5,
    materials: "Hettich Soft-Close, Caesarstone Quartz, Kajaria Vitrified, Asian Paints Royale",
    warranty: "5 Years Comprehensive Warranty",
    scope: [
      "Demolition & Debris Removal",
      "Modular Cabinetry",
      "Countertop Installation",
      "Flooring & Tiling",
      "Electrical & Plumbing",
      "Painting & Finishing"
    ],
    status: "Selected",
    milestonesPaid: [true, false, false],
    counterOffer: null
  },
  {
    id: 2,
    projectId: 1,
    contractorName: "BudgetBuild Contractors",
    profileInfo: "5 Yrs Exp • 4.1 ★",
    verified: false,
    quotedPrice: 520000,
    timelineWeeks: 8,
    materials: "Local SS Hinges, Granite Slab, Commercial Ceramic Tiles, Tractor Emulsion",
    warranty: "1 Year Workmanship Warranty",
    scope: [
      "Demolition & Debris Removal",
      "Modular Cabinetry",
      "Countertop Installation",
      "Flooring & Tiling"
    ],
    status: "Rejected",
    milestonesPaid: [false, false, false],
    counterOffer: null
  },
  {
    id: 3,
    projectId: 1,
    contractorName: "CraftLine Studio & Interiors",
    profileInfo: "9 Yrs Exp • 4.8 ★",
    verified: true,
    quotedPrice: 615000,
    timelineWeeks: 6,
    materials: "Ebco Pro Hardware, Kalinga Quartz, Somany Duragres, Dulux Velvet Touch",
    warranty: "3 Years Warranty + Free Annual Check",
    scope: [
      "Demolition & Debris Removal",
      "Modular Cabinetry",
      "Countertop Installation",
      "Flooring & Tiling",
      "Electrical & Plumbing",
      "Painting & Finishing"
    ],
    status: "Shortlisted",
    milestonesPaid: [false, false, false],
    counterOffer: null
  },
  {
    id: 4,
    projectId: 1,
    contractorName: "MetroSpace Renovators",
    profileInfo: "7 Yrs Exp • 4.5 ★",
    verified: true,
    quotedPrice: 635000,
    timelineWeeks: 6,
    materials: "Hafele Hinges, Kalinga Stone, Johnson Vitrified Tiles, Berger Silk",
    warranty: "3 Years Workmanship Warranty",
    scope: [
      "Demolition & Debris Removal",
      "Modular Cabinetry",
      "Countertop Installation",
      "Flooring & Tiling",
      "Electrical & Plumbing"
    ],
    status: "Under Review",
    milestonesPaid: [false, false, false],
    counterOffer: null
  },
  {
    id: 5,
    projectId: 2,
    contractorName: "AquaShield Bath & Tile Experts",
    profileInfo: "10 Yrs Exp • 4.8 ★",
    verified: true,
    quotedPrice: 265000,
    timelineWeeks: 3,
    materials: "Dr. Fixit Waterproofing, Jaguar Fittings, Kajaria Anti-Skid Tiles, Saint-Gobain Gypsum",
    warranty: "7 Years Waterproofing Warranty",
    scope: [
      "Demolition & Debris Removal",
      "Flooring & Tiling",
      "Electrical & Plumbing",
      "False Ceiling & Lighting",
      "Waterproofing"
    ],
    status: "Under Review",
    milestonesPaid: [false, false, false],
    counterOffer: null
  },
  {
    id: 6,
    projectId: 2,
    contractorName: "UrbanPlumb & Interiors",
    profileInfo: "6 Yrs Exp • 4.4 ★",
    verified: true,
    quotedPrice: 290000,
    timelineWeeks: 4,
    materials: "Sika Waterproof Coating, Kohler Diverters, Somany Matte Tiles",
    warranty: "5 Years Warranty",
    scope: [
      "Demolition & Debris Removal",
      "Flooring & Tiling",
      "Electrical & Plumbing",
      "Waterproofing"
    ],
    status: "Shortlisted",
    milestonesPaid: [false, false, false],
    counterOffer: null
  }
];

const DEFAULT_CHATS = {
  1: [
    {
      senderRole: "Consumer",
      senderName: "Aarav Sharma (Homeowner)",
      text: "Hi Apex Team! We have selected your proposal. Please confirm if Caesarstone Quartz (Snow White) and Hettich soft-close channels are included in the ₹6,40,000 quote.",
      timestamp: "10:15 AM"
    },
    {
      senderRole: "Contractor",
      senderName: "Apex Home Renovations",
      text: "Thank you, Aarav! Yes, both Caesarstone Quartz and Hettich hardware are 100% included in our quoted work. We can start demolition this Monday and complete within 5 weeks.",
      timestamp: "10:22 AM"
    },
    {
      senderRole: "Admin",
      senderName: "Platform Admin",
      text: "🔒 Transparency Log: Proposal #1 selected at ₹6,40,000 (5 Weeks). Both parties agreed to keep all scope and material confirmations inside this chat.",
      timestamp: "10:25 AM"
    }
  ]
};

const DEFAULT_FEEDBACKS = [
  {
    id: 101,
    reviewerRole: "Consumer",
    reviewerName: "Aarav Sharma (Homeowner)",
    targetName: "Apex Home Renovations",
    partnerStars: 5,
    platformStars: 5,
    comment: "RenoCompare made comparing scope and quartz material grades effortless! Apex completed our kitchen remodel in 5 weeks as promised.",
    date: "Verified Homeowner Review"
  },
  {
    id: 102,
    reviewerRole: "Contractor",
    reviewerName: "Apex Home Renovations",
    targetName: "Aarav Sharma (Homeowner)",
    partnerStars: 5,
    platformStars: 5,
    comment: "Great homeowner to work with! Requirements were clearly listed on RenoCompare and milestone approvals in the chat were super fast.",
    date: "Verified Contractor Review"
  }
];

let currentUser = {
  role: "Consumer",
  username: "Aarav Sharma (Homeowner)"
};

let projects =
  JSON.parse(localStorage.getItem("reno_v7_projects")) || DEFAULT_PROJECTS;
let activeProjectId = projects[0]?.id || 1;
let proposals =
  JSON.parse(localStorage.getItem("reno_v7_proposals")) || DEFAULT_PROPOSALS;
let proposalChats =
  JSON.parse(localStorage.getItem("reno_v7_chats")) || DEFAULT_CHATS;
let feedbacks =
  JSON.parse(localStorage.getItem("reno_v7_feedbacks")) || DEFAULT_FEEDBACKS;

let activeChatProposalId = null;

function getActiveProject() {
  return projects.find(p => p.id === Number(activeProjectId)) || projects[0];
}

function saveToStorage() {
  localStorage.setItem("reno_v7_projects", JSON.stringify(projects));
  localStorage.setItem("reno_v7_proposals", JSON.stringify(proposals));
  localStorage.setItem("reno_v7_chats", JSON.stringify(proposalChats));
  localStorage.setItem("reno_v7_feedbacks", JSON.stringify(feedbacks));
}

function formatINR(amount) {
  return "₹" + Math.round(Number(amount)).toLocaleString("en-IN");
}

/* ================= LIVE 4-THEME SWITCHER (EMERALD, CLAY, COBALT, DARK) ================= */
function setAppTheme(themeName, btnEl) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("reno_v7_theme", themeName);
  document.querySelectorAll(".theme-picker-pill .theme-chip").forEach(chip => {
    chip.classList.remove("active");
  });
  if (btnEl) {
    btnEl.classList.add("active");
  }
}

/* ================= SIMULATED PRICE HELPER (CONTINGENCY + GST) ================= */
function getSimulatedPrice(basePrice) {
  const contingencyPct = Number(document.getElementById("contingencySlider")?.value || 0);
  const includeGst = document.getElementById("gstToggle")?.checked || false;
  let total = basePrice * (1 + contingencyPct / 100);
  if (includeGst) {
    total = total * 1.18;
  }
  return Math.round(total);
}

function updateSimulator() {
  const pct = document.getElementById("contingencySlider").value;
  document.getElementById("contingencyValue").textContent = `${pct}%`;
  renderAll();
}

/* ================= FEATURE A: PRE-BID AREA & MATERIAL TIER CALCULATOR ================= */
function togglePreBidCalculator() {
  const drawer = document.getElementById("prebidCalcDrawer");
  drawer.classList.toggle("hidden");
  if (!drawer.classList.contains("hidden")) {
    computePreBidEstimate();
  }
}

function computePreBidEstimate() {
  const sqft = Number(document.getElementById("calcAreaSqft")?.value || 350);
  const rate = Number(document.getElementById("calcMaterialTier")?.value || 1850);
  const estimated = Math.round(sqft * rate);
  const outputEl = document.getElementById("calcRecommendedOutput");
  if (outputEl) {
    outputEl.textContent = formatINR(estimated);
  }
  return estimated;
}

function applyEstimatedBudgetToProject() {
  const estimated = computePreBidEstimate();
  projects = projects.map(p =>
    p.id === Number(activeProjectId) ? { ...p, budget: estimated } : p
  );
  saveToStorage();
  renderAll();
}

/* ================= 1. STORY INTRO & CELEBRATION MODALS ================= */
function closeStoryIntro() {
  document.getElementById("story-intro-overlay").classList.add("hidden");
}

function replayStoryIntro() {
  const overlay = document.getElementById("story-intro-overlay");
  overlay.classList.remove("hidden");
  const scene = overlay.querySelector(".scene-container");
  const clone = scene.cloneNode(true);
  scene.parentNode.replaceChild(clone, scene);
}

function triggerCelebration(customText) {
  if (customText) {
    document.getElementById("celebration-message").textContent = customText;
  }
  document.getElementById("celebration-modal").classList.remove("hidden");
}

function closeCelebrationModal() {
  document.getElementById("celebration-modal").classList.add("hidden");
}

function goToFeedbackFromCelebration() {
  closeCelebrationModal();
  document.getElementById("feedback-section").scrollIntoView({ behavior: "smooth" });
}

/* ================= 2. ROLE-BASED AUTHENTICATION ================= */
function openLoginModal() {
  document.getElementById("login-overlay").classList.remove("hidden");
}

function selectLoginRole(role, evt) {
  document.getElementById("loginRole").value = role;
  const tabs = document.querySelectorAll(".role-tab");
  tabs.forEach(t => t.classList.remove("active"));
  if (evt && evt.target) evt.target.classList.add("active");

  const userField = document.getElementById("loginUsername");
  if (role === "Consumer") userField.value = "Aarav Sharma (Homeowner)";
  if (role === "Contractor") userField.value = "Apex Home Renovations";
  if (role === "Admin") userField.value = "Platform Admin";
}

function handleLogin(event) {
  event.preventDefault();
  const role = document.getElementById("loginRole").value;
  const username = document.getElementById("loginUsername").value.trim();

  currentUser = { role, username };
  document.getElementById("login-overlay").classList.add("hidden");
  applyRolePermissions();
  renderAll();
}

function applyRolePermissions() {
  document.getElementById("currentUserBadge").textContent =
    `${currentUser.role}: ${currentUser.username}`;

  const adminPanel = document.getElementById("admin-panel");
  const consumerReqActions = document.getElementById("consumer-req-actions");
  const addProposalSection = document.getElementById("add-proposal");

  adminPanel.classList.toggle("hidden", currentUser.role !== "Admin");
  consumerReqActions.classList.toggle("hidden", currentUser.role === "Contractor");

  if (currentUser.role === "Contractor") {
    document.getElementById("contractorName").value = currentUser.username;
    document.getElementById("fbReviewerRole").value = "Contractor";
  } else {
    document.getElementById("contractorName").value = "";
    document.getElementById("fbReviewerRole").value = "Consumer";
  }

  document.getElementById("fbReviewerName").value = currentUser.username;
  updateFeedbackPartnerLabel();

  addProposalSection.classList.toggle("hidden", currentUser.role === "Consumer");
}

/* ================= 3. MULTI-PROJECT MANAGEMENT (NEW & EDIT) ================= */
function selectProject(projectId) {
  activeProjectId = Number(projectId);
  document.getElementById("reqForm").classList.add("hidden");
  renderAll();
}

function syncProjectFromBidForm(projectId) {
  activeProjectId = Number(projectId);
  renderAll();
}

function initScopeCheckboxes(selectedList = []) {
  const reqBox = document.getElementById("reqScopeCheckboxes");
  const propBox = document.getElementById("proposalScopeCheckboxes");
  const activeProj = getActiveProject();
  const listToUse = selectedList.length ? selectedList : activeProj.requiredScope;

  reqBox.innerHTML = MASTER_SCOPE_CATALOG.map(
    item => `
    <label style="color:#ffffff">
      <input type="checkbox" value="${item}" ${
      listToUse.includes(item) ? "checked" : ""
    } />
      ${item}
    </label>`
  ).join("");

  propBox.innerHTML = MASTER_SCOPE_CATALOG.map(
    item => `
    <label>
      <input type="checkbox" value="${item}" checked />
      ${item}
    </label>`
  ).join("");
}

function openProjectForm(mode) {
  const form = document.getElementById("reqForm");
  const heading = document.getElementById("reqFormHeading");
  document.getElementById("reqFormMode").value = mode;
  form.classList.remove("hidden");

  if (mode === "new") {
    heading.textContent = "➕ Create New Homeowner Renovation Project";
    document.getElementById("reqTitleInput").value = "";
    document.getElementById("reqDescInput").value = "";
    document.getElementById("reqBudgetInput").value = "";
    document.getElementById("reqTimelineInput").value = "";
    initScopeCheckboxes(["Demolition & Debris Removal", "Flooring & Tiling", "Painting & Finishing"]);
  } else {
    const activeProj = getActiveProject();
    heading.textContent = `✏️ Edit Project #${activeProj.id}: ${activeProj.title}`;
    document.getElementById("reqTitleInput").value = activeProj.title;
    document.getElementById("reqDescInput").value = activeProj.description;
    document.getElementById("reqBudgetInput").value = activeProj.budget;
    document.getElementById("reqTimelineInput").value = activeProj.timelineWeeks;
    initScopeCheckboxes(activeProj.requiredScope);
  }
}

function closeProjectForm() {
  document.getElementById("reqForm").classList.add("hidden");
}

function saveRequirements(event) {
  event.preventDefault();
  const mode = document.getElementById("reqFormMode").value;
  const selectedScope = Array.from(
    document.querySelectorAll("#reqScopeCheckboxes input:checked")
  ).map(cb => cb.value);

  if (selectedScope.length === 0) {
    return;
  }

  if (mode === "new") {
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const newProject = {
      id: newId,
      title: document.getElementById("reqTitleInput").value.trim(),
      description: document.getElementById("reqDescInput").value.trim(),
      budget: Number(document.getElementById("reqBudgetInput").value),
      timelineWeeks: Number(document.getElementById("reqTimelineInput").value),
      requiredScope: selectedScope
    };
    projects.push(newProject);
    activeProjectId = newId;
  } else {
    projects = projects.map(p =>
      p.id === Number(activeProjectId)
        ? {
            ...p,
            title: document.getElementById("reqTitleInput").value.trim(),
            description: document.getElementById("reqDescInput").value.trim(),
            budget: Number(document.getElementById("reqBudgetInput").value),
            timelineWeeks: Number(document.getElementById("reqTimelineInput").value),
            requiredScope: selectedScope
          }
        : p
    );
  }

  saveToStorage();
  closeProjectForm();
  renderAll();
}

function renderRequirementsBanner() {
  const activeProj = getActiveProject();

  const tabsContainer = document.getElementById("project-tabs");
  tabsContainer.innerHTML = projects
    .map(p => {
      const bidCount = proposals.filter(prop => prop.projectId === p.id).length;
      return `
      <button type="button" class="proj-tab ${
        p.id === activeProj.id ? "active" : ""
      }" onclick="selectProject(${p.id})">
        Project #${p.id}: ${p.title} (${bidCount} Bids)
      </button>
    `;
    })
    .join("");

  const projectSelect = document.getElementById("proposalProjectSelect");
  if (projectSelect) {
    projectSelect.innerHTML = projects
      .map(
        p => `
      <option value="${p.id}" ${p.id === activeProj.id ? "selected" : ""}>
        Project #${p.id}: ${p.title} (Target Budget: ${formatINR(p.budget)})
      </option>
    `
      )
      .join("");
  }

  document.getElementById("req-id-badge").textContent = `Active Project #${activeProj.id} of ${projects.length}`;
  document.getElementById("req-title-display").textContent = activeProj.title;
  document.getElementById("req-desc-display").textContent = activeProj.description;
  document.getElementById("req-budget-display").textContent = formatINR(activeProj.budget);
  document.getElementById("req-timeline-display").textContent = `${activeProj.timelineWeeks} Weeks`;
  document.getElementById("req-scope-display").textContent = activeProj.requiredScope.join(", ");
  document.getElementById("proposals-section-title").textContent =
    `Submitted Contractor Proposals — Project #${activeProj.id}: ${activeProj.title}`;
}

/* ================= 4. SMART REQUIREMENT MATCH SCORE & AI INSIGHTS ================= */
function calculateMatchScore(proposal) {
  const activeProj = projects.find(p => p.id === proposal.projectId) || getActiveProject();
  const reqScope = activeProj.requiredScope;
  const matchedItems = reqScope.filter(item => proposal.scope.includes(item));
  const scopeScore = reqScope.length > 0 ? (matchedItems.length / reqScope.length) * 60 : 60;

  let budgetScore = 25;
  if (proposal.quotedPrice > activeProj.budget) {
    const overPct = (proposal.quotedPrice - activeProj.budget) / activeProj.budget;
    budgetScore = Math.max(0, Math.round(25 * (1 - overPct * 2)));
  }

  let timeScore = 15;
  if (proposal.timelineWeeks > activeProj.timelineWeeks) {
    const extraWeeks = proposal.timelineWeeks - activeProj.timelineWeeks;
    timeScore = Math.max(0, 15 - extraWeeks * 4);
  }

  return Math.round(scopeScore + budgetScore + timeScore);
}

function renderAIInsights(projectProposals) {
  const grid = document.getElementById("ai-recommendation-grid");
  if (!grid) return;

  if (projectProposals.length === 0) {
    grid.innerHTML = `<div class="insight-box"><small>No Data Yet</small><strong>Submit a proposal below to unlock AI recommendations</strong></div>`;
    return;
  }

  const bestMatch = [...projectProposals].sort((a, b) => calculateMatchScore(b) - calculateMatchScore(a))[0];
  const lowestPrice = [...projectProposals].sort((a, b) => a.quotedPrice - b.quotedPrice)[0];
  const fastest = [...projectProposals].sort((a, b) => a.timelineWeeks - b.timelineWeeks)[0];
  const avgPrice = Math.round(
    projectProposals.reduce((acc, p) => acc + getSimulatedPrice(p.quotedPrice), 0) / projectProposals.length
  );

  grid.innerHTML = `
    <div class="insight-box">
      <small>🏆 Best Overall Value & Scope Fit</small>
      <strong>${bestMatch.contractorName} (${calculateMatchScore(bestMatch)}% Match)</strong>
      <span>Covers ${bestMatch.scope.length} scope items • Est: ${formatINR(getSimulatedPrice(bestMatch.quotedPrice))}</span>
    </div>
    <div class="insight-box">
      <small>💰 Most Budget-Friendly Bid</small>
      <strong>${lowestPrice.contractorName}</strong>
      <span>Simulated Quote: ${formatINR(getSimulatedPrice(lowestPrice.quotedPrice))} (${lowestPrice.timelineWeeks} Weeks)</span>
    </div>
    <div class="insight-box">
      <small>⚡ Fastest Turnaround Time</small>
      <strong>${fastest.contractorName} (${fastest.timelineWeeks} Weeks)</strong>
      <span>Market Avg for Project: ${formatINR(avgPrice)}</span>
    </div>
  `;
}

/* ================= 5. ON-PLATFORM TRANSPARENT CHAT SYSTEM ================= */
function openChatModal(proposalId) {
  const proposal = proposals.find(p => p.id === proposalId);
  if (!proposal) return;

  activeChatProposalId = proposalId;

  if (!proposalChats[proposalId]) {
    proposalChats[proposalId] = [
      {
        senderRole: "Admin",
        senderName: "Platform System",
        text: `🔒 Official Discussion Room opened for ${proposal.contractorName} (${formatINR(
          proposal.quotedPrice
        )}, ${proposal.timelineWeeks} Weeks). All messages are logged on-platform for transparency.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ];
    saveToStorage();
  }

  document.getElementById("chat-contractor-title").textContent =
    `Discussion with ${proposal.contractorName}`;
  document.getElementById("chat-proposal-meta").textContent =
    `Quoted Price: ${formatINR(proposal.quotedPrice)} • Timeline: ${proposal.timelineWeeks} Weeks • Materials: ${proposal.materials}`;

  document.getElementById("chat-modal").classList.remove("hidden");
  renderChatMessages();
}

function closeChatModal() {
  document.getElementById("chat-modal").classList.add("hidden");
  activeChatProposalId = null;
  renderAll();
}

function insertQuickTopic(text) {
  const input = document.getElementById("chatInput");
  input.value = text;
  input.focus();
}

function renderChatMessages() {
  const container = document.getElementById("chat-messages");
  const messages = proposalChats[activeChatProposalId] || [];

  container.innerHTML = messages
    .map(
      m => `
      <div class="msg-bubble msg-${m.senderRole}">
        <div class="msg-meta">
          <span>${m.senderRole.toUpperCase()}: ${m.senderName}</span>
          <span>${m.timestamp}</span>
        </div>
        <div>${m.text}</div>
      </div>
    `
    )
    .join("");

  container.scrollTop = container.scrollHeight;
}

function sendChatMessage(event) {
  event.preventDefault();
  if (!activeChatProposalId) return;

  const input = document.getElementById("chatInput");
  const messageText = input.value.trim();
  if (!messageText) return;

  if (!proposalChats[activeChatProposalId]) {
    proposalChats[activeChatProposalId] = [];
  }

  proposalChats[activeChatProposalId].push({
    senderRole: currentUser.role,
    senderName: currentUser.username,
    text: messageText,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  });

  input.value = "";
  saveToStorage();
  renderChatMessages();
  renderAll();
}

/* ================= FEATURE D & E: COUNTER-OFFER & GANTT SCHEDULE DRAWERS ================= */
function toggleCardDrawer(drawerId) {
  const el = document.getElementById(drawerId);
  if (el) {
    el.classList.toggle("hidden");
  }
}

function submitCounterOffer(proposalId) {
  const priceInput = document.getElementById(`counter-price-${proposalId}`);
  const weeksInput = document.getElementById(`counter-weeks-${proposalId}`);
  if (!priceInput || !weeksInput) return;

  const counterPrice = Number(priceInput.value);
  const counterWeeks = Number(weeksInput.value);
  if (!counterPrice || counterPrice <= 0 || !counterWeeks || counterWeeks <= 0) return;

  proposals = proposals.map(p =>
    p.id === proposalId
      ? {
          ...p,
          counterOffer: {
            price: counterPrice,
            weeks: counterWeeks,
            by: currentUser.username
          }
        }
      : p
  );

  if (!proposalChats[proposalId]) {
    proposalChats[proposalId] = [];
  }

  const targetProp = proposals.find(p => p.id === proposalId);
  proposalChats[proposalId].push({
    senderRole: currentUser.role,
    senderName: currentUser.username,
    text: `🤝 OFFICIAL COUNTER-OFFER: Proposing revised price of ${formatINR(counterPrice)} (instead of ${formatINR(
      targetProp.quotedPrice
    )}) with a target completion timeline of ${counterWeeks} Weeks.`,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  });

  saveToStorage();
  renderAll();
}

/* ================= 6. SMART CONTRACT GENERATOR & MILESTONE TRACKER ================= */
function toggleMilestonePaid(proposalId, stageIndex) {
  proposals = proposals.map(p => {
    if (p.id !== proposalId) return p;
    const current = p.milestonesPaid || [false, false, false];
    const updated = [...current];
    updated[stageIndex] = !updated[stageIndex];
    return { ...p, milestonesPaid: updated };
  });
  saveToStorage();
  renderAll();
}

function openContractModal(proposalId) {
  const p = proposals.find(item => item.id === proposalId);
  if (!p) return;
  const proj = projects.find(pr => pr.id === p.projectId) || getActiveProject();
  const baseToUse = p.counterOffer ? p.counterOffer.price : p.quotedPrice;
  const simTotal = getSimulatedPrice(baseToUse);
  const m1 = Math.round(simTotal * 0.2);
  const m2 = Math.round(simTotal * 0.5);
  const m3 = simTotal - m1 - m2;

  const matCost = Math.round(simTotal * 0.55);
  const labCost = Math.round(simTotal * 0.3);
  const mepCost = simTotal - matCost - labCost;

  document.getElementById("contract-title").textContent =
    `Renovation Agreement: ${proj.title}`;
  document.getElementById("contract-body").innerHTML = `
    <div class="contract-grid">
      <div><strong>Homeowner (Client):</strong><br>Aarav Sharma (Verified Consumer)</div>
      <div><strong>Appointed Contractor:</strong><br>${p.contractorName} ${p.verified ? "✅" : ""}</div>
      <div><strong>Agreed Base Quote:</strong><br><span class="mono-num">${formatINR(baseToUse)}</span> ${p.counterOffer ? "(Counter-Offer Locked)" : ""}</div>
      <div><strong>Simulated Total (with Buffers):</strong><br><span class="mono-num">${formatINR(simTotal)}</span></div>
      <div><strong>Committed Duration:</strong><br>${p.counterOffer ? p.counterOffer.weeks : p.timelineWeeks} Weeks</div>
      <div><strong>Warranty Coverage:</strong><br>${p.warranty}</div>
    </div>
    <div>
      <strong>Itemized 55% / 30% / 15% Cost Allocation:</strong>
      <p class="mono-num">🧱 Materials (55%): ${formatINR(matCost)} • 👷 Labor & Civil (30%): ${formatINR(labCost)} • ⚡ MEP & Design (15%): ${formatINR(mepCost)}</p>
    </div>
    <div>
      <strong>Approved Material Brands & Specifications:</strong>
      <p>${p.materials}</p>
    </div>
    <div>
      <strong>Locked Scope of Work (${p.scope.length} Items):</strong>
      <p>${p.scope.join(" • ")}</p>
    </div>
    <div>
      <strong>Escrow-Style 3-Stage Milestone Schedule:</strong>
      <p>1. Booking & Mobilization (20%): <strong class="mono-num">${formatINR(m1)}</strong><br>
         2. Mid-Work Material & Structure (50%): <strong class="mono-num">${formatINR(m2)}</strong><br>
         3. Final Handover & Snag Clearance (30%): <strong class="mono-num">${formatINR(m3)}</strong></p>
    </div>
    <div style="padding-top:0.5rem;border-top:1px dashed var(--border-strong);display:flex;justify-content:space-between;font-size:0.8rem">
      <span>Digitally Signed by Homeowner: <strong>Aarav Sharma</strong></span>
      <span>Digitally Signed by Contractor: <strong>${p.contractorName}</strong></span>
    </div>
  `;
  document.getElementById("contract-modal").classList.remove("hidden");
}

function closeContractModal() {
  document.getElementById("contract-modal").classList.add("hidden");
}

/* ================= 7. PROPOSAL ACTIONS & CARDS ================= */
function updateStatus(id, newStatus) {
  proposals = proposals.map(p => (p.id === id ? { ...p, status: newStatus } : p));
  const targetProp = proposals.find(p => p.id === id);

  if (newStatus === "Selected" && targetProp) {
    if (!proposalChats[id]) {
      proposalChats[id] = [
        {
          senderRole: "Admin",
          senderName: "Platform Transparency Bot",
          text: `✅ Proposal from ${targetProp.contractorName} was marked SELECTED by ${currentUser.username}. On-platform communication is now active.`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ];
    }
    triggerCelebration(
      `Congratulations! You selected ${targetProp.contractorName} (${formatINR(
        targetProp.quotedPrice
      )}, ${targetProp.timelineWeeks} Weeks). Thank you for choosing RenoCompare!`
    );
  }

  saveToStorage();
  renderAll();
}

function toggleVerifyContractor(id) {
  proposals = proposals.map(p => (p.id === id ? { ...p, verified: !p.verified } : p));
  saveToStorage();
  renderAll();
}

function deleteProposal(id) {
  proposals = proposals.filter(p => p.id !== id);
  saveToStorage();
  renderAll();
}

function resetDemoData() {
  localStorage.removeItem("reno_v7_projects");
  localStorage.removeItem("reno_v7_proposals");
  localStorage.removeItem("reno_v7_chats");
  localStorage.removeItem("reno_v7_feedbacks");
  projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  activeProjectId = projects[0].id;
  proposals = JSON.parse(JSON.stringify(DEFAULT_PROPOSALS));
  proposalChats = JSON.parse(JSON.stringify(DEFAULT_CHATS));
  feedbacks = JSON.parse(JSON.stringify(DEFAULT_FEEDBACKS));
  initScopeCheckboxes();
  renderAll();
}

function addProposal(event) {
  event.preventDefault();
  const targetProjectId = Number(document.getElementById("proposalProjectSelect").value);
  const checkedScope = Array.from(
    document.querySelectorAll("#proposalScopeCheckboxes input:checked")
  ).map(cb => cb.value);

  const newProposal = {
    id: Date.now(),
    projectId: targetProjectId,
    contractorName: document.getElementById("contractorName").value.trim(),
    profileInfo: document.getElementById("profileInfo").value.trim(),
    verified: false,
    quotedPrice: Number(document.getElementById("quotedPrice").value),
    timelineWeeks: Number(document.getElementById("timelineWeeks").value),
    materials: document.getElementById("materials").value.trim(),
    warranty: document.getElementById("warranty").value.trim(),
    scope: checkedScope,
    status: "Under Review",
    milestonesPaid: [false, false, false],
    counterOffer: null
  };

  proposals.push(newProposal);
  activeProjectId = targetProjectId;
  saveToStorage();
  document.getElementById("proposalForm").reset();
  initScopeCheckboxes();
  renderAll();
  document.getElementById("contractors").scrollIntoView({ behavior: "smooth" });
}

function renderCards(filteredProposals) {
  const container = document.getElementById("proposal-cards");
  container.innerHTML = "";
  const activeProj = getActiveProject();

  if (filteredProposals.length === 0) {
    container.innerHTML = `<div class="card" style="grid-column:1/-1;text-align:center">
      <h3>No Contractor Proposals Match Your Current Filter</h3>
      <p class="subtitle">Try clearing the search box, unchecking Verified Only, or switching status filters.</p>
    </div>`;
    return;
  }

  filteredProposals.forEach(p => {
    const statusKey = p.status.split(" ")[0];
    const matchScore = calculateMatchScore(p);
    const chatCount = (proposalChats[p.id] || []).length;
    const simPrice = getSimulatedPrice(p.quotedPrice);
    const paidArr = p.milestonesPaid || [false, false, false];

    let cardStateClass = "under-review-card";
    if (p.status === "Under Review") cardStateClass = "under-review-card";
    if (p.status === "Shortlisted") cardStateClass = "shortlisted-card";
    if (p.status === "Selected") cardStateClass = "selected-card";
    if (p.status === "Rejected") cardStateClass = "rejected-card";

    const missingRequiredScope = activeProj.requiredScope.filter(
      item => !p.scope.includes(item)
    );

    /* FEATURE C: AUTOMATED RED-FLAG & RISK DETECTOR BADGES */
    const isLowball = p.quotedPrice < activeProj.budget * 0.85;
    const riskBadgesHtml = [];
    if (isLowball) {
      riskBadgesHtml.push(
        `<span class="risk-pill danger">⚠️ Lowball Risk: Verify Material Grades</span>`
      );
    }
    if (missingRequiredScope.length > 0) {
      riskBadgesHtml.push(
        `<span class="risk-pill warn">⚠️ Scope Gap: Missing ${missingRequiredScope.length} Item${
          missingRequiredScope.length > 1 ? "s" : ""
        }</span>`
      );
    }
    if (!isLowball && missingRequiredScope.length === 0 && p.verified) {
      riskBadgesHtml.push(
        `<span class="risk-pill safe">🛡️ Zero-Risk Verified Bid</span>`
      );
    }

    /* FEATURE B: ITEMIZED 55% / 30% / 15% COST BREAKDOWN */
    const matINR = Math.round(simPrice * 0.55);
    const labINR = Math.round(simPrice * 0.3);
    const mepINR = simPrice - matINR - labINR;

    const budgetDiff = simPrice - activeProj.budget;
    const budgetPct = Math.min(100, Math.round((simPrice / activeProj.budget) * 100));
    const barColor = budgetDiff <= 0 ? "#16a34a" : "#dc2626";

    const budgetText =
      budgetDiff <= 0
        ? `<span style="color:var(--green-badge-text);font-weight:700">(${formatINR(Math.abs(budgetDiff))} Under Target)</span>`
        : `<span style="color:var(--red-badge-text);font-weight:700">(${formatINR(budgetDiff)} Over Target)</span>`;

    const m1 = Math.round(simPrice * 0.2);
    const m2 = Math.round(simPrice * 0.5);
    const m3 = simPrice - m1 - m2;

    /* FEATURE E: PHASE SCHEDULE WEEKS CALCULATION */
    const wTotal = p.timelineWeeks;
    const p1Wks = Math.max(1, Math.round(wTotal * 0.2));
    const p2Wks = Math.max(1, Math.round(wTotal * 0.3));
    const p3Wks = Math.max(1, Math.round(wTotal * 0.3));
    const p4Wks = Math.max(1, wTotal - p1Wks - p2Wks - p3Wks);

    const card = document.createElement("div");
    card.className = `proposal-card ${cardStateClass}`;

    const canChangeStatus =
      currentUser.role === "Consumer" || currentUser.role === "Admin";

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div>
            <h3>${p.contractorName} ${p.verified ? "✅" : ""}</h3>
            <small style="color:var(--muted);font-weight:600">${p.profileInfo}</small>
          </div>
          <span class="status-pill status-${statusKey}">${p.status}</span>
        </div>

        ${
          riskBadgesHtml.length > 0
            ? `<div class="risk-badge-row">${riskBadgesHtml.join("")}</div>`
            : ""
        }

        ${
          p.counterOffer
            ? `<div class="counter-active-banner">
                <span>💬 Counter-Offer Sent: <strong class="mono-num">${formatINR(p.counterOffer.price)}</strong> (${p.counterOffer.weeks} Wks)</span>
                <button type="button" class="btn-util" style="padding:0.15rem 0.5rem;font-size:0.7rem" onclick="openChatModal(${p.id})">View Chat</button>
              </div>`
            : ""
        }

        <div class="price-row">
          <div>
            <div class="price-tag">${formatINR(simPrice)}</div>
            ${
              simPrice !== p.quotedPrice
                ? `<span class="simulated-sub">Base Quote: ${formatINR(p.quotedPrice)} (incl. buffer/GST)</span>`
                : `<span class="simulated-sub">Base Quoted Price</span>`
            }
          </div>
          <span class="match-badge">🎯 ${matchScore}% Match</span>
        </div>

        <!-- FEATURE B: VISUAL ITEMIZED COST SPLIT BAR -->
        <div class="cost-split-box">
          <div class="cost-split-labels">
            <span style="color:#0284c7">🧱 Materials 55%: <strong class="mono-num">${formatINR(matINR)}</strong></span>
            <span style="color:#d97706">👷 Labor 30%: <strong class="mono-num">${formatINR(labINR)}</strong></span>
            <span style="color:#16a34a">⚡ MEP 15%: <strong class="mono-num">${formatINR(mepINR)}</strong></span>
          </div>
          <div class="cost-split-track">
            <div class="split-seg-mat" title="Materials (55%)"></div>
            <div class="split-seg-lab" title="Labor & Civil (30%)"></div>
            <div class="split-seg-mep" title="Electrical, Plumbing & Design (15%)"></div>
          </div>
        </div>

        <div class="progress-meter-wrap">
          <div class="progress-meter-labels">
            <span>Budget Utilization vs Target</span>
            <span class="mono-num">${budgetPct}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width:${budgetPct}%;background:${barColor}"></div>
          </div>
        </div>

        <div class="milestone-box">
          <strong>💰 Interactive 20%-50%-30% Milestone Stepper (Click to toggle Paid):</strong>
          <div class="milestone-steps">
            <div class="m-step ${paidArr[0] ? "paid" : ""}" onclick="toggleMilestonePaid(${p.id}, 0)">
              <small>20% Booking</small>
              <span class="mono-num">${formatINR(m1)}</span> ${paidArr[0] ? "✔" : ""}
            </div>
            <div class="m-step ${paidArr[1] ? "paid" : ""}" onclick="toggleMilestonePaid(${p.id}, 1)">
              <small>50% Mid-Work</small>
              <span class="mono-num">${formatINR(m2)}</span> ${paidArr[1] ? "✔" : ""}
            </div>
            <div class="m-step ${paidArr[2] ? "paid" : ""}" onclick="toggleMilestonePaid(${p.id}, 2)">
              <small>30% Final</small>
              <span class="mono-num">${formatINR(m3)}</span> ${paidArr[2] ? "✔" : ""}
            </div>
          </div>
        </div>

        <!-- FEATURE D & E BUTTONS -->
        <div class="card-utility-btns">
          <button type="button" class="btn-util" onclick="toggleCardDrawer('counter-drawer-${p.id}')">
            🤝 Counter-Offer
          </button>
          <button type="button" class="btn-util" onclick="toggleCardDrawer('gantt-drawer-${p.id}')">
            📅 ${p.timelineWeeks}-Wk Phase Schedule
          </button>
        </div>

        <!-- FEATURE D: INLINE COUNTER-OFFER PANEL -->
        <div id="counter-drawer-${p.id}" class="inline-drawer hidden">
          <strong style="display:block;margin-bottom:0.4rem">🤝 Propose Counter-Offer to ${p.contractorName}</strong>
          <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:0.4rem;align-items:end">
            <div>
              <label style="font-size:0.7rem;font-weight:700">Counter Price (₹)</label>
              <input type="number" id="counter-price-${p.id}" value="${
      p.counterOffer ? p.counterOffer.price : Math.round(p.quotedPrice * 0.95)
    }" />
            </div>
            <div>
              <label style="font-size:0.7rem;font-weight:700">Target Weeks</label>
              <input type="number" id="counter-weeks-${p.id}" value="${
      p.counterOffer ? p.counterOffer.weeks : p.timelineWeeks
    }" min="1" />
            </div>
            <button type="button" class="btn-primary" style="padding:0.52rem 0.85rem;font-size:0.76rem" onclick="submitCounterOffer(${p.id})">
              Send Offer
            </button>
          </div>
        </div>

        <!-- FEATURE E: COLLAPSIBLE WEEK-BY-WEEK GANTT PHASE SCHEDULE -->
        <div id="gantt-drawer-${p.id}" class="inline-drawer hidden">
          <strong style="display:block;margin-bottom:0.45rem">📅 ${p.timelineWeeks}-Week Execution Phase Schedule</strong>
          <div class="gantt-row">
            <span>1. Demolition (${p1Wks}w)</span>
            <div class="gantt-track"><div style="width:22%;margin-left:0%;height:100%;background:#ef4444"></div></div>
          </div>
          <div class="gantt-row">
            <span>2. Civil & MEP (${p2Wks}w)</span>
            <div class="gantt-track"><div style="width:30%;margin-left:20%;height:100%;background:#f59e0b"></div></div>
          </div>
          <div class="gantt-row">
            <span>3. Tile & Cab (${p3Wks}w)</span>
            <div class="gantt-track"><div style="width:32%;margin-left:48%;height:100%;background:#0284c7"></div></div>
          </div>
          <div class="gantt-row">
            <span>4. Handover (${p4Wks}w)</span>
            <div class="gantt-track"><div style="width:22%;margin-left:78%;height:100%;background:#16a34a"></div></div>
          </div>
        </div>

        <ul class="detail-list">
          <li><strong>Variance:</strong> ${budgetText}</li>
          <li><strong>Timeline:</strong> <span class="mono-num">${p.timelineWeeks} Weeks</span> (Target: ${activeProj.timelineWeeks} Wks)</li>
          <li><strong>Materials:</strong> ${p.materials}</li>
          <li><strong>Warranty:</strong> ${p.warranty}</li>
        </ul>

        <div class="scope-tags">
          ${p.scope.map(item => `<span class="scope-tag">✔ ${item}</span>`).join("")}
          ${missingRequiredScope
            .map(item => `<span class="scope-tag missing">✘ Missing: ${item}</span>`)
            .join("")}
        </div>

        ${
          p.status === "Selected"
            ? `<div class="contact-banner">
                <button class="btn-chat" onclick="openChatModal(${p.id})">
                  💬 Open Project Chat (${chatCount} msgs)
                </button>
                <button class="btn-contract" onclick="openContractModal(${p.id})">
                  📜 View Official Smart Contract
                </button>
                <button class="btn-celebrate" onclick="triggerCelebration('Thank you for choosing RenoCompare & completing your renovation with ${p.contractorName}!')">
                  🎉 Complete Project & Rate Experience
                </button>
              </div>`
            : ""
        }
      </div>

      <div class="card-actions">
        ${
          canChangeStatus
            ? `<select onchange="updateStatus(${p.id}, this.value)">
                <option value="Under Review" ${p.status === "Under Review" ? "selected" : ""}>🔵 Under Review</option>
                <option value="Shortlisted" ${p.status === "Shortlisted" ? "selected" : ""}>🟡 Shortlisted</option>
                <option value="Selected" ${p.status === "Selected" ? "selected" : ""}>🟢 Selected</option>
                <option value="Rejected" ${p.status === "Rejected" ? "selected" : ""}>🔴 Rejected</option>
              </select>`
            : `<span style="font-size:0.84rem;font-weight:700">Status: ${p.status}</span>`
        }
        ${
          currentUser.role === "Admin"
            ? `<button class="btn-verify" onclick="toggleVerifyContractor(${p.id})">${
                p.verified ? "Unverify" : "Verify ✔"
              }</button>`
            : ""
        }
        ${
          currentUser.role !== "Contractor"
            ? `<button class="btn-delete" onclick="deleteProposal(${p.id})">Delete</button>`
            : ""
        }
      </div>
    `;
    container.appendChild(card);
  });
}

/* ================= 8. SIDE-BY-SIDE COMPARISON TABLE & CSV EXPORT ================= */
function renderComparisonTable(filteredProposals) {
  const headRow = document.getElementById("table-head-row");
  const tbody = document.getElementById("table-body");
  const activeProj = getActiveProject();

  headRow.innerHTML = `<th>Comparison Criteria (Project #${activeProj.id})</th>`;
  tbody.innerHTML = "";

  if (filteredProposals.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">No proposals match the selected filter for this project.</td></tr>`;
    return;
  }

  const minPrice = Math.min(...filteredProposals.map(p => getSimulatedPrice(p.quotedPrice)));
  const minWeeks = Math.min(...filteredProposals.map(p => p.timelineWeeks));

  filteredProposals.forEach(p => {
    const th = document.createElement("th");
    th.innerHTML = `${p.contractorName} ${p.verified ? "✅" : ""}<br><small style="color:var(--accent-highlight)">${p.status}</small>`;
    headRow.appendChild(th);
  });

  const rows = [
    {
      label: "Requirement Match Score",
      render: p => `<strong class="mono-num">🎯 ${calculateMatchScore(p)}% Match</strong>`
    },
    {
      label: "Contractor Profile",
      render: p => p.profileInfo
    },
    {
      label: `Simulated Quote (Target: ${formatINR(activeProj.budget)})`,
      render: p => {
        const sim = getSimulatedPrice(p.quotedPrice);
        const isLowest = sim === minPrice;
        const isOver = sim > activeProj.budget;
        return `<span class="mono-num ${isLowest ? "best-value" : isOver ? "over-value" : ""}">
          ${formatINR(sim)} ${isLowest ? "★ Lowest" : ""}
        </span>`;
      }
    },
    {
      label: "Itemized Cost Split (55% Mat / 30% Lab / 15% MEP)",
      render: p => {
        const sim = getSimulatedPrice(p.quotedPrice);
        const mat = Math.round(sim * 0.55);
        const lab = Math.round(sim * 0.3);
        const mep = sim - mat - lab;
        return `<span class="mono-num" style="font-size:0.78rem">🧱 ${formatINR(mat)} • 👷 ${formatINR(lab)} • ⚡ ${formatINR(mep)}</span>`;
      }
    },
    {
      label: "Counter-Offer Status",
      render: p =>
        p.counterOffer
          ? `<span class="mono-num" style="color:var(--blue-badge-text);font-weight:700">💬 ${formatINR(p.counterOffer.price)} (${p.counterOffer.weeks} Wks)</span>`
          : `<span style="color:var(--muted);font-size:0.8rem">No counter-offer sent</span>`
    },
    {
      label: "Booking Advance (20% Milestone)",
      render: p => `<strong class="mono-num">${formatINR(Math.round(getSimulatedPrice(p.quotedPrice) * 0.2))}</strong>`
    },
    {
      label: `Timeline (Target: ${activeProj.timelineWeeks} Wks)`,
      render: p =>
        `<span class="mono-num ${p.timelineWeeks === minWeeks ? "best-value" : ""}">${p.timelineWeeks} Weeks ${
          p.timelineWeeks === minWeeks ? "★ Fastest" : ""
        }</span>`
    },
    {
      label: "Material Specifications",
      render: p => p.materials
    },
    {
      label: "Warranty",
      render: p => p.warranty
    },
    {
      label: "On-Platform Communication",
      render: p =>
        p.status === "Selected" || (proposalChats[p.id] && proposalChats[p.id].length > 0)
          ? `<button class="btn-verify" onclick="openChatModal(${p.id})">💬 Open Chat (${
              (proposalChats[p.id] || []).length
            })</button>`
          : `<span style="color:var(--muted);font-size:0.8rem;font-weight:600">Select or send counter-offer to chat</span>`
    },
    ...activeProj.requiredScope.map(scopeItem => ({
      label: `Required Scope: ${scopeItem}`,
      render: p =>
        p.scope.includes(scopeItem)
          ? `<span style="color:var(--green-badge-text);font-weight:700">✔ Included</span>`
          : `<span style="color:var(--red-badge-text);font-weight:700">✘ Excluded</span>`
    }))
  ];

  rows.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML =
      `<td><strong>${row.label}</strong></td>` +
      filteredProposals.map(p => `<td>${row.render(p)}</td>`).join("");
    tbody.appendChild(tr);
  });
}

function exportComparisonCSV() {
  const activeProj = getActiveProject();
  const projectProposals = proposals.filter(p => Number(p.projectId) === Number(activeProjectId));
  if (!projectProposals.length) return;

  const headers = [
    "Contractor",
    "Status",
    "Match Score (%)",
    "Base Quote (INR)",
    "Simulated Total (INR)",
    "Materials 55% (INR)",
    "Labor 30% (INR)",
    "MEP 15% (INR)",
    "Timeline (Weeks)",
    "Warranty",
    "Materials"
  ];
  const csvRows = [
    headers.join(","),
    ...projectProposals.map(p => {
      const sim = getSimulatedPrice(p.quotedPrice);
      const mat = Math.round(sim * 0.55);
      const lab = Math.round(sim * 0.3);
      const mep = sim - mat - lab;
      return [
        `"${p.contractorName}"`,
        `"${p.status}"`,
        calculateMatchScore(p),
        p.quotedPrice,
        sim,
        mat,
        lab,
        mep,
        p.timelineWeeks,
        `"${p.warranty}"`,
        `"${p.materials.replace(/"/g, '""')}"`
      ].join(",");
    })
  ];

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `RenoCompare_v7_Project_${activeProj.id}_Comparison.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ================= 9. TWO-WAY RATING & FEEDBACK LOGIC ================= */
function updateFeedbackPartnerLabel() {
  const role = document.getElementById("fbReviewerRole").value;
  const partnerLabel = document.getElementById("fbPartnerLabel");
  const partnerStarLabel = document.getElementById("partnerStarLabel");
  const targetInput = document.getElementById("fbTargetName");

  if (role === "Consumer") {
    partnerLabel.textContent = "Contractor Being Rated *";
    partnerStarLabel.textContent = "Rate Contractor (Work & Materials):";
    targetInput.placeholder = "e.g., Apex Home Renovations";
  } else {
    partnerLabel.textContent = "Homeowner / Consumer Being Rated *";
    partnerStarLabel.textContent = "Rate Consumer (Clarity & Cooperation):";
    targetInput.placeholder = "e.g., Aarav Sharma (Homeowner)";
  }
}

function submitFeedback(event) {
  event.preventDefault();
  const role = document.getElementById("fbReviewerRole").value;

  const newFb = {
    id: Date.now(),
    reviewerRole: role,
    reviewerName: document.getElementById("fbReviewerName").value.trim(),
    targetName: document.getElementById("fbTargetName").value.trim(),
    partnerStars: Number(document.getElementById("fbPartnerStars").value),
    platformStars: Number(document.getElementById("fbPlatformStars").value),
    comment: document.getElementById("fbComment").value.trim(),
    date: role === "Consumer" ? "Verified Homeowner Review" : "Verified Contractor Review"
  };

  feedbacks.unshift(newFb);
  saveToStorage();
  document.getElementById("fbComment").value = "";
  renderFeedbacks();
  triggerCelebration("Thank you for sharing your rating! Your feedback helps keep RenoCompare transparent and trusted.");
}

function renderFeedbacks() {
  const container = document.getElementById("feedback-list");
  if (!container) return;

  container.innerHTML = feedbacks
    .map(fb => {
      const partnerStarStr = "★".repeat(fb.partnerStars) + "☆".repeat(5 - fb.partnerStars);
      const platformStarStr = "★".repeat(fb.platformStars) + "☆".repeat(5 - fb.platformStars);
      const isContractor = fb.reviewerRole === "Contractor";

      return `
      <div class="feedback-item ${isContractor ? "contractor-review" : ""}">
        <div class="fb-header">
          <strong>${isContractor ? "🔨" : "🏠"} ${fb.reviewerName} <small style="color:var(--muted)">(${fb.date})</small></strong>
          <span class="status-pill ${isContractor ? "status-Shortlisted" : "status-Selected"}">
            Rated: ${fb.targetName}
          </span>
        </div>
        <div class="fb-stars">
          <span>Partner Rating: ${partnerStarStr} (${fb.partnerStars}/5)</span> •
          <span>RenoCompare Rating: ${platformStarStr} (${fb.platformStars}/5)</span>
        </div>
        <p style="font-size:0.88rem;color:var(--text);font-weight:500;margin-top:0.35rem">"${fb.comment}"</p>
      </div>
    `;
    })
    .join("");
}

/* ================= 10. FAQ ACCORDION & CONTACT FORM ================= */
function toggleFaq(element) {
  element.classList.toggle("open");
  const icon = element.querySelector(".faq-icon");
  icon.textContent = element.classList.contains("open") ? "−" : "+";
}

function handleContactSubmit(event) {
  event.preventDefault();
  const banner = document.getElementById("contactSuccessBanner");
  banner.classList.remove("hidden");
  document.getElementById("contactForm").reset();
  setTimeout(() => {
    banner.classList.add("hidden");
  }, 5000);
}

/* ================= 11. ADMIN ANALYTICS & CHAT AUDIT ================= */
function renderAdminStats() {
  if (currentUser.role !== "Admin") return;
  const totalProjects = projects.length;
  const totalProposals = proposals.length;
  const selectedCount = proposals.filter(p => p.status === "Selected").length;
  const totalMessages = Object.values(proposalChats).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  document.getElementById("admin-stats").innerHTML = `
    <div class="admin-stat-card">
      <span class="stat-label" style="color:var(--muted)">Active Projects</span>
      <strong class="mono-num" style="font-size:1.35rem">${totalProjects} Projects</strong>
    </div>
    <div class="admin-stat-card">
      <span class="stat-label" style="color:#0284c7">Total Proposals</span>
      <strong class="mono-num" style="font-size:1.35rem">${totalProposals} Bids</strong>
    </div>
    <div class="admin-stat-card">
      <span class="stat-label" style="color:#15803d">Selected Proposals</span>
      <strong class="mono-num" style="font-size:1.35rem;color:#15803d">${selectedCount}</strong>
    </div>
    <div class="admin-stat-card">
      <span class="stat-label" style="color:var(--primary)">Logged Chat & Counter Msgs</span>
      <strong class="mono-num" style="font-size:1.35rem;color:var(--primary)">${totalMessages} Msgs</strong>
    </div>
  `;

  const chatLogContainer = document.getElementById("admin-chat-log");
  const activeThreads = proposals.filter(
    p => p.status === "Selected" || (proposalChats[p.id] && proposalChats[p.id].length > 0)
  );

  if (activeThreads.length === 0) {
    chatLogContainer.innerHTML = `<p style="color:var(--muted)">No active chat threads yet. Select a proposal or send a counter-offer to start one.</p>`;
    return;
  }

  chatLogContainer.innerHTML = activeThreads
    .map(p => {
      const msgs = proposalChats[p.id] || [];
      const lastMsg = msgs[msgs.length - 1];
      const proj = projects.find(pr => pr.id === p.projectId);
      return `
        <div class="admin-chat-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem">
            <strong>${p.contractorName} (Project #${p.projectId})</strong>
            <span class="status-pill status-${p.status.split(" ")[0]}">${p.status}</span>
          </div>
          <p style="font-size:0.84rem;color:var(--text);margin-bottom:0.65rem">
            <strong>Project:</strong> ${proj ? proj.title : "Renovation"}<br>
            <strong>Total Messages:</strong> ${msgs.length}<br>
            <strong>Latest (${lastMsg ? lastMsg.senderRole : "None"}):</strong> "${
        lastMsg ? lastMsg.text : "No messages yet"
      }"
          </p>
          <button class="btn-primary" style="padding:0.45rem 0.9rem;font-size:0.8rem" onclick="openChatModal(${
            p.id
          })">
            🔍 Inspect Full Chat / Post Admin Note
          </button>
        </div>
      `;
    })
    .join("");
}

function renderAll() {
  renderRequirementsBanner();
  renderAdminStats();
  renderFeedbacks();

  const filter = document.getElementById("statusFilter").value;
  const sortOrder = document.getElementById("sortOrder").value;
  const searchQuery = (document.getElementById("searchFilter")?.value || "").toLowerCase().trim();
  const verifiedOnly = document.getElementById("verifiedOnlyFilter")?.checked || false;

  const projectProposals = proposals.filter(
    p => Number(p.projectId) === Number(activeProjectId)
  );

  renderAIInsights(projectProposals);

  let filtered =
    filter === "All"
      ? [...projectProposals]
      : projectProposals.filter(p => p.status === filter);

  if (verifiedOnly) {
    filtered = filtered.filter(p => p.verified);
  }

  if (searchQuery) {
    filtered = filtered.filter(
      p =>
        p.contractorName.toLowerCase().includes(searchQuery) ||
        p.materials.toLowerCase().includes(searchQuery) ||
        p.warranty.toLowerCase().includes(searchQuery)
    );
  }

  if (sortOrder === "match") {
    filtered.sort((a, b) => calculateMatchScore(b) - calculateMatchScore(a));
  } else if (sortOrder === "priceAsc") {
    filtered.sort((a, b) => a.quotedPrice - b.quotedPrice);
  } else if (sortOrder === "timeAsc") {
    filtered.sort((a, b) => a.timelineWeeks - b.timelineWeeks);
  }

  renderCards(filtered);
  renderComparisonTable(filtered);
}

window.onload = () => {
  initScopeCheckboxes();
  applyRolePermissions();
  renderAll();
};
