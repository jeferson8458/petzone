import { Photo } from "@/actions/photos.get";
import Image from "next/image";
import Link from "next/link";

export function FeedPhoto({photos}:{photos: Photo[]}){
  return(
      <ul className="">
        <div className="grid grid-cols-4 gap-5 w-full h-full my-5">
        {photos.map((photo) => (
          <li key={photo.id} className="flex-1 border-2 bg-white rounded-lg p-2 shadow-sm">
          <Link href={`/foto/${photo.id}`} scroll={false} className="">
          <Image src={photo.src} width={1500} height={1500} alt="foto" className="rounded-lg"/>

          <div className="my-3">
          <h1 className="text-lg font-semibold">{photo.title}</h1>

          <div className="flex gap-2 text-sm">
          <p>Genero: Macho</p>
          <p>•</p>
          <p>Idade: {photo.idade} anos</p>
          </div>

          </div>

          </Link>
          </li>
        ))}
        </div>
      </ul>
  )
}