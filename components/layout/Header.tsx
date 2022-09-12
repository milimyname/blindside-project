import { AcademicCapIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'


const Header = () => {
  return (
    <header className='flex items-center px-8 py-8'>
        <div className='flex items-center'>
            <Image src='/assets/logo.svg' alt='Logo' width={25} height={25}/>
            <h1 className='text-textColor'>Project Blind</h1>
        </div>
        
        {/* <AcademicCapIcon className="h-10 w-10 text-white"/> */}
    </header>
  )
}

export default Header