'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MenuMobileCustom() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="flex">
            <Button
                className="bg-transparent hover:bg-transparent absolute top-7 right-3 z-50 shadow-none"
                onClick={toggleMenu}
            >
                <div className={`relative w-8 h-6 flex flex-col justify-between items-end cursor-pointer transition-all duration-300 ease-in-out  ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
                    <span className={`w-full h-1 bg-white transition-all duration-300 ease-in-out transform rounded-xl ${isOpen ? '-rotate-45 translate-y-[10px] !bg-primary-color' : ''}`}></span>
                    <span className={`h-1 bg-white transition-all duration-300 ease-in-out rounded-xl ${isOpen ? 'opacity-0 w-full' : 'w-3/4'}`}></span>
                    <span className={`h-1 bg-white transition-all duration-300 ease-in-out transform rounded-xl  ${isOpen ? 'rotate-45 translate-y-[-10px] w-full !bg-primary-color' : 'w-2/4 '}`}></span>
                </div>
            </Button>

            <div className={`absolute top-0 right-0 ${isOpen ? 'backdrop-blur-sm bg-zinc-600/80 w-full h-screen' : ''}`}
                onClick={() => setIsOpen(false)}
            >
                <div className={`absolute top-0 right-0 bg-white p-6 shadow-lg rounded-md z-40 h-screen transition-all duration-500 !pt-24 ${isOpen ? 'menu menuOpen' : 'menu menuClosed'}`}
                    onClick={(e) => e.stopPropagation()}>
                </div>
            </div>
        </div>
    );
}