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
    <div className="">
      <AppraiseUpload />

      {
        appraisals.map((appraise) => {
          return(
            <div key={appraise.id} >
              <Image src={appraise.url} width={200} height={200} alt={appraise.title || `Art work`} />
            </div>
          )
        })
      }
    </div>
  );
}