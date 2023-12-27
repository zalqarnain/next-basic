"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
function Tickets(props) {

    const router = useRouter();

    function handleChange() {
        router.push('/home/about')
    }

    return (
        <div>
            <p>Tickets page</p>
            <br />
            <button onClick={handleChange}>Navigate</button>
        </div>
    );
}

export default Tickets;