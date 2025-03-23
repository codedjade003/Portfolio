"use client"

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const[isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <header className="bg-[#060608] text-white fixed top-0 left-0 right-0 z-[9999] px-5">
            <div className="flex items-centre space-x-2">
                {/* Logo */}
                <div>
                    <div className="w-8 h-0.5 bg-white"></div>
                    <Link href="/" className="text-lg font-semibold">JADE</Link>
                </div>
                {/* desktop navigation */}
                <div>
                    <p className="text-[86868D] hidden md:block ">Web Developer & Designer<br/>
                    based in Abuja Nigeria</p>
                </div>

                <div>
                    <Link href="#case-studies" className="hovert:underline hober:text-gray-40">Case Studies</Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar;