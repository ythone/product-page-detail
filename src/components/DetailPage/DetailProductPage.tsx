import React, { useState } from 'react'
import { BiChevronRight } from "react-icons/bi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import RatingStar from './RatingStar';
import ColorOption from './ColorOption';
import StatRating from './StatRating';
import Profile from '../Appbar/Profile';
import CircularAvatar from '../Appbar/CircularAvatar';
import { IoIosArrowDown } from 'react-icons/io';

const DetailProductPage = () => {
  const [selectedColor, setSelectedColor] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);
  const [img_url, setSelectedImg] = useState<string>("https://m.media-amazon.com/images/I/61LNnZPoKPS._AC_SL1500_.jpg");
  const [price, setSelectedPrice] = useState<string>("$1,249.00");
  const [name_option, setSelectedName] = useState<string>("Silver");
  const product = "iMAC 24-inch(M1 Pro chip, 8GB RAM)";
  const list_img = [
    {
      id: 1,
      name: "Silver",
      is_half: true,
      color_left: '',
      color_right: '',
      color_full: 'bg-gray-400',
      price: "$1,249.00",
      img_url: "https://m.media-amazon.com/images/I/61LNnZPoKPS._AC_SL1500_.jpg"
    },
    {
      id: 2,
      name: "Blue",
      is_half: false,
      color_left: 'bg-[#38577a]',
      color_right: 'bg-[#afc4d2]',
      color_full: '',
      price: "$1,449.99",
      img_url: "https://m.media-amazon.com/images/I/61p-ADlugUS._AC_SL1500_.jpg"
    },
    {
      id: 3,
      name: "Green",
      is_half: false,
      color_left: 'bg-[#265f69]',
      color_right: 'bg-[#abc4bb]',
      color_full: '',
      price: "$1,449.99",
      img_url: "https://m.media-amazon.com/images/I/61eoyE0l9gS._AC_SL1500_.jpg"
    },
    {
      id: 4,
      name: "Pink",
      is_half: false,
      color_left: 'bg-[#bd3e43]',
      color_right: 'bg-[#efbeb7]',
      color_full: '',
      price: "$1,449.00",
      img_url: "https://m.media-amazon.com/images/I/61AWSyzWrmS._AC_SL1500_.jpg"
    },
    {
      id: 5,
      name: "Orange",
      is_half: false,
      color_left: 'bg-[#f1b19d]',
      color_right: 'bg-[#f2d3c8]',
      color_full: '',
      price: "$1,449.00",
      img_url: "https://m.media-amazon.com/images/I/616LxKFObPL._AC_SL1500_.jpg"
    },
    {
      id: 6,
      name: "Purple",
      is_half: false,
      color_left: 'bg-[#979ab6]',
      color_right: 'bg-[#d3d4e3]',
      color_full: '',
      price: "$1,449.00",
      img_url: "https://m.media-amazon.com/images/I/61k5t0uf4xL._AC_SL1500_.jpg"
    },
    {
      id: 7,
      name: "Yellow",
      is_half: false,
      color_left: 'bg-[#edc58a]',
      color_right: 'bg-[#f2e2c7]',
      color_full: '',
      price: "$1,267.76",
      img_url: "https://m.media-amazon.com/images/I/61OShYJOklL._AC_SL1500_.jpg"
    }
  ]

  const coloroption = list_img.map((option) =>
    <ColorOption
      is_half={option.is_half}
      id={option.id}
      color_left={option.color_left}
      color_right={option.color_right}
      color_full={option.color_full}
      img_url={option.img_url}
      selectedColor={selectedColor}
      price={"$1,249.00"}
      setSelectedColor={setSelectedColor}
      setSelectedImg={setSelectedImg} setSelectedPrice={setSelectedPrice} name_option={option.name} setSelectedName={setSelectedName} />
  );

  const showLessOrMore = () => {
    if (show == true) {
      return <>
        <ul className='list-disc'>
          <li className='py-1 text-sm'>SUPERCHARGED BY M1 — M1 delivers exceptional performance for all you do on your iMac desktop.
            Everyday things like flipping through photos and browsing Safari are faster,
            and all your hardest-working apps have access to the power they need.</li>
          <li className='py-1 text-sm'>FITS PERFECTLY INTO YOUR LIFE — The all-in-one desktop design is
            strikingly thin and available in seven vibrant colors.
            And iMac comes with a color-matched Magic Mouse with Magic Keyboard.</li>

          <li className='py-1 text-sm'>SIMPLY COMPATIBLE — All your go-to apps run lightning fast — including Microsoft 365,
            Adobe Creative Cloud, and Affinity Photo.
            You can even run many of your favorite iPhone and iPad apps directly on your iMac.</li>

          <li className='py-1 text-sm'>
            CINEMATIC DISPLAY — The 24-inch 4.5K Retina display features 500 nits of brightness and support
            for 1 billion colors, so everything from streaming movies to editing photos is sharp, vivid,
            and colorful.
          </li>

          <li className='py-1 text-sm'>CONNECT ALL YOUR ACCESSORIES — iMac
            features two Thunderbolt / USB 4 ports, up
            to two USB 3 ports, Wi-Fi 6, Bluetooth 5.0, and a headphone jack.</li>

          <li className='py-1 text-sm'>ADVANCED CAMERA AND AUDIO — Look sharp and sound great with a
            1080p FaceTime HD camera, a studio-quality three-mic array,
            and a six-speaker sound system with Spatial Audio.</li>

          <li className='py-1 text-sm'>STORE ALL YOUR FILES — This iMac comes
            with 256GB and up to 2TB of fast SSD storage for all your photo and video
            libraries, files, and apps.</li>
        </ul>
      </>
    }

    return <>
      <ul className='list-disc'>
        <li className='py-1 text-sm'>SUPERCHARGED BY M1 — M1 delivers exceptional performance for all you do on your iMac desktop.
          Everyday things like flipping through photos and browsing Safari are faster,
          and all your hardest-working apps have access to the power they need.</li>
        <li className='py-1 text-sm'>FITS PERFECTLY INTO YOUR LIFE — The all-in-one desktop design is
          strikingly thin and available in seven vibrant colors.
          And iMac comes with a color-matched Magic Mouse with Magic Keyboard.</li>
      </ul>
    </>
  }

  const buttonActionshow = () => {
    if (show) {
      return <><HiChevronDown /></>
    }

    return <><HiChevronUp /></>
  }

  return (
    <section id="detail" className="mt-10 min-h-full py-20 px-10 mr-0">
      <div className=''>
        <p className='flex items-center justify-start font-semibold text-gray-400 text-2sm'>Store<span className='text-2xl'><BiChevronRight /></span>Computer<span className='text-2xl'><BiChevronRight /></span>
          <span className='text-black text-2sm'>{product}</span></p>
      </div>
      <div className='grid grid-cols-5 gap-4 mt-2'>
        <div className='col-span-4 w-full text-black flex items-start'>
          <div className='mr-1 mt-10'>
            <img src={img_url} alt="" />
          </div>
          <div className='ml-2'>
            <p className='font-semibold text-2xl'>
              Apple 2021 iMac All-in-one Desktop Computer with M1 chip: 8-core CPU, 7-core GPU,
              24-inch Retina Display, 8GB RAM, 256GB SSD Storage, Matching Accessories.
              Works with iPhone/iPad; Silver
            </p>
            <a className='text-[#316aff] text-sm font-semibold' href="https://www.apple.com/shop/buy-mac/imac">Visit the Apple Store</a>
            <p><RatingStar /></p>
            <div className='border-b border-t border-gray-300 py-2 my-2'>
              <p><span className='text-gray-600'>Price:</span> <span className='text-red-800 font-semibold text-xl'>{price}</span></p>
            </div>
            <div className='py-2'>
              <p className='text-gray-600'>Color: <span className='text-black font-semibold'>{name_option}</span></p>

              <div className='flex items-center mt-2'>
                {coloroption}
              </div>
            </div>


            <div className='border-b border-t border-gray-300 py-4 text-black'>
              <p className='text-gray-600'>Style: <span className='font-bold'>8-Core GPU</span></p>
              <div className='flex items-center justify-start mt-2'>
                <div className='flex items-center border border-black h-18 w-32 py-2 px-2 rounded-md mr-1 hover:border-[#316aff] hover:bg-[#316aff] hover:text-white'>
                  <p className='font-semibold'>8-Core<br />GPU</p>
                </div>
                <div className='flex items-center border border-black h-18 w-32 py-2 px-2 rounded-md hover:border-[#316aff] hover:bg-[#316aff] hover:text-white'>
                  <p className='font-semibold'>7-Core<br />GPU</p>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-300 py-4 text-black'>
              <p className='text-gray-600'>Size: <span className='font-bold'>256GB</span></p>
              <div className='flex items-center justify-start mt-2'>
                <div className='flex items-center border border-black h-18 w-32 py-2 px-2 rounded-md mr-1 hover:border-[#316aff] hover:bg-[#316aff] hover:text-white'>
                  <p className='font-semibold'>256GB</p>
                </div>
                <div className='flex items-center border border-black h-18 w-32 py-2 px-2 rounded-md hover:border-[#316aff] hover:bg-[#316aff] hover:text-white'>
                  <p className='font-semibold'>512GB</p>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-300 py-4 text-black'>
              <table className="md:table-fixed">
                <tbody>
                  <tr>
                    <td><h3 className='font-bold'>Specific Uses For Product</h3></td>
                    <td><h3 className='text-gray-600'>Multimedia, Personal, Business</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Brand</h3></td>
                    <td><h3 className='text-gray-600'>Apple</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Personal computer design type</h3></td>
                    <td><h3 className='text-gray-600'>All in One</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Operating System</h3></td>
                    <td><h3 className='text-gray-600'>Mac OS</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Memory Storage Capacity</h3></td>
                    <td><h3 className='text-gray-600'>256 GB</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Screen Size</h3></td>
                    <td><h3 className='text-gray-600'>24 Inches</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Ram Memory Installed Size</h3></td>
                    <td><h3 className='text-gray-600'>8 GB</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Model Name</h3></td>
                    <td><h3 className='text-gray-600'>iMac</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>Included Components</h3></td>
                    <td><h3 className='text-gray-600'>Magic Mouse, iMac, Power Cord and Power Adapter, Magic Keyboard, USB-C to Lightning Cable</h3></td>
                  </tr>
                  <tr>
                    <td><h3 className='font-bold'>CPU Model</h3></td>
                    <td><h3 className='text-gray-600'>Unknown</h3></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='border-b border-gray-300 py-4 text-black'>
              <h3 className='font-bold'>About this item</h3>
              <div className='px-4'>
                {showLessOrMore()}
              </div>
              <p onClick={() => setShow(!show)} className='text-[#316aff] hover:text-blue-200 hover:underline hover:cursor-pointer text-semibold flex items-center'><span className='text-black'>{buttonActionshow()}</span> Show less</p>
            </div>
          </div>
        </div>

        <div className='w-full text-black'>
          <div className='border border-gray-300 rounded-lg'>
            <div className='px-4 pt-2'><h3 className='text-red-800 font-semibold mb-4'>{price}</h3></div>
            <div className='px-4'>
              <p className='text-red-500 text-sm font-semibold'>This item cannot be shipped to your selected delivery location. Please choose a different delivery location.</p>
            </div>
            <div className='text-center py-4'>
              <div className=''>
                <button className="bg-[#316aff] w-48 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className='border border-gray-300 rounded-lg mt-2'>
            <div className='px-4 pt-2 text-center border-b border-gray-300 '><h3 className='text-black text-sm font-semibold mb-4'>Add an Accessory:</h3></div>
            <div className='px-4 pt-2'>
              <p className='text-blue-900 text-sm font-semibold hover:cursor-pointer hover:text-red-500'>Microsoft 365 Personal | Premium Office Apps | 1 User, Up to 5 Devices | 3 Months Free, Plus 12-Month SubscriptionMicrosoft 365 Personal | Premium Office Apps | 1 User, Up to 5 Devices | 3 Months Free, Plus 12-Month Su… </p>
            </div>
            <div className='text-center border-b border-gray-300 py-4 flex items-center justify-between px-4'>
              <h3 className='text-red-500 text-sm font-semibold'>$69.99</h3>
              <div className=''>
                <button className="bg-[#316aff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to cart
                </button>
              </div>
            </div>
            {/*Second accesseroy */}
            <div className='px-4 pt-2'>
              <p className='text-blue-900 text-sm font-semibold hover:cursor-pointer hover:text-red-500'>TurboTax Deluxe 2022 Fed + E-file & State [PC/Mac Download]TurboTax Deluxe 2022 Fed + E-file & State [PC/Mac Download]</p>
            </div>
            <div className='text-center border-b border-gray-300 py-4 flex items-center justify-between px-4'>
              <h3 className='text-red-500 text-sm font-semibold'>$44.99</h3>
              <div className=''>
                <button className="bg-[#316aff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to cart
                </button>
              </div>
            </div>
            {/*third accesseroy */}
            <div className='px-4 pt-2'>
              <p className='text-blue-900 text-sm font-semibold hover:cursor-pointer hover:text-red-500'>Adobe Acrobat Professional DC | PDF converter | 12-month Subscription with auto-renewal, PC/MacAdobe Acrobat Professional DC | PDF converter | 12-month Subscription with auto-renewal, PC/Mac</p>
            </div>
            <div className='text-center border-b border-gray-300 py-4 flex items-center justify-between px-4'>
              <h3 className='text-red-500 text-sm font-semibold'>$179.99</h3>
              <div className=''>
                <button className="bg-[#316aff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Add to cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='flex items-start justify-center gap-8 pr-20'>
        <div className=''>
          <h1 className='text-black text-xl font-bold'>Customer reviews</h1>
          <div className='flex items-center'>
            <div className='flex items-center hover:cursor-pointer duration-300'>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <h3 className='p-1'> 4.7 out of 5 stars</h3>
          </div>
          <div className='border-b border-gray-300'>
            <StatRating />
          </div>
          <div>
            <h1 className='text-black text-xl font-bold pb-2'>By feature</h1>
            <div className='flex items-center justify-between'>
              <h3 className='p-1'>Screen quality</h3>
              <div className='flex items-center hover:cursor-pointer duration-300'>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span>4.8</span>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <h3 className='p-1'>Picture quality</h3>
              <div className='flex items-center hover:cursor-pointer duration-300'>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span>4.9</span>
              </div>
            </div>


            <div className='flex items-center justify-between'>
              <h3 className='p-1'>Ergonomic</h3>
              <div className='flex items-center hover:cursor-pointer duration-300'>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span>3.1</span>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <h3 className='p-1'>Value for money</h3>
              <div className='flex items-center hover:cursor-pointer duration-300'>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span>4.4</span>
              </div>
            </div>


            <div className='flex items-center justify-between'>
              <h3 className='p-1'>Easy to use</h3>
              <div className='flex items-center hover:cursor-pointer duration-300'>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span>4.5</span>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <h3 className='p-1'>Tech Support</h3>
              <div className='flex items-center hover:cursor-pointer duration-300'>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <span>4.8</span>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div>
            <h1 className='text-black text-xl font-bold pb-2'>Reviews with images</h1>
            <div className='flex items-center gap-2'>
              <img src="https://m.media-amazon.com/images/I/61izBDxcBqL._CR204,0,1224,1224_UX175.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/71yoYvsN46L._CR204,0,1224,1224_UX175.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/61IuilAuaYL._CR0,558,962,962_UX175.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/61PMxlSJFVL._CR558,0,962,962_UX175.jpg" alt="" />
            </div>

            <div>
              <h1 className='text-black text-xl font-bold pb-2'>Top reviews from the United States</h1>
              <div>
                <div className='flex items-center pb-2'>

                  <CircularAvatar img_url="https://lh3.googleusercontent.com/bHY50kvRmdB_KDHz8dgVgKU7EBxiFdYUh4Kp35DrMHSAcTiVr4ag1ZoEEa8RqwCDSlq3RbC0a8zS8ELO_3qQ7J0eaMIM6eQHu2saKcqg-tNpBL-leTjuJSaYUkOtyVaB1YkketFT" />

                  <h3 className='text-black text-sm font-semibold p-1'>	Strategos Vigo vigolino</h3>
                </div>
                <div className='flex items-center hover:cursor-pointer duration-300'>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className='text-black text-sm font-bold'>Got it for my wife; I want one!!!</span>
                </div>

                <p>Reviewed in the United States on September 19, 2022
                  Style: 8-Core GPUSize: 256GBColor: PurpleVerified Purchase
                  My wife is an artist and primarily creates art on her iPad Pro,
                  because it's massively easier than working with physical and a snap to access
                  her work on her phone and share/sell online. She's been hobbling along on
                  an old MacBook Pro we bought her 10 years ago, but that laptop frequently
                  suddenly shuts off, and has gotten to be quite slow despite upgrades I
                  made to it years ago (more ran, added an SSD). At any rate, it was time
                  to upgrade and I asked my wife if she wanted a MacBook Pro again, and she
                  said she would rather have an iMac.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailProductPage