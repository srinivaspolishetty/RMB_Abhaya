/**
 * @author suman.tipparapu
 * *
 */
//111.93.16.251
TRACK_ME =
	{
		refreshInterval: (1 * 1 * 1000)
		, interval: null
		, autoRefresh: true
		, directionsService: null
		, tripId: null
		, tripRequestTime: null
		, citizenMobileNumber: null
		, vehicleNumber: null
		, isShared: false
		, shareMyRoute: false
		, appURL: "http://111.93.16.251:8099/mobile/"
		, appWebURL: "http://14.98.164.17:8099/v1/"
		, initMap: function () {


			var me = this;
			$.ajax(
				{
					type: "GET",
					url: me.appWebURL + "tripTracks?tripId=147",
					// url	  : me.appURL + "tripTraceDetails?tripId=" + me.tripId + "&traceId=" + me.mapConfig.latestGeoLocationId ,
					success: function (_data) {
						var data = _data.content;
						me.showTrack(data);
						
					},
					error: function (_data) {
						console.log(_data);
					}
				});
		}
		, showTrack: function (tripData) {
			var service = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'));

      // Zoom and center map automatically by stations (each station will be in visible map area)
    var lngs = tripData.map(function(tripData) { return tripData.longitude; });
    var lats = tripData.map(function(tripData) { return tripData.latitude; });
    map.fitBounds({
        west: Math.min.apply(null, lngs),
        east: Math.max.apply(null, lngs),
        north: Math.min.apply(null, lats),
        south: Math.max.apply(null, lats),
    });

       // Divide route to several parts because max stations limit is 25 (23 waypoints + 1 origin + 1 destination)
    for (var i = 0, parts = [], max = 25 - 1; i < tripData.length; i = i + max)
        parts.push(tripData.slice(i, i + max + 1));

    // Service callback to process service results
    var service_callback = function(response, status) {
        if (status != 'OK') {
            console.log('Directions request failed due to ' + status);
            return;
        }
        var renderer = new google.maps.DirectionsRenderer;
        renderer.setMap(map);
        renderer.setOptions({ suppressMarkers: true, preserveViewport: true });
        renderer.setDirections(response);
    };

    // Send requests to service to get route (for stations count <= 25 only one request will be sent)
    for (var i = 0; i < parts.length; i++) {
        // Waypoints does not include first station (origin) and last station (destination)
        var waypoints = [];
		for (var j = 1; j < parts[i].length - 1; j++)
			triplatlng = {lat: parseFloat(parts[i][j].latitude), lng:parseFloat(parts[i][j].longitude) }
			waypoints.push({location: triplatlng, stopover: false});
			tripOrgin = {lat: parseFloat(parts[i][0].latitude), lng:parseFloat(parts[i][0].longitude) }
			tripdest = {lat: parseFloat(parts[i][parts[i].length - 1].latitude), lng:parseFloat(parts[i][parts[i].length - 1].longitude) }
			console.log(tripdest);
        // Service options
        var service_options = {
            origin: tripOrgin,
            destination: tripdest,
            waypoints: waypoints,
            travelMode: 'WALKING'
        };
        // Send request
        service.route(service_options, service_callback);
    }

		}
	}