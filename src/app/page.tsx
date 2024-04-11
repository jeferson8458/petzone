
import photosGet from "@/actions/photos.get";
import { SectionHero } from "@/components/SectionHero";
import { Feed } from "@/components/feed/Feed";
import Image from "next/image";

export default async function Home() {
  const data = await photosGet()
  return (
  <>
    <SectionHero/>
    <Feed photos={data} />
   </>
  );
}
