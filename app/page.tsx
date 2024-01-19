import HomeComponent from './components/menu/home'
import { HomeInfo } from './layout'

export default function Home() {

  const homeInfo: HomeInfo = {
    title: "SPACE",
    subTitle: "SO, YOU WANT TO TRAVEL TO",
    text: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
    buttonText: 'EXPLORE'
  }

  return (
    <main className="text-fullWhite flex min-h-screen flex-col items-center justify-between pl-10 pt-8 bg-cover bg-center h-screen sm:bg-mobile md:bg-tablet lg:bg-desktop">
      <HomeComponent title={homeInfo.title} subTitle={homeInfo.subTitle} text={homeInfo.text} buttonText={homeInfo.buttonText} />
    </main>
  )
}
