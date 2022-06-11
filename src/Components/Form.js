import React, { useState }  from 'react'
import '../styles/Form.scss'

export default function Form() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [grade, setGrade] = useState('')
    const [video, setVideo] = useState('')
    

    const handleChangeName = (event) => {
      setName(event.target.value)
    }

    const handleChangeLocation = (event) => {
      setLocation(event.target.value)
    }

    const handleChangeGrade = (event) => {
      setGrade(event.target.value)
    }

    const handleChangeVideo = (event) => {
      setVideo(event.target.value)
    }

    const addClimb = (event) => {
        event.preventDefault()
        const newClimb = {
            id: Date.now(),
            ...this.state
        }
        addClimb(newClimb)
        clearInputs()
    }
    
    const clearInputs = () => {
        setName('')
        setLocation('')
        setGrade('')
    }

    return (
          <form className='climb-form'>
              <h2>Add New Climb</h2>
              <input
                type= 'text'
                placeholder= 'Name'
                name= 'name'
                value= {name}
                onChange={event => handleChangeName(event)}
            />

              <select className="dropdown-filter-input" onChange={event => handleChangeLocation(event)} value={location}>
                <option tabIndex="0" className="type-hover" value="none">-Select Location-</option>
                <option tabIndex="0" className="type-hover" value="Boone, NC">Boone, NC</option>
                <option tabIndex="0" className="type-hover" value="RockTown, GA">RockTown, GA</option>
                <option tabIndex="0" className="type-hover" value="Chatanooga, TN">Chatanooga, TN</option>
              </select>
              <input
                type= 'number'
                min="0"
                placeholder= 'V Grade'
                name= 'grade'
                value= {grade}
                onChange={event => handleChangeGrade(event)}
            />
            <input
                type= 'text'
                placeholder= 'Video URL'
                name= 'video'
                value= {video}
                onChange={event => handleChangeVideo(event)}
            />
            <button className= 'climb-button' onClick={event => addClimb(event)}>Add Climb</button>
          </form>
    )
}

