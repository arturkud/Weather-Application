const api = {
  // Link
  endpoint: "https://api.openweathermap.org/data/2.5/",
  // API Key
  key: ""
};

const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e) {
  if (e.keyCode === 13) {
    getInfo(input.value);
  }
}

async function getInfo(data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
  const resReceived = await res.json();
  displayResult(resReceived);
}

function displayResult(result) {
  const city = document.querySelector("#city");
  const temperature = document.querySelector("#temperature");
  const feelsLike = document.querySelector("#feelsLike");
  const conditions = document.querySelector("#conditions");
  const variation = document.querySelector("#variation");

  getCountryDate();

  city.textContent = `${result.name}, ${result.sys.country}`;
  temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
  feelsLike.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;
  conditions.textContent = `${result.weather[0].main}`;
  variation.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span> Max: ${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getCountryDate() {
  const dateTag = document.querySelector("#date");
  let dateObject = new Date();
  let year = dateObject.getFullYear();
  let date = dateObject.getDate();
  let month = "";
  let weekDay = "";
  
  switch (dateObject.getDay()) {
    case 0:
      weekDay = "Sunday";
      break;
    case 1:
      weekDay = "Monday";
      break;
    case 2:
      weekDay= "Tuesday";
      break;
    case 3:
      weekDay = "Wednesday";
      break;
    case 4:
      weekDay = "Thursday";
      break;
    case 5:
      weekDay = "Friday";
      break;
    case 6:
      weekDay = "Saturday";
      break;
  }

  switch (dateObject.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month= "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  dateTag.textContent = `${weekDay} ${date} ${month} ${year}`;

}
