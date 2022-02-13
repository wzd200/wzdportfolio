import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>web development and websites promotion</h1>
            <Typed
                className='typed-text'
                strings={['Web Development', 'React', 'Node.js', 'Express']}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href='#' className='btn-main-offer'>Contact Me</a>
        </div>
    </div>
  )
}

export default Header;
