// Header.jsx
import React from 'react';
import NavMenu from './NavMenu'

const Header = () => {

    const companyName = 'E&C Jimenez Construction'

    return (
        <div className='d-flex flex-wrap flex-row m-3 pb-5 pt-2'  > 
        
            {/* This is the Company Name */}
            <div className=' d-flex flex-fill justify-content-start'>
                <h1 > {companyName}  </h1>
            </div>

            {/* This is the Navigation Menu */}
            <div className='d-flex justify-content-center '>
                <NavMenu />
            </div>
        </div>
    );
}

export default Header;
