'use client'

import Image from 'next/image';
import { useState } from "react";
import PlanetContainer from './planetContainer';

export default function Destination() {
 const [planet, setPlanet] = useState<"MOON" | "MARS" | "TITAN" | "EUROPA">('MOON');
  return (
<main className="bellefair bg-cover h-screen text-white flex flex-col items-center justify-between sm:bg-mobileDestination md:bg-tabletDestination lg:bg-desktopDestination">
     <div className="w-full h-full flex justify-center items-center">
        <div className=" w-full flex lg:flex-row md:flex-col sm:flex-col lg:pt-40 md:pt-0 sm:mt-0 lg:pr-20 md:pr-40 sm:pr-20 lg:pl-20 md:pl-40 sm:pl-20 mb-0 justify-center">
          <div className="w-full basis-1/2 flex flex-col lg:inline-block md:justify-center sm:justify-center">
                      <div className="font-barlowFont flex gap-4 lg:text-2xl md:text-[20px] uppercase lg:inline-flex md:justify-center sm:justify-center">
                        <p className="opacity-[0.5]">01</p>
                        <p>Pick your destination</p>
                      </div>
                      <div className="flex p-10 w-full h-full justify-center items-center">
                        {planet === 'MOON' && <Image src="/destination/image-moon.png" alt='MOON' width={445} height={445} className="sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-96 lg:h-96" /> }
                        {planet === 'MARS' && <Image src="/destination/image-mars.png" alt='MARS' width={445} height={445} className="sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-96 lg:h-96"/> }
                        {planet === 'EUROPA' && <Image src="/destination/image-europa.png" alt='EUROPA' width={445} height={445} className="sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-96 lg:h-96"/> }
                        {planet === 'TITAN' && <Image src="/destination/image-titan.png" alt='TITAN' width={445} height={445} className="sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-96 lg:h-96"/> }
                      </div>
          </div>

          <div className="w-full flex flex-col basis-1/2 mx-auto justify-center items-center content-center">
              <div className='font-barlowFont tracking-[2.7px] flex gap-10 text-base lg:inline-flex md:justify-center sm:justify-center'>
                <span className={`pb-2 cursor-pointer ${planet === 'MOON' ? "border-b-4 border-white text-white" : "text-spaceSecondColor hover:border-b-4 hover:border-gray-500"}`} onClick={() => setPlanet('MOON')} >MOON</span>
                <span className={`pb-2 cursor-pointer ${planet === 'MARS' ? "border-b-4 border-white text-white" : "text-spaceSecondColor hover:border-b-4 hover:border-gray-500"}`} onClick={() => setPlanet('MARS')}>MARS</span>
                <span className={`pb-2 cursor-pointer ${planet === 'EUROPA' ? "border-b-4 border-white text-white" : "text-spaceSecondColor hover:border-b-4 hover:border-gray-500"}`} onClick={() => setPlanet('EUROPA')}>EUROPA</span>
                <span className={`pb-2 cursor-pointer ${planet === 'TITAN' ? "border-b-4 border-white text-white" : "text-spaceSecondColor hover:border-b-4 hover:border-gray-500"}`} onClick={() => setPlanet('TITAN')}>TITAN</span>
              </div>
              <PlanetContainer planetInput={planet} />
          </div>

          </div>
        </div>
    </main>
  )
}
