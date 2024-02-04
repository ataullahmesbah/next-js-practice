import mesbah1 from '@/assets/mesbah.jpg'

import Image from 'next/image'
import Link from 'next/link'


const HomePage = () => {
  return (
    <main className="">
      <h1 className='bg-purple-900 text-white font-bold px-4 p-4 rounded-md'>This is my Next js Home.</h1>

      <Image src={mesbah1} alt='ataullah mesbah cox bazar tour 2024' />
     
    </main>
  )
}

export default HomePage;
