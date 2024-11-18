interface InputContactProps {
    img: string | StaticImageData
    alt: string
    type: string
    placeholder: string
}

import { Input } from "@/components/ui/input"
import Image, { StaticImageData } from "next/image"

export default function InputContact(props: InputContactProps) {
    return (
        <div className="flex items-center justify-center gap-4 px-2 py-5 border-b-[1px] border-zinc-400">
            <Image
                src={props.img}
                alt={props.alt}
                width={30}
                height={30}
            />
            <Input className="border-none shadow-transparent focus-visible:ring-transparent !text-lg" type={props.type} placeholder={props.placeholder} />
        </div>
    )

}
