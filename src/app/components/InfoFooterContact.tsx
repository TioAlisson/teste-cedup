interface InfoFooterContactProps {
    image: string | StaticImageData
    alt: string
    title: string
    paragraph: string
}

import Image, { StaticImageData } from "next/image";

export default function InfoFooterContact({ image, alt, title, paragraph }: InfoFooterContactProps) {
    return (
        <div className="flex items-center my-4 lg:my-0">
            <Image
                src={image}
                alt={alt}
                width={60}
                height={60}
            />
            <span className="border-r-2 border-red-800 h-10 mx-8 py-12"></span>
            <div className="flex flex-col max-w-[130px] lg:max-w-[190px]">
                <h2 className="font-semibold text-white">{title}</h2>
                <p className="text-white">{paragraph}</p>
            </div>
        </div>
    )
}
