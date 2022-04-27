import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

export default function Card({min, max, name, img, onClose, id}) {
  return (
    <article className='containerCard'>
      <button onClick={onClose}>X</button>
        <Link to={`/city/${id}`}>
          <h5>{name}</h5>
        </Link>
        <p>Min</p>
        <p>{min}°</p>
        <p>Max</p>
        <p>{max}°</p>
        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
    </article>
  )
}
