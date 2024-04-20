"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from '../ui/input'
import { UploadButton } from "~/utils/uploadthing";

const Appraise = () => {
      const router = useRouter();
    const [title, settitle] = useState("")
    
    return (
        <div>
            Appraise 
        <Input 
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
        />
        <UploadButton endpoint='imageUploader' headers={{
            "selfArt" : "false", 
            "title" : title, 
            "description" : "", 
            "estimatePrice" : "0", 
            "realPrice" : "0", 
            "onSale" : "true"
        }} 
        
        onClientUploadComplete={() => {
          router.refresh()
        }}
        
        />
        </div>
    )
}

export default Appraise
