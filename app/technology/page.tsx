'use client'

import { useState } from "react";
import LaunchContainer from "./launchContainer";

export default function Technology() {
const [spaceTab, setSpaceTab] = useState(1)
  return (
    <main className="bg-cover h-full text-white flex flex-col items-center justify-between lg:pt-8 md:pt-20 sm:pt-20 sm:bg-mobileTechnology md:bg-tabletTechnology lg:bg-desktopTechnology">
      <div className="bellefair w-full h-full flex justify-center items-center">
        <div className="w-full lg:pl-40 md:pl-0 sm:pl-0">
          <div className="font-barlowFont flex gap-4 lg:text-2xl md:text-[20px] uppercase pb-2 lg:justify-start md:justify-start sm:justify-center lg:pl-0 md:pl-10 sm:pl-0">
              <p className="opacity-[0.5]">03</p>
              <p>Space Launch 101</p>
          </div>
          <div className="w-full flex lg:flex-row md:flex-col sm:flex-col justify-between">
            <div className="flex lg:flex-col md:flex-row sm:flex-row pt-6 gap-8 lg:order-1 md:order-2 sm:order-2 justify-center">
              <div className={`rounded-full border-2 hover:border-white lg:w-20 md:w-14 sm:w-14 lg:h-20 md:h-14 sm:h-14 flex justify-center items-center ${spaceTab === 1 ? 'bg-white' : "bg-none border-white/15" } cursor-pointer`} onClick={() => setSpaceTab(1)}>
                <p className={`${spaceTab === 1 ? 'text-black' : 'text-white'} lg:text-3xl md:text-[20px] sm:text-[20px]`}>1</p>
              </div>
              <div className={`rounded-full border-2 hover:border-white lg:w-20 md:w-14 sm:w-14 lg:h-20 md:h-14 sm:h-14  flex justify-center items-center ${spaceTab === 2 ? 'bg-white' : "bg-none border-white/15" } cursor-pointer`} onClick={() => setSpaceTab(2)}>
              <p className={`${spaceTab === 2 ? 'text-black' : 'text-white'} lg:text-3xl md:text-[20px] sm:text-[20px]`}>2</p>
              </div>
              <div className={`rounded-full border-2 lg:w-20 hover:border-white md:w-14 sm:w-14 lg:h-20 md:h-14 sm:h-14  flex justify-center items-center ${spaceTab === 3 ? 'bg-white' : "bg-none border-white/15" } cursor-pointer`} onClick={() => setSpaceTab(3)}>
              <p className={`${spaceTab === 3 ? 'text-black' : 'text-white'} lg:text-3xl md:text-[20px] sm:text-[20px]`}>3</p>
              </div>
            </div>
            <LaunchContainer spaceInput={spaceTab} />
            <div className="lg:order-3 md:order-1 sm:order-1">
              {spaceTab === 1 && <div className="lg:w-96 lg:h-96 md:w-full md:h-96 sm:w-full sm:h-96 bg-cover bg-center lg:bg-imageVehicleLaunchPortrait md:bg-imageVehicleLaunchLandscape sm:bg-imageVehicleLaunchLandscape "/>}
              {spaceTab === 2 && <div className="lg:w-96 lg:h-96 md:w-full md:h-96 sm:w-full sm:h-96 bg-cover bg-center lg:bg-imageCapsuleLaunchPortrait md:bg-imageCapsuleLaunchLandscape sm:bg-imageCapsuleLaunchLandscape "/>}
              {spaceTab === 3 && <div className="lg:w-96 lg:h-96 md:w-full md:h-96 sm:w-full sm:h-96 bg-cover bg-center lg:bg-imageSpaceportLaunchPortrait md:bg-imageSpaceportLaunchLandscape sm:bg-imageSpaceportLaunchLandscape "/>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
