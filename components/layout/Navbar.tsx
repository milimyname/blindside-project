import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/solid'
import { FireIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { VideoCameraIcon } from '@heroicons/react/24/solid'
import { ViewColumnsIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className='bg-secondary w-1/6 py-4 fixed h-full flex flex-col gap-8'>
      <ul className='text-[1.6rem]'>
        <li className='group transition-colors text-white/60 px-8 py-4 hover:bg-white/50 hover:text-white'>
          <Link href="/">
            <a className='flex items-center gap-6'>
              <HomeIcon className='h-8 w-8 text-white/60 group-hover:text-white'/>
              Home
            </a>
          </Link>
        </li>
        <li className=' group transition-colors text-white/60 px-8 py-4 hover:bg-white/50 hover:text-white'>
          <Link href="/">
            <a className='flex items-center gap-6'>
              <FireIcon className='h-8 w-8 text-white/60 group-hover:text-white'/>
              Popular
            </a>
          </Link>
        </li>
        <li className='group transition-colors text-white/60 px-8 py-4 hover:bg-white/50 hover:text-white'>
          <Link href="/">
            <a className='flex items-center gap-6'>
              <ViewColumnsIcon className='h-8 w-8 text-white/60 group-hover:text-white'/>
              Categories
            </a>
          </Link>
        </li>
        <li className='group transition-colors text-white/60 px-8 py-4 hover:bg-white/50 hover:text-white'>
          <Link href="/">
            <a className='flex items-center gap-6'>
              <BookmarkIcon className='h-8 w-8 text-white/60 group-hover:text-white'/>
              Favorites
            </a>
          </Link>
        </li>
        <li className='group transition-colors text-white/60 px-8 py-4 hover:bg-white/50 hover:text-white'>
          <Link href="/">
            <a className='flex items-center gap-6'>
              <VideoCameraIcon className='h-8 w-8 text-white/60 group-hover:text-white'/>
              Your Videos
            </a>
          </Link>
        </li>
      </ul>
      <div className='px-8'>
        <span className='uppercase text-white/60 text-[1.2rem]'>Subscriptions</span>
        <ul className='text-[1.4rem]'>
          <li className='group transition-colors text-white/60 py-2'>
            <Link href="/">
              <a className='flex items-center gap-6'>
                <div className='relative flex items-end justify-end'>
                  <Image src='/assets/mili.jpeg' alt='Logo' width={25} height={25} className='rounded-full'/>
                  <span className='absolute w-4 h-4 rounded-full bg-green-500 border-white border-2 mr-[2px] mb-[2px]'>&nbsp;</span>
                </div>
                <span>Mili Gym</span>
              </a>
            </Link>
          </li>
          <li className='group transition-colors text-white/60 py-4'>
            <Link href="/">
              <a className='flex items-center gap-6'>
                <div className='relative flex items-end justify-end'>
                  <Image src='/assets/mili.jpeg' alt='Logo' width={25} height={25} className='rounded-full'/>
                </div>
                <span>Mili Football</span>
              </a>
            </Link>
          </li>
        </ul>    
      </div>
      <div className='mt-auto mx-8  px-12 py-8 mb-28 text-center border-2 border-white/50 rounded-lg flex flex-col gap-2'>
        <h3 className='text-[1.7rem] text-white'>Get 3 months of Premium for free</h3>
        <p className='text-[1.2rem] text-white/50'>Enjoy ad-free content, offline watching, and more</p>
        <Link href="/">
          <a className='bg-accent text-white py-2 px-4 rounded-full mt-4'>Try Premium</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar