'use client'

import Image from "next/image";
import LineRed from "@/public/img/img-line.svg"

import IconWhats from "@/public/icon/icon-whatsapp.png"
import IconLocazition from "@/public/icon/icon-localizition.png"

import Link from "next/link";

import data from "@/data/data.json"


export default function SectionAddress() {
    return (
        <div className="container mx-auto py-28">
            <h2 className="pb-20 text-5xl text-center font-medium hidden lg:block">Aonde posso econtrar o Cedup?</h2>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7057.371441711345!2d-50.32802130332658!3d-27.819443165625945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e01f3d2b4a6625%3A0x68ccd540df730600!2sCedup%20Renato%20Ramos%20Da%20Silva!5e0!3m2!1spt-BR!2sbr!4v1731610275052!5m2!1spt-BR!2sbr"
                        className="w-full pt-12 lg:pt-0"
                        height="500"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="lg:col-start-8 col-span-12 lg:col-span-5 order-1 lg:order-2">
                    <h1 className="text-4xl lg:text-5xl font-medium">Entre em contato <br /> com a gente</h1>
                    <Image
                        src={LineRed}
                        alt="Line Red"
                        className="pt-4 pb-12 md:w-80"
                    />
                    <div>
                        <Link href="https://github.com/TioAlisson/Projeto-Cedup.github.io" className="flex items-center gap-4">
                            <Image
                                src={IconWhats}
                                alt="Line Green"
                                width={40}
                            />
                            <span className="text-lg lg:text-2xl">(49) 9 9961-6212</span>
                        </Link>
                        <Link href="https://github.com/TioAlisson/Projeto-Cedup.github.io" className="flex items-center gap-4 py-10">
                            <Image
                                src={IconLocazition}
                                alt="Line Green"
                                width={36}
                            />
                            <span className="text-lg lg:text-2xl w-[400px]">Avenida Castelo Branco, N 109 Universitario Lages - SC</span>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <span className="text-zinc-700 font-semibold text-2xl">Nossas redes:</span>
                            <div className="flex items-center gap-4 py-4">
                                {data.Contact.mapa.map((link, index) => (
                                    <Link key={index} href={link.url} target="_blank" rel="noreferrer">
                                        <Image
                                            key={index}
                                            src={link.image}
                                            alt={link.alt}
                                            width={40}
                                            height={30}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}