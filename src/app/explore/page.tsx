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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5  h-full">
            {artWorks.map((art) => (
              <div key={art.id} className="relative border rounded-xl p-5 flex flex-col gap-8 w-full h-full">
                <Image src={art.url} key={art.id} width={200} height={200} alt={art.title || `Art work`} className="flex-1 object-cover object-center mx-auto" />
                <div className="flex-center-between">
                  <h3> {art.title} </h3>
                  <p> {art.description} </p>
                </div>
              </div>
            ))}
          </div>
        </main>
    )
}