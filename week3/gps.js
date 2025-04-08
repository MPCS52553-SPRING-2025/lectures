// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#get-location").addEventListener("click", function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(receiveCoordinates)
  })
})

function receiveCoordinates(obj) {
  console.log(obj)
  const img = document.querySelector("#photo img")
  img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + obj.coords.latitude + "," + obj.coords.longitude + "&zoom=17&size=600x400&maptype=satellite&key=AIzaSyCCP20OMYfZgUwnj0636yv9EA74jG3u8ys"
}

// <img src="https://maps.googleapis.com/maps/api/staticmap?center=48.858400, 2.294500&zoom=17&size=600x400&maptype=satellite&key=AIzaSyCCP20OMYfZgUwnj0636yv9EA74jG3u8ys">