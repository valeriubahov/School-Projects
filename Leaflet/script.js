let map = L.map('busMap').setView([44.6488, -63.5752], 14);
let originalPosition = [];
let originalPlane = [];
let geoJson = { "type": "FeatureCollection", "features": [] };
let geoJsonPlane = { "type": "FeatureCollection", "features": [] };
let geoJSONLayer;
let geoJSONFlightsLayer;
let isPlaneRefresh = false;
let isBusRefresh = true;
let planeInterval;


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const busIconSmall = L.icon({
    iconUrl: 'bus.png',
    iconSize: [25, 25],
    popupAnchor: [0, -10]
});

const busIconBig = L.icon({
    iconUrl: 'bus.png',
    iconSize: [45, 45],
    popupAnchor: [0, -10]
});

const planeIconNormal = L.icon({
    iconUrl: 'plane.png',
    iconSize: [30, 30],
    popupAnchor: [0, -10]
});

const planeIconSmall = L.icon({
    iconUrl: 'plane.png',
    iconSize: [15, 15],
    popupAnchor: [0, -10]
});

//Draw the markers for the first time on the map
fetchBus();
//Update the positions every 7 sec
let busInterval = setInterval(update_position, 7000);

// Draw the markers on the map for the first time
function fetchBus() {
    fetch('http://hrmbusapi.herokuapp.com/').then(json => json.json())
        .then(json => {
            // Filter all Buses from 1 to 10 (include the buses that have letters too)
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
            // Create an Object that will be used to generate the GeoJSON
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
            //Transform the previously fetched JSON into GeoJSON
            geoJSONLayer = L.geoJSON(getData(), {
                onEachFeature: onEachFeature,
                pointToLayer: function (feature, latlng) {
                    // Check the Map Zoom level and decide what icon size to draw
                    let currentZoom = map.getZoom();
                    if (currentZoom > 15) {
                        return L.marker(latlng, { icon: busIconBig, rotationAngle: feature.properties.bearing }).addTo(map);
                    }
                    else {
                        if (currentZoom <= 10) {
                            geoJSONLayer.clearLayers();
                        }
                        else {
                            return L.marker(latlng, { icon: busIconSmall, rotationAngle: feature.properties.bearing }).addTo(map);
                        }
                    }
                }
            }).addTo(map);
        });
}


// Update the marker position on map without reloading the page
function update_position() {
    fetch('http://hrmbusapi.herokuapp.com/').then(json => json.json())
        .then(json => {
            // Filter all Buses from 1 to 10 (include the buses that have letters too)
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



function fetchPlanes() {
    fetch('https://opensky-network.org/api/states/all').then(json => json.json())
        .then(json => {
            const rawData = json.states.filter(x => x[2] === 'Canada');
            console.dir(rawData);

            originalPlane = rawData.map(x => {
                const newObj = {};
                newObj.latLng = [x[5], x[6]];
                newObj.routeId = x[1];
                newObj.id = x[0];
                newObj.bearing = x[10];
                return (newObj);
            });
        })
        .then(x => {
            //Transform the previously fetched JSON into GeoJSON
            geoJSONFlightsLayer = L.geoJSON(getPlaneData(), {
                onEachFeature: onEachPlane,
                pointToLayer: function (feature, latlng) {
                    // Check the Map Zoom level and decide what icon size to draw
                    let currentZoom = map.getZoom();
                    if (currentZoom > 11) {
                        geoJSONFlightsLayer.clearLayers();
                    }
                    else {
                        if (currentZoom > 5) {
                            return L.marker(latlng, { icon: planeIconNormal, rotationAngle: feature.properties.bearing }).addTo(map);
                        }
                        else {
                            return L.marker(latlng, { icon: planeIconSmall, rotationAngle: feature.properties.bearing }).addTo(map);

                        }
                    }
                }
            }).addTo(map);
        });
}

function updatePlanePosition() {
    fetch('https://opensky-network.org/api/states/all').then(json => json.json())
        .then(json => {
            const rawData = json.states.filter(x => x[2] === 'Canada');
            originalPlane = rawData.map(x => {
                const newObj = {};
                newObj.latLng = [x[5], x[6]];
                newObj.routeId = x[1];
                newObj.id = x[0];
                newObj.bearing = x[10];
                return (newObj);
            });
        });
    geoJsonPlane = getPlaneData();
    geoJSONFlightsLayer.clearLayers();
    geoJSONFlightsLayer.addData(geoJsonPlane);
}

// ADD the popup for every icon with bus number and occupancy status
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.routeId) {
        layer.bindPopup("<b>Bus Number: " + feature.properties.routeId + " </br>Occupancy Status: " + ((feature.properties.occupancy !== undefined) ? feature.properties.occupancy.replaceAll("_", " ") : 'Unknown') + "</b>");
    }
}

function onEachPlane(feature, layer) {
    if (feature.properties && feature.properties.routeId) {
        layer.bindPopup("<b>Plane Number: " + feature.properties.routeId + "</b>");
    }
}

// Transform the original JSON in GeoJSON
function getData() {
    geoJson.features = [];
    originalPosition.map(x => {
        let coordinate = x.latLng;
        let properties = x;
        let feature = { "type": "Feature", "geometry": { "type": "Point", "coordinates": coordinate }, "properties": properties };
        geoJson.features.push(feature);
    });
    console.dir("Bus GeoJSON");
    console.dir(geoJson);
    return geoJson;
}

function getPlaneData() {
    geoJsonPlane.features = [];
    originalPlane.map(x => {
        let coordinate = x.latLng;
        let properties = x;
        let feature = { "type": "Feature", "geometry": { "type": "Point", "coordinates": coordinate }, "properties": properties };
        geoJsonPlane.features.push(feature);
    });
    console.dir("Plane GeoJSON");
    console.dir(geoJsonPlane);
    return geoJsonPlane;
}

// On map zoom I want to change the Icon size, zoom out = smaller icon, zoom in bigger icons
map.on('zoomend', function () {
    let currentZoom = map.getZoom();
    if (currentZoom > 15) {
        geoJSONLayer.eachLayer(function (layer) {
            return layer.setIcon(busIconBig);
        });
    } else {
        if (currentZoom <= 11) {
            if (!isPlaneRefresh) {
                geoJSONLayer.clearLayers();
                clearInterval(busInterval);
                fetchPlanes();
                planeInterval = setInterval(updatePlanePosition, 7000);
                isPlaneRefresh = true;
                isBusRefresh = false;

            }
            if (geoJSONFlightsLayer !== undefined) {
                if (currentZoom <= 5) {
                    geoJSONFlightsLayer.eachLayer(function (layer) {
                        return layer.setIcon(planeIconSmall);
                    });
                }
                else {
                    geoJSONFlightsLayer.eachLayer(function (layer) {
                        return layer.setIcon(planeIconNormal);
                    });
                }
            }
        }
        else {
            if (geoJSONFlightsLayer !== undefined) {
                if (!isBusRefresh) {
                    geoJSONFlightsLayer.clearLayers();
                    clearInterval(planeInterval);
                    fetchBus();
                    busInterval = setInterval(update_position, 7000);
                    isBusRefresh = true;
                    isPlaneRefresh = false;
                }
            }
            geoJSONLayer.eachLayer(function (layer) {
                return layer.setIcon(busIconSmall);
            });
        }
    }
});