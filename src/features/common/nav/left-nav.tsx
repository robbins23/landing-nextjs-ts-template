"use client"

import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Navlinks from './nav-links';

interface LeftNavProps {}



function LeftNav(props: LeftNavProps) {
    const pathname = usePathname()
    const dispatch = useAppDispatch()

    const close = () => {
        const leftNavDrawer = document.getElementById('left-sidebar-drawer');
        if (leftNavDrawer) leftNavDrawer.click();
    };
    const user = useAppSelector((state) => state.user);



      




    return (
        <div className="drawer-side z-30 overflow-hidden">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
                <button
                    className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
                    onClick={close}
                >
                    <XMarkIcon className="h-5 inline-block w-5" />
                </button>

                <li className="mb-2 font-semibold text-xl">
                    <Link href="/welcome">
                        <img className="mask mask-squircle w-10" src="/logo192.png" alt="DashWind Logo" />
                        Space AI
                    </Link>
                </li>
                <div className="overflow-y-scroll pb-20 no-scrollbar" style={{ height: "85vh" }}>
                    
                        <Navlinks />
                </div>
            </ul>
        </div>
    );
}

export default LeftNav;
