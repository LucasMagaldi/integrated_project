import React from 'react';


import logo from '../assets/images/logo.svg'

export const Logo = () => {
  return (
    <a className='logo-container'>
        <div >
            <img src={logo} alt='logo' className='logoImg'/>
        </div>
        <span className='logo-text-sec'>myplatf</span>
    </a>
    
  )
}

export default Logo;