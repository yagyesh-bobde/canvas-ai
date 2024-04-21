
import Image from "next/image";
import { title } from "process";
import ArtUpload from "~/components/Upload/ArtUpload";
import { toast } from "~/components/ui/use-toast";
import { getMyWorks } from "~/server/querries";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

export default async function Page(){
    
    const artWorks = await getMyWorks(true);


    return (
    <div className="p-14 max-lg:pb-38 space-y-12 w-1/2 lg:overflow-hidden">
      <h1 className="font-bold text-lg sm:text-xl lg:text-3xl">
          Your Art Works
      </h1>
      
      <div className="flex flex-col-reverse lg:flex-col gap-12">

        <ArtUpload />

        <Carousel className="mx-auto max-h-[45vh]">
          <CarouselContent className="">
            {
            artWorks.map((appraise) => {
              return(
                <CarouselItem key={appraise.id} className="relative">
                  <Image loading="lazy"  className="rouned-xl w-full max-h-full object-cover object-center" src={appraise.url} width={300} height={300} alt={appraise.title || `Art work`} />
                </CarouselItem>
              )
            })
          }
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </div>
    </div>
    )
}


