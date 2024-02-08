import React from 'react'; 

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-item">
                        <p>Copyright @{currentYear} Design & Developed by <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;