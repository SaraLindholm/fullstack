import { useState, useEffect } from "react"
import SearchActivity  from "./SearchActivity";
import OutdoorCheckbox from "./OutdoorCheckbox";

import { FaScissors } from "react-icons/fa6";
import { FaSun } from 'react-icons/fa'
import { RiCake3Line } from "react-icons/ri";
import { GiFilmProjector } from "react-icons/gi";
import { IoMusicalNotesOutline, IoWaterOutline } from "react-icons/io5";

import './FetchData.css'

function FetchData() {
  const [activities, setActivities] = useState ([]) // usestate för aktiviteter samt för de filterade aktiviterna
  const [filteredActivities, setFilterActivities] = useState ([])
  const [showOutdoorOnly, setShowOutdoorOnly] = useState (false)

  useEffect (() => {
    fetchActivities()
  }, []);

  useEffect(() =>{
    filterActivities ()
  }, [showOutdoorOnly, activities])


  const fetchActivities = () => {
  fetch('http://localhost:8080/')
    .then((response) => response.json())
    .then((data) => {
      setActivities(data); //uppdaterar aktiviteter
      setFilterActivities(data) //uppdaterar filterade aktiviteter
      console.log(data)
    })
    .catch((error) =>{
      console.error('Error vid inhämtning av data:', error) //visar medelande i konsolen vid fel
    })
  }

  const handleCheckboxChange =() =>{
    setShowOutdoorOnly(!showOutdoorOnly)
  }

  const filterActivities = () => {
    let filtered = activities
    if (showOutdoorOnly) {
      filtered = activities.filter((activity) => activity.outdoor === 1)
    }
    setFilterActivities(filtered)
  }


  const handleSearch = (searchTerm) => {
    // console.log("Sökterm:", searchTerm);
    const filtered = activities.filter((activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilterActivities(filtered)
  }

  return (
    <>
      <div className="FetchData-Container">
        <h2>Sök efter en specifik aktivitet:</h2>
        <SearchActivity props={{handleSearch, setFilterActivities}} />
        <OutdoorCheckbox checked={showOutdoorOnly} onChange={handleCheckboxChange} />
        <div className="Fetch-Div">
          {filteredActivities.length === 0 && (<p className="Fetch-Serch-Error">
            Det fanns inga aktiviteter som matchade med sökningen </p>)
          }
          {filteredActivities.map(activity => (
            <div key={activity.id} className="Fetch-Div-Card">
              <h4>
              {activity.category === 'mat' && <RiCake3Line /> }
              {activity.category === 'musik' && <IoMusicalNotesOutline /> }
              {activity.category === 'vatten' && <IoWaterOutline /> }
              {activity.category === 'skärmtid' && <GiFilmProjector /> }
              {activity.category === 'lek' && <FaSun  /> }
              {activity.category === 'pyssel' && <FaScissors /> }
              {activity.title}</h4>
              <p>{activity.description}</p>
              <p className="Fetch-Card-Material">
              <b>Material som behövs: </b>
              {activity.materials}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FetchData
