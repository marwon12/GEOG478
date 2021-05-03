// JavaScript source code
// JavaScript source code
$(document).ready(loadMap)

function loadMap() {
    map = L.map('mapid').setView([30.6099, -96.3404],14);
    var geojson;
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYnJlbmRhbmxhd3JlbmNlIiwiYSI6ImNrNzBtM2oybjFsMG8zbnJ4dTk2NjdqOXUifQ.OnA0gDjekF7CeajfugelFA'
    }).addTo(map);

    var myStyle = {
        "color": "#800000",
    };

    //info
    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };
    info.update = function (tamu) {
        this._div.innerHTML = '<h4>Tamu Building Name</h4>' + (tamu ?
            '<b>' + tamu.BldgName + '</b><br />' + tamu.BldgAbbr
            : 'Hover over a state');
    };

    info.addTo(map);

    //hovering stuff
    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }  

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }

    geojson = L.geoJson(tamu, {
        style: myStyle,
        onEachFeature: onEachFeature
    }).addTo(map);


}