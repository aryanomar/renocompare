const ALL_SCOPE_ITEMS = [
  "Demolition & Debris Removal",
  "Modular Cabinetry",
  "Countertop Installation",
  "Flooring & Tiling",
  "Electrical & Plumbing",
  "Painting & Finishing"
];

let proposals = [
  {
    id: 1,
    contractorName: "Apex Home Renovations",
    profileInfo: "12 Yrs Exp • 4.9 ★ (Licensed)",
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
    status: "Shortlisted"
  },
  {
    id: 2,
    contractorName: "BudgetBuild Contractors",
    profileInfo: "5 Yrs Exp • 4.2 ★ (Standard)",
    quotedPrice: 520000,
    timelineWeeks: 7,
    materials: "Local SS Hinges, Granite Slab, Commercial Ceramic Tiles, Tractor Emulsion",
    warranty: "1 Year Workmanship Warranty",
    scope: [
      "Demolition & Debris Removal",
      "Modular Cabinetry",
      "Countertop Installation",
      "Flooring & Tiling"
    ],
    status: "Under Review"
  },
  {
    id: 3,
    contractorName: "CraftLine Studio & Interiors",
    profileInfo: "9 Yrs Exp • 4.8 ★ (ISO Certified)",
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
    status: "Selected"
  }
];

function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function updateStatus(id, newStatus) {
  proposals = proposals.map(p => (p.id === id ? { ...p, status: newStatus } : p));
  renderAll();
}

function deleteProposal(id) {
  proposals = proposals.filter(p => p.id !== id);
  renderAll();
}

function addProposal(event) {
  event.preventDefault();
  const checkedScope = Array.from(
    document.querySelectorAll(".checkbox-group input:checked")
  ).map(cb => cb.value);

  const newProposal = {
    id: Date.now(),
    contractorName: document.getElementById("contractorName").value.trim(),
    profileInfo: document.getElementById("profileInfo").value.trim(),
    quotedPrice: Number(document.getElementById("quotedPrice").value),
    timelineWeeks: Number(document.getElementById("timelineWeeks").value),
    materials: document.getElementById("materials").value.trim(),
    warranty: document.getElementById("warranty").value.trim(),
    scope: checkedScope,
    status: "Under Review"
  };

  proposals.push(newProposal);
  document.getElementById("proposalForm").reset();
  renderAll();
}

function renderCards(filteredProposals) {
  const container = document.getElementById("proposal-cards");
  container.innerHTML = "";

  filteredProposals.forEach(p => {
    const statusClass = "status-" + p.status.split(" ")[0];
    const card = document.createElement("div");
    card.className = `proposal-card ${p.status === "Selected" ? "selected-card" : ""}`;

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div>
            <h3>${p.contractorName}</h3>
            <small style="color:#64748b">${p.profileInfo}</small>
          </div>
          <span class="status-pill ${statusClass}">${p.status}</span>
        </div>
        <div class="price-tag">${formatINR(p.quotedPrice)}</div>
        <ul class="detail-list">
          <li><strong>Timeline:</strong> ${p.timelineWeeks} Weeks</li>
          <li><strong>Materials:</strong> ${p.materials}</li>
          <li><strong>Warranty:</strong> ${p.warranty}</li>
          <li><strong>Scope Coverage:</strong> ${p.scope.length} / ${ALL_SCOPE_ITEMS.length} items</li>
        </ul>
        <div class="scope-tags">
          ${p.scope.map(item => `<span class="scope-tag">✔ ${item}</span>`).join("")}
        </div>
      </div>
      <div class="card-actions">
        <select onchange="updateStatus(${p.id}, this.value)">
          <option value="Under Review" ${p.status === "Under Review" ? "selected" : ""}>Under Review</option>
          <option value="Shortlisted" ${p.status === "Shortlisted" ? "selected" : ""}>Shortlisted</option>
          <option value="Selected" ${p.status === "Selected" ? "selected" : ""}>Selected</option>
          <option value="Rejected" ${p.status === "Rejected" ? "selected" : ""}>Rejected</option>
        </select>
        <button class="btn-delete" onclick="deleteProposal(${p.id})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderComparisonTable(filteredProposals) {
  const headRow = document.getElementById("table-head-row");
  const tbody = document.getElementById("table-body");

  headRow.innerHTML = "<th>Comparison Criteria</th>";
  tbody.innerHTML = "";

  if (filteredProposals.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">No proposals match the selected filter.</td></tr>`;
    return;
  }

  const minPrice = Math.min(...filteredProposals.map(p => p.quotedPrice));
  const minWeeks = Math.min(...filteredProposals.map(p => p.timelineWeeks));

  filteredProposals.forEach(p => {
    const th = document.createElement("th");
    th.innerHTML = `${p.contractorName}<br><small style="font-weight:400;color:#64748b">${p.status}</small>`;
    headRow.appendChild(th);
  });

  const rows = [
    {
      label: "Contractor Profile",
      render: p => p.profileInfo
    },
    {
      label: "Quoted Work Price",
      render: p =>
        `<span class="${p.quotedPrice === minPrice ? "best-value" : ""}">${formatINR(p.quotedPrice)} ${
          p.quotedPrice === minPrice ? " (Lowest Bid)" : ""
        }</span>`
    },
    {
      label: "Estimated Timeline",
      render: p =>
        `<span class="${p.timelineWeeks === minWeeks ? "best-value" : ""}">${p.timelineWeeks} Weeks ${
          p.timelineWeeks === minWeeks ? " (Fastest)" : ""
        }</span>`
    },
    {
      label: "Material Details",
      render: p => p.materials
    },
    {
      label: "Warranty",
      render: p => p.warranty
    },
    ...ALL_SCOPE_ITEMS.map(scopeItem => ({
      label: `Scope: ${scopeItem}`,
      render: p =>
        p.scope.includes(scopeItem)
          ? `<span style="color:#16a34a;font-weight:700">✔ Included</span>`
          : `<span style="color:#dc2626;font-weight:700">✘ Excluded</span>`
    }))
  ];

  rows.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td><strong>${row.label}</strong></td>` +
      filteredProposals.map(p => `<td>${row.render(p)}</td>`).join("");
    tbody.appendChild(tr);
  });
}

function renderAll() {
  const filter = document.getElementById("statusFilter").value;
  const filtered =
    filter === "All" ? proposals : proposals.filter(p => p.status === filter);
  renderCards(filtered);
  renderComparisonTable(filtered);
}

window.onload = renderAll;