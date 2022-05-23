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
   <nav className='bg-slate-700  w-full sticky h-16'>
       <button onClick={()=>navtt()} className=' space-y-[4px] float-right mt-5 mr-10 cursor-pointer md:hidden '>
           <div className='bg-white w-7 h-[4px]'></div>
           <div className='bg-white w-7 h-[4px]'></div>
           <div className='bg-white w-7 h-[4px]'></div>
       </button>
       <label htmlFor='check' className='text-white text-3xl leading-[60px] pl-12 tracking-wide'>CoderNitesh</label>
       <ul id='navItems' className='bg-slate-700 absolute w-[100%] md:relative md:w-fit float-right text-white text-xsm  md:flex md:leading-[60px] md:bg-slate-700 space-x-4 mr-20 uppercase text-center pb-8 sm:pb-0  '>
       <Link href='/'><a><li>Home</li></a></Link>
       <Link href='/blog'><a ><li>Blog</li></a></Link>
       <Link href='/about'><a><li>About</li></a></Link>
       <Link href='/service'><a><li>Services</li></a></Link>
       </ul>
   </nav>
   </>
  )
}

export default Navbar