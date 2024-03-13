import React, { useEffect } from 'react';
import Navbar from '../components/LandingPage/Navbar';
import MainBanner from '../components/LandingPage/MainBanner';
import About from '../components/LandingPage/About';
import WhatIDo from '../components/LandingPage/WhatIDo';
import MyExperience from '../components/LandingPage/MyExperience';
import Portfolio from '../components/LandingPage/Portfolio';
import AwardsWon from '../components/LandingPage/AwardsWon';
import BlogPost from '../components/LandingPage/BlogPost';
import Testimonials from '../components/LandingPage/Testimonials';
import ContactForm from '../components/LandingPage/ContactForm';
import Footer from '../components/LandingPage/Footer';

const Index = () => {
    return (
        <> 
            <Navbar />

            <div className="main-area">

                <div className="main-content">
                    <MainBanner />

                    <About />

                    {/* <WhatIDo /> */}

                    {/* <MyExperience /> */}

                    <Portfolio />

                    {/* <AwardsWon /> */}

                    {/* <BlogPost /> */}

                    {/* <Testimonials /> */}

                    <ContactForm />
                    
                    <Footer />
                </div>
            </div>
        </>
    )
}

  
export default Index;