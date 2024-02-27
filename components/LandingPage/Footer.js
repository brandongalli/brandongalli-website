import React from 'react'; 

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-item">
                        <p>Copyright @{currentYear} Brandon Galli</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;