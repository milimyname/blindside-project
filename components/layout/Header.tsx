import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'


const Header = () => {
  return (
    <header className='flex items-center justify-between gap-48 px-8 py-6 relative z-10 shadow-customBoxShadow'>
        <div className='flex items-center gap-4'>
            <Image src='/assets/logo.svg' alt='Logo' width={25} height={25}/>
            <h1 className='text-textColor text-3xl font-normal'>BlindProject</h1>
        </div>
        <form className='shrink-0 basis-2/6 mr-auto'>
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <MagnifyingGlassIcon className='h-6 w-6 text-black/50'/>
                </span>
                <input className="transition-colors text-lg text-black/50 placeholder placeholder:text-black placeholder:opacity-50 placeholder:font-400 block bg-textColor w-full border border-textColor rounded-full py-2 pl-12 pr-4 focus:outline-none hover:border-accent focus:border-accent focus:ring-accent focus:ring-1" placeholder="Search for a content" type="text" name="search"/>
            </label>
        </form>
        <div className='flex items-center gap-10'>
            <button className='transition-colors border border-accent hover:bg-accent hover:text-textColor text-lg font-normal text-accent uppercase py-2 px-12 rounded-full'>
                Add Video
            </button>
            <div className='flex items-center gap-4 group'>
                <Image src='/assets/mili.jpeg' alt='Logo' width={30} height={30} className='rounded-full'/>
                <span className='text-textColor'>Mili is my name</span>
                <ChevronDownIcon className='transition-transform h-5 w-5 text-textColor group-hover:-rotate-180'/>
            </div>
        </div>
    </header>
  )
}

export default Header