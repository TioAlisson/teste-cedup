import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface CardCursoProps {
    image: string | StaticImageData
    alt: string
    imageIcon: string
    course: string
    title: string
}

export default function CardCurso({ image, alt, imageIcon, course, title }: CardCursoProps) {
    return (
        <div className="2xl:px-8">
            <div className="overflow-hidden rounded-md shadow-2xl">
                <div>
                    <Image
                        src={image}
                        alt={alt}
                        width={900}
                        height={20}
                    />
                </div>
                <div className="py-6 px-8">
                    <div className="flex items-center justify-center lg:justify-start gap-2 pb-6">
                       <span className="text-xl">{imageIcon}</span>
                        <span className="flex">{course}</span>
                    </div>
                    <p className="md:text-xl text-center lg:text-start font-semibold line-clamp-2 text-primary-500">{title}</p>
                    <div className="text-center lg:text-start">
                        <Button variant="btnCursos" className="mt-4">Ler mais</Button>

                    </div>
                </div>
            </div>
        </div>
    );
}