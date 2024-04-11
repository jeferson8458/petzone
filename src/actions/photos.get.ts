 'use server'
 export type Photo = {
  id: number;
  title: string;
  src: string;
  idade: string
 }

export default async function photosGet(){
  const response = await fetch(
    'https://dogsapi.origamid.dev/json/api/photo'
  )
  const data = await response.json() as Photo[]
  return data
}