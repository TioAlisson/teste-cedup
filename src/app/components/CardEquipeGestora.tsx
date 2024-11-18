interface CardEquipeGestoraProps {
    image: string | StaticImageData
    alt: string
    name: string
    description: string
}

import Image, { StaticImageData } from "next/image";

export default function CardEquipeGestora({ image, alt, name, description }: CardEquipeGestoraProps) {
    return (
        <div className="rounded-md overflow-hidden card-equipe">
            <div className="relative bg-sencodary-500">
                <Image
                    src={image}
                    alt={alt}
                />
                <div className="absolute flex items-center justify-center bg-zinc-800/80 w-full h-full top-0 bg-card-equipe">
                    <div>
                        <p className="text-white">Só teste priviet</p>
                        <img src="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/Icon-instagram.svg" alt="oi" />
                    </div>
                </div>
            </div>
            <div className="px-6 py-8 bg-primary-color text-white">
                <h3 className="text-3xl font-bold">{name}</h3>
                <p className="mt-2 text-xl">{description}</p>
            </div>
        </div>
    );
}