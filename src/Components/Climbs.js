import React from 'react';
import Climb from './Climb';
import Form from './Form'
import '../styles/Climbs.scss'

export default function Climbs({allClimbs}) {
  const climbCards = allClimbs.map(climb => {
    return (
      <Climb
        name={climb.name}
        id={climb.id}
        key={climb.id}
        grade={climb.grade}
        location={climb.location}
        />
    )
  })

  return (
    <div className='main-container'>
      <div className="climbs-container">
        {climbCards}
      </div>
      <Form /> 
    </div>
  )
}