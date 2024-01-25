function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 50.377, lng: -85.327 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        gridSize: 30,
        zoomOnClick: false,
        maxZoom: 10,
    });
  }
  const locations = [{ lat: 43.656, lng: -79.453},
    { lat: 43.673, lng: -79.402},
    { lat: 43.717, lng: -79.423},
    { lat: 43.761, lng: -79.328},
    { lat: 43.783, lng: -79.128},
    { lat: 43.694, lng: -79.308},
    { lat: 43.679, lng: -79.456},
    { lat: 43.653, lng: -79.424},
    { lat: 43.719, lng: -79.432},
    { lat: 43.765, lng: -79.414},
    { lat: 43.774, lng: -79.291},
    { lat: 43.73, lng: -79.311},
    { lat: 43.772, lng: -79.436}]
    