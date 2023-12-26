import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <>
        <Link href='/'>Home</Link>
        <Link href='/tickets'>Tickets</Link>
        </>
    );
}

export default Navbar;