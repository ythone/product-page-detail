import React from 'react'

type Props = {
    is_half: boolean;
    id:number,
    color_left: string;
    color_right: string;
    color_full: string;
    img_url: string;
    selectedColor: number;
    name_option:string;
    price: string;
    setSelectedColor: (value: number) => void;
    setSelectedImg: (value: string) => void;
    setSelectedPrice: (value: string) => void;
    setSelectedName: (value: string) => void;
}

const ColorOption = ({ is_half,id,color_left, color_right, color_full,img_url, selectedColor, price,name_option, setSelectedColor,setSelectedImg,setSelectedPrice,setSelectedName}: Props) => {
    const updatepallette= ()=>{
        setSelectedColor(id);
        setSelectedImg(img_url);
        setSelectedPrice(price);
        setSelectedName(name_option);
    }
    const border= id===selectedColor?"border-[#316aff]":"border-gray-400"
    const chechcoloris_half_or_not = () => {
        if (is_half == true) {
            return <>
                <div className={`border ${border}  rounded-lg h-20 w-20 m-1 p-1 flex items-center justify-center`}>
                    <div className={`${color_full} h-14 w-14 rounded-full`}></div>
                </div>
                <p className='ml-2'>{price}</p>
            </>
        }

        return <>
            <div className={`border ${border}  rounded-lg h-20 w-20 m-1 p-1 flex items-center justify-center`}>
                <div className={`${color_left} h-14 w-7 rounded-full rounded-r-lg`}></div>
                <div className={`${color_right} h-14 w-7 rounded-full rounded-l-lg`}></div>
            </div>
            <p className='ml-2'>{price}</p>
        </>
    }

    return (
        <div className='hover:cursor-pointer' onClick={() => updatepallette()}>
            {chechcoloris_half_or_not()}
        </div>
    )
}

export default ColorOption