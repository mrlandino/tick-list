import React, { useState, useEffect } from "react"
import '../styles/ClimbDetails.scss'
import PropTypes from 'prop-types';

export default function ClimbDetails({currentClimb, allClimbs, updateCompletedData, patchClimbChange,deleteClimb}) {
const [climb, setClimb] = useState({name:'test', grade:'test', location:'test', video:''})

useEffect(() => {
  const thisClimb = allClimbs.reduce((acc, climb) => {
    if(climb.id === currentClimb) {
      acc = climb;
    }
    return acc;
    }, {})
  setClimb(thisClimb)
}, [allClimbs]) 

const updateCompleted = (event) => {
  setClimb({...climb, completed: event.target.checked})
  updateCompletedData(climb, event.target.checked)
  patchClimbChange({"completed": event.target.checked, "id": Number(climb.id)})
}

const handleDelete = () => {
  console.log(Number(climb.id))
  deleteClimb({"id": Number(climb.id)})
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
              <p className='climb-location'>{climb.location}</p>
              <p className='climb-grade'>{`V${climb.grade}`}</p>

            </div>
            <div className="completed-container">
              <label>Completed</label>
              <input className='completed-input' type='checkbox' onChange={updateCompleted} checked={!!climb.completed}/>
              {/* <button className='delete-button' onClick={handleDelete}>Delete</button> */}
            </div>
          </section>
      </div>
    </div>
  )
}

ClimbDetails.propTypes = {
  currentClimb: PropTypes.string,
  allClimbs: PropTypes.array,
  updateCompletedData: PropTypes.func,
  patchClimbChange: PropTypes.func,
  deleteClimb: PropTypes.func
}