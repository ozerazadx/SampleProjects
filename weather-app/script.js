document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');
    const apiKey = 'beab32c295d2c4ae69328e52e8dea85d';

    getWeatherBtn.addEventListener('click', () => {
        const cityName = cityInput.value.trim();
        if (cityName !== '') {
            getWeather(cityName);
            cityInput.value = '';
        }
    });

    async function getWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (data.cod === 200) {
                displayWeather(data);
            } else {
                weatherInfo.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
            }
        } catch (error) {
            console.error('Error:', error);
            weatherInfo.innerHTML = `<p>An error occurred while fetching weather data.</p>`;
        }
    }

    function displayWeather(data) {
        const { name, main, weather, wind } = data;
        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Temperature:</strong> ${main.temp}°C</p>
            <p><strong>Weather:</strong> ${weather[0].description}</p>
            <p><strong>Humidity:</strong> ${main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
        `;
    }
});
