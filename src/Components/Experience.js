import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='experience'>
        <div className='d-flex justify-content-center my-5'>
            <h1>Experience</h1>
        </div>
        <div className='container experience-wrapper'>
            <div className='timeline-block timeline-block-right'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2020</h3>
                    <p>I began my coding journey at the Bloomtech Institute of Technology. During my time there, I worked on a few Bloomtech Institute of Technology build week projects where groups of students were tasked with creating an application in a week's time and gained valuable front-end and back-end experience using React, Redux, Node.js, Express, and Python.</p>
                </div>
            </div>
            {/* - */}
            <div className='timeline-block timeline-block-left'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2020</h3>
                    <p>I worked on a prototype website for an aspiring restaurateur. I took this project on early during my time at Bloomtech Institute of Technology, hoping to apply what I was learning at the time to make custom components using React and CSS.</p>
                </div>
            </div>
            {/* - */}
            <div className='timeline-block timeline-block-right'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2021</h3>
                    <p>I participated in the Bloomtech Institute of Technology's labs program, where I was selected as a backend engineer for a project that built for, and ultimately shipped to the Human Right's First association. The goal of the project was to build an application that would visualize asylum judge's trends when it comes to sanctioning or denying asylum to asylum-seekers. This application would be built specifically for lawyers working on asylum cases to help them choose arguments that will hopefully sway a judge's opinion towards granting asylum.</p>
                </div>
            </div>
            {/* - */}
            <div className='timeline-block timeline-block-left'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2021</h3>
                    <p>The second Bloomtech Institute of Technology's labs project I worked on was the Underdog Devs hub application. The goal of this project was to create a hub for the Underdog Devs volunteer mentor/mentee program. The hub would play a large role in matching mentees to mentors and facilitating their resources.</p>
                </div>
            </div>
            {/* - */}
            <div className='timeline-block timeline-block-right'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2021 - Present</h3>
                    <p>I graduated from Bloomtech Institute of Technology's full-stack web-development program. Currently, I am working through a Udemy course whilst searching for my next job.</p>
                </div>
            </div>
            {/* - */}
        </div>
    </div>
  )
}

export default Experience