import React, { useState} from 'react'
import DropdownActivity from './DropdownActivity'

function SearchActivity ({props}/*{onSearch}*/) {
    const [searchTerm, setSearchTerm] = useState ('')
    console.log(props)
    const handleChange = (event) => {
      setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      // onSearch(searchTerm)
      props.handleSearch(searchTerm)
      console.log('sökt på:', searchTerm)
    }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
      <input className='Button'
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Sök"
      />
      <button className='Button' type="submit">Sök aktivitet</button>
    </form>
    <DropdownActivity setFilterActivities={props.setFilterActivities}/> </div>
  )

}

export default SearchActivity
