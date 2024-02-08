import { useEffect, useState } from "react";
 
const GoTop = () => {
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <i className='bx bxs-up-arrow-alt'></i>
                </button>
            )}
        </>
    );
};

export default GoTop;