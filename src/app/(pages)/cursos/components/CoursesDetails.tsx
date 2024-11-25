import { useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';
import SingleBanner from '../../components/SingleBanner';
import Section from '../components/Section';
import Testimonials from '../components/Testimonials';
import data from '@/data/dataCourses.json';
import NotFound from '@/app/not-found';

interface Curso {
    nome: string;
    id: number;
    imagePage: string | StaticImageData;
    imagePageAlt: string;
    turno: string;
    professionalProfile: string;
    fieldOfActivity: string;
    matrizEmiep: string;
    btnDowload: string;
    nameAdvisor: string;
    emailAdvisor: string;
    testimonials1: string;
    student1: string;
    typeCouse: string;
    rota: string;
}

interface CourseDetailsProps {
    nome: string;
}

const cursosAtualizados = data.cardsCurso.map((curso) => {
    const rota = normalizarTexto(curso.nome) + '-' + curso.typeCouse.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return { ...curso, rota }; // Adiciona o atributo `rota`
});

function normalizarTexto(texto: string): string {
    return texto
        .normalize('NFD') // Separada o caractere que tem acento
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/\s+/g, '-') // Substitui espaços por traços
        .toLowerCase(); // Converte para minúsculas
}

// Criação do objeto de cursos por nome normalizado
const nomeParaCurso: Record<string, Curso> = (cursosAtualizados || []).reduce((acc, curso) => {
    if (curso?.rota) {
        acc[curso.rota] = curso;
    }
    return acc;
}, {} as Record<string, Curso>);

export default function CourseDetails({ nome }: CourseDetailsProps) {
    const [curso, setCurso] = useState<Curso | null>(null);

    useEffect(() => {
        const rotaNormalizada = normalizarTexto(decodeURIComponent(nome));
        setCurso(nomeParaCurso[rotaNormalizada] || null);
    }, [nome]);

    if (!curso) {
        return <NotFound />;
      }

    return (
        <div>
            <SingleBanner
                title={curso.nome}
                backgroundImage={curso.imagePage}
                subtitle={curso.turno}
                colorBg="bg-zinc-950/60"
                paddingBottom="pb-10"
            />

            <Section title="Perfil profissional">
                {curso.professionalProfile}
            </Section>

            <Section title="Campo de atuação">
                {curso.fieldOfActivity}
            </Section>

            <Section title={curso.matrizEmiep} downloadLink={curso.btnDowload} />

            <Section title="Orientador do curso">
                <div className='flex justify-center text-center'>
                    <div>
                        <p>Orientador (a): {curso.nameAdvisor}</p>
                        <p>E-mail: {curso.emailAdvisor}</p>
                    </div>
                </div>
            </Section>

            <Testimonials
                student1={curso.student1}
                testimonials1={curso.testimonials1}
            />
        </div>
    );
}
