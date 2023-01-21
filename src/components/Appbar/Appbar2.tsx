import React, { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { IoApps } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Searchbar from './Searchbar';
import Iconbadge from './Iconbadge';
import Profile from './Profile';
import { IoMdNotifications } from 'react-icons/io';


type Props = {
    isTopOfPage: boolean;
};


const Appbar2 = ({ isTopOfPage }: Props) => {

    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";

    return (
        <nav>
            <div className={`${navbarBackground} fixed top-0 z-50 w-full pb-1 bg-white`}>
                <div className={`${flexBetween} w-full px-10 bg-[#f6f6f6]`}>
                    <h3 className='text-gray-400 font-semibold'>Download the application</h3>
                    <h3 className='text-gray-400 font-semibold'>Shops deals in electronic</h3>
                </div>
                <div className={`${flexBetween} w-full px-10 shadow-sm py-2`}>
                    <p className='text-[#316aff] font-bold flex items-center justify-between text-2xl'>GadgetMarket</p>
                    <div className="flex items-center justify-center gap-8 text-sm">
                        <span className='text-2xl text-gray-400'><IoApps/></span>
                        <Searchbar/>
                    </div>
                    <div className='flex items-center justify-between py-2'>
                        <Iconbadge icon={<FaShoppingCart/>} notif={100}/>
                        <Iconbadge icon={<IoMdNotifications/>} notif={23}/>
                        <Profile/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Appbar2