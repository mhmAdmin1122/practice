import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.png";

const Navbar = ({children}:any) => {
  return (
    <nav className="flex justify-between w-full items-center px-[24px] py-[8px]">
      <div className="logobox flex items-center justify-center gap-2">
        <Image src={logo} alt="logo" className="w-[60px] h-[70px]" />
        <h2 className="text-2xl font-bold">Next Commerce</h2>
      </div>
      <div className="tabsBox flex items-center gap-4 font-medium text-[18px]">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Profucts</Link>
        <Link href={"/"}>Tools</Link>
      </div>
      <Link href={"/"} className="functionalBtns font-semibold text-[18px]">
        {children}
      </Link>
    </nav>
  );
};

export default Navbar;
