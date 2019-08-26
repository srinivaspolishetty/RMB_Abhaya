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
		, mapConfig:
		{
			initialized: false
			, trackMeId: null
			, map: null
			, trackStatus: null
			, latestGeoLocationId: 0
			, liveStatusRefreshInterval: (1 * 1 * 1000)
			, liveStatusInterval: null
			, infoWindow: null
			, geocoder: null
			, polylineCoordinates: []
			, markerCoordinates: []
			, array_marker: []
			, sourceDestiMarkers: []
			, polyLine: null
			, strokeColor: 'green'
			, strokeOpacity: 2
			, strokeWeight: 4
			, strokeWeight_highlight: 3
			, mapBounds: null
			, startMarkerColor: 'green'
			, normalMarkerColor: '#999999'
			, zIndex_marker: 1000
			, zIndex_polyline: 100
			, sourceCoordinates: null
			, sourceLocation: null
			, destLocation: null
			, destiCoordinates: null
			, destinationMarker: null
			, mapOptions:
			{
				center: null
				, mapTypeId: google.maps.MapTypeId.ROADMAP
				, mapTypeControlOptions: {}
				, zoom: 13
				, mapTypeControl: true
				, navigationControl: true
				, panControl: true
				, scaleControl: true
				, streetViewControl: true
				, overviewMapControl: true
				, draggable: true
				, streetViewControl: true
				, disableDefaultUI: true
				, clickableIcons: false
			}
			, addEvent: function (el, eventType, handler) {
				google.maps.event.addListener(el, eventType, handler);
			}
			, highlightPolyline: function (event, polyLine) {
				polyLine.orgZIndex = polyLine.zIndex;
				polyLine.setOptions(
					{
						strokeWeight: this.strokeWeight_highlight
						, zIndex: 500
					});
			}
			, unHighlightPolyline: function (event, polyLine) {
				polyLine.setOptions(
					{
						strokeWeight: this.strokeWeight
						, zIndex: polyLine.orgZIndex
					});
			}
		}
		, initMap: function () {
			var me = this;

			var autocomplete2 = new google.maps.places.Autocomplete(document.getElementById('tripSource'));
			var autocomplete1 = new google.maps.places.Autocomplete(document.getElementById('tripDest'));
			autocomplete2.setComponentRestrictions({ 'country': ['in'] });
			autocomplete1.setComponentRestrictions({ 'country': ['in'] });

			var url_string = window.location.href;
			var url = new URL(url_string);
			me.vehicleNumber = url.searchParams.get("vehicleNumber");
			me.citizenMobileNumber = url.searchParams.get("citizenMobileNumber");
			me.isShared = url.searchParams.get("isShared");
			me.isTripExist();
			google.maps.Polyline.prototype.getBounds = function (startBounds) {
				if (startBounds) {
					var bounds = startBounds;
				}
				else {
					var bounds = new google.maps.LatLngBounds();
				}
				this.getPath().forEach(function (item, index) {
					bounds.extend(new google.maps.LatLng(item.lat(), item.lng()));
				});
				return bounds;
			};
		
			var sourceSearchBox = new google.maps.places.SearchBox(document.getElementById('tripSource'));
			var destiSearchBox = new google.maps.places.SearchBox(document.getElementById('tripDest'));
			$('#btn_startTrip').on('click', function () {
				var place = destiSearchBox.getPlaces();
				var lat = place[0].geometry.location.lat();
				var lng = place[0].geometry.location.lng();
				me.mapConfig.destiCoordinates = lat + "," + lng;
				me.mapConfig.sourceLocation = $('#tripSource').val();
				me.mapConfig.destLocation = $('#tripDest').val();
				var tripCreateObj = {
					rcNumber: me.vehicleNumber,
					citizenMobileNumber: me.citizenMobileNumber,
					destiLatLang: me.mapConfig.destiCoordinates,
					destiLocation: me.mapConfig.destLocation,
					sourceLatLang: me.mapConfig.sourceCoordinates,
					sourceLocation: me.mapConfig.sourceLocation
				}
				me.calcRoute(me.mapConfig.sourceCoordinates,me.mapConfig.destiCoordinates);
			})

		}


		, isTripExist: function () {
			var me = this;
			$.ajax(
				{
					type: "GET",
					url: me.appURL + "isTripExist/?vehicleNumber=" + me.vehicleNumber + '&citizenMobileNumber=' + me.citizenMobileNumber,
					success: function (data) {
						if (data.isTripExist) {
							me.tripId = data.tripId;
							me.intilizeMapOnFirstCall(data.sourceLatLang.split(',')[0], data.sourceLatLang.split(',')[1]);
							me.mapConfig.sourceCoordinates = data.sourceLatLang;
							me.mapConfig.destiCoordinates = data.destiLatLang;
							me.calcRoute(me.mapConfig.sourceCoordinates, data.destiLatLang);

							me.reverseGeocode(data.sourceLatLang, 1);
							me.reverseGeocode(data.destiLatLang, 2);
						}
						else {
							$.ajax(
								{
									type: "GET",
									url: me.appURL + "currentLocation/?vehicleNumber=" + me.vehicleNumber,
									success: function (data, q) {
										data = { id: 01 }
										if (data == null || data === "") {
											alert('Current location is not available.');
											$('#startTripButton').prop("disabled", true).css('background-color', '#777575');
											return;
										}
										if (me.isShared) {
											$('#startTripButton').hide();
										}
										data.sourceLatLang = '17.435150,78.373947';
										me.intilizeMapOnFirstCall(data.sourceLatLang.split(',')[0], data.sourceLatLang.split(',')[1]);
										me.mapConfig.sourceCoordinates = data.sourceLatLang;
										me.reverseGeocode(data.sourceLatLang, 1);
									},
									error: function (data) {

									}
								});
						}
					},
					error: function (data) {
					}
				});
		}

		,calcRoute : function(source,destination)
		{
			var me = this;
			me.directionsService  = new google.maps.DirectionsService();
				 var directionsDisplay = new google.maps.DirectionsRenderer({map: me.mapConfig.map});
				var request = 
		 {
						origin					: source,
						destination				: destination,
						provideRouteAlternatives	: true,
						unitSystem				: google.maps.UnitSystem.METRIC,
						travelMode				: google.maps.TravelMode['DRIVING']
				};
				me.directionsService.route(request, function(response, status) 
			{
						for(var j in  me.mapConfig.polylineCoordinates ) 
				{
							me.mapConfig.polylineCoordinates[j].setMap(null);
						}
						me.mapConfig.polylineCoordinates = [];
						if (status == google.maps.DirectionsStatus.OK) 
			 {
				 var bounds = new google.maps.LatLngBounds();
				 me.clearMarkers();
				 var length = response.routes[0].overview_path.length;
 
				 var slatitude = response.routes[0].overview_path[0].lat();
				 var slangitude = response.routes[0].overview_path[0].lng();
				 me.mapConfig.map.setCenter({lat : slatitude ,lng : slangitude});  
 
				 var sourceMarker = me.makeMarker({lat : slatitude ,lng : slangitude},'images/s.png');
				 me.mapConfig.addEvent(sourceMarker, 'click', function(event) {me.getGeocode(sourceMarker);});
 
				 //var dlatitude = response.routes[0].overview_path[length-1].lat();
				 //var dlangitude = response.routes[0].overview_path[length-1].lng();
				 
				 var dlatitude = parseFloat(me.mapConfig.destiCoordinates.split(",")[0]);
				 var dlangitude = parseFloat(me.mapConfig.destiCoordinates.split(",")[1]);
				 
				 var destMarker =  me.makeMarker({lat : dlatitude ,lng : dlangitude},'images/d.png');
				 me.mapConfig.addEvent(destMarker, 'click', function(event) {me.getGeocode(destMarker);});
 
				 me.mapConfig.sourceDestiMarkers.push(sourceMarker);
				 me.mapConfig.sourceDestiMarkers.push(destMarker);
				 var point = response.routes[0].legs[0];
				 $('#estimate').empty();
				 $('#estimate').append("Estimated Time : " + point.duration.text + ', Distance : ' + point.distance.text);
				 for (var i = response.routes.length - 1; i >= 0; i-- ) 
				 {
						var color;
										if (i == 0)  color = me.mapConfig.startMarkerColor;
										else  color = me.mapConfig.normalMarkerColor;
										var line = me.drawPolyline(response.routes[i].overview_path, color);
										me.mapConfig.polylineCoordinates.push(line);
										bounds = line.getBounds(bounds);
										google.maps.event.addListener(line, 'click', function() 
						{
												var index = me.mapConfig.polylineCoordinates.indexOf(this);
												me.highlightRoute(index);
										});
								}
				 me.mapConfig.map.fitBounds(bounds);
						}
				});
				me.attachLiveStatusEvent();
				var url_string = window.location.href;
				var url = new URL(url_string);
				var mobile = url.searchParams.get("mobile");
				if (mobile)
				window.location.href = url_string + '&tripStarted=tripStarted';
		}

		,clearMarkers : function ()
   {
	   var me = this;
	   for (var i = 0; i < me.mapConfig.sourceDestiMarkers.length; i++) {
			me.mapConfig.sourceDestiMarkers[i].setMap(null);
		}
	 }
	 
	 ,attachLiveStatusEvent : function ()
   {
	   var me = this;
	   me.mapConfig.liveStatusInterval = setInterval(function() 
	   {
			me.updateLiveStatus();
	   }, me.mapConfig.liveStatusRefreshInterval);
	 }
	 

		, intilizeMapOnFirstCall: function (lat, lng) {
			var me = this;
			me.mapConfig.geocoder = new google.maps.Geocoder();
			me.mapConfig.infoWindow = new google.maps.InfoWindow({ maxWidth: 300 });
			me.mapConfig.mapBounds = new google.maps.LatLngBounds();
			me.mapConfig.mapOptions.center = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
			me.mapConfig.mapOptions.mapTypeControlOptions =
				{
					//google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.TERRAIN
					//style		: google.maps.MapTypeControlStyle.DROPDOWN_MENU
					mapTypeIds: []
				};
			me.mapConfig.map = new google.maps.Map(document.getElementById('map'), me.mapConfig.mapOptions);
			// var sourceMarker = me.makeMarker({lat : parseFloat(lat) ,lng : parseFloat(lng)},'images/s.png');
			// me.mapConfig.addEvent(sourceMarker, 'click', function(event) {me.getGeocode(sourceMarker);});
			// me.mapConfig.sourceDestiMarkers.push(sourceMarker);
		}

		, reverseGeocode: function (latLng, type) {
			alert(latLng);
			var me = this, location;
			var type = type;
			latLng = new google.maps.LatLng(parseFloat(latLng.split(",")[0]), parseFloat(latLng.split(",")[1]));
			me.mapConfig.geocoder.geocode({ 'latLng': latLng },
				function (results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						if (results[0]) {
							location = results[0].formatted_address;
							if (type === 1 || type == '1')
								document.getElementById('tripSource').value = location;
							else
								document.getElementById('end1').value = location;
						}
						else {
							location = 'No Result';
						}
					}
					else {
						location = 'Geocoder failed due to - ' + status;
					}
				});
		}


		,makeMarker : function(position,icon)
		{
			var me = this;
			var marker = new google.maps.Marker({
			 position	: position,
			 icon 		: icon
		 });
		 marker.setMap(me.mapConfig.map);
		 return marker;
		}





		
	}







