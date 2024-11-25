'use client'

import { useState } from 'react'
import SingleBanner from '../components/SingleBanner'

import data from "@/data/dataCourses.json"
import CardCurso from '@/app/components/CardCurso'

export default function Courses() {


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

    const [selectedOption, setSelectedOption] = useState('pos-medio')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value)
    }

    // Filtrar cursos com base no tipo selecionado
    const filteredCourses = data.cardsCurso.filter((card) => card.typeCouse === (selectedOption === 'pos-medio' ? 'POS' : 'EMIEP'));

    return (
        <div>
            <SingleBanner
                title="CURSOS"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-sobre.jpg"
                
            />
            <div className="py-24 px-4 container mx-auto">
                <div className='flex justify-end'>
                    <select
                        onChange={handleChange}
                        value={selectedOption}
                        className="bg-white border border-gray-300 rounded-lg p-2 text-lg w-96 focus:outline-none"
                    >
                        <option value="pos-medio">Pós-médio</option>
                        <option value="emiep">EMIEP</option>
                    </select>
                </div>

                <div className="mt-8 py-10">
                    <h2 className="text-5xl font-bold text-center uppercase text-primary-500">
                        {selectedOption === 'pos-medio' ? 'CURSOS PÓS MÉDIO' : 'CURSOS EMIEP'}
                    </h2>
                    <div className="mt-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 2xl:gap-2 py-16">
                            {filteredCourses.map((card, index) => (
                                <CardCurso
                                    key={index}
                                    image={card.image}
                                    alt={card.alt}
                                    imageIcon={card.imageIcon}
                                    course={card.course}
                                    title={card.title}
                                    urlCourses={"/cursos/" + createLinkCourse(card.nome, card.typeCouse)}                                    
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
