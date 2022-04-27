// import React from 'react'
// import Header from '../header/header.jsx'
// import Cards from '../cards/cards.jsx'
// import Footer from '../footer/footer.jsx'
// import Nav from '../nav/nav.jsx'

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <Nav />
//       <Cards />
//       <Footer />
//     </div>
//   )
// }

import React, { useState } from 'react';
import Header from '../header/header.jsx'
import Nav from '../nav/nav.jsx'
import Cards from '../cards/cards.jsx'
import Footer from '../footer/footer.jsx'
// import City from '../components/City.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export default function Home() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div>
      <Header />
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
      <Footer />
      
      {/* <Route path={"/city/:cityID"} render={({match})=><City city={onFilter(match.params.cityID)}/>}/> */}
    </div>
  );
}
