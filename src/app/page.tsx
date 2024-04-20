import { headers } from "next/headers";
import Image from "next/image";
import Header from "~/components/Header/Header";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = ["https://i.ytimg.com/vi/8NMJxyDwP6A/maxresdefault.jpg", "https://i.ytimg.com/vi/8NMJxyDwP6A/maxresdefault.jpg", "https://i.ytimg.com/vi/8NMJxyDwP6A/maxresdefault.jpg"]
  

  const posts = await db.query.posts.findMany();
  
  return (
    <main className="w-responsive">
      <Header />
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <Image src={image} key={index} width={200} height={200} alt="random image" />
        ))}
      </div>

    </main>
  );
}
