import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navlinks = [
        {
            name:"Founders",
            href:"/founders"
        },
        {
            name:"Guide",
            href:"/docs"
        },
        {
            name:"Pricing",
            href:"/projects"
        },
        {
            name:"Login",
            href:"/login"
        },
    ]
  return (
    <nav className='w-full h-auto p-4  flex items-center justify-between'>
        <Link className='font-bold text-xl' href={"/finta"}>
            Finta
        </Link>
        <div className='flex gap-5 items-center'>
            {
                navlinks.map((navlink,i)=>(
                    <Link className='font-semibold text-md hover:text-black/60' key={i} href={navlink.href}>{navlink.name}</Link>
                ))
            }
            <button className='bg-blue-500 cursor-pointer hover:bg-blue-700 font-semibold text-white px-3 py-2 rounded-xl text-shadow-md shadow-md '>Start Free Trial </button>
        </div>
 
    </nav>
  )
}

export default Navbar