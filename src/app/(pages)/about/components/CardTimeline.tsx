interface CardTimelineProps {
    image: string | StaticImageData
    year: string
    title: string
}

import Image, { StaticImageData } from "next/image";

export default function CardTimeline({image, year, title}: CardTimelineProps) {
    return (
        <div className="timeline-year">
            <div className="flex flex-1 justify-start items-center">
                <Image 
                    src={image}
                    alt="Icone"
                    width={78}
                    height={100}
                    className="p-4 border border-primary-400 rounded-sm"
                />
                <div className="w-full h-[1px] bg-primary-400"></div>
                <svg width="9" height="9" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3.5" cy="3.5" r="3.5" fill="#E74040" /></svg>
            </div>
            <h1 className="mb-7 mt-5 text-sencodary-500 text-4xl font-semibold">{year}</h1>
            <div className="pe-10">
                <p className="text-muted-foreground">{title}</p>
            </div>
        </div>
    );
}