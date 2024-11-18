'use client'



import Link from "next/link";
import data from "@/data/data.json"


import { Button } from "@/components/ui/button";
import InputContact from "./InputContact";
import Image from "next/image";

import IconText from "@/public/icon/icon-text.svg"


export default function SectionContact() {
    return (
        <div className="bg-[#E7E7E7]">
            <div className="container mx-auto py-28 max-w-[720px]">
                <h2 className="text-3xl lg:text-5xl uppercase text-zinc-900 font-semibold text-center">Entre em contanto</h2>
                <p className="text-center pt-14 pb-8 text-xl">Precisa de ajuda? Quer saber algo a mais? Preencha o formulário e nos envie uma mensagem. Entraremos em contato em breve!</p>
                <div>
                    {data.Contact.form.map((info, index) => (
                        <div key={index}>
                            <InputContact
                                key={index}
                                img={info.src}
                                alt={info.alt}
                                type={info.type}
                                placeholder={info.placeholder}
                            />
                        </div>
                    ))}
                    <div className="flex items-center justify-center py-8 gap-4 px-2 border-b-[1.5px] border-zinc-400">
                        <Image
                            src={IconText}
                            alt="Icon Text Area"
                            width={25}
                            height={25}
                        />
                        <textarea rows={1} className="px-4 py-2 w-full bg-transparent border-none shadow-transparent focus-visible:outline-none focus-visible:ring-transparent" placeholder="Sua mensagem aqui" />
                    </div>
                    <div className="text-center">
                        <Link href="/">
                            <Button variant="defaulCedup" className="py-6 mt-12">Enviar</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}