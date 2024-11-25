import SlideFotos from "../components/SlideFotos";

export default function SectionFotos() {
    return (
        <div className="bg-primary-500">
            <div className="py-24 container mx-auto">
                <div className="font-semibold text-center">
                    <h2 className="text-white text-3xl">CONFIRA NOSSA</h2>
                    <p className="pt-4 text-sencodary-500 font-bold text-[40px] lg:text-5xl">GALERIA DE FOTOS</p>
                </div>
                <SlideFotos />
            </div>
        </div>
    )
}
