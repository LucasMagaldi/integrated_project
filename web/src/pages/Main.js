import React from 'react';

import Logo from '../components/Logo';
import world from '../assets/images/world.svg';

export const Main = () => {
  return (
    <>
        <Logo/>
        <div className='container-main'>
            <h1>
                Technologies <span>Tracking</span> App
            </h1>
        </div>
    </>
  )
}


export default Main;