// JavaScript source code
// JavaScript source code
$(document).ready(loadMap)

function loadMap() {
	map = L.map('mapid').setView([39.74739, -106], 4);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoiYnJlbmRhbmxhd3JlbmNlIiwiYSI6ImNrNzBtM2oybjFsMG8zbnJ4dTk2NjdqOXUifQ.OnA0gDjekF7CeajfugelFA'
	}).addTo(map);

	var geojsonFeature = {
		"type": "Feature",
		"properties": {
			"name": "Coors Field",
			"amenity": "Baseball Stadium",
			"popupContent": "This is where the Rockies play!"
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-104.99404, 39.75621]
		}
	};

	//Point
	var myPoint = {
		"type": "Feature",
		"properties": {
			"name": "Coors Field",
			"amenity": "Baseball Stadium",
			"popupContent": "This is where the Rockies play!"
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-104.99404, 39.75621]
		}
	};
	//Line
	var myLines = [{
		"type": "LineString",
		"coordinates": [[-100, 40], [-105, 45], [-110, 55]]
	}, {
		"type": "LineString",
		"coordinates": [[-105, 40], [-110, 45], [-115, 55]]
	}];
	//Poly
	var myPolys = [{
		"type": "Feature",
		"properties": { "party": "Republican" },
		"geometry": {
			"type": "Polygon",
			"coordinates": [[
				[-104.05, 48.99],
				[-97.22, 48.98],
				[-96.58, 45.94],
				[-104.03, 45.94],
				[-104.05, 48.99]
			]]
		}
	}, {
		"type": "Feature",
		"properties": { "party": "Democrat" },
		"geometry": {
			"type": "Polygon",
			"coordinates": [[
				[-109.05, 41.00],
				[-102.06, 40.99],
				[-102.03, 36.99],
				[-109.04, 36.99],
				[-109.05, 41.00]
			]]
		}
	}];
	//JSON
	L.geoJSON(myPoint).addTo(map);
	L.geoJSON(myLines).addTo(map);
	L.geoJSON(myPolys).addTo(map);
	//styling
	var myStyle = {
		"color": "#ff7800",
		"weight": 5,
		"opacity": 0.65
	};
	L.geoJSON(myLines, {
		style: myStyle
	}).addTo(map);
	//more styling
	L.geoJSON(myPolys, {
		style: function (feature) {
			switch (feature.properties.party) {
				case 'Republican': return { color: "#ff0000" };
				case 'Democrat': return { color: "#0000ff" };
			}
		}
	}).addTo(map);
	//points to layer
	var geojsonMarkerOptions = {
		radius: 8,
		fillColor: "#ff7800",
		color: "#000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.8
	};

	L.geoJSON(someGeojsonFeature, {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, geojsonMarkerOptions);
		}
	}).addTo(map);
	//onEachFeature
	function onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?
		if (feature.properties && feature.properties.popupContent) {
			layer.bindPopup(feature.properties.popupContent);
		}
	}

	var geojsonFeature = {
		"type": "Feature",
		"properties": {
			"name": "Coors Field",
			"amenity": "Baseball Stadium",
			"popupContent": "This is where the Rockies play!"
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-104.99404, 39.75621]
		}
	};

	L.geoJSON(geojsonFeature, {
		onEachFeature: onEachFeature
	}).addTo(map);
	//Filter
	var someFeatures = [{
		"type": "Feature",
		"properties": {
			"name": "Coors Field",
			"show_on_map": true
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-104.99404, 39.75621]
		}
	}, {
		"type": "Feature",
		"properties": {
			"name": "Busch Field",
			"show_on_map": false
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-104.98404, 39.74621]
		}
	}];

	L.geoJSON(someFeatures, {
		filter: function (feature, layer) {
			return feature.properties.show_on_map;
		}
	}).addTo(map);
	
}