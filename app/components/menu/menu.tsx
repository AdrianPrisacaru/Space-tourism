'use client'

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function Menu() {
    const menuList = [{
        id: '00',
        name: 'Home',
        link: '/'
    },
    {
        id: '01',
        name: 'Destination',
        link: '/destination'
    },
    {
        id: '02',
        name: 'Crew',
        link: '/crew'
    },
    {
        id: '03',
        name: 'Technology',
        link: '/technology'
    }]
''
    const [isMobileOn, setIsMobileOn] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileOn(false);
      }
    };

    useEffect(() => {
      if (isMobileOn) {
        document.addEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isMobileOn]);

  return (
    <nav className="fixed flex flex-row justify-between items-center w-full h-24 lg:mt-10 md:mt-0 z-50" >
      <div className='flex items-center ml-8 mr-20'>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      </div>

      <hr className='lg:flex md:hidden sm:hidden w-2/5 opacity-25 bg-white z-20 lg:mr-[846px] md:mr-0'/>

      <div className="absolute right-0 w-full h-full lg:max-w-4xl md:max-w-[550px] lg:flex md:flex sm:hidden justify-center items-center z-1">
        <div className='w-full h-full text-white flex justify-around bg-white bg-opacity-5 backdrop-blur-[40.7742px] lg:pl-20 lg:pr-6 md:pl-8 md:pr-8 uppercase'>
          {menuList.map((item) =>                  
                <Link key={'Mobile_' + item.id} href={item.link} passHref>
                  <div className="font-barlowFont flex items-center w-full h-full gap-4 active:border-white hover:border-b-4 hover:border-gray-500">
                    <p className='lg:flex md:hidden tracking-[2.7px]'>{item.id}</p>
                    <p className="barlowCondensed tracking-[2.7px] lg:text-base md:text-sm">{item.name}</p>
                  </div>
                </Link>
              )}
        </div> 
      </div>


        <button className='lg:hidden md:hidden sm:flex' onClick={() => setIsMobileOn(!isMobileOn)}>
          <svg className={`flex mr-8 ${isMobileOn ? "opacity-0" : "opacity-100"} transition duration-300 ease-in-out`} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        </button>

        <div className={`sm:${isMobileOn ? 'flex': 'hidden'} bg-opacity-4 backdrop-blur-[40.7742px] lg:hidden md:hidden fixed right-0 top-0 ${isMobileOn ? "w-60" : "w-0"} ${isMobileOn ? "opacity-100" : "opacity-0"} h-full transition delay-150 duration-300 ease-in-out`}>
          <button onClick={() => setIsMobileOn(!isMobileOn)} className="fixed right-6 top-10 mr-1 transition delay-150 duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
          </button>

          <div ref={menuRef} className="flex flex-col pt-40 text-white w-full">
            {menuList.map((item) =>                  
              <Link key={'Mobile_' + item.id} href={item.link} passHref>
                <div className="flex items-center w-full mb-6 pt-2 pl-6 pb-2 gap-4 border-r-2 active:border-white hover:border-gray-600">
                  <p>{item.id}</p>
                  <p className="bellefair font-normal">{item.name}</p>
                </div>
              </Link>
            )}
          </div>

        </div>

    </nav>
  )
}
