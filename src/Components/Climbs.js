import React from 'react';
import Climb from './Climb';
import Form from './Form'
import FilterBar from './FIlterBar'
import '../styles/Climbs.scss'

export default function Climbs({allClimbs, filterClimbs}) {
  const climbCards = allClimbs.map(climb => {
    return (
      <Climb
        name={climb.name}
        id={climb.id}
        key={climb.id}
        grade={climb.grade}
        location={climb.location}
        completed={climb.completed}
        />
    )
  })

  return (
    <div>
      <FilterBar filterClimbs={filterClimbs}/>
      <div className='main-container'>
        <div className="climbs-container">
          {climbCards}
        </div>
        <Form /> 
      </div>
    </div>
  )
}