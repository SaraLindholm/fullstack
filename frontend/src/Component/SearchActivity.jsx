import React, { useState} from 'react'
import DropdownActivity from './DropdownActivity'



function SearchActivity ({onSearch}) {
    const [searchTerm, setSearchTerm] = useState ('')

    const handleChange = (event) => {
      setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      onSearch(searchTerm)
      console.log('sökt på:', searchTerm)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input className='Button'
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Sök"
      />
      <button className='Button' type="submit">Sök aktivitet</button>
       {/* <DropdownActivity /> */}
    </form>
  )

}

export default SearchActivity
