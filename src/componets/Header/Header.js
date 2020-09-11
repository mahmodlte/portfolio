import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../../assets/style.css';
const Header = () => {
  return (
    <>
      <Navbar expand='lg' className='py-3'>
        <Navbar.Brand className='brand user-select-none'>
          Mahmoud Mansour
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
export default Header;
