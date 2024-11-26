'use client'

import { useEffect, useState } from 'react';
import CourseDetails from '../components/CoursesDetails';

interface CursosProps {
    params: Promise<{ nome: string }>; 
}

export default function Cursos({ params }: CursosProps) {
    const [nomeCursoState, setNomeCursoState] = useState<string | null>(null);

    useEffect(() => {
        async function fetchParams() {
            const unwrappedParams = await params;
            if (unwrappedParams?.nome) {
                setNomeCursoState(decodeURIComponent(unwrappedParams.nome));
            }
            // setLoading(false);
        }

        fetchParams();
    }, [params]);

    if (!nomeCursoState) {
        return (<></>);
    }

    return <CourseDetails nome={nomeCursoState} />;
}
