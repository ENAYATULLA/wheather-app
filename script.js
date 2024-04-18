document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const locationInput = document.getElementById('location-input').value;
        getWeatherData(locationInput);
    });
});

async function getWeatherData(location) {
    try {
        const apiKey = '3EaA7WMapSegoAmqtRDKzzIp1ZlDWI5N'; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        console.log('API URL:', apiUrl); // Log API URL for debugging

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('API Response:', data); // Log API response for debugging

        if (data.cod === 200) {
            displayWeatherData(data);
        } else {
            alert('Invalid location. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
