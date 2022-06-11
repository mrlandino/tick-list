import React, { useState, useEffect } from "react"
import '../styles/ClimbDetails.scss'
// import { } from '../apiCalls.js'

export default function ClimbDetails({currentClimb, allClimbs, updateCompletedData}) {
const [climb, setClimb] = useState({name:'test', grade:'test', location:'test', video:''})

useEffect(() => {
  console.log("REDUCE", allClimbs)
  const thisClimb = allClimbs.reduce((acc, climb) => {
    if(climb.id === currentClimb) {
      acc = climb;
    }
    return acc;
    }, {})
  setClimb(thisClimb)
}, [allClimbs]) 

const updateCompleted = (event) => {
  console.log(event.target.checked)
  console.log(climb.completed)
  console.log("UPDATE COMPLETED",allClimbs)
  setClimb({...climb, completed: event.target.checked})
  updateCompletedData(climb, event.target.checked)
  // setAllClimbs({...allClimbs[climb -1],completed: event.target.checked })
}

  return (
    <div className="climb-details-container">
      <div className="card-container">
          <section className="video-container">
            <iframe 
            width="650" 
            height="400" 
            src={!climb.video ? 'https://www.youtube.com/embed/lnvyC9q0XB8' : climb.video} title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          
          </section>
          <section className="climb-details">
            <h2 className="climb-name">{climb.name}</h2>
            <div>
              <p>{climb.location}</p>
              <p>{`V${climb.grade}`}</p>

            </div>
            <div>
              <label>Completed</label>
              <input type='checkbox' onChange={updateCompleted} checked={!!climb.completed}/>
            </div>
          </section>
      </div>
    </div>
  )
}
