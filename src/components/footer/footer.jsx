import React from 'react'
import './footer.css'
import Logo from '../../img/logo.png';


export default function Footer() {
  return (
    <footer>
      <h3>Hecho por <br /> <a href="https://kimey-mastrangelo.vercel.app/" target="_blank"  rel="noreferrer" style={{color:'var(--darkblue)', fontWeight:'900', marginLeft:'5px'}}>Kimey Mastrángelo</a></h3>
      <img src={Logo} width="30" height="30" alt="" />
    </footer>
  )
}
