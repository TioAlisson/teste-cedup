import Image, { StaticImageData } from "next/image";

interface CardMVVProps {
    image: string | StaticImageData
    alt: string
    title: string
    paragraph: string
}

export default function CardMVV({ image, alt, title, paragraph }: CardMVVProps) {
    return (
        <div className="border-[1.5px] border-zinc-400 rounded-[40px] px-4 2xl:px-6 pt-8 pb-14">
            <div className="flex items-center gap-8">
                <Image
                    src={image}
                    alt={alt}
                    width={75}
                    height={75}
                />
                <p className="text-[26px] 2xl:text-4xl font-bold text-primary-500">{title}</p>
            </div>
            <div className="border border-sencodary-500 w-full my-8"></div>
            <p className="text-center line-clamp-4 text-lg">{paragraph}</p>
        </div>
    );
}