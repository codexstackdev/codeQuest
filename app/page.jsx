import React from 'react'
import Hero from './components/Hero'
import Infos from './components/Infos'
import { ArrowDown } from 'lucide-react'

const page = () => {
  return (
      <div className='relative flex inset-0 flex-col min-h-screen w-full'>
       <section className="relative min-h-screen w-full">
        <Hero />
      </section>
      <div className='min-w-screen flex justify-center mt-4'>
        <span className='border border-gray-400 w-full absolute'></span>
        <ArrowDown className='relative top-[-11px] left-[-10px] bg-[#5227FF] w-7 h-7 border rounded-full'/>
      </div>
      <section className="relative w-full bg-black">
        <Infos />
      </section>
      </div>
  )
}

export default page