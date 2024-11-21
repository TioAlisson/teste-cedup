import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SectionProps {
    title?: string;
    children?: React.ReactNode;
    downloadLink?: string;
}

export default function Section({ title, children, downloadLink }: SectionProps) {
    return (
        <div className="odd:bg-transparent even:bg-zinc-100 py-16 max-w-[980px] mx-auto">
            <h2 className="text-center text-sencodary-500 font-medium text-4xl">{title}</h2>
            <div className="mt-10">{children}</div>
            {downloadLink && (
                <div className="text-center mt-10">
                    <Link href={downloadLink}>
                        <Button variant="defaulCedup">Download</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}