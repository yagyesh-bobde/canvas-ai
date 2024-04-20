import { UploadButton } from "~/utils/uploadthing";

export default function Appraise() {
  return (
    <div className="">
      Appraise 

      <UploadButton endpoint='imageUploader' headers={{
                "sold" : "true"
            }} />
    </div>
  );
}