import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import ActivityList from './ActivityList';

function DropdownActivity() {
  return (
    <Dropdown>
      <Dropdown.Toggle style={{ backgroundColor: '#ffffff', color: '#0c0c0c' }}id="dropdown-basic">
        Kategorier:
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item as={Link} to="/mat">Mat</Dropdown.Item>
        <Dropdown.Item as={Link} to="/musik">Musik</Dropdown.Item>
        <Dropdown.Item as={Link} to="/pyssel">Pyssel</Dropdown.Item>
        <Dropdown.Item as={Link} to="/lek">Lek</Dropdown.Item>
        <Dropdown.Item as={Link} to="/skarmtid">Skärmtid</Dropdown.Item>
        <Dropdown.Item as={Link} to="/sport">Sport</Dropdown.Item>
         <Dropdown.Item as={Link} to="/vatten">Vatten</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );


}

export default DropdownActivity;
