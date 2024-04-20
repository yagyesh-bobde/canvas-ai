import Image from "next/image";
import AppraiseUpload from "~/components/Upload/Appraise";
import { db } from "~/server/db";
import { art } from "~/server/db/schema";
import { getMyWorks } from "~/server/querries";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"


// export const dynamic = "force-dynamic";

export default async function Appraise() {

  const appraisals = await getMyWorks(false);
  console.log(appraisals);

  const log = await db.select().from(art);

  console.log(log);
  return (
    <div className="p-14 max-lg:pb-38 space-y-12">
      <h1 className="font-bold text-lg sm:text-xl lg:text-3xl">
          Works Appraised
      </h1>
      
      <div className="flex flex-col-reverse lg:flex-col gap-12">

        <AppraiseUpload />

        <Carousel className="mx-auto">
          <CarouselContent>
            {
            appraisals.map((appraise) => {
              return(
                <CarouselItem key={appraise.id}>
                  <Image className="rouned-xl w-full" src={appraise.url} width={300} height={300} alt={appraise.title || `Art work`} />
                </CarouselItem>
              )
            })
          }
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </div>

    {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {
        appraisals.map((appraise) => {
          return(
            <div key={appraise.id} className="rouned-xl" >
              <Image className="rouned-xl" src={appraise.url} width={300} height={300} alt={appraise.title || `Art work`} />
            </div>
          )
        })
      }
      </div> */}
    </div>
  );
}