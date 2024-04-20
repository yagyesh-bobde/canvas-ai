import React from 'react'
import { ModeToggle } from '../toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <div className='flex-center-between py-8'>
            <div className="font-extrabold">
                CANVAS AI
            </div>
            <div className='flex-center gap-4'>
                <ModeToggle />
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn >
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Header
