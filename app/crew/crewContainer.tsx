'use client'

interface CrewInfo {
  title: string;
  name: string;
  info: string;
}

export default function CrewContainer({ crewInput }: { crewInput: number }) {

    const crewInformation: Record<string, CrewInfo> = {
        1: {
            title: "Commander",
            name: "Douglas Hurley",
            info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        2: {
          title: "Mission Specialist ",
          name: "MARK SHUTTLEWORTH",
          info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      3: {
        title: "PILOT",
        name: "Victor Glover",
        info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
      },
      4: {
        title: "Flight Engineer",
        name: "Anousheh Ansari",
        info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    },
    }

  return (
    <div className="flex flex-col lg:text-start md:text-center sm:text-center">
      <p className="text-white/30 lg:text-3xl md:text-[22px] sm:text-base uppercase">{crewInformation[crewInput].title}</p>
      <p className="lg:text-4xl md:text-[40px] sm:text-[24px] text-white uppercase">{crewInformation[crewInput].name}</p>
      <p className="w-[400px] barlowSimple lg:text-xl md:text-base sm:text-sm text-spaceSecondColor">{crewInformation[crewInput].info}</p>
    </div>
    )
}
