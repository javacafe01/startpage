document.addEventListener("DOMContentLoaded", () => {
  const city = "San+Diego";
  const language = "en";
  const format = "%C+(%f),+with+a+wind+of+%w+and+%p+of+rain.";
  const units = "u";
  const url = `https://wttr.in/${city}?${units}&format=${format}&lang=${language}`;

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const weatherInfo = data.trim();
      const weatherElement = document.getElementById("weather");
      weatherElement.textContent = weatherInfo;
    })
    .catch((error) => {
      const weatherElement = document.getElementById("weather");
      weatherElement.textContent = "It's probably nice outside :)";
    });
});
