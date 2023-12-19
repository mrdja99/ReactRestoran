import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

function NavBar() {

  return (
      <div className="navBar">
        <a>Restoran</a>
        <div className="menu">
          <Link to="/">Pocetna</Link>
          <Link to='/jelovnik'>Jelovnik</Link>
          <Link to='/onama'>O nama</Link>
          <Link to='/kontakt'>Kontakt</Link>
        </div>
      </div>
  )
}

export default NavBar;