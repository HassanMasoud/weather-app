let lat;
let long;

let locationTimezone = document.querySelector(".location-timezone");
let temperatureSection = document.querySelector(".temperature-section");
let temperatureUnit = document.querySelector(".temperature-section .unit");
let temperatureDegrees = document.querySelector(".temperature-degrees");
let temperatureDescription = document.querySelector(".temperature-description");
let weatherIcon = document.querySelector(".icon");

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
          const { timezone } = data;
          const { temp } = data.current;
          const { description, icon } = data.current.weather[0];
          const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

          locationTimezone.textContent = timezone;
          temperatureDegrees.textContent = temp;
          temperatureDescription.textContent = description;
          weatherIcon.setAttribute("src", iconUrl);

          temperatureSection.addEventListener("click", () => {
            if (temperatureUnit.innerText === "C") {
              temperatureUnit.textContent = "F";
            } else {
              temperatureUnit.textContent = "C";
            }
          });
        });
    },
    function (error) {
      console.log(error);
    },
    { timeout: 5000 }
  );
}
