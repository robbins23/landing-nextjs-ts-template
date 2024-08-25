import Link from 'next/link';
import React from 'react';

const Navlinks: React.FC = () => {
    return (
        <>
            <li className="mr-2">
                <Link href="/about-us">About Us</Link>
            </li>
            <li className="mr-2">
                <Link href="/about-us">Pricing</Link>
            </li>
            <li className="mr-2">
                <Link href="/about-us">Blogs</Link>
            </li>
            <li className="mr-2">
                <Link href="/contact-us">Contact Us</Link>
            </li>
        </>
    );
};

export default Navlinks;
