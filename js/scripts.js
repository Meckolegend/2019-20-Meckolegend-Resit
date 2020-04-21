const webShortcut = document.getElementById("Logo");
const map = L.map('map').setView([52.6204, -1.1422], 1);

function shortcut()
{
  alert("You have found a shortcut. You may now go to the home page");
}
webShortcut.addEventListener("click", shortcut);


L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=KWjtmivf2lKbLnZB4srb',
{
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 17,
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  crossOrigin: true
}).addTo(map);
