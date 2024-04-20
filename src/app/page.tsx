import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Header from "~/components/Header/Header";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  
  
  return (
    <main className="w-responsive">
      <Header />
      HELLO this is the home page
      <Button>
        <Link href="/explore">
          Explore Art Gallery
        </Link>
      </Button>
    </main>
  );
}