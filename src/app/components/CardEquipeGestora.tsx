interface CardEquipeGestoraProps {
    image: string | StaticImageData
    alt: string
    name: string
    description: string
}

import Image, { StaticImageData } from "next/image";

export default function CardEquipeGestora({ image, alt, name, description }: CardEquipeGestoraProps) {
    return (
        <div className="rounded-sm overflow-hidden card-equipe">
            <div className="relative bg-sencodary-500">
                <Image
                    src={image}
                    alt={alt}
                    width={200}
                    height={100}
                />
                <div className="absolute flex items-center justify-center bg-zinc-800/80 w-full h-full top-0 bg-card-equipe">
                    <div>
                        <p className="text-white">Só teste priviet</p>
                        <img src="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/Icon-instagram.svg" alt="oi" />
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