import Image from "next/image";
import mulher from '@/assets/cahorro.png'
import { FeedPhoto } from "./Feed-photo";
import { Photo } from "@/actions/photos.get";

export function Feed({photos}:{photos: Photo[]}){
  return(
    <div className="flex-1 w-full max-w-[1246px] px-[15px] mx-auto">
      <div className="">
      <FeedPhoto photos={photos}/>
      </div>
    </div>
  )
}