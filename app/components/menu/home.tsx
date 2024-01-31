import { HomeInfo } from "@/app/layout";

export default function HomeComponent({title, subTitle, text, buttonText}: HomeInfo) {

  return (
    <div className="w-full h-full flex lg:flex-row md:flex-col sm:flex-col justify-between items-center lg:mt-0 md:mt-20 sm:mt-0">
      <div className="flex flex-col justify-center lg:items-center md:items-center basis-1/2 mt-12 text-center">
        <h4 className="lg:text-2xl md:text-[20px] sm:text-base text-spaceSecondColor lg:text-start md:text-center">{subTitle}</h4>
        <h1 className="lg:text-6xl md:text-6xl sm:text-[80px] lg:pt-6 lg:pb-6 md:pt-0 md:pb-0 sm:pt-0 sm:pb-0 lg:text-start md:text-center">{title}</h1>
        <p className="lg:w-[444px] md:w-[444px] sm:w-[327px] lg:text-xl md:text-base sm:text-[15px] text-spaceSecondColor lg:text-start md:text-center">{text}</p>
      </div>

      <div className="relative flex justify-center lg:items-center md:items-center sm:items-center text-[20px] basis-1/2 z-10">
        <a href='/'>
          <div className="flex items-center justify-center bg-white w-48 h-48 rounded-full uppercase relative group md:w-60 md:h-60 lg:w-72 lg:h-72 text-black">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140%] h-[140%] bg-white/10 rounded-full scale-50 transition ease-in-out duration-[500ms] cursor-pointer hover:scale-100" />
            Explore
          </div>
        </a>
      </div>

    </div>
    )
}
