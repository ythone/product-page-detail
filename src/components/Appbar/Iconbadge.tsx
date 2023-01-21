import React from 'react'

type Props = {
    icon:any;
    notif:number;
}

const Iconbadge = ({icon,notif}:Props) => {
    const numbernotifdisplay = ()=>{
        if(notif>=100){
            return <><span className="absolute -top-2 -right-2 h-6 w-8 rounded-full text-white bg-red-500 flex justify-center items-center text-sm"><span className='p-2'>99+</span></span></>
        }
        return <><span className="absolute -top-2 -right-1 h-6 w-6 rounded-full text-white bg-red-500 flex justify-center items-center text-sm"><span className='p-2'>{notif}</span></span></>
    }
    return (
        <div className="">
            <strong className="relative inline-flex items-center rounded  px-2.5 py-1.5 text-2xs font-medium">
                {numbernotifdisplay()}
                <span className="text-2xl text-gray-400"> {icon} </span>
            </strong>
        </div>
    )
}

export default Iconbadge