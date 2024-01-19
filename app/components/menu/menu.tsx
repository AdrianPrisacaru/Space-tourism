import NavLink from './navLink';

export default function Menu() {

    const menuList = [{
        id: '00',
        name: 'HOME',
        link: '/'
    },
    {
        id: '01',
        name: 'DESTINATION',
        link: '/destination'
    },
    {
        id: '02',
        name: 'CREW',
        link: '/crew'
    },
    {
        id: '03',
        name: 'TECHNOLOGY',
        link: '/technology'
    }]

  return (
    <nav className="text-fullWhite lg:pt-8  md:pt-0 pl-8 fixed w-full top-0 z-50" >

      <div className="w-full">

        <div className="w-full flex items-center justify-between relative">

           <div className="flex items-center z-40 lg:mr-0 lg:mt-0 md:mr-0 md:mt-0 sm:mr-10 sm:mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
           </div>

           <div className="text-base lg:w-[870px] md:w-[545px] h-24 flex flex-row items-center justify-center backdrop-blur-3xl lg:brightness-100 md:brightness-150 lg:pl-10 lg:pr-16 md:pl-0 md:pr-0 lg:flex md:flex sm:hidden">
                <hr className="hover:bg-secondSpaceColor md:hidden lg:block absolute opacity-30 right-[98%] xl:w-3/4 transition-all duration-300 ease-in-out z-10" />
                {menuList.map((item) => <NavLink key={"Nav_" + item.id} id={item.id} name={item.name} link={item.link} />) }
            </div>
            <svg className="lg:hidden md:hidden sm:flex lg:mr-0 lg:mt-0 md:mr-0 md:mt-0 sm:mr-10 sm:mt-10" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
        </div>  
      </div>
    </nav>
  )
}
