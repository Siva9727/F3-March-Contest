const getLocationBtn = document.getElementById('getLocationBtn');
const removeLocationBtn = document.getElementById('removeLocationBtn');
const mapDiv = document.getElementById('map');

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  localStorage.setItem('lat', lat);
  localStorage.setItem('long', long);

  showMap(lat, long);
  getLocationBtn.disabled = true;
}

function showMap(lat, long) {
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAaufvQ-oP2uFyyPR-AZlct2oTVaSKxVc8&center=${lat},${long}&zoom=15`;

  mapDiv.innerHTML = `<iframe width="100%" height="100%" frameborder="0" style="border:0" src="${mapUrl}" allowfullscreen></iframe>`;
}

function removeLocation() {
  localStorage.removeItem('lat');
  localStorage.removeItem('long');
  mapDiv.innerHTML = '';
  getLocationBtn.disabled = false;
}

getLocationBtn.addEventListener('click', getLocation);
removeLocationBtn.addEventListener('click', removeLocation);

if (localStorage.getItem('lat') && localStorage.getItem('long')) {
  const lat = localStorage.getItem('lat');
  const long = localStorage.getItem('long');
  showMap(lat, long);
  getLocationBtn.disabled = true;
}
