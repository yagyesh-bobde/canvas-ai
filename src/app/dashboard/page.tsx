import React from 'react'
import { UploadButton } from '~/utils/uploadthing'

const page = () => {
    return (
        <div>
            <UploadButton endpoint='imageUploader' headers={{
                "sold" : "true"
            }} />
        </div>
    )
}

export default page
