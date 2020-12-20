function initMap() {
    const myLatLng = { lat: 40.198964680048235, lng: 44.52889812443517 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map:map,
        icon: 'http://localhost:63342/work_permit/img/icons/marp_mark.png'
    });
}

initMap();