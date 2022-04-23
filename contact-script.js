function initMap() {
  const icmc = { lat: -22.006915320101147, lng: -47.89500740513976 };
  const map = new google.maps.Map(document.getElementById("map"), {
    scaleControl: true,
    center: icmc,
    zoom: 15,
  });
  const infowindow = new google.maps.InfoWindow();

  const marker = new google.maps.Marker({ map, position: icmc });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;
