import React from 'react'
import Link from 'next/link'


function Navbar() {

    const navtt = ()=>{
        var nav = document.getElementById('navItems')
        if (window.innerWidth < 1023) {
            nav.classList.toggle('hidden')

        }
    }
    
  return (
      <>
   <nav className='myNav bg-slate-700  w-full sticky h-16 '>
       <button onClick={()=>navtt()} className=' space-y-[4px] float-right mt-5 mr-10 cursor-pointer md:hidden '>
           <div className='bg-white w-7 h-[4px]'></div>
           <div className='bg-white w-7 h-[4px]'></div>
           <div className='bg-white w-7 h-[4px]'></div>
       </button>
       <Link href='/'><label htmlFor='check' className='text-white text-3xl leading-[60px] pl-6 md:pl-12 tracking-wide cursor-pointer'>CoderNitesh</label></Link>
       <ul id='navItems'  className='ulList  absolute w-[100%] md:relative md:w-fit float-right text-white text-xsm  md:flex md:leading-[60px]  space-x-4 mr-20 uppercase text-center pb-8 sm:pb-0  '>
       <Link href='/'><a><li onClick={()=>navtt()}>Home</li></a></Link>
       <Link href='/blog'><a ><li onClick={()=>navtt()}>Blog</li></a></Link>
       <Link href='/about'><a><li onClick={()=>navtt()}>About</li></a></Link>
       <Link href='/service'><a><li onClick={()=>navtt()}>Services</li></a></Link>
       </ul>
   </nav>
   </>
  )
}

export default Navbar