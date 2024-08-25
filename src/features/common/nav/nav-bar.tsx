import Link from 'next/link';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import { themeChange } from 'theme-change';
import { useEffect, useState } from 'react';
import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
import Navlinks from './nav-links';
import { removeNotificationMessage } from '../headerSlice';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import NavProfileLinks from './nav-profile-links';

const Navbar: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState<string | null>(null);
    const { noOfNotifications, newNotificationMessage, newNotificationStatus } = useAppSelector((state) => state.header);
    const dispatch = useAppDispatch();

    const logoutUser = (): void => {
        // Add logout functionality here
    };

    useEffect(() => {
        if (currentTheme === null) {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setCurrentTheme("dark");
          } else {
            setCurrentTheme("light");
          }
        }
      }, []);
    

    useEffect(() => {
        console.log(newNotificationMessage)
        if (newNotificationMessage !== "") {
          console.log("herer")
          if(newNotificationStatus == 1) {
            toast.success(newNotificationMessage)
          }else{
            toast.error(newNotificationMessage)
          }
          dispatch(removeNotificationMessage());
        }
      }, [newNotificationMessage]);

    return (
        <div className="w-full flex justify-center shadow-lg">
            <div className="navbar py-2  max-w-5xl">
                <div className="navbar-start">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="left-sidebar-drawer" className="btn btn-square btn-ghost">
                            <Bars3Icon className="h-5 inline-block w-5" />
                        </label>
                    </div>

                    <div className="flex-1 px-2 mx-2">
                        <Link href="/">
                            <span className="font-bold text-xl">
                                <img
                                    className="mask inline-block mr-2 mask-circle w-10"
                                    src="/android-chrome-192x192.png"
                                    alt="Logo"
                                />
                                Space AI
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <Navlinks />
                    </ul>
                </div>

                <div className="navbar-end hidden lg:flex">
                     {/* Light and dark theme selection toggle */}
                    {/* <label className="swap">
                        <input type="checkbox" />
                        <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={`fill-current w-6 h-6 ${currentTheme === "dark" ? "swap-on" : "swap-off"}`} />
                        <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={`fill-current w-6 h-6 ${currentTheme === "light" ? "swap-on" : "swap-off"}`} />
                    </label> */}


                    <NavProfileLinks />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
