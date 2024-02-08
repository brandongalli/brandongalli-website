import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom">
            <div className="common-right-text two">
                <span>Brandon</span>
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <div className="avatar">
                                <img src="/images/banner/avatar.png" alt="Image" />
                            </div>
                            <h1>Brandon Galli</h1>
                            <h3><span>Senior Software Engineer</span></h3>
                            <p>
                            Embark on a transformative journey through the world of full-stack development and data science, guided by my years of senior software engineering experience.
                            </p>

                            <div className="banner-btn-area">
                                <Link href="#contact">
                                    <a className="common-btn">Contact With Me</a>
                                </Link>
                                <Link href="#contact">
                                    <a className="common-btn banner-btn">Hire Me</a>
                                </Link>
                            </div>

                            <ul>
                                <li> 
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a> 
                                </li>
                                <li> 
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a> 
                                </li>
                                <li> 
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a> 
                                </li>
                                <li> 
                                    <a href="https://www.behance.com/" target="_blank">
                                        <i className='bx bxl-behance'></i>
                                    </a> 
                                </li>
                                <li> 
                                    <a href="https://www.dribbble.com/" target="_blank">
                                        <i className='bx bxl-dribbble'></i>
                                    </a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;