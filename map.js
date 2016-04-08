function initMap() {
  var homeLatLng = {lat: 49.2802079, lng: -123.1352891};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: homeLatLng
  });

  var userInfoWindow = new google.maps.InfoWindow({map: map});


  function makeMarker(latitude, longitude, title, content) {
    var marker = new google.maps.Marker({
      position: {lat: latitude, lng: longitude},
      map: map,
      title: title
    });
    var infowindow = new google.maps.InfoWindow({
      content: '<h2>' + title + '</h2>' + '<div>' + content + '</div>'
    });
    marker.addListener('click', function(){
      infowindow.open(map, marker);
    });
  };

  makeMarker(49.3722894, -123.0994869, 'Grouse Mountain', 'Such a cool place to hang out, go for  hike and enjoy beautiful scenery.');
  makeMarker(49.2499076, -123.0540892, 'My Apartment', 'Very chill place to relax, do yoga and play music.');
  makeMarker(49.282228, -123.105889, 'Karma Teachers', 'By far the most genuine and accepting yoga studio in the city. It is always a joy to be here.');
  makeMarker(49.3017049, -123.1417003, 'Stanley Park', 'No words can describe the endless beauty of this place.');
  makeMarker(49.2691439, -123.0718541, 'Grandview Park', 'Crazy hippie hangout with very interesting people-watching.');

  if (navigator.geolocation) {
    debugger
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      userInfoWindow.setPosition(pos);
      userInfoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, userInfoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, userInfoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    userInfoWindow.setPosition(pos);
    userInfoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }
}


