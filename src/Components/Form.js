import React, { useState }  from 'react'
import '../styles/Form.scss'

export default function Form() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [grade, setGrade] = useState('')
    // const [name, setName] = useState('')

    const handleChangeName = (event) => {
      setName(event.target.value)
    }

    const handleChangeLocation = (event) => {
      setLocation(event.target.value)
    }

    const handleChangeGrade = (event) => {
      setGrade(event.target.value)
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
              <input
                type= 'text'
                placeholder= 'Location'
                name= 'location'
                value= {location}
                onChange={event => handleChangeLocation(event)}
            />
              <input
                type= 'text'
                placeholder= 'Grade'
                name= 'grade'
                value= {grade}
                onChange={event => handleChangeGrade(event)}
            />
            <button className= 'climb-button' onClick={event => addClimb(event)}>Add New Climb</button>
          </form>
    )
}

