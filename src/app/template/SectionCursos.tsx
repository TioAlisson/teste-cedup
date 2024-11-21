import Link from "next/link";
import { Button } from "@/components/ui/button";

import data from "@/data/data.json"
import CardCurso from "../components/CardCurso";

export default function SectionCursos() {
    return (
        <div className="bg-gray">
            <div className="py-24 container mx-auto">
                <div className="text-4xl lg:text-5xl font-semibold text-center">
                    <h2 className="text-primary-500">CONFIRA ALGUNS DE NOSSOS</h2>
                    <p className="pt-6 text-sencodary-500 font-bold">CURSOS</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 2xl:gap-2 py-16">
                    {data.Home.CardsCurso.map((card, index) => (
                        <CardCurso
                            key={index}
                            image={card.image}
                            alt={card.alt}
                            imageIcon={card.imageIcon}
                            course={card.course}
                            title={card.title}
                        />
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/" className="text-center">
                        <Button variant="defaulCedup">Todos os cursos</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
