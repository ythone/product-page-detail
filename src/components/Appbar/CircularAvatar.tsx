import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
    img_url:string
}

const CircularAvatar = ({img_url}:Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:760px)");
    const height_andwidth_div = ()=>{
      if(isAboveMediumScreens==true){
         return "flex items-center justify-start h-20 w-40 bg-[#3c3b40] rounded-full ";
      }else{
         return "flex items-center justify-start h-7 w-12 bg-[#3c3b40] rounded-full ";
      }
    }
  
    const height_andwidth_img = ()=>{
      if(isAboveMediumScreens==true){
         return "h-7 w-7 rounded-full";
      }else{
         return "h-5 w-5 rounded-full";
      }
    }
  
    return (
      <img
        className={height_andwidth_img()}
        src={img_url}
        alt=""
      />
    )
}

export default CircularAvatar