import React from 'react'
import './header.css'
import k from '../../assets/logo.png'


export default function Header() {
  return (
    <header>
      <div className='containerHeader'>
        <figure>
          <img src={k} alt="" />
        </figure>
        <h4>Weather App</h4>
      </div>
    </header>
  )
}
