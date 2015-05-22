var L = require('leaflet');
var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              13.422363996505737,
              52.50084916515129
            ],
            [
              13.42227280139923,
              52.50087528984518
            ],
            [
              13.422347903251648,
              52.50097162451984
            ],
            [
              13.422511518001556,
              52.50092427360445
            ],
            [
              13.4223935008049,
              52.50076752538272
            ],
            [
              13.42231571674347,
              52.500788751737126
            ],
            [
              13.422363996505737,
              52.50084916515129
            ]
          ]
        ]
      }
    }
  ]
};

var myStyle = {
    fillColor: '#fff', //'#FFE50A',
    fillOpacity: 0.25,
    color:'#fff', //'#bda800',
    weight: 1,
    opacity: 0.85,
    stroke: true,
    radius: 7
};

var center = [52.5008, 13.422294];

function init(){
   var map = new L.Map('map', {
      center: center,
      zoom: 18,
      minZoom: 13,
      zoomControl: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      dragging : false,
      tap: false
    });
      
    // http://{s}.tiles.mapbox.com/v3/moklick.icjhce78/{z}/{x}/{y}.png
    // /*'http://luftbilder.lyrk.org/berlin256/{z}/{x}/{y}?apikey=36659c4bb4a341d1a24eaeebcd223a3e'*/
    new L.TileLayer('http://{s}.tiles.mapbox.com/v3/moklick.icjhce78/{z}/{x}/{y}.png', {
      //attribution: '<a href="http://lokaler.de">Lokaler</a> - <a href="http://www.stadtentwicklung.berlin.de/geoinformation/geodateninfrastruktur/de/geodienste/wms_titel.shtml" target="_blank">Geoportal Berlin</a> | Kartenserver: <a href="http://https://geodienste.lyrk.de/" target="_blank">Lyrk</a>'
      attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    }).addTo(map);

    var myIcon = L.divIcon({className: 'map-label', html : 'You can find us here.', iconSize: [150]});

    L.marker([52.50095, 13.42257], {icon: myIcon }).addTo(map);
    //L.circleMarker([52.50087, 13.4224], myStyle).addTo(map)

    L.geoJson(geojson, {
      style: myStyle
    }).addTo(map);
}


module.exports = {
  init : init
}