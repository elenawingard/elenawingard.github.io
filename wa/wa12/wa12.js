


    // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=b96874fbf9e1fbea07b4849dbd39a266';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    function getWeather() {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
      }

      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(`${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
          const data = await response.json();

          const weatherInfo = `Temperature: ${data.main.temp}°C, Description: ${data.weather[0].description}`;
          document.getElementById('result').innerText = weatherInfo;
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }, (error) => {
        console.error('Error getting location:', error);
      });
    }

    function getLocation() {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
      }

      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const locationInfo = `Latitude: ${latitude}, Longitude: ${longitude}`;
        document.getElementById('result').innerText = locationInfo;
      }, (error) => {
        console.error('Error getting location:', error);
      });
    }

