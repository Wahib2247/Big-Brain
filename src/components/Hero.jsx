import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { Button } from './ui/button';
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect';
import Link from 'next/link';

function Hero() {

    const words = [
        {
            text: "Ask.",
        },
        {
            text: "Answer.",
        },
        {
            text: "Discover.",
            className: "!text-blue-400"
        },
    ];

    const heroText = [
        "Join our community-driven platform where curiosity meets knowledge.",
        "Ask any question, share your expertise, and explore a world of answers.",
        "Let's learn together, one question at a time."
    ];

    return (
        <>
            <WavyBackground>
                <div className="flex justify-center items-center flex-wrap flex-col">
                    <TypewriterEffectSmooth words={words} cursorClassName={'bg-pink-700'} />
                    <div className='mt-5 flex flex-col justify-center items-center text-center'>
                        {heroText.map((line, index) => (
                            <p
                                key={index}
                                className="text-base md:text-xl mt-2 text-white font-normal inter-var align-center"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <Button className='my-5'>
                        <Link href={'/signup'}>
                            Get Started
                        </Link>
                    </Button>
                    <Button className='my-5' variant="outline">
                        <Link href={'#explore'}>
                            Explore More
                        </Link>
                    </Button>
                </div>
            </WavyBackground>
        </>
    )
}

export default Hero