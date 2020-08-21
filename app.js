let lat;
let long;

if (navigator && navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
    },
    function (error) {
      console.log(error);
    }
  );
}
