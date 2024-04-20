import { UploadButton } from "~/utils/uploadthing";

export default function page(){
    return (
        <div>
            Art

            <UploadButton endpoint='imageUploader' headers={{
                "sold" : "true"
            }} />
            
        </div>
    )
}


