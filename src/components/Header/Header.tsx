import React from 'react'
import { ModeToggle } from '../toggle'

const Header = () => {
    return (
        <div className='flex-center-between py-8'>
            <div className="font-extrabold">
                CANVAS AI
            </div>
            <ModeToggle />
        </div>
    )
}

export default Header
