import Image from "next/image";
import { Container } from "./Container";
import mulher from '@/assets/mulher.svg'
import rentagulo from '@/assets/Retangulo.svg'
import rentagulo2 from '@/assets/teste2.svg'

export function SectionHero(){
  return(
    <section className="w-full flex-1">

      <div className="pt-24 bg-hero-pattern bg-cover bg-center bg-no-repeat rounded-b-3xl">
        <Container>
          <div className="flex-1 w-full h-full mb-28">
          <h1 className="text-blue-950 font-bold text-5xl">Mais um amigo</h1>
          <p className="text-blue-950 text-4xl mt-2">Milhares de mais diversão!</p>
          <p className="mt-4 max-w-[490px]">Ter um animal de estimação significa ter mais alegria, um novo amigo, uma pessoa feliz que estará sempre com você para se divertir. Temos mais de 200 animais de estimação diferentes que podem atender às suas necessidades!</p>
          <button className="mt-5 bg-blue-950 text-white rounded-full w-[163px] h-[48px]">Explorar agora</button>
          </div>
         <div className="flex-1 items-end justify-end">
           <Image src={mulher} alt="mulher" className="h-[550px] z-100 absolute"/>
           <Image src={rentagulo} alt="mulher" className="h-[550px] z-0"/>
         </div>
        </Container>
      </div>
    </section>
  )
}