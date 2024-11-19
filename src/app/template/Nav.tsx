'use client';

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/img-logo.svg";

import data from "@/data/data.json"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MenuMobile from "../components/MenuMobile";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`transition-all ease-in-out duration-300 flex items-center fixed w-full z-10 ${isScrolled ? 'menu-fixed' : 'bg-primary-500  py-6'}`}>
            <nav className="w-full">
                <div className="container mx-auto flex items-center">
                    <div className="flex-shrink">
                        <Link href="/" rel="noreferrer">
                            <Image src={Logo} alt="Logo Cedup" className="logo" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex gap-6 flex-grow justify-center">
                        {data.Home.InfoNavLink.map((info, index) => (
                            <Link key={index} href={info.href} className={`relative text-white font-semibold transition-all ease-in-out duration-300 ${isScrolled ? 'text-[20px]' : 'text-[24px]'} 
                                ${pathname === info.href ? 'border-b-4 border-sencodary-500 ' : 'border-b-4 border-transparent'} hover:border-b-4 hover:border-sencodary-500`}>
                                {info.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex lg:hidden">
                        <MenuMobile />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
