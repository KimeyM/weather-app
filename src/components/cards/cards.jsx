import React from 'react';
import './cards.css';
import Card from '../card/card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <section>
      {cities.map((c, index) => <Card
          key={index}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          wind={c.wind}
          weather={c.weather}
          clouds={c.clouds}
          humidity={c.humidity}
          visibility={c.visibility}
          feelslike={c.feelslike}
          country={c.country}
          onClose={() => onClose(c.id)}
        /> )}
    </section>
  );
}
