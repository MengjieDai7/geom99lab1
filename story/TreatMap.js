
 // Adapted Code from Google Simple Map https://developers.google.com/maps/documentation/javascript/examples/map-simple
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 43.695, lng: -79.413 },
    zoom: 10,
  });
}
window.initMap = initMap;
initMap();
