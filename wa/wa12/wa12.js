const apiKey = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=b96874fbf9e1fbea07b4849dbd39a266';
   
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

