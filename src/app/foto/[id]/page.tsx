import photoGet from "@/actions/photo-get"
import { PhotoContent } from "@/components/photo/photo-content";
import { notFound } from "next/navigation";


export default async function FotoIdPage({params}:{params: {id:string}}){
  const data = await photoGet(params.id);

  if(!data) return notFound;

  return(
    <main>
     <PhotoContent data={data}/>
    </main>
  )
}