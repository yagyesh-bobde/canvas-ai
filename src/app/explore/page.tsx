import { headers } from "next/headers";
import Image from "next/image";
import Header from "~/components/Header/Header";
import { db } from "~/server/db";
import { getImages } from "~/server/querries";


export const dynamic = "force-dynamic";


export default async function page() {
    // headers();
    
    const artWorks = await getImages();

    console.log(artWorks);
    
    return (
        <main className="w-responsive">
          <Header />
          <div className="flex flex-wrap">
            {artWorks.map((art) => (
              <Image src={art.url} key={art.id} width={200} height={200} alt={art.title || `Art work`} />
            ))}
          </div>
        </main>
    )
}