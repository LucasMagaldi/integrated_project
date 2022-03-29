import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import world from '../assets/images/world.svg';
import mainApi from '../services/mainAPI';



export const Main = () => {
  return (
    <mainWrapper>
        <Logo/>
        <div className='container-main page'>
            <div>
              <h1>
                  Technologies <span>Tracking</span> App
              </h1>
              <p className='main-description'>
                    Web plataform to manage yours best job positons.
                    Met the best companies in your country and world.
                    Apply to position that companies with you and be happy.
              </p>
              <Link to='/register'>Sign in / Sign Up</Link>
            </div>    
            <img src={world} className='img main-img'/>  
        </div>
    </mainWrapper>
  )
}


export default Main;