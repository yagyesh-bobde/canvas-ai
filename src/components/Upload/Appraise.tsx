"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from '../ui/input'
import { UploadButton } from "~/utils/uploadthing";
import { toast } from "../ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"


const Appraise = () => {
      const router = useRouter();
    const [form, setform] = useState({
        title: "",
        description: "",
        realPrice: "",
        onSale: "true",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
            />
            <Input 
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
            />
            <Input 
                name="realPrice"
                placeholder="Your Price in USD"
                value={form.realPrice ?? ""}
                onChange={handleChange}
            />

            <Select name="onSale" onValueChange={(value) => setform({ ...form, onSale: value })}>
                <SelectTrigger>
                    <SelectValue placeholder="Want to put on sale?" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="true">True</SelectItem>
                    <SelectItem value="false">False</SelectItem>
                </SelectContent>
            </Select>
            </div>
        {/* <Input 
            name="onSale"
            placeholder="On Sale"
            value={form.onSale}
            onChange={handleChange}
        /> */}

        <UploadButton endpoint='imageUploader' headers={{
            "selfArt" : "false", 
            "title" : form.title,
            "description" : form.description,
            "estimatePrice" : form.realPrice,
            "realPrice" : form.realPrice,
            "onSale" : form.onSale,
        }} 
        
        onClientUploadComplete={() => {
          router.refresh()
          toast({
                    title: "✅ Appraisal work uploaded",
            })
        }}
        
        />
        </div>
    )
}

export default Appraise
