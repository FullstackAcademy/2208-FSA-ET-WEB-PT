import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = window.accessToken; 

let markers = [];

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

const addMarkersToMap = ({ reservations, restaurants })=> {
  //map logic - remove markers
  markers.forEach(marker => {
    marker.remove();
  });

  //generate new set of markers
  markers = reservations.map( reservation => {
    const restaurant = restaurants.find( restaurant => restaurant.id === reservation.restaurantId);
    return new mapboxgl.Marker()
      .setLngLat(restaurant.location)
  });
  //create a bounds box
  const bounds = new mapboxgl.LngLatBounds();

  //add markers to map
  markers.forEach( marker => {
    marker.addTo(map)
    bounds.extend(marker.getLngLat());
  });

  if(markers.length){
    map.fitBounds(bounds);
  }
  else {
    //center with first restaurant
    map.setCenter(restaurants[0].location);
  }
}

export { addMarkersToMap };
