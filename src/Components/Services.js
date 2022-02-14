import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faDatabase, faPenToSquare, faCubes } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='services'>
        <h1 className='py-5'>My Services</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <div className='box'>
                        <div className='circle mt-3 mb-4'>
                            <FontAwesomeIcon className='icon' icon={faFileCode} size='2x'/>
                        </div>
                        <h3>Front-End Development</h3>
                        <p>Technologies and frameworks include React, Redux, and Bootstrap.</p>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='box'>
                        <div className='circle mt-3 mb-4'>
                            <FontAwesomeIcon className='icon' icon={faDatabase} size='2x'/>
                        </div>
                        <h3>Back-End Development</h3>
                        <p>Technologies and frameworks include Node.js, Express, and Postgres.</p>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='box'>
                        <div className='circle mt-3 mb-4'>
                            <FontAwesomeIcon className='icon' icon={faPenToSquare} size='2x'/>
                        </div>
                        <h3>Web Design</h3>
                        <p>Technologies and frameworks include React and Bootstrap.</p>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='box'>
                        <div className='circle mt-3 mb-4'>
                            <FontAwesomeIcon className='icon' icon={faCubes} size='2x'/>
                        </div>
                        <h3>Programming</h3>
                        <p>Programming languages include Python and Javascript.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services