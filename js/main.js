var mymap = L.map('mapid').setView([-104.99404, 39.75621], 13);

// mapbox tiles
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.satellite',
//     accessToken: 'pk.eyJ1Ijoic3BhdHRlcnNvbjgiLCJhIjoiY2lzZzBnbmlxMDFzNjJzbnZ1cXJ0bDJ5cSJ9.r_0eIQ9LIuNS3LV-GL1AIg'
// }).addTo(mymap);

//openstreetmap tiles
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(mymap);

// // Markers
var marker = L.marker([51.5, -0.09]).addTo(mymap);

var layer = L.marker(latlng, {
    title: feature.properties.gage
});

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

//Pop-up Layer
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); //only on marker objects
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

//Events
var popup = L.popup();

function onMapClick(e) {
    popup   
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}


mymap.on('click', onMapClick);




// tutorial code not used
//function to retrieve the data and place it on the map
// function getData(map){
//     //load the data
//     // $.ajax("data/MegaCities.geojson", {
//     //     dataType: "json",
//     //     success: function(response){
//     //         //create a Leaflet GeoJSON layer and add it to the map
//     //         L.geoJson(response).addTo(map);
//     //     }
//     // });
//     //Example 2.3 line 22...load the data
//     $.ajax("data/MegaCities.geojson", {
//         dataType: "json",
//         success: function(response){
//             //create marker options
//             var geojsonMarkerOptions = {
//                 radius: 8,
//                 fillColor: "#ff7800",
//                 color: "#000",
//                 weight: 1,
//                 opacity: 1,
//                 fillOpacity: 0.8
//             };

//             //create a Leaflet GeoJSON layer and add it to the map
//             L.geoJson(response, {
//                 pointToLayer: function (feature, latlng){
//                     return L.circleMarker(latlng, geojsonMarkerOptions);
//                 }
//             }).addTo(map);
//         }
//     });
// };

// oneachfeature ajax
// function onEachFeature(feature, layer) {
//     var popupContent = "";
//     if (feature.properties) {
//         for (var property in feature.properties) {
//             popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
//         }
//         layer.bindPopup(popupContent);
//     };
// };

// function getData(map) {
//     $.ajax("data/MegaCities.geojson", {
//         dataType : "json",
//         success : function(response) {
//             L.geoJson(response, {
//                 onEachFeature : onEachFeature
//             }).addTo(map);
//         }
//     });
// };


// function getData(map) {
//     // filter Example
//     $.ajax("data/MegaCities.geojson", {
//         dataType : "json",
//         success : function(response) {
//             var geojsonMarkerOptions = {
//                 radius: 8,
//                 fillColor: "#ff7800",
//                 color: "#000",
//                 weight: 1,
//                 opacity: 1,
//                 fillOpacity: 0.8
//             };

//             L.geoJson(response, {
//                 pointToLayer: function (feature, latlng){
//                     return L.circleMarker(latlng, geojsonMarkerOptions);
//                 },
//                 filter : function(feature, layer) {
//                     return feature.properties.Pop_2015 > 20;
//                 }

//             }).addTo(map);
//         }
//     });
// };

// clustergroup example
// function getData(map) {
//     $.ajax("data/MegaCities.geojson", {
//         dataType : "json",
//         success : function(response) {
//             console.log(response)

//             var markers = L.markerClusterGroup();

//             for (var i = 0; i < response.features.length; i++) {
//                 var current_feature = response.features[i];
//                 //add proprties html string to each marker
//                 var properties = "";
//                 for (var property in current_feature.properties) {
//                     properties += "<p>" + property + ": " + current_feature.properties[property] + "</p>";
//                 };
//                 var marker = L.marker(new L.LatLng(current_feature.geometry.coordinates[1], current_feature.geometry.coordinates[0]), {properties : properties});
//                 // add popup
//                 marker.bindPopup(properties);
//                 //add marker to clustergroup
//                 markers.addLayer(marker);
//             }
//             map.addLayer(markers);
//         }
//     });
// };

// function getData(map){
//     //load the data
//     $.ajax("data/Mississippi_River_Stages.geojson", {
//         dataType: "json",
//         success: function(response){
//             //create a Leaflet GeoJSON layer
//             var geoJsonLayer = L.geoJson(response);
//             //create a L.markerClusterGroup layer
//             var markers = L.markerClusterGroup();
//             //add geojson to marker cluster layer
//             markers.addLayer(geoJsonLayer);
//             //add marker cluster layer to map
//             map.addLayer(markers);
//         }
//     });
// };


//jquery items changes to prototype classes
    // create range input element - slider
    // $('#slider').append('<input type="range" class="range-slider">');
    // $('#slider').append('<button class="skip" id="reverse">Back</button>');
    // $('#slider').append('<button class="skip" id="forward">Forward</button>');