interface CardEquipeGestoraProps {
    image: string | StaticImageData
    alt: string
    name: string
    description: string
}

import IconWhats from "@/public/icon/icon-instagram-white.svg"

import Image, { StaticImageData } from "next/image";

export default function CardEquipeGestora({ image, alt, name, description }: CardEquipeGestoraProps) {
    return (
        <div className="rounded-sm overflow-hidden card-equipe">
            <div className="relative">
                <Image
                    src={image}
                    alt={alt}
                    className="w-full h-60 object-cover"
                />
                <div className="absolute flex items-center justify-center bg-zinc-900/80 w-full h-full top-0 bg-card-equipe">
                    <div>
                        <p className="text-white">Instagram</p>
                        <Image 
                            src={IconWhats}
                            alt="Medial Social Link"
                        />
                    </div>
                </div>
            </div>
            <div className="px-5 py-6 xl:px-6 xl:py-8 bg-primary-500 text-white">
                <h3 className="text-xl xl:text-3xl font-bold">{name}</h3>
                <p className="mt-2 xl:text-xl">{description}</p>
            </div>
        </div>
    );
}