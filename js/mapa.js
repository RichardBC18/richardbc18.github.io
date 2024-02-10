var map = L.map('map').setView([-12.191811689910212, -76.92430877310264], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-12.191811689910212, -76.92430877310264]).addTo(map)
    .bindPopup('ABIERTO 🟢')
    .openPopup();