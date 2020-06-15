import React from 'react';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <>
      <div className='container'>
        <header className='mt-5 mb-5 p-5'>
          <img src={logo} alt='logo' className='img-fluid float-left ' />
          <button className='btn btn-outline-secondary btn-rounded float-right'>
            try it for free
          </button>
        </header>
      </div>
    </>
  );
};

export default Header;
