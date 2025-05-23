"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

function HeroSection() {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep,and
            AI-powered tools for jobs success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-black text-white border  border-[1px] border-gray-600 
  hover:border-white  w-[150px] 
  px-4   shadow-sm hover:bg-gray-800"
            >
              Get Started
            </Button>
          </Link>
         
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0 mb-10">
          <div ref={imageRef} className="hero-image ">
            <Image
              src="/banner.jpeg"
              width={1100}
              height={500}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
