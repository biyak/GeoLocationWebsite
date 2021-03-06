function initMap() {
	var map;
		
	//Create a map centered in the defined location
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 43.2626744, lng: -79.9526672}, //center the map with the defined location
		zoom: 15  // zoom level 15 is city view 
	});
	
	const urlParams = new URLSearchParams(window.location.search);
	const place_id = String(urlParams.get('place_id'));
	
	var request = {
		//placeId for retrieving the store details, got it from google 
		placeId : place_id,
		// the place details that I need from the place details responses
		fields: ['name',  'opening_hours', 'formatted_address', 'formatted_phone_number', 'rating', 'website', 'geometry']
	};
	
	//use PlcaesService to get details
	var service = new google.maps.places.PlacesService(map);
	service.getDetails(request, function(place, status) {
		map = new google.maps.Map(document.getElementById('map'), {
			center: place.geometry.location, //center the map with the defined location
			zoom: 15  // zoom level 15 is city view 
		});
		//Checks that the PlacesServiceStatus is OK to retrieve details;
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			//put the data that get from the responses into corresponding text
			document.getElementById("map_title").innerHTML = place.name;
			document.getElementById("rating").innerHTML = Math.round( place.rating * 10 ) / 10;
			document.getElementById("address").innerHTML = place.formatted_address;
			document.getElementById("phone").innerHTML =  place.formatted_phone_number;
			if (place.website != null ) {
				document.getElementById("website").innerHTML =  "<a href=\"" + place.website + "\">" + place.website + "</a>";
			}
			else {
				document.getElementById("website").innerHTML = "No website is provided.";
			}
			if (place.website != null ) {
				var hours = String(place.opening_hours.weekday_text).split(",");
				//formatting the service hours splitting with comma and use for loop to concatinate with a new line
				var st = "";
				for (h of hours) {
					st = st + h + "<br>"
				}
				document.getElementById("service_hours").innerHTML =  st;
			}
			else {
				document.getElementById("service_hours").innerHTML = "Call office for details."
			}
		
			//create marker on the map
			var marker = new google.maps.Marker({
				map: map,
				animation: google.maps.Animation.DROP,
				//marker set on the defined location
				position: place.geometry.location,
				title: place.name
			});
			
			var infowindow = new google.maps.InfoWindow();
			//concatinate the info and html elements for the info window
			var contentString = '<div class="info_content">' +
				'<h3>' + place.name + '</h3>' +
				'<p>' +  Math.round( place.rating * 10 ) / 10 + '</p>' + 
				'<p>' + place.formatted_address + '</p>' +
				'</div>';
			google.maps.event.addListener(marker, 'click', (function(marker, place) {
				return function() {
					//set the above content to the window 
					infowindow.setContent(contentString);
					infowindow.setOptions({maxWidth: 300});
					//open the info window
					infowindow.open(map, marker);
				}
			}) (marker, place));
			//show info window when page is loaded
			infowindow.setContent(contentString);
			infowindow.setOptions({maxWidth: 300});
			infowindow.open(map, marker);
		}
	});

}

window.initMap = initMap; 