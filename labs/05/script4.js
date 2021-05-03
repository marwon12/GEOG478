// JavaScript source code
$(document).ready(loadMap)

function loadMap() {
	var map = L.map('mapid').fitWorld();

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoiYnJlbmRhbmxhd3JlbmNlIiwiYSI6ImNrNzBtM2oybjFsMG8zbnJ4dTk2NjdqOXUifQ.OnA0gDjekF7CeajfugelFA'
	}).addTo(map);

	map.locate({ setView: true, maxZoom: 16 });

	function onLocationFound(e) {
		var circle = L.circle([30.6099, -96.3404], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 250
		}).addTo(map);

		circle.bindPopup("Kyle Field");

		var LeafIcon = L.Icon.extend({
			options: {
				shadowUrl: 'leaf-shadow.png',
				iconSize: [38, 95],
				shadowSize: [50, 64],
				iconAnchor: [22, 94],
				shadowAnchor: [4, 62],
				popupAnchor: [-3, -76]
			}
		});
		var greenIcon = new LeafIcon({ iconUrl: 'leaf-green.png' }),
			redIcon = new LeafIcon({ iconUrl: 'leaf-red.png' }),
			orangeIcon = new LeafIcon({ iconUrl: 'leaf-orange.png' });

		L.icon = function (options) {
			return new L.Icon(options);
		};

		L.marker([30.6158, -96.3408], { icon: greenIcon }).addTo(map).bindPopup("Academic Building");
		L.marker([30.6177, -96.3366], { icon: redIcon }).addTo(map).bindPopup("O&M Building");

	}


	map.on('locationfound', onLocationFound);

	function onLocationError(e) {
		alert(e.message);
	}

	map.on('locationerror', onLocationError);

	var popup = L.popup();
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);


}