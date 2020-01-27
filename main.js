
// Map

var myMap = L.map('map').setView([47.218371, -1.553621], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWJrNzYiLCJhIjoiY2p2eTNwM3lnMGF3MDRhbXJibnBlcHM4dyJ9.OgQ90LtvCO9qbM5ctoKpSg', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWJrNzYiLCJhIjoiY2p2eTNwM3lnMGF3MDRhbXJibnBlcHM4dyJ9.OgQ90LtvCO9qbM5ctoKpSg'
}).addTo(myMap);




//  Recovery lat and long for the marker

display = (answer) => {

    const tableauContrat = JSON.parse(answer);

    tableauContrat.forEach( (contrat) =>
      {
        // function click on marker
      var onMarkerClick = function (e)
        {
          let id = this.options.myId;
          ajaxGet(`https://api.jcdecaux.com/vls/v3/stations/${id}?contract=nantes&apiKey=28b0fb05678c8dbbccf28ee6cd3b1771fc560c43`, displayStationInfo)

        }
          // Add new marker
      const marker = new L.marker([contrat.position.lat, contrat.position.lng], {myId: contrat.number});
      marker.bindPopup(`Station ${contrat.number}`);
       // add the function for the marker
      marker.on('click', onMarkerClick);
      // add marker on the map
      marker.addTo(myMap);
      });
}
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=28b0fb05678c8dbbccf28ee6cd3b1771fc560c43", display)

//  function for recover the station info
function displayStationInfo(answer)
{
      const infoStation = JSON.parse(answer);

      const spanAddress = document.getElementById("address");
      spanAddress.textContent = `adresse : ${infoStation.address}`;

      const spanPlace = document.getElementById("place");
      spanPlace.textContent = ` ${infoStation.totalStands.availabilities.stands} places`;

      const spanBike = document.getElementById("bike");
      spanBike.textContent = ` ${infoStation.totalStands.availabilities.bikes} vélos `;


}




