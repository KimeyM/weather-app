import React from 'react'
import './cards.css'
import Card from '../card/card'

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
          onClose={() => onClose(c.id)}
        /> )}
    </section>
  )
}
