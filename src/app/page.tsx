import Header from "~/components/Header/Header";
import { Button } from "~/components/ui/button";
import Link from "next/link";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  
  
  return (
    <main className="w-responsive ">
      <Header />
      <div className="grid place-content-center h-[75vh] w-full">
        Create Main Page Here <br/>
      <Button>
        <Link href="/explore">
          Explore Art Gallery
        </Link>
      </Button>
      </div>
    </main>
  );
}