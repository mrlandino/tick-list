import React from 'react';
import '../styles/Climb.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Climb({name, id, grade, location, completed}) {
  
  return (
    <NavLink to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="climb">
        <div className="climb-text">
          <h3>{name}</h3>
          <p>{location}</p>
          <p>{`V${grade}`}</p>
          {completed ? <p className='completed'>Completed</p> : <p className='project'>Project</p>}
        </div>
      </div>
    </NavLink>
  )
}

Climb.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  grade: PropTypes.number,
  location: PropTypes.string,
  completed: PropTypes.bool
}