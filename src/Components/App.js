import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Climbs from './Climbs'
import Nav from './Nav'
import ClimbDetails from './ClimbDetails'
import { getClimbs } from '../apiCalls'
import '../styles/App.scss'


export default function App() {
  const [allClimbs, setAllClimbs] = useState([])
  const [allFilteredClimbs, setAllFilteredClimbs] = useState('')
  const [error, setError] = useState(false)

  useEffect(() =>{
    getClimbs()
    .then(data => setAllClimbs(data.climbs))
    .catch(err => setError(true))
  },[])

  const filterClimbs = (location, grade, completed) => {
    console.log(location, grade, completed)
    let updateClimbs = allClimbs;
    if(location) {
      updateClimbs = updateClimbs.filter(climb => {
       return climb.location === location;
      })
    }

    if(grade) {
      updateClimbs = updateClimbs.filter(climb => {
        console.log(climb.grade, grade)
        return climb.grade === Number(grade);
       })
    }

    if(completed === "project") {
      updateClimbs = updateClimbs.filter(climb => {
        return climb.completed === false;
       })
    }
    
    if(completed === "completed") {
      updateClimbs = updateClimbs.filter(climb => {
        return climb.completed === true;
       })
    }
    
    setAllFilteredClimbs(updateClimbs)
  }
  
  const updateError = () => {
    setError(false)
  }

  return (
    <main className="main-content">
      <Nav />
      {!allFilteredClimbs && (<Route exact path="/" render= {() => <Climbs allClimbs={allClimbs} filterClimbs={filterClimbs}/>} />)}
      {allFilteredClimbs && (<Route exact path="/" render= {() => <Climbs allClimbs={allFilteredClimbs} filterClimbs={filterClimbs}/>} />)}
      <Route exact path='/:id' render={({ match }) => {
          return <ClimbDetails currentClimb={match.params.id} allClimbs={allClimbs}/>
        }} />
    </main>
  )
}


