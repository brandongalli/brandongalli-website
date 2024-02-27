import React from 'react';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-area border-bottom ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">PORTFOLIO</span>
                    <h2>See My Works Which Will Amaze You</h2>
                </div>
                
                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/cru.png" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">The Commission for Regulation of Utilities</a>
                                        </Link>
                                    </h3>
                                    <span>Content Management System</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Python, Django, React.js, Next.js, AWS</p>

                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/taza.png" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Taza</a>
                                        </Link>
                                    </h3>
                                    <span>Vegetable Shop</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Python, Flask, Vue.js, AWS</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/voxsnap.png" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Multi Media</a>
                                        </Link>
                                    </h3>
                                    <span>Voxsnap</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Python, Django, React.js, AWS, MySQL</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/source_digital.png" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Social Media</a>
                                        </Link>
                                    </h3>
                                    <span>Source Digital</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Node.js, React.js, MongoDB</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/tripninja.png" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Online Travel Agency</a>
                                        </Link>
                                    </h3>
                                    <span>TripNinja</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Python, Django, React.js</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/case-study">
                        <a className="common-btn" target="_blank">Explore All Work</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;