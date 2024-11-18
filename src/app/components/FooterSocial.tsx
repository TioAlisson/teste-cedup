import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";

export default function FooterSocial() {
    const text = data.Footer.textSocial;
    const words = text.split("REDES SOCIAIS");

    return (
        <div className="flex justify-center items-center gap-6 mb-24 lg:mb-32">
            {data.Footer.socialLinks.map((social, index) => (
                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={social.image}
                        alt={social.url}
                        width={50}
                        height={50}
                    />
                </Link>
            ))}
            <p className="max-w-[150px] text-white font-medium hidden lg:inline">
                {words[0]} <span className="font-semibold">REDES SOCIAIS</span>
            </p>
        </div>
    );
}
