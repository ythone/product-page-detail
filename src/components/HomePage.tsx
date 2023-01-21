import React, { useEffect, useState } from 'react'
import Appbar2 from './Appbar/Appbar2';
import DetailProductPage from './DetailPage/DetailProductPage';

const HomePage = () => {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className=''>
            <Appbar2 isTopOfPage={isTopOfPage}/>
            <DetailProductPage />
        </div>
    )
}

export default HomePage