import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
// import { Link } from 'react-router-dom';
import { useState } from "react"

function DropdownActivity({setFilterActivities}) {
  console.log(setFilterActivities)
  const [category, setCategory] = useState (null)

  const activityCategories = async (category) => {

    console.log('activityCategories anropades med kategori:', category);
  fetch(`http://localhost:8080/activityView/${category}`)
    .then(response => {
      if (!response.ok) {
        console.error('Något gick fel vid filtreringen')
        throw new Error('Något är feeeeeeeeel')
      }
      //här uppstår felet. vet inte vad dock?
      console.log('Felet uppstår här?')
      console.log(response)
      return response.json()

    })
    .then (data => {
      console.log('Data hämtad från servern:', data)
      // setCategory(data)
      setFilterActivities(data)
    })
    .catch((error) => {
      console.error('Något gick fel', error)
    })
  }
  return (
    <Dropdown onSelect={activityCategories}>
      <Dropdown.Toggle style={{ backgroundColor: '#ffffff', color: '#0c0c0c' }}id="dropdown-basic">
        Kategorier:
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item eventKey="mat">Mat</Dropdown.Item>
        <Dropdown.Item eventKey="musik">Musik</Dropdown.Item>
        <Dropdown.Item eventKey="pyssel">Pyssel</Dropdown.Item>
        <Dropdown.Item eventKey="lek">Lek</Dropdown.Item>
        <Dropdown.Item eventKey="skärmtid">Skärmtid</Dropdown.Item>
        <Dropdown.Item eventKey="sport">Sport</Dropdown.Item>
         <Dropdown.Item eventKey="vatten">Vatten</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );


}

export default DropdownActivity;
