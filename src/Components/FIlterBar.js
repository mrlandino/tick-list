import React, { useState } from 'react'
import '../styles/FilterBar.scss'
import PropTypes from 'prop-types';

export default function FilterBar({filterClimbs}) {
  const [location, setLocation] = useState('')
  const [grade, setGrade] = useState('')
  const [completed, setCompleted] = useState('')
  
  const handleLocation = (event) => {
    setLocation(event.target.value)
  }

  const handleGrade = (event) => {
    setGrade(event.target.value)
  }

  const handleCompleted = (event) => {
    setCompleted(event.target.value)
  }

  const updatePage = () => {
    filterClimbs(location, grade, completed)
  }

  const resetFilters = () => {
    setGrade('')
    setCompleted('')
    setLocation('')
    filterClimbs('', '', '')
  }
  return (
        <div className="filter-bar">
            <select className="dropdown-filter-input1" onChange={handleCompleted} value={completed}>
              <option tabIndex="0" className="type-hover" value="">All Climbs</option>
              <option tabIndex="0" className="type-hover" value="completed">Completed</option>
              <option tabIndex="0" className="type-hover" value="project">Projects</option>
            </select>
            <select className="dropdown-filter-input2" onChange={handleLocation} value={location}>
              <option tabIndex="0" className="type-hover" value="">All Locations</option>
              <option tabIndex="0" className="type-hover" value="Boone, NC">Boone, NC</option>
              <option tabIndex="0" className="type-hover" value="RockTown, GA">RockTown, GA</option>
              <option tabIndex="0" className="type-hover" value="Chatanooga, TN">Chatanooga, TN</option>
            </select>
            <div className="select-grade-container" onChange={handleGrade} value={grade}>
              <input className="select-grade-input" placeholder="Grade" type="number" min="0" name="grade-selection"></input>
            </div>
          <button className="search-button" onClick={updatePage}>Search</button>
          <button className="reset-button" onClick={resetFilters}>Reset All</button>
        </div>
  )
}

FilterBar.propTypes = {
  filterClimbs: PropTypes.func
}