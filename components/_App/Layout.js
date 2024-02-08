import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'
import CookieConsent from "react-cookie-consent";

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])

    return(
        <>
            <Head>
                <meta 
                    name="viewport" 
                    content="width=device-width, initial-scale=1, shrink-to-fit=no" 
                />
                <title>Reton - Resume CV React Next.js Template</title>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
        </>
    );
}

export default Layout;