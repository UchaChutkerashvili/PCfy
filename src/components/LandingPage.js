import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const LandingPage = () => {
  return (
    <div> 
        <p className="title">REDBERRY</p>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />  

        <div className='button'>
        <Link className='link' to='/AddEmployerPc'>ჩანაწერის დამატება</Link>
      </div>
      <div className='button'>
        <Link className='link' to='EmployerPcInfo'>ჩანაწერების სია</Link>
      </div>     
        
      </header>
    </div>
  )
}

export default LandingPage