import Image, { StaticImageData } from "next/image";

interface CardMVVProps {
    image: string | StaticImageData
    alt: string
    title: string
    paragraph: string
}

export default function CardMVV({ image, alt, title, paragraph }: CardMVVProps) {
    return (
        <div className="px-4 2xl:px-6 pt-8 pb-14">
            <div className="items-center gap-8">
                <Image
                    src={image}
                    alt={alt}
                    width={75}
                    height={75}
                />
                <p className="text-[26px] 2xl:text-3xl font-bold text-primary-500 mt-7 tracking-wide">{title}</p>
            </div>
            <div className="bg-sencodary-500 w-20 h-1 my-6"></div>
            <p className="text-justify line-clamp-4 text-lg">{paragraph}</p>
        </div>
    );
}