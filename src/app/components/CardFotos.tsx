import Image, { StaticImageData } from "next/image";

interface CardFotosProps {
    image?: string | StaticImageData
    alt?: string
    title: string
}

import Teste from "@/public/img/img-sobre.png"

export default function CardFotos({ image, alt, title }: CardFotosProps) {
    return (
        <div className="relative">
            <Image
                src={Teste}
                alt="teste"
                className="object-contain w-full h-auto"
            />
            <span className="absolute bottom-0 w-full bg-red-500/70 py-2 text-center uppercase lg:text-xl text-white font-semibold">{title}</span>
        </div>
    );
}