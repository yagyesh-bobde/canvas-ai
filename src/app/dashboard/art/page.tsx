
import Image from "next/image";
import { title } from "process";
import ArtUpload from "~/components/Upload/ArtUpload";
import { toast } from "~/components/ui/use-toast";
import { getMyWorks } from "~/server/querries";


export default async function Page(){
    
    const artWorks = await getMyWorks(true);


    return (
        <div>
            <ArtUpload />
            {
                artWorks.map((art) => {
                    return(
                        <div key={art.id} >
                            <Image src={art.url} width={200} height={200} alt={art.title || `Art work`} />
                        </div>
                    )
                })
            }
        </div>
    )
}


