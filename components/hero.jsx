"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const HeroSection = () => {

    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll=()=>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
    
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

  return (
    <section className="pt-40 pb-20 px-4 bg-green-100 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-200 via-green-300 to-green-400">

      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
        Master your Money <br /> with Intelligence beyond Imagination
        </h1>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
        From scattered expenses to strategic decisions — harness the power of real-time insights and financial clarity through AI.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@UnfilteredPsyche">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
