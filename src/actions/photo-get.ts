'use server'

import { Photo } from "./photos.get";

export type PhotoData = {
 photo: Photo
}

export default async function photoGet(id: string){
 const response = await fetch(
   `https://dogsapi.origamid.dev/json/api/photo/${id}`
 )
 const data = await response.json() as PhotoData[]
 return data
}