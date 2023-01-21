import React from 'react'
import CircularAvatar from './CircularAvatar'
import { IoIosArrowDown } from "react-icons/io";

const Profile = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='p-2'>
    <CircularAvatar img_url="https://lh3.googleusercontent.com/bHY50kvRmdB_KDHz8dgVgKU7EBxiFdYUh4Kp35DrMHSAcTiVr4ag1ZoEEa8RqwCDSlq3RbC0a8zS8ELO_3qQ7J0eaMIM6eQHu2saKcqg-tNpBL-leTjuJSaYUkOtyVaB1YkketFT" />
    </div>
    <h3 className='text-black text-sm font-semibold'>Babah</h3>
    <span className='text-black p-1'><IoIosArrowDown/></span>

</div>
  )
}

export default Profile