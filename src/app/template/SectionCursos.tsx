import { Button } from "@/components/ui/button";
import CardCurso from "../components/CardCurso";

import Link from "next/link";
import data from "@/data/dataCourses.json"

export default function SectionCursos() {

    function createLinkCourse(name: string, type: string): string {
        // Normaliza e remove acentos
        name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // Substitui espaços por hífens
        name = name.replace(/\s+/g, '-');
        // Converte para minúsculas
        name = name.toLowerCase();

        // Cria o link final
        const link: string = name + '-' + type.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return link;
    }

    return (
        <div className="bg-gray">
            <div className="py-24 container mx-auto">
                <div className="text-4xl lg:text-5xl font-semibold text-center">
                    <h2 className="text-primary-500">CONFIRA ALGUNS DE NOSSOS</h2>
                    <p className="pt-6 text-sencodary-500 font-bold">CURSOS</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 2xl:gap-2 py-16">
                    {data.cardsCurso.slice(0, 3).map((card, index) => (
                        <CardCurso
                            key={index}
                            image={card.image}
                            alt={card.alt}
                            imageIcon={card.imageIcon}
                            course={card.course}
                            title={card.title}
                            urlCourses={"/cursos/" + createLinkCourse(card.nome, card.typeCouse)}
                            typeCourse={card.typeCouse}
                        />
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/" rel="noopener noreferrer" className="text-center">
                        <Button variant="defaulCedup">Todos os cursos</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
