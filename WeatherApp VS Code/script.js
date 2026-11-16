const states = [
  { name: "Alabama", abbr: "AL", city: "Montgomery", cities: ["Montgomery", "Birmingham", "Mobile", "Huntsville"] },
  { name: "Alaska", abbr: "AK", city: "Juneau", cities: ["Juneau", "Anchorage", "Fairbanks"] },
  { name: "Arizona", abbr: "AZ", city: "Phoenix", cities: ["Phoenix", "Tucson", "Mesa", "Flagstaff"] },
  { name: "Arkansas", abbr: "AR", city: "Little Rock", cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"] },
  { name: "California", abbr: "CA", city: "Sacramento", cities: ["Sacramento", "Los Angeles", "San Francisco", "San Diego"] },
  { name: "Colorado", abbr: "CO", city: "Denver", cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"] },
  { name: "Connecticut", abbr: "CT", city: "Hartford", cities: ["Hartford", "Bridgeport", "New Haven", "Stamford"] },
  { name: "Delaware", abbr: "DE", city: "Dover", cities: ["Dover", "Wilmington", "Newark"] },
  { name: "Florida", abbr: "FL", city: "Tallahassee", cities: ["Tallahassee", "Miami", "Orlando", "Jacksonville"] },
  { name: "Georgia", abbr: "GA", city: "Atlanta", cities: ["Atlanta", "Savannah", "Augusta", "Athens"] },
  { name: "Hawaii", abbr: "HI", city: "Honolulu", cities: ["Honolulu", "Hilo", "Kailua"] },
  { name: "Idaho", abbr: "ID", city: "Boise", cities: ["Boise", "Meridian", "Nampa", "Twin Falls"] },
  { name: "Illinois", abbr: "IL", city: "Springfield", cities: ["Springfield", "Chicago", "Aurora", "Rockford"] },
  { name: "Indiana", abbr: "IN", city: "Indianapolis", cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"] },
  { name: "Iowa", abbr: "IA", city: "Des Moines", cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"] },
  { name: "Kansas", abbr: "KS", city: "Topeka", cities: ["Topeka", "Wichita", "Overland Park", "Lawrence"] },
  { name: "Kentucky", abbr: "KY", city: "Frankfort", cities: ["Frankfort", "Louisville", "Lexington", "Bowling Green"] },
  { name: "Louisiana", abbr: "LA", city: "Baton Rouge", cities: ["Baton Rouge", "New Orleans", "Shreveport", "Lafayette"] },
  { name: "Maine", abbr: "ME", city: "Augusta", cities: ["Augusta", "Portland", "Bangor", "Lewiston"] },
  { name: "Maryland", abbr: "MD", city: "Annapolis", cities: ["Annapolis", "Baltimore", "Frederick", "Rockville"] },
  { name: "Massachusetts", abbr: "MA", city: "Boston", cities: ["Boston", "Worcester", "Springfield", "Cambridge"] },
  { name: "Michigan", abbr: "MI", city: "Lansing", cities: ["Lansing", "Detroit", "Grand Rapids", "Ann Arbor"] },
  { name: "Minnesota", abbr: "MN", city: "Saint Paul", cities: ["Saint Paul", "Minneapolis", "Rochester", "Duluth"] },
  { name: "Mississippi", abbr: "MS", city: "Jackson", cities: ["Jackson", "Gulfport", "Biloxi", "Southaven"] },
  { name: "Missouri", abbr: "MO", city: "Jefferson City", cities: ["Jefferson City", "Kansas City", "St. Louis", "Springfield"] },
  { name: "Montana", abbr: "MT", city: "Helena", cities: ["Helena", "Billings", "Missoula", "Bozeman"] },
  { name: "Nebraska", abbr: "NE", city: "Lincoln", cities: ["Lincoln", "Omaha", "Bellevue", "Grand Island"] },
  { name: "Nevada", abbr: "NV", city: "Carson City", cities: ["Carson City", "Las Vegas", "Reno", "Henderson"] },
  { name: "New Hampshire", abbr: "NH", city: "Concord", cities: ["Concord", "Manchester", "Nashua", "Derry"] },
  { name: "New Jersey", abbr: "NJ", city: "Trenton", cities: ["Trenton", "Newark", "Jersey City", "Paterson"] },
  { name: "New Mexico", abbr: "NM", city: "Santa Fe", cities: ["Santa Fe", "Albuquerque", "Las Cruces", "Roswell"] },
  { name: "New York", abbr: "NY", city: "Albany", cities: ["Albany", "New York City", "Buffalo", "Rochester"] },
  { name: "North Carolina", abbr: "NC", city: "Raleigh", cities: ["Raleigh", "Charlotte", "Greensboro", "Durham"] },
  { name: "North Dakota", abbr: "ND", city: "Bismarck", cities: ["Bismarck", "Fargo", "Grand Forks", "Minot"] },
  { name: "Ohio", abbr: "OH", city: "Columbus", cities: ["Columbus", "Cincinnati", "Cleveland", "Toledo"] },
  { name: "Oklahoma", abbr: "OK", city: "Oklahoma City", cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"] },
  { name: "Oregon", abbr: "OR", city: "Salem", cities: ["Salem", "Portland", "Eugene", "Gresham"] },
  { name: "Pennsylvania", abbr: "PA", city: "Harrisburg", cities: ["Harrisburg", "Philadelphia", "Pittsburgh", "Allentown"] },
  { name: "Rhode Island", abbr: "RI", city: "Providence", cities: ["Providence", "Warwick", "Cranston", "Newport"] },
  { name: "South Carolina", abbr: "SC", city: "Columbia", cities: ["Columbia", "Charleston", "Greenville", "Myrtle Beach"] },
  { name: "South Dakota", abbr: "SD", city: "Pierre", cities: ["Pierre", "Sioux Falls", "Rapid City", "Brookings"] },
  { name: "Tennessee", abbr: "TN", city: "Nashville", cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"] },
  { name: "Texas", abbr: "TX", city: "Austin", cities: ["Austin", "Houston", "Dallas", "San Antonio"] },
  { name: "Utah", abbr: "UT", city: "Salt Lake City", cities: ["Salt Lake City", "Provo", "West Valley City", "West Jordan"] },
  { name: "Vermont", abbr: "VT", city: "Montpelier", cities: ["Montpelier", "Burlington", "South Burlington", "Rutland"] },
  { name: "Virginia", abbr: "VA", city: "Richmond", cities: ["Richmond", "Virginia Beach", "Norfolk", "Arlington"] },
  { name: "Washington", abbr: "WA", city: "Olympia", cities: ["Olympia", "Seattle", "Spokane", "Tacoma"] },
  { name: "West Virginia", abbr: "WV", city: "Charleston", cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg"] },
  { name: "Wisconsin", abbr: "WI", city: "Madison", cities: ["Madison", "Milwaukee", "Green Bay", "Appleton"] },
  { name: "Wyoming", abbr: "WY", city: "Cheyenne", cities: ["Cheyenne", "Casper", "Laramie", "Gillette"] }
];

const apiKey = "74865f78c4a3444e883a42706f959135";

function getStateCities(state) {
  const citySet = new Set([state.city, ...(state.cities || [])]);
  return [...citySet];
}

function buildCityButtonMarkup(stateName, activeCity) {
  const state = states.find((entry) => entry.name === stateName);
  if (!state) return "";

  const cities = getStateCities(state).filter((city) => city !== activeCity);
  if (cities.length === 0) return "";

  return `
    <div class="city-selector">
      ${cities
        .map(
          (city) => `
            <button type="button" class="city-link" data-state-name="${stateName}" data-city-name="${city}">
              ${city}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function getStateFromCity(cityName) {
  return states.find((state) => getStateCities(state).some((city) => city.toLowerCase() === cityName.toLowerCase()));
}

const result = document.getElementById("result");
let currentView = "main";
let currentSelection = null;

function setWeatherBackground(iconCode, description) {
  const body = document.body;
  
  // Remove all weather classes
  body.classList.remove(
    "weather-sunny",
    "weather-cloudy",
    "weather-rainy",
    "weather-snowy",
    "weather-foggy",
    "weather-stormy",
    "weather-night"
  );

  // Determine weather class based on icon code and description
  const desc = description.toLowerCase();

  if (iconCode === "01d") {
    body.classList.add("weather-sunny");
  } else if (iconCode === "01n" || iconCode === "02n" || iconCode === "03n" || iconCode === "04n") {
    body.classList.add("weather-night");
  } else if (desc.includes("thunderstorm") || desc.includes("tornado")) {
    body.classList.add("weather-stormy");
  } else if (desc.includes("rain")) {
    body.classList.add("weather-rainy");
  } else if (desc.includes("snow")) {
    body.classList.add("weather-snowy");
  } else if (desc.includes("fog") || desc.includes("mist")) {
    body.classList.add("weather-foggy");
  } else if (desc.includes("cloud")) {
    body.classList.add("weather-cloudy");
  } else {
    body.classList.add("weather-sunny");
  }
}

function temperatureToCelsius(tempF) {
  return ((tempF - 32) * 5) / 9;
}

function formatWeatherCard(cityName, weatherData, airQuality = null, airQualityError = "") {
  const tempF = weatherData.main.temp;
  const tempC = temperatureToCelsius(tempF).toFixed(1);
  const description = weatherData.weather[0].description;
  const icon = getWeatherIcon(weatherData.weather[0].icon, description);
  const friendlyDescription = formatDescription(description);
  const feelsLikeF = Math.round(weatherData.main.feels_like);
  const feelsLikeC = temperatureToCelsius(weatherData.main.feels_like).toFixed(1);
  const visibilityText = weatherData.visibility == null
    ? "Unavailable"
    : `${(weatherData.visibility / 1609.344).toFixed(1)} mi (${(weatherData.visibility / 1000).toFixed(1)} km)`;
  const precipitationMm = (weatherData.rain?.["1h"] || 0) + (weatherData.snow?.["1h"] || 0);
  const precipitationText = precipitationMm > 0
    ? `${precipitationMm.toFixed(1)} mm (${(precipitationMm / 25.4).toFixed(2)} in)`
    : "None in the past hour";
  const windText = weatherData.wind?.speed == null
    ? "Unavailable"
    : `${weatherData.wind.speed} mph${weatherData.wind.gust != null ? ` · gusts ${weatherData.wind.gust} mph` : ""}`;
  const airQualityText = airQuality
    ? `${airQuality.label} (${airQuality.index}/5)`
    : airQualityError
      ? `Unavailable: ${airQualityError}`
      : "Select a city for details";

  return `
    <article class="weather-card">
      <h3>${cityName}</h3>
      <p class="city">Current weather</p>
      <div class="icon">${icon}</div>
      <p class="temp">${Math.round(tempF)}\u00B0F</p>
      <p class="temp-c">${tempC}\u00B0C</p>
      <p class="desc">${friendlyDescription}</p>
      <dl class="conditions-grid">
        <div class="condition-item">
          <dt>Feels like</dt>
          <dd>${feelsLikeF}\u00B0F (${feelsLikeC}\u00B0C)</dd>
        </div>
        <div class="condition-item">
          <dt>Wind</dt>
          <dd>${windText}</dd>
        </div>
        <div class="condition-item">
          <dt>Air quality</dt>
          <dd>${airQualityText}</dd>
        </div>
        <div class="condition-item">
          <dt>Humidity</dt>
          <dd>${weatherData.main.humidity}%</dd>
        </div>
        <div class="condition-item">
          <dt>Visibility</dt>
          <dd>${visibilityText}</dd>
        </div>
        <div class="condition-item">
          <dt>Precipitation (past hour)</dt>
          <dd>${precipitationText}</dd>
        </div>
      </dl>
    </article>
  `;
}

async function getAirQuality(latitude, longitude) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Air quality data unavailable");
  }

  const index = data.list?.[0]?.main?.aqi;
  const labels = ["", "Good", "Fair", "Moderate", "Poor", "Very poor"];
  if (!Number.isInteger(index) || !labels[index]) {
    throw new Error("Air quality data unavailable");
  }

  return { index, label: labels[index] };
}

function formatDescription(description) {
  const lower = description.toLowerCase();

  if (lower.includes("tornado")) return "Tornado warning";
  if (lower.includes("flood")) return "Flood watch";
  if (lower.includes("fog")) return "Fog";
  if (lower.includes("mist")) return "Mist";

  return description;
}

function getWeatherIcon(code, description = "") {
  const lower = description.toLowerCase();

  if (lower.includes("tornado")) return "🌪️";
  if (lower.includes("flood")) return "🌊";
  if (lower.includes("fog") || lower.includes("mist")) return "🌫️";

  const iconMap = {
    "01d": "☀️",
    "01n": "🌙",
    "02d": "⛅",
    "02n": "☁️",
    "03d": "☁️",
    "03n": "☁️",
    "04d": "☁️",
    "04n": "☁️",
    "09d": "🌧️",
    "09n": "🌧️",
    "10d": "🌦️",
    "10n": "🌧️",
    "11d": "⛈️",
    "11n": "⛈️",
    "13d": "❄️",
    "13n": "❄️",
    "50d": "🌫️",
    "50n": "🌫️"
  };

  return iconMap[code] || "🌤️";
}

function buildForecastMarkup(forecastList, timezoneOffset = 0) {
  if (!forecastList || forecastList.length === 0) {
    return "";
  }

  const dailyForecasts = [];
  const seenDates = new Set();
  const todayKey = new Date((Date.now() / 1000 + timezoneOffset) * 1000)
    .toISOString()
    .slice(0, 10);

  for (const item of forecastList) {
    const dayKey = new Date((item.dt + timezoneOffset) * 1000)
      .toISOString()
      .slice(0, 10);
    if (dayKey <= todayKey) continue;
    if (seenDates.has(dayKey)) continue;

    seenDates.add(dayKey);
    dailyForecasts.push({
      date: new Date(`${dayKey}T00:00:00Z`),
      temp: Math.round(item.main.temp),
      description: formatDescription(item.weather[0].description),
      humidity: item.main.humidity,
      precipitationChance: item.pop * 100,
      iconCode: item.weather[0].icon
    });

    if (dailyForecasts.length === 3) break;
  }

  if (dailyForecasts.length === 0) return "";

  const forecastCards = dailyForecasts
    .map((day) => {
      const label = day.date.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        timeZone: "UTC"
      });

      return `
        <div class="forecast-day">
          <div class="forecast-label">${label}</div>
          <div class="forecast-icon">${getWeatherIcon(day.iconCode, day.description)}</div>
          <div class="forecast-temp">${day.temp}°F</div>
          <div class="forecast-desc">${day.description}</div>
          <div class="forecast-meta">💧 ${day.humidity}%</div>
          <div class="forecast-meta">🌧️ Precipitation chance: ${Math.round(day.precipitationChance)}%</div>
        </div>
      `;
    })
    .join("");

  const alerts = buildAlertMarkup(dailyForecasts);

  return `
    <div class="forecast-section">
      <h4>Next 3 Days</h4>
      ${alerts}
      <div class="forecast-row">${forecastCards}</div>
    </div>
  `;
}

function buildAlertMarkup(dailyForecasts) {
  const summaries = [];

  dailyForecasts.forEach((day) => {
    const label = day.date.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    });
    const conditions = [];
    const warnings = [];

    // Describe temperature
    if (day.temp >= 95) {
      conditions.push(`extreme heat (${day.temp}°F)`);
      warnings.push("stay hydrated and avoid prolonged sun exposure");
    } else if (day.temp >= 90) {
      conditions.push(`hot (${day.temp}°F)`);
      warnings.push("watch for heat-related risks");
    } else if (day.temp <= 20) {
      conditions.push(`dangerously cold (${day.temp}°F)`);
      warnings.push("bundle up and limit time outdoors");
    } else if (day.temp <= 32) {
      conditions.push(`freezing (${day.temp}°F)`);
      warnings.push("roads may be icy");
    }

    // Describe humidity
    if (day.humidity >= 85) {
      conditions.push(`very high humidity (${day.humidity}%)`);
      if (day.temp >= 80) {
        warnings.push("feels much hotter due to humidity");
      }
    } else if (day.humidity >= 75) {
      conditions.push(`humid (${day.humidity}%)`);
    }

    // Describe precipitation
    const rainChance = Math.round(day.precipitationChance);
    if (rainChance >= 80) {
      conditions.push(`heavy rain expected (${rainChance}% chance)`);
      warnings.push("bring an umbrella and watch for flooding");
    } else if (rainChance >= 60) {
      conditions.push(`likely rain (${rainChance}% chance)`);
      warnings.push("bring an umbrella");
    } else if (rainChance >= 40) {
      conditions.push(`possible rain (${rainChance}% chance)`);
    } else if (rainChance >= 20) {
      conditions.push(`scattered showers (${rainChance}% chance)`);
    }

    // Build the alert message
    if (conditions.length > 0) {
      const conditionText = conditions.join(", ");
      const warningText = warnings.length > 0 ? ` – ${warnings.join(", ")}` : "";
      const pillClass = day.temp >= 85 || day.precipitationChance >= 70 ? "hot" : day.temp <= 32 || day.humidity >= 85 ? "cold" : "warm";
      summaries.push(`<div class="alert-pill ${pillClass}">📋 ${label}: ${conditionText}${warningText}</div>`);
    } else {
      summaries.push(`<div class="alert-pill calm">✅ ${label}: ${day.temp}°F, pleasant conditions</div>`);
    }
  });

  return `<div class="alert-list">${summaries.join("")}</div>`;
}

function buildOutfitMarkup(temp, humidity, precipitation, description) {
  const menWear = [];
  const menDontWear = [];
  const womenWear = [];
  const womenDontWear = [];

  // Temperature-based recommendations
  if (temp >= 85) {
    // Men's
    menWear.push("👕 Light t-shirt or polo shirt", "🩳 Shorts or light chinos", "🕶️ Sunglasses", "🧢 Baseball cap", "👟 Sandals or sneakers");
    menDontWear.push("🧥 Jackets", "👖 Heavy denim", "🧣 Scarves");
    // Women's
    womenWear.push("👕 Light tank top or t-shirt", "👗 Sundress or light skirt", "🩳 Shorts", "🕶️ Sunglasses", "🧢 Hat or cap", "👗 Breathable fabrics");
    womenDontWear.push("🧥 Jackets", "🥾 Heavy boots", "🧣 Wraps");
  } else if (temp >= 70) {
    menWear.push("👕 Short-sleeve shirt or t-shirt", "👖 Shorts or light pants", "👟 Sneakers or loafers");
    menDontWear.push("🧥 Heavy coats", "🧣 Scarves");
    womenWear.push("👕 Short-sleeve top or blouse", "👗 Skirt or shorts", "👖 Light pants", "👟 Sandals or flats");
    womenDontWear.push("🧥 Coats", "🧣 Heavy layers");
  } else if (temp >= 50) {
    menWear.push("🧥 Light jacket or cardigan", "👖 Long pants", "👟 Comfortable shoes", "🧣 Light scarf");
    menDontWear.push("👕 T-shirts only", "🩳 Shorts");
    womenWear.push("🧥 Cardigan or light sweater", "👖 Jeans or pants", "👗 Dress with leggings", "🧣 Lightweight scarf", "👟 Flats or ankle boots");
    womenDontWear.push("🩳 Shorts", "👗 Sleeveless dresses");
  } else if (temp >= 32) {
    menWear.push("🧥 Warm jacket or blazer", "🧣 Scarf", "🧤 Gloves", "👖 Jeans or warm pants", "🎩 Beanie");
    menDontWear.push("🩳 Shorts", "👕 T-shirt alone");
    womenWear.push("🧥 Warm coat or puffer jacket", "🧣 Scarf", "🧤 Gloves", "👖 Jeans or leggings", "👢 Boots", "🧦 Socks");
    womenDontWear.push("🩳 Shorts", "👗 Short skirts", "👕 Sleeveless tops");
  } else {
    menWear.push("🧥 Heavy winter coat", "🧣 Thick scarf", "🧤 Insulated gloves", "🎩 Winter hat", "👖 Thermal pants", "🧦 Thick socks");
    menDontWear.push("🩳 Any shorts", "👕 Light layers");
    womenWear.push("🧥 Heavy winter parka", "🧣 Thick scarf", "🧤 Insulated gloves", "🎩 Winter hat", "👢 Insulated boots", "🧦 Thick socks", "🩷 Thermal leggings");
    womenDontWear.push("🩳 Shorts", "👗 Light dresses");
  }

  // Humidity-based additions
  if (humidity >= 80 && temp >= 70) {
    menWear.push("💨 Breathable cotton or athletic fabric");
    womenWear.push("💨 Breathable fabrics, natural materials");
  }

  // Current precipitation is an amount in millimeters, not a probability.
  const hasPrecipitation = precipitation >= 0.1 || /rain|snow|shower|drizzle/i.test(description);
  if (hasPrecipitation) {
    menWear.push("☔ Waterproof jacket or raincoat", "🚶 Water-resistant shoes");
    menDontWear.push("🎀 Suede shoes");
    womenWear.push("☔ Waterproof jacket or raincoat", "🌂 Umbrella", "👢 Waterproof boots");
    womenDontWear.push("🎀 Suede shoes", "👗 Delicate fabrics");
  }

  return `
    <section class="outfit-section">
      <h3>👗 What to Wear</h3>
      <div class="outfit-gender-grid">
        <div class="outfit-gender-column">
          <h4>👨 Men's Outfit</h4>
          <div class="outfit-recommendations">
            <div class="outfit-do">
              <h5>✅ Do Wear</h5>
              <ul class="outfit-list">
                ${menWear.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div class="outfit-dont">
              <h5>❌ Don't Wear</h5>
              <ul class="outfit-list dont-wear">
                ${menDontWear.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
        <div class="outfit-gender-column">
          <h4>👩 Women's Outfit</h4>
          <div class="outfit-recommendations">
            <div class="outfit-do">
              <h5>✅ Do Wear</h5>
              <ul class="outfit-list">
                ${womenWear.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div class="outfit-dont">
              <h5>❌ Don't Wear</h5>
              <ul class="outfit-list dont-wear">
                ${womenDontWear.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


function wrapCardWithSelection(cardMarkup, stateName, cityName) {
  return `
    <div class="selectable-card" data-state-name="${stateName}" data-city-name="${cityName}">
      ${cardMarkup}
    </div>
  `;
}

function populateStateSuggestions() {
  const datalist = document.getElementById("stateSuggestions");
  if (!datalist) return;

  datalist.innerHTML = states
    .map((state) => {
      return `
        <option value="${state.name}"></option>
        <option value="${state.abbr}"></option>
        <option value="${state.abbr} - ${state.name}"></option>
      `;
    })
    .join("");
}

function resolveLocationQuery(query) {
  const trimmed = query.trim();
  if (!trimmed) return "";

  const loweredQuery = trimmed.toLowerCase();

  const match = states.find((state) => {
    return (
      state.name.toLowerCase() === loweredQuery ||
      state.abbr.toLowerCase() === loweredQuery ||
      `${state.abbr} - ${state.name}`.toLowerCase() === loweredQuery ||
      `${state.name} (${state.abbr})`.toLowerCase() === loweredQuery
    );
  });

  if (match) return `${match.city}, ${match.name}`;

  const cityMatch = states.find((state) => {
    return getStateCities(state).some((city) => {
      const cityKey = city.toLowerCase();
      return cityKey === loweredQuery || `${city.toLowerCase()}, ${state.name.toLowerCase()}` === loweredQuery;
    });
  });

  if (cityMatch) {
    const city = getStateCities(cityMatch).find((candidate) => candidate.toLowerCase() === loweredQuery || `${candidate.toLowerCase()}, ${cityMatch.name.toLowerCase()}` === loweredQuery);
    return city ? `${city}, ${cityMatch.name}` : `${cityMatch.city}, ${cityMatch.name}`;
  }

  return trimmed;
}

async function getWeather() {
  const city = resolveLocationQuery(document.getElementById("city").value);
  result.innerHTML = '<p class="loading">Loading weather...</p>';

  if (!city) {
    result.innerHTML = '<p class="error">Please enter a city name.</p>';
    return;
  }

  try {
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=imperial`
    );
    const currentData = await currentResponse.json();

    if (!currentResponse.ok) {
      throw new Error(currentData.message || "City not found");
    }

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${apiKey}&units=imperial`
    );
    const forecastData = await forecastResponse.json();
    const forecastMarkup = buildForecastMarkup(forecastData.list, forecastData.city.timezone);
    let airQuality = null;
    let airQualityError = "";
    try {
      airQuality = await getAirQuality(currentData.coord.lat, currentData.coord.lon);
    } catch (error) {
      airQualityError = error.message;
    }

    const outfitMarkup = buildOutfitMarkup(
      currentData.main.temp,
      currentData.main.humidity,
      (currentData.rain?.["1h"] || 0) + (currentData.snow?.["1h"] || 0),
      currentData.weather[0].description
    );

    const card = formatWeatherCard(currentData.name, currentData, airQuality, airQualityError);

    // Set background based on weather
    setWeatherBackground(currentData.weather[0].icon, currentData.weather[0].description);

    currentView = "focused";
    currentSelection = { stateName: currentData.name, cityName: currentData.name };
    result.innerHTML = `
      <div class="focused-view">
        <button class="back-button" type="button">← Back to all states</button>
        <div class="selectable-card" data-state-name="${currentData.name}" data-city-name="${currentData.name}">
          <article class="featured-card">${card}${forecastMarkup}${outfitMarkup}</article>
        </div>
      </div>
    `;
  } catch (error) {
    result.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

async function getAllWeather() {
  result.innerHTML = '<p class="loading">Loading state capitals...</p>';
  currentView = "main";
  currentSelection = null;

  try {
    const cards = [];

    for (const state of states) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(state.city)}&appid=${apiKey}&units=imperial`
      );
      const data = await response.json();

      if (!response.ok) {
        continue;
      }

      cards.push(
        wrapCardWithSelection(
          `
            ${formatWeatherCard(
              `${state.name} - ${state.city}`,
              data
            )}
            ${buildCityButtonMarkup(state.name, state.city)}
          `,
          state.name,
          state.city
        )
      );
    }

    result.innerHTML = `<div class="results-grid">${cards.join("")}</div>`;
    
    // Reset to default background when showing all states
    document.body.classList.remove(
      "weather-sunny",
      "weather-cloudy",
      "weather-rainy",
      "weather-snowy",
      "weather-foggy",
      "weather-stormy",
      "weather-night"
    );
    document.body.classList.add("weather-cloudy");
  } catch (error) {
    result.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

function handleResultClick(event) {
  const cityButton = event.target.closest(".city-link");
  if (cityButton) {
    const stateName = cityButton.dataset.stateName;
    const cityName = cityButton.dataset.cityName;
    showSingleWeather(stateName, cityName);
    return;
  }

  const card = event.target.closest(".selectable-card");
  if (!card) {
    if (event.target.closest(".back-button")) {
      getAllWeather();
    }
    return;
  }

  const stateName = card.dataset.stateName;
  const cityName = card.dataset.cityName;

  if (currentView === "focused" && currentSelection && currentSelection.stateName === stateName && currentSelection.cityName === cityName) {
    getAllWeather();
    return;
  }

  showSingleWeather(stateName, cityName);
}

async function showSingleWeather(stateName, cityName) {
  result.innerHTML = '<p class="loading">Loading weather...</p>';
  currentView = "focused";
  currentSelection = { stateName, cityName };

  try {
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(`${cityName}, ${stateName}`)}&appid=${apiKey}&units=imperial`
    );
    const currentData = await currentResponse.json();

    if (!currentResponse.ok) {
      throw new Error(currentData.message || "Location not found");
    }

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${apiKey}&units=imperial`
    );
    const forecastData = await forecastResponse.json();
    const forecastMarkup = buildForecastMarkup(forecastData.list, forecastData.city.timezone);
    let airQuality = null;
    let airQualityError = "";
    try {
      airQuality = await getAirQuality(currentData.coord.lat, currentData.coord.lon);
    } catch (error) {
      airQualityError = error.message;
    }

    const card = formatWeatherCard(currentData.name, currentData, airQuality, airQualityError);

    const outfitMarkup = buildOutfitMarkup(
      currentData.main.temp,
      currentData.main.humidity,
      (currentData.rain?.["1h"] || 0) + (currentData.snow?.["1h"] || 0),
      currentData.weather[0].description
    );

    // Set background based on weather
    setWeatherBackground(currentData.weather[0].icon, currentData.weather[0].description);

    result.innerHTML = `
      <div class="focused-view">
        <button class="back-button" type="button">← Back to all states</button>
        <div class="selectable-card" data-state-name="${stateName}" data-city-name="${cityName}">
          <article class="featured-card">${card}${forecastMarkup}${outfitMarkup}</article>
        </div>
        ${buildCityButtonMarkup(stateName, cityName)}
      </div>
    `;
  } catch (error) {
    result.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  populateStateSuggestions();
  result.addEventListener("click", handleResultClick);
  getAllWeather();
});
