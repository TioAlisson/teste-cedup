import SingleBanner from '../components/SingleBanner'
import SectionEquipeGestora from '@/app/template/SectionEquipeGestora'
import SlideABout from './components/SlideAbout'
import SectionMVV from '@/app/template/SectionMVV'

export default function Courses() {
    return (
        <div>
            <SingleBanner
                title="Sobre o cedup"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div id='timeline' className='py-20 ps-2 border-b-4'>
                <div className='lg:grid lg:grid-cols-12 text-primary-400'>
                    <p className='col-start-3 col-span-12 tracking-[.35em]'>Nossa história</p>
                    <h2 className='col-start-3 col-span-12 font-bold text-3xl'>LINHA DO TEMPO</h2>
                    <span className='flex col-start-3 rounded-full mt-4 mb-12 bg-sencodary-500 h-[6px] w-52'></span>
                </div>
                <SlideABout />
            </div>
            <div>
                <SectionMVV />
                <SectionEquipeGestora />
            </div>
        </div>
    )
}
