import { PhotoData } from "@/actions/photo-get"
import Image from "next/image";
import { notFound } from "next/navigation";

export const PhotoContent = ({data}:{data: PhotoData}) => {
  const {photo} = data;
  if(!data) return notFound;
  return(
    <div className="flex-1 w-full max-w-[1246px] px-[15px] mx-auto pt-24">
      <div className="grid grid-cols-2 bg-white rounded-lg p-5 shadow-lg">
      <Image width={1500} height={1500} alt="teste" src={photo.src} className="rounded-lg flex-1 w-full h-full"/>
      <div className="ml-8">
      <p className="mb-5">Home</p>
      <h1 className="text-2xl font-semibold my-5">{photo.title}</h1>
     
      
      <div className="flex-1 justify-between items-center p-1 mr-4 s">
        <ul className="divide-y grid grid-cols-1 gap-y-2 ">
          <li className="flex justify-between">
            <span>Genero</span>
            <span>Macho</span>
          </li>
          <li className="flex justify-between">
            <span>Idade</span>
            <span>{photo.idade} anos</span>
          </li>
          <li className="flex justify-between">
            <span>Idade</span>
            <span>{photo.idade} anos</span>
          </li>
        </ul>
      </div>
      
      </div>
      </div>
    </div>
  )
}