"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import checkAuth from '@/lib/auth';
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import RightSidebar from "@/containers/right-sidebar";
import ModalLayout from "@/containers/modal-layout";
import initializeApp from "@/lib/init";
import { ToastContainer } from "react-toastify";
import Footer from "@/features/common/footer";
import Navbar from "@/features/common/nav/nav-bar";
import Navlinks from "@/features/common/nav/nav-links";
import LeftNav from "@/features/common/nav/left-nav";
import { themeChange } from "theme-change";


const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: ReactNode;
};

initializeApp()

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
    const mainContentRef = useRef(null);



useEffect(() => {
  const token = checkAuth(); // Check authentication status
  // themeChange(false);
}, []);


  return (


    <html lang="en">
    <body className={inter.className}>
      <StoreProvider>
     
            {/* Left drawer - containing page content and side bar (always open) */}
          <div className="drawer">
              <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col ">
              <Navbar />
              <main className="flex-1 overflow-y-auto  " ref={mainContentRef}>
                  {children}
                  <div className="h-16"></div>
                  <Footer />
              </main>
              </div>
          
          {/* Left drawer - containing nav links.. */}
              <LeftNav />

          </div>

          {/* Right drawer - containing secondary content like notifications list etc.. */}
          <RightSidebar />

          {/* Notification layout container */}
          <ToastContainer />

          {/* Modal layout container */}
          <ModalLayout />
    </StoreProvider>
    </body>
    </html>
  );
};

export default RootLayout