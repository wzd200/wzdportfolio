import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>Hello, I'm William Dye.
            <br></br>
            I'm a full-stack web developer.</h1>
            <Typed
                className='typed-text'
                strings={['React', 'Node.js', 'Express', 'Postgres', 'Python']}
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
