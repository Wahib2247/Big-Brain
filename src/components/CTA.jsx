import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/button";
import Link from "next/link";

export function CTA() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex justify-center items-center flex-col gap-5">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Enough! <br /> Introduction.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Get started with Big Brain 🧠 and join the Big Brain community today and gain access to tools, insights, and resources that will supercharge your intellect.
                </p>
                <div className="flex gap-3">
                <Button>Get Started</Button>
                <Button variant="outline"><Link href={'#top'}>Back To Top</Link></Button>
                </div>
            </div>
        </div>
    );
}