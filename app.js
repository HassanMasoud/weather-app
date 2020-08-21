let lat;
let long;

if (navigator && navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=9d79b17bcf6c72d27663f403013a283d`;

      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const { timezone } = data;
          const { temp } = data.current;
          const { description } = data.current.weather[0];
          console.log(temp);
          console.log(description);
          console.log(timezone);
        });
    },
    function (error) {
      console.log(error);
    }
  );
}
