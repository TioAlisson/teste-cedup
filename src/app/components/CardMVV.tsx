import Image, { StaticImageData } from "next/image";

interface CardMVVProps {
    image: string | StaticImageData
    alt: string
    title: string
    paragraph: string
}

export default function CardMVV({ image, alt, title, paragraph }: CardMVVProps) {
    return (
        <div className="px-4 2xl:px-12 pt-8 pb-14 shadow-[1px_1px_10px_rgba(0,0,0,0.15)] rounded-xl">
            <div className="flex items-center mb-8 justify-between">
                <Image
                    src={image}
                    alt={alt}
                    width={75}
                    height={75}
                    className="w-[60px] lg:w-[75px] h-auto"
                />
                <div className="text-center"> 
                    <p className="text-[26px] 2xl:text-3xl font-bold text-primary-500 tracking-wide">{title}</p>
                    <div className="bg-sencodary-500 w-full h-1 mt-1"></div>
                </div>
            </div>
            <p className="text-justify line-clamp-4 text-lg">{paragraph}</p>
        </div>
    );
}