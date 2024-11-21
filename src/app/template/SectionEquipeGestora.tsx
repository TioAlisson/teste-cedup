import BorderSolid from "../components/BorderSolid";
import SlideEquipe from "../components/SlideEquipe";

export default function SectionEquipeGestora() {
    return (
        <div className="bg-gray">
            <div className="py-24 sm:container sm:mx-auto">
                <h2 className="text-4xl lg:text-5xl font-semibold text-center text-primary-500">EQUIPE GESTORA</h2>
                <BorderSolid styleMargin="mx-auto" />
                <SlideEquipe />
            </div>
        </div>
    )
}
