import { HomeInfo } from "@/app/layout";

export default function HomeComponent({title, subTitle, text, buttonText}: HomeInfo) {

  return (
    <div className="w-full h-full flex lg:flex-row md:flex-col sm:flex-col justify-between items-center lg:pt-0 md:pt-28">
      <div className="flex flex-col justify-center lg:items-center md:items-center sm:items-end basis-1/2">
        <h4 className="lg:w-[444px] md:w-[444px] sm:w-[327px] lg:text-2xl md:text-[20px] sm:text-base text-second lg:text-start md:text-center sm:text-center">{subTitle}</h4>
        <h1 className="lg:w-[444px] md:w-[444px] sm:w-[327px] lg:text-6xl md:text-6xl sm:text-[80px] lg:pt-6 lg:pb-6 md:pt-0 md:pb-0 sm:pt-0 sm:pb-0 lg:text-start md:text-center sm:text-center">{title}</h1>
        <p className="lg:w-[444px] md:w-[444px] sm:w-[327px] lg:text-xl md:text-base sm:text-[15px] text-second lg:text-start md:text-center sm:text-center">{text}</p>
      </div>
      <div className="flex justify-center lg:items-center md:items-center sm:items-start basis-1/2">
        <a href="/" className="lg:w-[274px] md:w-[274px] sm:w-[150px] lg:h-[274px] md:h-[274px] sm:h-[150px] flex justify-center items-center rounded-full bg-fullWhite  hover:border-gray-500 hover:scale-105 transition-transform border-2 border-transparent hover:border-2">
          <p className="lg:text-3xl md:text-3xl sm:text-[20px] text-primary">{buttonText}</p>
        </a>
      </div>
    </div>
    )
}
