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
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`transition-all ease-in-out duration-300 ${isScrolled ? 'menu-fixed' : 'bg-primary-color border-b-2 py-4'}`}>
            <nav>
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <Link href="/" rel="noreferrer">
                            <Image src={Logo} alt="Logo Petshop" className="logo" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex gap-6">
                        {data.InfoNavLink.map((info, index) => (
                            <Link key={index} href={info.href} className={`relative text-white font-semibold ${isScrolled ? 'text-[18px]' : 'text-[20px]'} 
                                ${pathname === info.href ? 'border-b-4 border-primary-500 ' : 'border-b-2 border-transparent'} hover:border-b-4 hover:border-primary-500 transition`}>
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
