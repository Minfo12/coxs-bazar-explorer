let map;
let markers = [];

const searchInput = document.getElementById("search");
const upazilaSelect = document.getElementById("upazila");
const categorySelect = document.getElementById("category");
const typeSelect = document.getElementById("type");
const cards = document.getElementById("cards");
const spotCount = document.getElementById("spotCount");

function init() {
  populateFilters();
  renderDestinations(destinations);
  initMap();

  if (spotCount) {
    spotCount.textContent = destinations.length + "+";
  }

  searchInput.addEventListener("input", applyFilters);
  upazilaSelect.addEventListener("change", applyFilters);
  categorySelect.addEventListener("change", applyFilters);
  typeSelect.addEventListener("change", applyFilters);
}

function populateFilters() {
  const uniqueUpazilas = [...new Set(destinations.map(d => d.upazila))].sort();
  const categories = [...new Set(destinations.map(d => d.category))].sort();

  uniqueUpazilas.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    upazilaSelect.appendChild(option);
  });

  categories.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    categorySelect.appendChild(option);
  });
}

function applyFilters() {
  const search = searchInput.value.toLowerCase().trim();
  const upazila = upazilaSelect.value;
  const category = categorySelect.value;
  const type = typeSelect.value;

  const filtered = destinations.filter(place => {
    const text = (
      place.name +
      " " +
      place.bn +
      " " +
      place.description +
      " " +
      place.location
    ).toLowerCase();

    const matchesSearch = !search || text.includes(search);
    const matchesUpazila = !upazila || place.upazila === upazila;
    const matchesCategory = !category || place.category === category;
    const matchesType = !type || place.type === type;

    return (
      matchesSearch &&
      matchesUpazila &&
      matchesCategory &&
      matchesType
    );
  });

  renderDestinations(filtered);
  updateMap(filtered);
}

function renderDestinations(list) {
  if (!list.length) {
    cards.innerHTML = `
      <div class="card" style="grid-column:1/-1;text-align:center">
        <h3>কোনো জায়গা পাওয়া যায়নি</h3>
        <p>Search বা filter পরিবর্তন করে আবার চেষ্টা করুন।</p>
      </div>
    `;
    return;
  }

  cards.innerHTML = list.map(place => {
    let tagText = "Popular";
    let tagClass = "";

    if (place.type === "hidden") {
      tagText = "Hidden Gem";
      tagClass = "hidden";
    }

    if (place.type === "candidate") {
      tagText = "Needs Verification";
      tagClass = "candidate";
    }

    return `
      <article class="card" onclick="openModal(${place.id})">
        <span class="tag ${tagClass}">${tagText}</span>

        <h3>${place.bn}</h3>

        <p>${place.description}</p>

        <div class="meta">
          <span>📍 ${place.upazila}</span>
          <span>🏷️ ${place.category}</span>
        </div>
      </article>
    `;
  }).join("");
}

function initMap() {
  map = L.map("mapBox").setView([21.4272, 91.9770], 9);

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; OpenStreetMap contributors'
    }
  ).addTo(map);

  updateMap(destinations);
}

function updateMap(list) {
  if (!map) return;

  markers.forEach(marker => map.removeLayer(marker));
  markers = [];

  list.forEach(place => {
    const marker = L.marker([
      place.lat,
      place.lng
    ]).addTo(map);

    marker.bindPopup(`
      <strong>${place.bn}</strong><br>
      ${place.category}<br>
      <button class="popup-btn" onclick="openModal(${place.id})">
        বিস্তারিত দেখুন
      </button>
    `);

    markers.push(marker);
  });

  if (list.length === 1) {
    map.setView([list[0].lat, list[0].lng], 13);
  } else if (list.length > 1) {
    const bounds = L.latLngBounds(
      list.map(place => [place.lat, place.lng])
    );

    map.fitBounds(bounds, {
      padding: [30, 30]
    });
  }
}

function openModal(id) {
  const place = destinations.find(item => item.id === id);

  if (!place) return;

  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  let status = "⭐ Popular";

  if (place.type === "hidden") {
    status = "💎 Hidden Gem";
  }

  if (place.type === "candidate") {
    status = "⚠️ Needs Verification";
  }

  const mapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;

  content.innerHTML = `
    <span class="tag ${
      place.type === "hidden"
        ? "hidden"
        : place.type === "candidate"
        ? "candidate"
        : ""
    }">
      ${status}
    </span>

    <h2>${place.bn}</h2>

    <p>${place.description}</p>

    <div class="detail-grid">

      <div class="detail">
        <small>উপজেলা</small>
        <strong>${place.upazila}</strong>
      </div>

      <div class="detail">
        <small>Category</small>
        <strong>${place.category}</strong>
      </div>

      <div class="detail">
        <small>Best Time</small>
        <strong>${place.best}</strong>
      </div>

      <div class="detail">
        <small>Location</small>
        <strong>${place.location}</strong>
      </div>

    </div>

    <div class="notice" style="
      margin-top:18px;
      background:#f5f7f4;
      color:#39483f;
      border:1px solid #dce5df;
    ">
      ⚠️ ${place.safety}
    </div>

    <a
      href="${mapsUrl}"
      target="_blank"
      rel="noopener"
      class="btn primary"
      style="
        display:inline-block;
        margin-top:20px;
      "
    >
      📍 Google Maps
    </a>
  `;

  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

document.getElementById("modal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

init();
