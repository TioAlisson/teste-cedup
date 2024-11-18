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
                width={300}
                height={200}
                className="object-cover w-full"
            />
            <span className="absolute bottom-0 w-full bg-red-500/70 py-2 text-center uppercase text-2l font-semibold">{title}</span>
        </div>
    );
}