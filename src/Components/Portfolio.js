import React from 'react';
import empamamas from '../Screen Shot 2022-02-15 at 4.31.17 PM.png';
import potluckOrganizer from '../Screen Shot 2022-02-15 at 4.32.22 PM.png';
import marketplace from '../Screen Shot 2022-02-15 at 4.32.44 PM.png';
import portfolio from '../Screen Shot 2022-02-15 at 4.49.57 PM.png';
import humanRightsFirst from '../Screen Shot 2022-02-15 at 5.29.35 PM.png';
import underdogDevs from '../Screen Shot 2022-02-15 at 5.29.55 PM.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
        <div className='container'>
            <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
            <div className='image-box-wrapper row row-cols-auto justify-content-center'>
                <div className='portfolio-image-box'>
                    <img className='portfolio-image' src={portfolio} alt='William Dye Portfolio Project'/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*-*/}
                <div className='portfolio-image-box'>
                    <img className='portfolio-image' src={underdogDevs} alt='William Dye Portfolio Project'/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*-*/}
                <div className='portfolio-image-box'>
                    <img className='portfolio-image' src={humanRightsFirst} alt='William Dye Portfolio Project'/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*-*/}
                <div className='portfolio-image-box'>
                    <img className='portfolio-image' src={marketplace} alt='Marketplace Project'/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*-*/}
                <div className='portfolio-image-box'>
                    <img className='portfolio-image' src={potluckOrganizer} alt='Potluck Organizer Project'/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*-*/}
                <div className='portfolio-image-box'>
                    <img className='portfolio-image' src={empamamas} alt='Empamamas Project'/>
                    <div className='overflow'></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*-*/}
            </div>
        </div>
    </div>
  )
}

export default Portfolio