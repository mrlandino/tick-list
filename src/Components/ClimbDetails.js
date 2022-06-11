import React, { useState, useEffect } from "react"
import '../styles/ClimbDetails.scss'
// import { } from '../apiCalls.js'

export default function ClimbDetails({currentClimb, allClimbs}) {
const [climb, setClimb] = useState({name:'test', grade:'test', location:'test', video:''})

useEffect(() => {
  const thisClimb = allClimbs.reduce((acc, climb) => {
    if(climb.id === currentClimb) {
      acc = climb;
    }
    return acc;
    }, {})
  setClimb(thisClimb)
},[]) 


  return (
    <div className="climb-details-container">
      <div className="card-container">
          <section className="video-container">
            <iframe 
            width="560" 
            height="315" 
            src={!climb.video ? 'https://www.youtube.com/embed/lnvyC9q0XB8' : climb.video} title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          
          </section>
          <section className="climb-details">
            <h2 className="climb-name">{climb.name}</h2>
            <p>{`V${climb.grade}`}</p>
          </section>
      </div>
    </div>
  )
}
