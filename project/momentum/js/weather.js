const success = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "80d2b128994787a6c0d683eb3afff0bf";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ko`;
  const weather = document.querySelector(".weather");

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      // console.log(data.name);
      // console.log(data.weather[0].main);
      // console.log(data.main.temp);
      // console.log(data.clouds.all);
      weather.innerText =
        data.name +
        ", \n" +
        " 현재 온도, " +
        data.main.temp +
        "˚C \n" +
        "체감 온도, " +
        data.main.feels_like +
        "˚C\n 습도, " +
        data.main.humidity +
        "%";
    });
};
const error = () => {
  alert("당신의 위치 정보를 알수 없습니다.");
};

navigator.geolocation.getCurrentPosition(success, error);
