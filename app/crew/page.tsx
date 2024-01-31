'use client'

import Image from "next/image";
import { useState } from "react";
import CrewContainer from "./crewContainer";

export default function Crew() {
const [crew, setCrew] = useState(1)

  return (
    <main className="bellefair bg-cover h-screen text-white flex flex-col items-center justify-between sm:bg-mobileCrew md:bg-tabletCrew lg:bg-desktopCrew">
      <div className="w-full h-full flex lg:flex-row md:flex-col sm:flex-col justify-center items-center">
          <div className="fixed lg:top-[150px] md:top-[150px] sm:top-10 lg:left-60 md:left-14 sm:left-0 font-barlowFont lg:w-[490px] md:w-full sm:w-full flex gap-4 lg:text-2xl md:text-[20px] uppercase lg:justify-start md:justify-start sm:justify-center lg:mb-40 md:mb-10 sm:mb-0 lg:pl-0 md:pl-10 sm:pl-0 lg:pt-0 md:pt-0 sm:pt-20">
            <p className="opacity-[0.5]">02</p>
            <p>Meet your crew</p>
          </div>
        <div className="w-full h-full flex flex-col lg:items-start md:items-center sm:items-center lg:justify-end md:justify-end sm:justify-start basis-1/2 lg:pl-60 md:pl-00 sm:pl-0 lg:order-1 md:order-1 sm:order-2 lg:pb-40 md:pb-0 sm:pb-0">
         <CrewContainer crewInput={crew} />
          <div className="lg:w-[490px] md:w-full sm:w-full flex items-center gap-8 lg:justify-start md:justify-center sm:justify-center lg:pt-40 md:pt-10 sm:pt-10">
            <div className={`rounded-full w-4 h-4 cursor-pointer ${ crew === 1 ? "bg-white": "bg-white/15 hover:bg-white/50"}`} onClick={() => setCrew(1)}/>
            <div className={`rounded-full w-4 h-4 cursor-pointer ${ crew === 2 ? "bg-white": "bg-white/15 hover:bg-white/50"}`} onClick={() => setCrew(2)}/>
            <div className={`rounded-full w-4 h-4 cursor-pointer ${ crew === 3 ? "bg-white": "bg-white/15 hover:bg-white/50"}`} onClick={() => setCrew(3)}/>
            <div className={`rounded-full w-4 h-4 cursor-pointer ${ crew === 4 ? "bg-white": "bg-white/15 hover:bg-white/50"}`} onClick={() => setCrew(4)}/>
          </div>
        </div>
        <div className="lg:w-full md:w-full sm:w-full flex lg:flex-row md:flex-row sm:flex-col flex-end h-full basis-1/2 lg:justify-center md:justify-center sm:justify-end lg:items-end md:items-end sm:items-center lg:order-2 md:order-2 sm:order-1 lg:mb-0 md:mb-0 sm:mb-10">
            {crew === 1 && <Image src={'/crew/image-douglas-hurley.png'} width={250} height={200} alt="commander" className="lg:w-[500px] lg:h-[700px] md:w-[300px] md:h-[400px] sm:w-[200px] sm:h-[280px]"/>}
            {crew === 2 && <Image src={'/crew/image-mark-shuttleworth.png'} width={450} height={600} alt="commander" className="lg:w-[450px] lg:h-[600px] md:w-[280px] md:h-[360px] sm:w-[200px] sm:h-[280px]" />}
            {crew === 3 && <Image src={'/crew/image-victor-glover.png'} width={250} height={600} alt="commander" className="lg:w-[550px] lg:h-[600px] md:w-[360px] md:h-[380px] sm:w-[250px] sm:h-[280px]" />}
            {crew === 4 && <Image src={'/crew/image-anousheh-ansari.png'} width={250} height={600} alt="commander" className="lg:w-[550px] lg:h-[600px] md:w-[360px] md:h-[380px] sm:w-[250px] sm:h-[280px]" />}
            <hr className="w-4/5 border-1 border-white/15 lg:hidden md:hidden sm:flex"/>
        </div>
      </div>
    </main>
  )
}
