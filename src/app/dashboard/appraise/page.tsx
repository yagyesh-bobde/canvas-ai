import Image from "next/image";
import AppraiseUpload from "~/components/Upload/Appraise";
import { db } from "~/server/db";
import { art } from "~/server/db/schema";
import { getMyWorks } from "~/server/querries";


// export const dynamic = "force-dynamic";

export default async function Appraise() {

  const appraisals = await getMyWorks(false);
  console.log(appraisals);

  const log = await db.select().from(art);

  console.log(log);
  return (
    <div className="p-14 space-y-12">
      <h1 className="font-bold text-lg sm:text-xl lg:text-3xl">
          Works Appraised
      </h1>
      
      <AppraiseUpload />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {
        appraisals.map((appraise) => {
          return(
            <div key={appraise.id} >
              <Image src={appraise.url} width={300} height={300} alt={appraise.title || `Art work`} />
            </div>
          )
        })
      }
      </div>
    </div>
  );
}