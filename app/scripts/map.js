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
              13.422361314296722,
              52.50084916515129
            ],
            [
              13.422323763370514,
              52.50079854851265
            ],
            [
              13.42240422964096,
              52.500777322162946
            ],
            [
              13.422508835792542,
              52.50092427360445
            ],
            [
              13.422347903251648,
              52.50097325730911
            ],
            [
              13.422270119190214,
              52.50087528984518
            ],
            [
              13.422361314296722,
              52.50084916515129
            ]
          ]
        ]
      }
    }
  ]
};

var myStyle = {
    fillColor: '#FFE50A',
    fillOpacity: 0.25,
    color: '#bda800',
    weight: 1,
    opacity: 0.85,
    stroke: true
};


function init(){
   var map = new L.Map('map', {
      center: [52.5008, 13.422294],
      zoom: 18,
      minZoom: 13,
      //zoomControl: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false
    });
      
    // http://{s}.tiles.mapbox.com/v3/moklick.icjhce78/{z}/{x}/{y}.png
    // /*'http://luftbilder.lyrk.org/berlin256/{z}/{x}/{y}?apikey=36659c4bb4a341d1a24eaeebcd223a3e'*/
    new L.TileLayer('http://{s}.tiles.mapbox.com/v3/moklick.icjhce78/{z}/{x}/{y}.png', {
      //attribution: '<a href="http://lokaler.de">Lokaler</a> - <a href="http://www.stadtentwicklung.berlin.de/geoinformation/geodateninfrastruktur/de/geodienste/wms_titel.shtml" target="_blank">Geoportal Berlin</a> | Kartenserver: <a href="http://https://geodienste.lyrk.de/" target="_blank">Lyrk</a>'
      attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    }).addTo(map);

    L.geoJson(geojson, {
      style: myStyle
    }).addTo(map);
}


module.exports = {
  init : init
}