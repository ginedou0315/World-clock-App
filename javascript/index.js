function updateTime() {
  let zurichElement = document.querySelector("#zurich");
  if (zurichElement) {
    let zurichDateElement = zurichElement.querySelector(".date");
    let zurichTimeELement = zurichElement.querySelector(".time");
    let zurichTime = moment().tz("Europe/Zurich");

    zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
    zurichTimeELement.innerHTML = zurichTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let manilaElement = document.querySelector("#manila");
  if (manilaElement) {
    let manilaDateElement = manilaElement.querySelector(".date");
    let manilaTimeELement = manilaElement.querySelector(".time");
    let manilaTime = moment().tz("Asia/Manila");

    manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
    manilaTimeELement.innerHTML = manilaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
