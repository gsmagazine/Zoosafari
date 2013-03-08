function ApplicationWindow(title) {
	var geo = require('geo');
		var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
		fullscreen: false,
		exitOnClose: true
	});


var annotations1 = Ti.Map.createAnnotation({
        latitude: 40.834106,
        longitude: 17.339065,
        title: 'Leoni',
        subtitle: 'Subtitle A',
        animate: true
        //image:'pin.png',
        //leftButton: 'google.jpg'
   });
     
var annotations2 = Ti.Map.createAnnotation({
        latitude: 37.422502,
        longitude: -122.0855498,
        title: 'Tigri',
        subtitle: 'Subtitle B',
        image:'pin.png',
        animate: true,
   });



var annotations = [annotations1, annotations2];



 
var mapView = Titanium.Map.createView({
    mapType : Titanium.Map.STANDARD_TYPE,
    region : {latitude:40.834317, longitude:17.341103,latitudeDelta:0.006, longitudeDelta:0.006},             
    animate : true,
    regionFit : true,
    userLocation : false,
    annotations:annotations
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
		    annotations:annotations,
		    top: '50dp'
		});
 
	self.add(button);
self.add(mapView);
	
	var flexSpace = Titanium.UI.createButton({
        systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });

    // button to change map type to SAT
    sat = Titanium.UI.createButton({
        title: 'Satellite',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    // button to change map type to STD
    std = Titanium.UI.createButton({
        title: 'Standard',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    // button to change map type to HYBRID
    hyb = Titanium.UI.createButton({
        title: 'Hybrid',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    // button to zoom-in
    zoomin = Titanium.UI.createButton({
        title: '+',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    // button to zoom-out
    zoomout = Titanium.UI.createButton({
        title: '-',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });

    sat.addEventListener('click', function() {
        // set map type to satellite
        mapView.setMapType(Titanium.Map.SATELLITE_TYPE);
    });

    std.addEventListener('click', function() {
        // set map type to standard
        mapView.setMapType(Titanium.Map.STANDARD_TYPE);
    });

    hyb.addEventListener('click', function() {
        // set map type to hybrid
        mapView.setMapType(Titanium.Map.HYBRID_TYPE);
    });

    zoomin.addEventListener('click', function() {
        mapView.zoom(1);
    });

    zoomout.addEventListener('click', function() {
        mapView.zoom( - 1);
    });



    self.setToolbar([std, hyb, sat, flexSpace, zoomin, zoomout]);

	

	return self;
};

module.exports = ApplicationWindow;



 
