function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {  // this is Google map() method
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -46.134766
    }
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map. "locations" array is defined outside of this func scope.
  // The map() method here is array method, not to be confused with Google Map() method
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  });
}

const locations = [
    {lat: 40.785091, lng: -73.968285},
    {lat: 41.084045, lng: -73.874245},
    {lat: 40.754932, lng: -73.984016},
];

