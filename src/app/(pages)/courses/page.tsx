'use client'

import { useState } from 'react'
import SingleBanner from '../components/SingleBanner'

export default function Courses() {
    const [selectedOption, setSelectedOption] = useState('pos-medio')

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value)
    }

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
                        className="bg-white border border-gray-300 rounded-lg p-2 text-lg w-96"
                    >
                        <option value="pos-medio">Pós-médio</option>
                        <option value="emiep">EMIEP</option>
                    </select>
                </div>

                <div className="mt-8 py-10">
                    {selectedOption === 'pos-medio' ? (
                        <h2 className="text-5xl font-bold text-center uppercase text-primary-500">CURSOS PÓS MÉDIO</h2>
                    ) : (
                        <h2 className="text-5xl font-bold text-center uppercase text-primary-500">CURSOS EMIEP</h2>
                    )}
                    <div className="mt-4">
                        {selectedOption === 'pos-medio' ? (
                            <p>Aqui você verá os cursos de Pós-médio.</p>
                        ) : (
                            <p>Aqui você verá os cursos do EMIEP.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
