import React from 'react';
import Navbar from '../components/LandingPage/Navbar';
import ContactForm from '../components/LandingPage/ContactForm';
import Footer from '../components/LandingPage/Footer';

const Index = () => {
    return (
        <> 
            <Navbar />
            <div className="main-area">
                <div className="main-content">
                    <ContactForm />
                    
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Index;