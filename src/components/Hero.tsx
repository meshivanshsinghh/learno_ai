// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import HeroAnimation from "./HeroAnimation";
// import Image from "next/image";
// function Hero() {
//   const container = {
//     visible: {
//       transition: {
//         staggerChildren: 0.025,
//       },
//     },
//   };
//   const list = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.455, 0.03, 0.515, 0.955],
//         delay: 1,
//       },
//     },
//   };
//   const wrapper = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.25,
//       },
//     },
//   };
//   return (
//     <div className="w-full px-4 sm:px-8 lg:px-16 pt-20">
//       <div className="flex flex-col md:flex-row md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4">
//         <div className="shrink-0 md:w-1/2 lg:w-7/12 xl:w-auto">
//           {/* main title */}
//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             variants={container}
//             className="text-4xl lg:text-5xl mb-8 font-semibold"
//           >
//             <HeroAnimation
//               text="Accelerate your learning"
//               className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block"
//             />
//             <HeroAnimation
//               text="and master your"
//               className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block"
//             />
//             <HeroAnimation
//               text="skills with learno.ai"
//               className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600 inline-block"
//             />
//           </motion.h1>
//           {/* key pointers */}
//           <motion.ul
//             initial="hidden"
//             animate="visible"
//             variants={wrapper}
//             className="text-white space-y-2"
//           >
//             <motion.li variants={list} className="flex gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="fill-current h-5 shrink-0 mt-0.5"
//               >
//                 <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
//               </svg>
//               <span>Customized learning plans tailored to you.</span>
//             </motion.li>
//             <motion.li variants={list} className="flex gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="fill-current h-5 shrink-0 mt-0.5"
//               >
//                 <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
//               </svg>
//               <span>Focus on the study areas you need most.</span>
//             </motion.li>
//             <motion.li variants={list} className="flex gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="fill-current h-5 shrink-0 mt-0.5"
//               >
//                 <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
//               </svg>
//               <span>Interactive quizzes to solidify concepts.</span>
//             </motion.li>
//             <motion.li variants={list} className="flex gap-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="fill-current h-5 shrink-0 mt-0.5"
//               >
//                 <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
//               </svg>
//               <span>Know your audience through AI powered surveys</span>
//             </motion.li>
//           </motion.ul>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3, delay: 1.5 }}
//             className="mt-10 flex flex-col items-center sm:flex-row gap-3"
//           >
//             <a
//               href="/"
//               className="inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-white to-zinc-300"
//             >
//               <div className="flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-white text-black">
//                 <p>Get Started</p>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                   className="fill-current h-3.5 "
//                 >
//                   <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path>
//                 </svg>
//               </div>
//             </a>
//           </motion.div>
//         </div>
//         <div className="hidden md:block pt-3 shrink grow overflow-hidden z-50">
//           <motion.div
//             initial={{ opacity: 0, x: -300 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 1.5 }}
//             className="relative"
//           >
//             <div className="relative p-px overflow-hidden rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white to-zinc-600">
//               <div className="rounded-3xl sm:rounded-[31px] overflow-hidden p-1.5 bg-gradient-to-br from-zinc-400 to-zinc-700">
//                 <div className="rounded-[17px] sm:rounded-[25px] overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950">
//                   <Image
//                     src="/image1.webp"
//                     className="object-cover object-center"
//                     width={900}
//                     height={900}
//                     alt="Hero-Image"
//                   />
//                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                     <button className="inline-flex h-10 rounded-xl p-px bg-gradient-to-br from-[#84B2E5] to-[#2F6EB1] shadow-lg">
//                       <div className="flex h-full items-center gap-2 px-6 font-medium rounded-[11px] bg-gradient-to-br from-[#4B91DE] to-[#276AB2] text-white button-hover">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 500 500"
//                           className="fill-current h-3.5"
//                         >
//                           <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
//                         </svg>
//                         <span>Watch Video</span>
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import { useState } from "react";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. Bird Will answer.",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Wikis",
    description: "Centralize your knowledge. Make it accessible.",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },

  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Projects",
    description: "Manage complex projects without the chaos",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Docs",
    description: "Simple, powerfulm beautiful. Next-gen notes & docs.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },
];

const HeroSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col ">
      <div
        className="
     
          font-medium
        
          2xl:w-1/3
          md:w-2/3
          xl:w-1/2
          
          
          lg:px-0
          px-8
    

  text-5xl
            xl:text-6xl     
            flex
            justify-center
            xl:font-medium
            xl:pt-14
            text-center 
            pt-6
            "
      >
        Write, plan, share. With AI at your side.
      </div>

      <p
        className="
            text-2xl
            pt-4
            text-center
            w-2/3
            mx-auto
            "
      >
        Bird is the connected workspace where better, faster work happens.
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href="/">
          <Button className="py-1 ">
            <div className="flex items-center justify-center">
              <div className="text-lg">Get bird free</div>
              <div>
                <PiArrowRight className="ml-2 " />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="pt-10 xl:pt-20 items-center justify-center">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="flex items-center justify-center mx-auto w-60 xl:w-80"
        />
      </div>
      {isSmallScreen ? (
        <div className="px-8">
          <div className="grid grid-cols-4   md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`
              flex 
            p-1
              md:p-8
             
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                    : "md:bg-[#f6f5f4]   rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                } `}
                onClick={() => setActiveTab(tab)}
              >
                <div className="flex flex-col   items-center md:justify-center mx-auto">
                  <div className="hidden md:flex text-4xl">{tab.icon}</div>
                  <div className="font-medium text-sm  xl:text-lg mt-1">
                    {tab.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Display content based on the active tab */}
          <div className="pt-6 md:py-10   lg:px-16 xl:px-0 md:px-16  w-full ">
            {activeTab && (
              <div className=" flex justify-center items-center flex-col  ">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="
                w-full
             border
             p-20
             xl:p-40
             rounded-xl
          
             
                "
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex  xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`
                xl:flex 
                justify-center 
                space-x-4
                xl:pt-4
                sm:my-10
               
                xl:my-0
                w-60
                h-36
                ${
                  activeTab === tab
                    ? "border rounded-xl pt-2 bg-white "
                    : "shadow-md rounded-xl pt-2  bg-[#f6f5f4] m"
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>

                  {/* Render feature tag only for "AI" tab */}
                  {tab.name === "AI" && (
                    <div className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full ml-2">
                      {tab.feature}
                    </div>
                  )}
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    {/* Only animate the description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tab.description}
                    </motion.div>
                  </div>

                  {/* Conditional rendering for "Learn more" link */}
                  {activeTab === tab && (
                    <div className="text-sm mt-2">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Display content based on the active tab */}
      <div className="hidden md:flex py-10 px-8 md:px-0    lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className=" md:flex  items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="
                w-full
                p-20
                xl:p-40
                shadow-md
                rounded-xl
                bg-[#f6f5f4]
        "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
