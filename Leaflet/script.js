

let map = L.map('map').setView([44.6488, -63.5752], 14);
let originalPosition = [];

let geoJson = { "type": "FeatureCollection", "features": [] }

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let busIconSmall = L.icon({
    iconUrl: 'bus.png',
    iconSize: [25, 25],
    popupAnchor: [0, -10]
});

let busIconBig = L.icon({
    iconUrl: 'bus.png',
    iconSize: [45, 45],
    popupAnchor: [0, -10]
});


//On map zoom I want to change the Icon size, zoom out = smaller icon, zoom in bigger icons
map.on('zoomend', function () {
    let currentZoom = map.getZoom();
    if (currentZoom > 15) {
        geoJSONLayer.eachLayer(function (layer) {
            return layer.setIcon(busIconBig);
        });
    } else {
        geoJSONLayer.eachLayer(function (layer) {
            return layer.setIcon(busIconSmall);
        });
    }
});


//Draw the markers for the first time ont he map
fetchBus();

//Update the positions every 7 sec - 
setInterval(update_position, 9000);

function fetchBus() {
    fetch('http://hrmbusapi.herokuapp.com/').then(json => json.json())
        .then(json => {
            const rawData = json.entity.filter(x => x.vehicle.trip.routeId <= 10
                || (x.vehicle.trip.routeId == '6A'
                    || x.vehicle.trip.routeId == '6B'
                    || x.vehicle.trip.routeId == '6C'
                    || x.vehicle.trip.routeId == '7A'
                    || x.vehicle.trip.routeId == '7B'
                    || x.vehicle.trip.routeId == '9A'
                    || x.vehicle.trip.routeId == '9B')
            );
            console.log("REQ-1: Demonstrate Retrieval of the Required Raw Transit Data");
            console.dir(rawData);
            originalPosition = rawData.map(x => {
                const newObj = {};
                newObj.latLng = [x.vehicle.position.longitude, x.vehicle.position.latitude];
                newObj.routeId = x.vehicle.trip.routeId;
                newObj.id = x.vehicle.vehicle.id;
                newObj.bearing = x.vehicle.position.bearing;
                newObj.occupancy = x.vehicle.occupancyStatus;
                return (newObj);
            });
        })
        .then(x => {
            geoJSONLayer = L.geoJSON(getData(), {
                onEachFeature: onEachFeature,
                pointToLayer: function (feature, latlng) {
                    let currentZoom = map.getZoom();
                    if (currentZoom > 15) {
                        return L.marker(latlng, { icon: busIconBig, rotationAngle: feature.properties.bearing }).addTo(map);
                    }
                    else {
                        return L.marker(latlng, { icon: busIconSmall, rotationAngle: feature.properties.bearing }).addTo(map);
                    }
                }
            }).addTo(map);
        });
}


function update_position() {
    fetch('http://hrmbusapi.herokuapp.com/').then(json => json.json())
        .then(json => {
            originalPosition = json.entity.filter(x => x.vehicle.trip.routeId <= 10
                || (x.vehicle.trip.routeId == '6A'
                    || x.vehicle.trip.routeId == '6B'
                    || x.vehicle.trip.routeId == '6C'
                    || x.vehicle.trip.routeId == '7A'
                    || x.vehicle.trip.routeId == '7B'
                    || x.vehicle.trip.routeId == '9A'
                    || x.vehicle.trip.routeId == '9B')).map(x => {
                        const newObj = {};
                        newObj.latLng = [x.vehicle.position.longitude, x.vehicle.position.latitude];
                        newObj.routeId = x.vehicle.trip.routeId;
                        newObj.id = x.vehicle.vehicle.id;
                        newObj.bearing = x.vehicle.position.bearing;
                        newObj.occupancy = x.vehicle.occupancyStatus;
                        return (newObj);
                    });
            geoJson = getData();
            geoJSONLayer.clearLayers();
            geoJSONLayer.addData(geoJson);
        });
}

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.routeId) {
        layer.bindPopup("<b>Bus Number: " + feature.properties.routeId + " </br>Occupancy Status: " + ((feature.properties.occupancy !== undefined) ? feature.properties.occupancy.replaceAll("_", " ") : 'Unknown') + "</b>");
    }
}

function getData() {
    geoJson.features = [];

    originalPosition.map(x => {
        let coordinate = x.latLng;
        let properties = x;
        let feature = { "type": "Feature", "geometry": { "type": "Point", "coordinates": coordinate }, "properties": properties }
        geoJson.features.push(feature);
    })

    console.dir("REQ-2: Convert Raw Data into GeoJSON format");
    console.dir(geoJson);
    return geoJson;
}