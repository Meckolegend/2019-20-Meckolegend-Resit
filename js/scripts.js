const webShortcut = document.getElementById("Logo");
const colorchange = document.getElementById("color-change");
const colorchange2= document.getElementById("color-change2");

function shortcut() {
  alert("You have found a shortcut. You may now go to the home page");
}
webShortcut.addEventListener("click", shortcut);

function pink(){
  console.log("The body of the webpage is now the colour of Leicester's Away Kit")
  document.body.style.backgroundColor="pink"
}
colorchange.addEventListener("click",pink);
function blue(){
  console.log("The body of the webpage is now the colour of Leicester's Home Kit")
  document.body.style.backgroundColor="teal"
}
colorchange2.addEventListener("click",blue);

var map = L.map('map').setView([0, 0], 1);
      L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=KWjtmivf2lKbLnZB4srb',{
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
        crossOrigin: true
      }).addTo(map);
