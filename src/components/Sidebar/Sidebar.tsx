import React from 'react'

const Sidebar = () => {
 
    const navLinks = [
        {
            id: 1, 
            name: "Gallery", 
            link: "/dashboard/gallery"
        },
        {
            
        }
    ]
    
    
    return (
        <div className='w-[350px] h-full min-h-screen border-r border-black/40 dark:border-white/40 flex-center'> 
            <h2>
                Welcome
            </h2>
        </div>
    )
}

export default Sidebar
