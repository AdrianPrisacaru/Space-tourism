'use client'

interface LaunchInfo {
    title: string;
    info: string;
}

export default function LaunchContainer({ spaceInput }: { spaceInput: number }) {

    const launchInformation: Record<string, LaunchInfo> = {
        1: {
            title: "LAUNCH VEHICLE",
            info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        2: {
          title: "SPACEPORT",
          info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      },
        3: {
            title: "SPACE CAPSULE",
            info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    }

  return (
    <div className="flex flex-col lg:pt-20 md:pt-10 sm:pt-10 lg:order-2 md:order-3 sm:order-3 justify-center lg:items-start md:items-center sm:items-center">
    <p className="font-barlowFont lg:text-base md:text-base sm:text-sm text-spaceSecondColor uppercase">The terminology…</p>
    <p className="lg:text-4xl mdtext-4xl sm:text-[22px] text-white">{launchInformation[spaceInput].title}</p>
    <p className="font-barlowSimple w-[400px] lg:text-xl md:text-xl sm:text-base text-spaceSecondColor lg:text-start md:text-center sm:text-center">{launchInformation[spaceInput].info}</p>
  </div>
    )
}
