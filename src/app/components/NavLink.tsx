import Link from "next/link";

interface NavLinkProps {
    href: string;
    name: string;
    className?: string;
}

const btnStyle = "border-b-2 border-transparent hover:border-b-2 hover:border-zinc-800 transition-all duration-500 ease-in-out w-fit text-[18px] uppercase";

export default function NavLink({ href, name, className }: NavLinkProps) {
    return (
        <Link className={`${className} ${btnStyle}`} href={href} rel="noreferrer">
            {name}
        </Link>
    );
}
