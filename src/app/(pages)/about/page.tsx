import BorderSolid from '@/app/components/BorderSolid'
import SingleBanner from '../components/SingleBanner'
import SectionMVV from '@/app/template/SectionMVV'
import SectionEquipeGestora from '@/app/template/SectionEquipeGestora'

export default function Courses() {
    return (
        <div>
            <SingleBanner
                title="Sobre o cedup"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div className='py-20 container mx-auto'>
                <h2 className='text-primary-500 uppercase text-center text-5xl font-bold'>CEDUP RENATO RAMOS DA SILVA</h2>
                <BorderSolid styleMargin='mx-auto' />
                <SectionMVV />
            </div>
            <div className='bg-gray'>
                <SectionEquipeGestora />
            </div>
        </div>
    )
}
