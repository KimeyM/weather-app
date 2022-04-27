import React, { useState } from "react";
import './searchBar.css';

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");
  
  return (
    <form 
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
      <input
        className="inputSearch"
        placeholder="Buscar ciudad"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="inputBtn" type="submit" value="➜" />
    </form>
  );
}
