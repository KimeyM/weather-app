import React from 'react';
import './card.css';

export default function Card ({min, max, name, img, onClose, country, wind, weather, clouds, humidity, visibility, feelslike}) {
    return (
        <article>
          <div className="containerCard">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <button className='btnClose' onClick={onClose}>x</button>
                        <h5 className='cardName'>{name}</h5>
                        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="100" height="100" alt="" />
                        <div className='cardMinMax'><p>Min {min}° </p><p> Max {max}°</p></div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                    <p><span>Clima:</span> {weather}</p>
                    <p><span>Sensación térmica:</span> {feelslike}°C</p>
                    <p><span>Nubosidad:</span> {clouds}%</p>
                    <p><span>Viento:</span> {wind} km/h</p>
                    <p><span>Humedad:</span> {humidity}%</p>
                    <p><span>Visibilidad:</span> {visibility} km</p>
                    </div>
                </div>
            </div>
        </div>

        </article>
      );
};
