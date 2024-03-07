// Header.jsx
import React from 'react';
import NavMenu from './NavMenu'
import Logo from '../assets/CompanyLogo2.png'

const Header = () => {

    const companyName = 'E&C Jimenez Construction'

    return (
        <div className='d-flex justify-content-center flex-wrap align-items-center align-content-center flex-row m-3 pb-5 pt-2'  > 
        
            {/* This is the Company Logo */}
            <div className=' d-flex flex-fill justify-content-center'>
                <a href='/'>
                <img src={Logo} alt='Company Logo'></img>
                </a>
                {/* <h1 > {companyName}  </h1> */}
            </div>

            {/* This is the Navigation Menu */}
            <div className='d-flex flex-nowrap align-self-center justify-content-center '>
                <NavMenu />
            </div>
        </div>
    );
}

export default Header;
