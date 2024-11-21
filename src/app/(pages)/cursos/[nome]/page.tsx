'use client'

import { useEffect, useState } from 'react';
import data from '@/data/data.json';
import Section from '../components/Section';
import Image, { StaticImageData } from 'next/image';

// Tipagem do curso
interface Curso {
    nome: string;
    id: number;
    imagePage: string | StaticImageData
    imagePageAlt: string
    turno: string;
    professionalProfile: string;
    fieldOfActivity: string;
    matrizEmiep: string;
    btnDowload: string;
    nameAdvisor: string;
    emailAdvisor: string;
    testimonials1: string;
    student1: string;
}

// Função para normalizar nomes
function normalizarTexto(texto: string): string {
    return texto
        .normalize('NFD') // Remove acentos
        .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
        .replace(/\s+/g, '-') // Substitui espaços por traços
        .toLowerCase(); // Converte para minúsculas
}

// Criação do objeto de cursos por nome normalizado
const nomeParaCurso: Record<string, Curso> = (data.Home?.CardsCurso || []).reduce((acc, curso) => {
    if (curso?.nome) {
        const nomeNormalizado = normalizarTexto(curso.nome);
        acc[nomeNormalizado] = curso;
    }
    return acc;
}, {} as Record<string, Curso>);

interface CursosProps {
    params: Promise<{ nome: string }>; // 'params' é uma Promise que resolve para um objeto com 'nome'
}

export default function Cursos({ params }: CursosProps) {
    const [nomeCursoState, setNomeCursoState] = useState<string | null>(null);

    useEffect(() => {
        async function fetchParams() {
            const unwrappedParams = await params;

            // Decodificar e normalizar o nome
            if (unwrappedParams?.nome) {
                const nomeNormalizado = normalizarTexto(decodeURIComponent(unwrappedParams.nome));
                setNomeCursoState(nomeNormalizado);
            }
        }
        fetchParams();
    }, [params]);

    const curso = nomeParaCurso[nomeCursoState || ""];

    if (!curso) return <p>Curso não encontrado.</p>;

    return (
        <div>
            <h1 className="pt-60 pb-20 font-semibold text-sencodary-500 text-center text-4xl">{curso.nome}</h1>
            <Image 
                src={curso.imagePage}
                alt={curso.imagePageAlt}
                width={1000}
                height={0}
                className='mx-auto'
            />F
            <p className="text-center text-sencodary-500 font-bold my-28 text-lg">{curso.turno}</p>

            <Section title="Perfil profissional">{curso.professionalProfile}</Section>
            <Section title="Campo de atuação">{curso.fieldOfActivity}</Section>
            <Section title={curso.matrizEmiep} downloadLink={curso.btnDowload} />
            <Section title="Orientador do curso">
                <p>Orientador (a): {curso.nameAdvisor}</p>
                <p>E-mail: {curso.emailAdvisor}</p>
            </Section>
            <div>
                <div className='py-16 max-w-[1280px] mx-auto'>
                    <h2 className='text-center text-sencodary-500 font-medium text-4xl'>Depoimentos de ex-alunos</h2>
                    <div className='flex mt-10'>
                        <span className='flex bg-primary-500 w-4 h-10 mx-10'></span>
                        <p>{curso.testimonials1}</p>
                    </div>
                    <p className='text-center mt-10 tracking-wide font-medium'>{curso.student1}</p>
                </div>
            </div>
        </div>
    );
}
