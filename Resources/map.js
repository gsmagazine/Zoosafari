var win = Ti.UI.createWindow({
			title: L('MAP')
			});

	var geo = require('geo');
 
var mapView = Titanium.Map.createView({
    mapType : Titanium.Map.STANDARD_TYPE,
    region : {latitude:37.389569, longitude:-122.050212,latitudeDelta:0.1, longitudeDelta:0.1},             
    animate : true,
    regionFit : true,
    userLocation : true
});
 
 	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});

 
 mapview = Titanium.Map.createView({
		    mapType: Titanium.Map.STANDARD_TYPE,
		    region: {
	    		latitude: geo.LATITUDE_BASE, 
	    		longitude: geo.LONGITUDE_BASE,
		        latitudeDelta: 0.1, 
		        longitudeDelta: 0.1
		    },
		    animate:true,
		    regionFit:true,
		    userLocation:true,
		    top: '50dp'
		});
 
	win.add(button);
win.add(mapView);