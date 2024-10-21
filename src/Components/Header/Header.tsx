import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
    <nav className='grid sm:grid-cols-2 sm:h-10 bg-orange-200'>
        <div>
        <Link href={"#"} className='m-2 ml-10 font-serif font-black '>HAMZA NASIR</Link>
        </div>
        <div className=''>
        <Link href={"/"} className='m-2 font-serif font-black '>HOME</Link>
        <Link href={"/About"} className='m-2 font-serif font-black '>ABOUT</Link>
        <Link href={"/Contact"} className='m-2 font-serif font-black '>CONTACT</Link>
        </div>
    </nav>
    </>
  )
}

export default Header