const kelvinEl = document.querySelector("#kelvin");
const celsiusEl = document.querySelector("#celsius");
const fahrenheitEl = document.querySelector("#fahrenheit");
kelvinEl.addEventListener("input", () => {
  if (kelvinEl.value !== "" || typeof kelvinEl.value == "number") {
    celsiusEl.value = kelvinEl.value - 273.15;
    fahrenheitEl.value = celsiusEl.value * 1.8 + 32;
  } else {
    celsiusEl.value = "";
    fahrenheitEl.value = "";
  }
});
celsiusEl.addEventListener("input", () => {
  if (celsiusEl.value !== "" || typeof celsiusEl.value == "number") {
    kelvinEl.value = Number(celsiusEl.value) + 273.15;
    fahrenheitEl.value = celsiusEl.value * 1.8 + 32;
  } else {
    kelvinEl.value = "";
    fahrenheitEl.value = "";
  }
});
fahrenheitEl.addEventListener("input", () => {
  if (fahrenheitEl.value !== "" || typeof fahrenheitEl.value == "number") {
    kelvinEl.value = (fahrenheitEl.value - 32) * (5 / 9);
    celsiusEl.value = Number(celsiusEl.value) + 273.15;
  } else {
    kelvinEl.value = "";
    celsiusEl.value = "";
  }
});
