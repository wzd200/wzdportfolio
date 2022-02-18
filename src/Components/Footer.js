import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='d-flex'>
                            <p>Lewes, DE</p>
                        </div>
                        <div className='d-flex'>
                            <a href='tel:929-478-1525'>+1 (929)-478-1525</a>
                        </div>
                        <div className='d-flex'>
                            <p>william.z.dye@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <Link href='/' smooth={true} to='home' offset={-70} className='footer-nav' href='/'>Home</Link>
                                <br/>
                                <Link href='/' smooth={true} to='about' offset={-70} className='footer-nav' href='/'>About Me</Link>
                                <br/>
                                <Link href='/' smooth={true} to='services' offset={-70} className='footer-nav' href='/'>Services</Link>
                            </div>
                            <div className='col'>
                                <Link href='/' smooth={true} to='experience' offset={-70} className='footer-nav' href='/'>Experience</Link>
                                <br/>
                                <Link href='/' smooth={true} to='portfolio' offset={-70} className='footer-nav' href='/'>Portfolio</Link>
                                <br/>
                                <Link href='/' smooth={true} to='contact' offset={-70} className='footer-nav' href='/'>Contact Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm6 align-items-center'>
                        <div className='d-flex justify-content-center'>
                            <FacebookShareButton
                                className='share-icon'
                                url={'https://www.linkedin.com/in/william-dye-a9a4411ba/'}
                                quote={'William Dye is a Web Developer'}
                                hashtag='#WZDdeveloper'
                            >
                                <FacebookIcon className='mx-3' size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                className='share-icon'
                                url={'https://www.linkedin.com/in/william-dye-a9a4411ba/'}
                                quote={'William Dye is a Web Developer'}
                                hashtag='#WZDdeveloper'
                            >
                                <TwitterIcon className='mx-3' size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                className='share-icon'
                                url={'https://www.linkedin.com/in/william-dye-a9a4411ba/'}
                                quote={'William Dye is a Web Developer'}
                                hashtag='#WZDdeveloper'
                            >
                                <RedditIcon className='mx-3' size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                className='share-icon'
                                url={'https://www.linkedin.com/in/william-dye-a9a4411ba/'}
                                quote={'William Dye is a Web Developer'}
                                hashtag='#WZDdeveloper'
                            >
                                <LinkedinIcon className='mx-3' size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className='pt-3 text-center'>Copyright&copy;
                            {new Date().getFullYear()}&nbsp; WZD Development | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer