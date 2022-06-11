import React from 'react';
import '../styles/Climb.scss';
import { NavLink } from 'react-router-dom';
// import { SassColor } from 'sass';

export default function Climb({name, id, grade, location, completed}) {
  return (
    <NavLink to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="climb">
        <div className="climb-text">
          <h3>{name}</h3>
          <p>{`V${grade}`}</p>
          <p>{location}</p>
          {completed ? <p className='completed'>Completed</p> : <p className='project'>Project</p>}
        </div>
      </div>
    </NavLink>
  )
}