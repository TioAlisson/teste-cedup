import BorderSolid from "../components/BorderSolid";
import SlideEquipe from "../components/SlideEquipe";

export default function SectionEquipe() {
    return (
        <div className="py-24 container mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold text-center">EQUIPE GESTORA</h2>
            <BorderSolid styleMargin="mx-auto" />
            <SlideEquipe />
        </div>
    )
}
