import React from 'react'
import author from '../IMG_0147s.jpg'

const AboutMe = () => {
  return (
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-3 col-xm-12'>
                <div className='photo-wrap mb-5'>
                    <img className='author-img' src={author} alt='William Dye, author'/>
                </div>
            </div> 
            <div className='aboutMe col-lg-9 col-xm-12'>
                <h2 className='about-header mt-3 mb-3'>About Me</h2>
                <p>
                    Hello! My name is William. I am a Full-Stack Web Developer and I have experience in using technologies such as React, Express,Node.js, Postgres, Python, and more.
                    <br/>
                    <br/>
                    I am a recent graduate from the Bloomtech Institute of Technology and am looking to join a company that seeks to actualize people's goals through coding. On the side, I am also a gaming enthusiast, horror movie aficionado, and an at-home latte artist!
                    <br/>
                    <br/>
                    I have worked on a several projects that involved independent coding, pair programming, and Agile software development practices in group settings. Currently, I'm looking for the new big project to add to my portfolio to expand my coding language/framework repertoire as well as further my own creative endeavors.
                </p>
            </div> 
        </div>
    </div>
  )
}

export default AboutMe