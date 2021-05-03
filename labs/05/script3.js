// JavaScript source code
$(document).ready(loadMap)

function loadMap() {
	var map = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoiYnJlbmRhbmxhd3JlbmNlIiwiYSI6ImNrNzBtM2oybjFsMG8zbnJ4dTk2NjdqOXUifQ.OnA0gDjekF7CeajfugelFA'
	}).addTo(map);

	var greenIcon = L.icon({
		iconUrl: 'leaf-green.png',
		shadowUrl: 'leaf-shadow.png',

		iconSize: [38, 95], // size of the icon
		shadowSize: [50, 64], // size of the shadow
		iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

	L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);

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

	L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map).bindPopup("I am a green leaf.");
	L.marker([51.495, -0.083], { icon: redIcon }).addTo(map).bindPopup("I am a red leaf.");
}