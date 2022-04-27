import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Nav from '../components/nav/nav.jsx';
import Cards from '../components/cards/cards.jsx';
import Footer from '../components/footer/footer';
import swal from 'sweetalert';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(res => res.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: (Math.round(recurso.main.temp_min)/10),
            max: (Math.round(recurso.main.temp_max)/10),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            humidity: recurso.main.humidity,
            visibility: (recurso.visibility/1000),
            feelslike: (Math.round(recurso.main.feels_like)/10),
            country: recurso.sys.country,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          swal("Ciudad no encontrada", "Intenta con otra", "warning");
        }
      });
  }
  
  return (
    <div className="App">
      <h1 className='h1home' style={{width:'1000px', textAlign:'center', marginRight:'auto', marginLeft:'auto', marginTop:'100px', position:'relative'}}>Consulta el clima de las diferentes ciudades del mundo desde la barra de búsqueda!</h1>
      <Route path="/" render={()=><Nav onSearch={onSearch}/>}/>
      <Route exact path="/" render={()=><Cards cities={cities} onClose={onClose}/>}/>
      <Route path="/" render={()=><Footer />} />
    </div>
  );
}

export default App;
