import SectionCursos from "./template/SectionCursos";
import SectionEquipe from "./template/SectionEquipe";
import SectionFotos from "./template/SectionFotos";
import SectionMVV from "./template/SectionMVV";
import SectionSlide from "./template/SectionSlide";
import SectionSobre from "./template/SectionSobre";

export default function Home() {
  return (
    <>
      <SectionSlide />
      <SectionMVV />
      <SectionCursos />
      <SectionSobre />
      <SectionFotos />
      <SectionEquipe />
    </>
  );
}
