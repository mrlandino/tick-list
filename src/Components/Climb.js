import React from 'react';
import '../styles/Climb.scss';
import { NavLink } from 'react-router-dom';

export default function Climb({name, id, grade, location}) {
  return (
    <NavLink to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="climb">
        <h3>{name}</h3>
        <p>{`V${grade}`}</p>
        <p>{location}</p>
        <input type="checkbox"/>
      </div>
    
    </NavLink>
  )
}