import React from 'react'
import Hero from './components/Hero'
import Infos from './components/Infos'
import { ArrowDown } from 'lucide-react'
import Footer from './components/Footer'
import Menu from './components/Menu'

const page = () => {
  return (
      <div className='relative flex inset-0 flex-col min-h-screen w-full'>
        <div>
          <Menu/>
        </div>
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
      <section className="relative w-full bg-black">
        <Footer />
      </section>
      </div>
  )
}

export default page