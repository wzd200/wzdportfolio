import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id='home' className='header-wrapper'>
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
            <Link href='/' smooth={true} className='btn-main-offer' to='contact' offset={-70}>Contact Me</Link>
        </div>
    </div>
  )
}

export default Header;
