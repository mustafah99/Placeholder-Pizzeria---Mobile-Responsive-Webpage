function initMap() {
    // The location of the restaurant in Helsingborg
    const helsingborg = {lat: 56.049210, lng: 12.689240};
    
    // Centering the map on the location.
    let map = new google.maps.Map(
        document.getElementById('googleMaps'), {zoom: 15, center: helsingborg});

    // Setting a marker centered on the location we centered our map on.
    const mapMarker = new google.maps.Marker({position: helsingborg, map: map});
}