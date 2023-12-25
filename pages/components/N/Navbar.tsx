import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logobox">
        <Image src={""} alt='logo'/>
      </div>
      <div className="tabsBox">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Tools</Link>
      </div>
      <div className="functionalBtns">
        
      </div>
    </nav>
  )
}

export default Navbar
