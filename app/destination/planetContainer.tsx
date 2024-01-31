'use client'

interface PlanetInfo {
    info: string;
    distance: string;
    time: string;
}

export default function PlanetContainer({ planetInput }: { planetInput: "MOON" | "MARS" | "TITAN" | "EUROPA" }) {

    const planetInformation: Record<string, PlanetInfo> = {
        "MOON": {
            info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            time: "3 days"
        },
        "MARS": {
            info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 MIL. km",
            time: "9 months"
        },
        "EUROPA": {
            info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 MIL. km",
            time: "3 years"
        },
        "TITAN": {
            info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 BIL. km",
            time: "7 years"
        }
    }

  return (
    <div className='h-full lg:w-96 md:w-full pt-10 lg:text-left md:text-center sm:text-center '>
    <h1 className='lg:text-5xl md:text-[80px] sm:text-4xl'>{planetInput}</h1>
    <p className="font-barlowSimple lg:text-xl md:text-base text-spaceSecondColor">
        {planetInformation[planetInput].info}
    </p>
    <hr className='mt-14 mb-7 border-white/20'/>
    <div className='lg:w-[340px] md:w-full lg:flex md:flex sm:flex-col lg:justify-between md:justify-around sm: justify-center'>
      <div className='flex flex-col gap-3'>
        <p className='font-barlowFont text-sm text-spaceSecondColor space-x-8'>AVG. DISTANCE</p>
        <p className='text-2xl text-white'>{planetInformation[planetInput].distance}</p>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='font-barlowFont text-sm text-spaceSecondColor'>EST. TRAVEL TIME</p>
        <p className='text-2xl text-white'>{planetInformation[planetInput].time}</p>
      </div>
    </div>
  </div>
    )
}
