import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Climbs from './Climbs'
import Nav from './Nav'
import ClimbDetails from './ClimbDetails'
import { getClimbs, postClimb, patchClimb, deleteSelectedClimb } from '../apiCalls'
import '../styles/App.scss'


export default function App() {
  const [allClimbs, setAllClimbs] = useState([])
  const [allFilteredClimbs, setAllFilteredClimbs] = useState('')
  const [noClimbs, setNoClimbs] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() =>{
    getClimbs()
    .then(data => setAllClimbs(data.climbs))
    .catch(err => setError(true))
  },[])

  const filterClimbs = (location, grade, completed) => {
    // console.log(location, grade, completed)
    let updateClimbs = allClimbs;
    if(location) {
      updateClimbs = updateClimbs.filter(climb => {
       return climb.location === location;
      })
    }

    if(grade) {
      updateClimbs = updateClimbs.filter(climb => {
        // console.log(climb.grade, grade)
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

    if(updateClimbs.length === 0) {
      setNoClimbs(true)
    }else if (updateClimbs.length > 0) {
      setNoClimbs(false)
    }
    // console.log(updateClimbs)
    setAllFilteredClimbs(updateClimbs)
  }
  
  // const updateError = () => {
  //   setError(false)
  // }

  const updateCompletedData = (climb, checked) => {
    setAllClimbs(allClimbs.map(climb1 => climb1.id === climb.id ? {...climb1, completed: checked} : climb1))
    if (allFilteredClimbs) {
      setAllFilteredClimbs(allFilteredClimbs.map(climb1 => climb1.id === climb.id ? {...climb1, completed: checked} : climb1))
    }
  }

  const addNewClimb = (newClimb) => {
    postClimb(newClimb)
    .then(data => setAllClimbs(data))
    .catch(err => setError(true))
  }

  const patchClimbChange = (climbChange) => {
    patchClimb(climbChange)
    .then(data => setAllClimbs(data))
    .catch(err => setError(true))
  }

  const deleteClimb = (climbToDelete) => {
    console.log(climbToDelete)
    deleteSelectedClimb(climbToDelete)
    .then(data => setAllClimbs(data))
    .catch(err => setError(true))
  }

  return (
    <main className="main-content">
      <Nav />
      {error && <Redirect to="/error" />}
      {!allFilteredClimbs && (<Route exact path="/" render= {() => <Climbs allClimbs={allClimbs} filterClimbs={filterClimbs} noClimbs={noClimbs} addNewClimb={addNewClimb} />} />)}
      {allFilteredClimbs && (<Route exact path="/" render= {() => <Climbs allClimbs={allFilteredClimbs} filterClimbs={filterClimbs} noClimbs={noClimbs} addNewClimb={addNewClimb} />} />)}
      <Route exact path="/error" render= {() => <h3 className='error'>Something went wrong, Please try again later.</h3>} />
      {!error && (<Route exact path='/:id' render={({ match }) => {
          return <ClimbDetails currentClimb={match.params.id} allClimbs={allClimbs} updateCompletedData={updateCompletedData} patchClimbChange={patchClimbChange} deleteClimb={deleteClimb} />
        }} />)}
    </main>
  )
}


