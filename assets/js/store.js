const searchInput = document.getElementById("storeSearch");
const cards = document.querySelectorAll(".store-card");

searchInput.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(keyword) ? "block" : "none";
  });
});

/* Active card click */
cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// STORE LIST
document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("storeSearch");
  const storeList = document.getElementById("storeList");

  const stores = [
    {
      name: "GAGA AEON Mall Sentul City",
      address: "Jl. MH. Thamrin No.45a, Kab. Bogor",
      lat: -6.56673,
      lng: 106.85787,
      hours: {
        open: "10:00",
        close: "22:00"
      }
    },
    {
      name: "GAGA Botani Square Mall",
      address: "Jl. Pajajaran, Tugu Kujang, Kota Bogor",
      lat: -6.60158,
      lng: 106.80743,
      hours: {
        open: "10:00",
        close: "22:00"
      }
    },
    {
      name: "GAGA Lippo Mall Kemang",
      address: "Jl. Pangeran Antasari, Mampang, Jakarta Selatan",
      lat: -6.26130,
      lng: 106.81245,
      hours: {
        open: "10:00",
        close: "22:00"
      }
    },
    {
      name: "GAGA Lippo Mall Nusantara",
      address: "Jl. Jend. Sudirman No.106, Jakarta",
      lat: -6.21940,
      lng: 106.81510,
      hours: {
        open: "10:00",
        close: "22:00"
      }
    },
    {
      name: "GAGA Pacific Place",
      address: "Jl. Jend. Sudirman kav 52-53, Jakarta",
      lat: -6.22371,
      lng: 106.80990,
      hours: {
        open: "10:00",
        close: "22:00"
      }
    },
    {
      name: "GAGA Mall Kelapa Gading",
      address: "Jl. Boulevard Raya, Klp. Gading, Jakarta",
      lat: -6.15668,
      lng: 106.90939,
      hours: {
        open: "10:00",
        close: "22:00"
      }
    },
    {
      name: "GAGA Beachwalk Bali",
      address: "Jl. Pantai Kuta, Kec. Kuta Sel., Bali",
      lat: -8.71632,
      lng: 115.16990,
      hours: {
        open: "10:00",
        close: "22:00"
      }
    }
  ];

  let map;
  let markers = [];

  window.initMap = function () {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -6.291405, lng: 106.805502 },
      zoom: 11,
      styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }]
    });

    renderStores();
  };

  function renderStores() {
    const storeList = document.getElementById("storeList");
    storeList.innerHTML = "";

    stores.forEach((store, index) => {
      const status = getStoreStatus(store.hours);
      const statusClass = status === "Open" ? "open" : "closed";

      const card = document.createElement("div");
      card.className = "store-card";
      card.innerHTML = `
        <h6>${store.name}</h6>
        <p>${store.address}</p>


        <div class="store-actions">
          <span class="store-status ${statusClass}">
          ${status === "Open" ? "Open" : "Closed"}
        </span>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}"
            target="_blank"
            class="route-btn"
          >
            <i class="bi bi-sign-turn-right"></i> Rute
          </a>
        </div>
      `;

      card.addEventListener("click", () => focusStore(index));
      storeList.appendChild(card);

      const marker = new google.maps.Marker({
        position: { lat: store.lat, lng: store.lng },
        map,
        title: store.name
      });

      marker.addListener("click", () => focusStore(index));
      markers.push(marker);
    });
  }

  function focusStore(index) {
    const store = stores[index];
    map.panTo({ lat: store.lat, lng: store.lng });
    map.setZoom(15);

    document.querySelectorAll(".store-card").forEach((c, i) => {
      c.classList.toggle("active", i === index);
    });
  }

  function getStoreStatus(hours) {
    const now = new Date();

    const [openH, openM] = hours.open.split(":").map(Number);
    const [closeH, closeM] = hours.close.split(":").map(Number);

    const openTime = new Date();
    openTime.setHours(openH, openM, 0);

    const closeTime = new Date();
    closeTime.setHours(closeH, closeM, 0);

    if (now >= openTime && now < closeTime) {
      return "Open";
    } else {
      return "Closed";
    }
  }


  searchInput.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();
    document.querySelectorAll(".store-card").forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(keyword)
        ? "block"
        : "none";
    });
  });

});

// DELIVERY CONTENT
const pickupTab = document.getElementById("pickupTab");
const deliveryTab = document.getElementById("deliveryTab");
const pickupContent = document.getElementById("pickupContent");
const deliveryContent = document.getElementById("deliveryContent");

pickupTab.addEventListener("click", () => {
  pickupTab.classList.add("active");
  deliveryTab.classList.remove("active");

  pickupContent.style.display = "block";
  deliveryContent.style.display = "none";
});

deliveryTab.addEventListener("click", () => {
  deliveryTab.classList.add("active");
  pickupTab.classList.remove("active");

  pickupContent.style.display = "none";
  deliveryContent.style.display = "block";
});