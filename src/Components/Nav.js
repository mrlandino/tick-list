import React from 'react'
import '../styles/Nav.scss'
import { Route, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div>
        <h1>Tick List</h1>
      </div>
      <Route path='/:id' render={() => <NavLink to="/"><button className='home'>HOME</button></NavLink>} />
    </nav>
  )
}

