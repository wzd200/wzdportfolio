import React from 'react';
import empamamas from '../Screen Shot 2022-02-15 at 4.31.17 PM.png';
import potluckOrganizer from '../Screen Shot 2022-02-15 at 4.32.22 PM.png';
import marketplace from '../Screen Shot 2022-02-15 at 4.32.44 PM.png';
import portfolio from '../Screen Shot 2022-02-15 at 4.49.57 PM.png';
import humanRightsFirst from '../Screen Shot 2022-02-15 at 5.29.35 PM.png';
import underdogDevs from '../Screen Shot 2022-02-15 at 5.29.55 PM.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
    // Portfolio
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className='portfolio-image-popupbox' src={portfolio} alt='William Dye Portfolio Project' />
                <p>This project was built with React and Bootstrap.
                <br/> 
                Component and design inspiration from Andrey Dovganyuk's Udemy course.</p>
                <b>Github Link:</b> <a className='hyperlink' href='/' onClick={() => window.open('https://github.com/wzd200/wzdportfolio')}>https://github.com/wzd200/wzdportfolio</a>
                <br/>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'William Dye Portfolio Project'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    /* --- */
    //Underdog Devs
    const openPopupboxUnderdogDevs = () => {
        const content = (
            <>
                <img className='portfolio-image-popupbox' src={underdogDevs} alt='Underdog Devs Project' />
                <p>The back-end portion of this project was built by a team using Node.js, Express, and Postgres.</p>
                <p>Personal Contribution: Designed and wrote the foundation of the back-end code for a greenfield project.</p>
                <b>Github Link:</b>
                <a className='hyperlink' href='/' onClick={() => window.open('https://github.com/BloomTech-Labs/underdog-devs-be-a')}>https://github.com/BloomTech-Labs/underdog-devs-be-a</a>
                <br/>
                <b>Deployed Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://a.underdogdevs.dev/login')}>https://a.underdogdevs.dev/login</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Underdog Devs Project'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    /* --- */
    //Human Rights First
    const openPopupboxHumanRightsFirst = () => {
        const content = (
            <>
                <img className='portfolio-image-popupbox' src={humanRightsFirst} alt='Human Rights First Project' />
                <p>The back-end portion of this project was built by a team using Node.js, Express, and Postgres.</p>
                <p>Personal Contribution: Designed and wrote back-end code for an notification system prior to shipping.</p>
                <b>Github Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://github.com/BloomTech-Labs/human-rights-first-asylum-be-a')}>https://github.com/BloomTech-Labs/human-rights-first-asylum-be-a</a>
                <br/>
                <b>Deployed Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://a.humanrightsfirstasylum.dev/login')}>https://a.humanrightsfirstasylum.dev/login</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Human Rights First Project'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    /* --- */
    // Marketplace
    const openPopupboxMarketplace = () => {
        const content = (
            <>
                <img className='portfolio-image-popupbox' src={marketplace} alt='Marketplace Project' />
                <p>Personal Contribution: Wrote the entire back-end portion of this project using Node.js, Express, and Postgres.</p>
                <b>Github Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://github.com/african-marketplace-buildweek/buildWeekProject')}>https://github.com/african-marketplace-buildweek/buildWeekProject</a>
                <br/>
                <b>Deployed Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://marketplace-frontend-three.vercel.app/')}>https://marketplace-frontend-three.vercel.app/</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Build Week Marketplace Project'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    /* --- */
    // Potluck Organizer
    const openPopupboxPotluckOrganizer = () => {
        const content = (
            <>
                <img className='portfolio-image-popupbox' src={potluckOrganizer} alt='Potluck Organizer Project' />
                <p>The front-end of this project was built with React.</p>
                <p>Personal Contribution: Designed and implemented the front-end infrastructure for the application.</p>
                <b>Github Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://github.com/Ft-Potluck-Planner/Front-End')}>https://github.com/Ft-Potluck-Planner/Front-End</a>
                <br/>
                <b>Deployed Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://front-end-puce-mu.vercel.app/')}>https://front-end-puce-mu.vercel.app/</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Build Week Potluck Organizer Project'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    /* --- */
    // Empamamas
    const openPopupboxEmpamamas = () => {
        const content = (
            <>
                <img className='portfolio-image-popupbox' src={empamamas} alt='Empamamas Project' />
                <p>This project was built with React.</p>
                <b>Github Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://github.com/empamamav3/empamamav3-front-end')}>https://github.com/empamamav3/empamamav3-front-end</a>
                <br/>
                <b>Deployed Link:</b> <a className='hyperlink' href='a' onClick={() => window.open('https://empamamade.vercel.app/Home')}>https://empamamade.vercel.app/Home</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Empamama's Project"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    return (
        <div id='portfolio' className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                <div className='image-box-wrapper row row-cols-auto justify-content-center'>
                    <div className='portfolio-image-box' onClick={openPopupboxPortfolio}>
                        <img className='portfolio-image' src={portfolio} alt='William Dye Portfolio Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/*-*/}
                    <div className='portfolio-image-box' onClick={openPopupboxUnderdogDevs}>
                        <img className='portfolio-image' src={underdogDevs} alt='William Dye Portfolio Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/*-*/}
                    <div className='portfolio-image-box' onClick={openPopupboxHumanRightsFirst}>
                        <img className='portfolio-image' src={humanRightsFirst} alt='William Dye Portfolio Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/*-*/}
                    <div className='portfolio-image-box' onClick={openPopupboxMarketplace}>
                        <img className='portfolio-image' src={marketplace} alt='Marketplace Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/*-*/}
                    <div className='portfolio-image-box' onClick={openPopupboxPotluckOrganizer}>
                        <img className='portfolio-image' src={potluckOrganizer} alt='Potluck Organizer Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/*-*/}
                    <div className='portfolio-image-box' onClick={openPopupboxEmpamamas}>
                        <img className='portfolio-image' src={empamamas} alt='Empamamas Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                    {/*-*/}
                </div>
            </div>
            <PopupboxContainer />
        </div>
    )
}

export default Portfolio