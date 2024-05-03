"use client";
import React, { useState, useEffect } from "react";
import ActionButtons from "@/components/navbar/_components/actions-buttons";
import Logo from "@/components/navbar/_components/logo";
import { Menu } from "@/components/navbar/_components/menu";

type Props = {};

function NavBar({}: Props) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-between space-x-10 bg-white  h-14
    sticky top-0 z-50 border-b border-gray-200
  `;

  return (
    <div className={navbarClasses}>
      <div className="flex items-center justify-center">
        <Logo />
        <Menu />
      </div>

      <ActionButtons />
    </div>
  );
  // return (
  //   <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-5 flex items-center justify-between font-light text-zinc-300 sticky top-0 backdrop-blur-md rounded z-20">
  //     <div className="overflow-hidden">
  //       <motion.div
  //         initial={{ opacity: 0, y: 100 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.3 }}
  //       >
  //         <a href="/" className="z-50 flex items-center space-x-1">
  //           <span className="font-bold text-2xl text-white">learno.ai</span>
  //         </a>
  //       </motion.div>
  //     </div>
  //     <div className="max-md:hidden flex items-center space-x-6 overflow-hidden">
  //       <motion.div
  //         initial={{ opacity: 0, y: 100 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.3 }}
  //         className="flex items-center space-x-6"
  //       >
  //         <div className="flex items-center gap-4">
  //           <GithubSVG />
  //         </div>
  //       </motion.div>
  //     </div>
  //     <div className="md:hidden ">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         className="lucide lucide-menu"
  //       >
  //         <line x1="4" x2="20" y1="12" y2="12" />
  //         <line x1="4" x2="20" y1="6" y2="6" />
  //         <line x1="4" x2="20" y1="18" y2="18" />
  //       </svg>
  //     </div>
  //   </div>
  // );
}

export default NavBar;
