import React, {useState} from 'react'
import './nav.css'

export default function Nav({onSearch}) {

  const [city, setCity] = useState("");

  return (
    <nav style={{backgroundColor:'var(--middleblue)'}}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input type="submit" value="Agregar" />
      </form>
    </nav>
  )
}
