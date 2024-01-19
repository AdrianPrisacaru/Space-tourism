import { NavInfo } from '@/app/layout';
import Link from 'next/link';


export default function NavLink({id, name, link}: NavInfo) {

  return (
    <div className="z-1 h-full flex justify-center items-center lg:basis-1/4 md:basis-0 pr-2 lg:pl-18 md:pl-10">
         <Link href={link} className="h-full hover:border-b-2 hover:border-dashed border-b-4">
            <div className="h-full flex items-center gap-2">
                    <p className="md:hidden lg:block">{id}</p>
                    <p className="bellefair">{name}</p>
            </div>
        </Link>
    </div>
    )
}