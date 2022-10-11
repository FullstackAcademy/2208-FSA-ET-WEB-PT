import axios from 'axios';
import { addMarkersToMap } from './map';

const userList = document.querySelector('#userList');
const restaurantList = document.querySelector('#restaurantList');
const reservationList = document.querySelector('#reservationList');

const state = {
  users: [],
  restaurants: [],
  reservations: [],
  userId: ''
};

const render = ()=> {
  const { users, restaurants, reservations, userId } = state;
  let html = users.map( user => `
    <li class='${ state.userId*1 === user.id ? 'selected': ''}'>
      <a href='/#${user.id}'>
        ${ user.name }
      </a>
    </li>
  `).join('');
  userList.innerHTML = html;

  html = restaurants.map( restaurant => `
    <li data-id='${ restaurant.id }'>
      ${ restaurant.name }
      (${reservations.filter( reservation => reservation.restaurantId === restaurant.id ).length})
    </li>
  `).join('');
  restaurantList.innerHTML = html;

  html = reservations.map( reservation => `
    <li data-id='${reservation.id}'>
      ${ restaurants.find(restaurant => restaurant.id === reservation.restaurantId).name }
      <br />
      (
      ${new Date(reservation.createdAt).toLocaleDateString()}
      ${new Date(reservation.createdAt).toLocaleTimeString()}
      )
    </li>
  `).join('');
  reservationList.innerHTML = html;
  addMarkersToMap({ reservations, restaurants });


};

const init = async()=> {
  const usersResponse = await axios.get('/api/users');
  const userId = window.location.hash.slice(1);
  if(!userId){
    return window.location.hash = usersResponse.data[0].id;
  }
  state.userId = userId;
  const restaurantsResponse = await axios.get('/api/restaurants');
  state.users = usersResponse.data;
  state.restaurants = restaurantsResponse.data;
  const reservationsResponse = await axios.get(`/api/users/${userId}/reservations`);
  state.reservations = reservationsResponse.data;
  render();
};

reservationList.addEventListener('click', async(ev)=> {
  if(ev.target.tagName === 'LI'){
    const id = ev.target.getAttribute('data-id');
    const response = await axios.delete(`/api/reservations/${id}`);
    state.reservations = state.reservations.filter( reservation => reservation.id !== id*1);
    render();
  }
});

restaurantList.addEventListener('click', async(ev)=> {
  if(ev.target.tagName === 'LI'){
    const response = await axios.post(`/api/users/${state.userId}/reservations`, {
      restaurantId: ev.target.getAttribute('data-id')
    });
    state.reservations.push(response.data);
    render();
  }
});



window.addEventListener('hashchange', init);

init();
