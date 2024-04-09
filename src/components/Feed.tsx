import Image from "next/image";
import mulher from '@/assets/cahorro.png'
export function Feed(){
  return(
    <div className="w-full max-w-[1246px] px-[15px] mx-auto">
      <p>O que há de novo?</p>
      <h1>Dê uma olhada em alguns de nossos animais de estimação</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-red-400">

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      <div className="relative">
      <Image src={mulher} alt="mulher" className="w-full h-auto rounded-lg"/>
      </div>

      </div>
    </div>
  )
}