"use client"


import React, { useState } from 'react'
import { Input } from '../ui/input'
import { UploadButton } from '~/utils/uploadthing'
import { useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'

const ArtUpload = () => {
    const [title, settitle] = useState("")
    const router = useRouter();
    
    return (
        <div>
            Art
            <Input 
                placeholder="Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            <UploadButton endpoint='imageUploader' headers={{
                "selfArt" : "true", 
                "title" : title, 
                "description" : "", 
                "estimatePrice" : "0", 
                "realPrice" : "0", 
                "onSale" : "false"
            }}
            
             onClientUploadComplete={() => {
                router.refresh()
                toast({
                    title: "✅ Art work uploaded",
                    
                })
            }}
            />
        </div>
    )
}

export default ArtUpload
