function updateTime() {
  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeELement = zurichElement.querySelector(".time");
  let zurichTime = moment().tz("Europe/Zurich");

  zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
  zurichTimeELement.innerHTML = zurichTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let manilaElement = document.querySelector("#manila");
  let manilaDateElement = manilaElement.querySelector(".date");
  let manilaTimeELement = manilaElement.querySelector(".time");
  let manilaTime = moment().tz("Asia/Manila");

  manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
  manilaTimeELement.innerHTML = manilaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
