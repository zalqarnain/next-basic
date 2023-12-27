"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
function Navbar() {
    const pathName=usePathname()
    return (
       <>
        {
            pathName!=="/login" ?
        <>
        <Link href='/'><button>Home</button></Link>
        <Link href='/tickets'><button>Tickets</button></Link>
        <Link href='/home/about'><button>About</button></Link>
        <Link href='/login'><button>Login</button></Link>

        </>
        :
        <></>
        }
       </>
    );
}

export default Navbar;