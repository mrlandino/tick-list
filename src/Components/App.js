import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Climbs from './Climbs'
import Nav from './Nav'
import Form from './Form'
import { getClimbs } from '../apiCalls'
import '../styles/App.scss'


export default function App() {
  const [allClimbs, setAllClimbs] = useState([])
  const [error, setError] = useState(false)
  
  useEffect(() =>{
    getClimbs()
    .then(data => setAllClimbs(data.climbs))
    .catch(err => setError(true))
  })

  const updateError = () => {
    setError(false)
  }

  return (
    <main className="main-content">
      <Nav />
      <Route exact path="/" render= {() => <Climbs allClimbs={allClimbs} />} />
    </main>
  )
}


