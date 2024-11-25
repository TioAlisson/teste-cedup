'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/img-logo.svg";
import data from "@/data/dataNavLink.json";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuMobile from "../components/MenuMobile";

const Header = () => {
    // Função para normalizar o pathname (garante que a URL tenha uma barra inicial)
    const normalizePathname = (path: string) => {
        if (path.startsWith('/')) {
            return path;  // Se o pathname já começa com uma barra, retorna como está
        }
        return `/${path}`;  // Caso contrário, adiciona uma barra inicial
    };

    // Estado que controla se o usuário fez scroll na página
    const [isScrolled, setIsScrolled] = useState(false);  // Inicializa com `false`

    // Estado para garantir que o código rodará no cliente
    const [isClient, setIsClient] = useState(false);

    // Hook do Next.js para obter o pathname atual da URL
    const pathname = usePathname();

    // Efeito colateral que observa o evento de scroll na janela
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true); // Se o scroll for maior que 10 pixels, muda o estado para true
            } else {
                setIsScrolled(false); // Se o scroll for menor que 10 pixels, volta para false
            }
        };

        // Adiciona o evento de scroll ao window
        window.addEventListener('scroll', handleScroll);

        // Função de limpeza do efeito (remove o evento quando o componente for desmontado)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // O array vazio indica que o efeito será executado apenas uma vez, na montagem inicial

    useEffect(() => {
        setIsClient(true);  // Agora sabemos que estamos no cliente
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);  // Atualiza o estado dependendo da rolagem
        };

        // Adiciona o listener de scroll
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Limpeza do efeito
        };
    }, []);

    if (!isClient) return null; // Evita renderizar no lado do servidor

    return (
        <header
            className={`transition-all ease-in-out duration-300 flex items-center fixed w-full z-10 ${isScrolled ? "menu-fixed" : "bg-primary-500 py-6"
                }`}
        >
            <nav className="w-full">
                <div className="container mx-auto flex items-center">
                    <div className="flex-shrink">
                        <Link href="/" rel="noopener noreferrer">
                            <Image src={Logo} alt="Logo Cedup" className="logo" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex gap-6 flex-grow justify-center">
                        <ul className="flex gap-6">
                            {/* Itera sobre os links de navegação no arquivo JSON */}
                            {data.navLink.map((info, index) => (
                                <li key={index} className="relative group">
                                    <Link
                                        rel="noopener noreferrer"
                                        href={info.href}
                                        className={`text-white font-semibold transition-all ease-in-out duration-300 flex group-hover:border-b-4 group-hover:border-red-500
                                            ${isScrolled ? "text-[20px]" : "text-[24px]"}
                                            ${normalizePathname(pathname) === normalizePathname(info.href) 
                                            ? "border-b-4 border-red-500" 
                                            : "border-b-4 border-transparent"}`}
                                    >
                                        {info.name} 
                                        {/* Se o link tiver um dropdown, exibe o ícone */}
                                        {info.dropdown && (
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10L12 15L17 10H7Z" fill="white" />
                                            </svg>
                                        )}
                                    </Link>

                                    {/* Dropdown (menu suspenso) que aparece quando o link tem o atributo "dropdown" */}
                                    {info.dropdown && (
                                        <ul className="absolute left-0 top-full mt-1 bg-[#1d1b1c] text-white py-2 px-4 rounded-br-lg rounded-bl-lg shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out w-[-webkit-fill-available] font-bold">
                                            {/* Itera sobre as chaves do dropdown e cria os links */}
                                            {Object.keys(info.dropdown).map((key) => {
                                                const dropdownKey = key as keyof typeof info.dropdown;
                                                return (
                                                    <li key={dropdownKey}>
                                                        <Link
                                                            href={`/${info.dropdown[dropdownKey]}`}
                                                            className="block py-2 px-4 text-left uppercase hover:bg-gray-700"
                                                        >
                                                            {dropdownKey.charAt(0).toUpperCase() + dropdownKey.slice(1)}  {/* Exibe a chave com a primeira letra maiúscula */}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
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
