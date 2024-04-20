import React from 'react'
import { getAllMyArts } from '~/server/querries'
import { UploadButton } from '~/utils/uploadthing'

const page = async() => {

    const artWorks = await getAllMyArts();
    
    
    return (
        <div>
            Welcome to user dashboard
            {
                artWorks.map((art) => {
                    return(
                        <div key={art.id} >
                            <img src={art.url} width={200} height={200} alt={art.title || `Art work`} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default page
