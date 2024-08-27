"use client";
import { CheckIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button";
import Link from "next/link";
import Navbar from "../Navbar";
import { useSession } from "next-auth/react";

function Premium() {
    const {data: session} = useSession();

    const fts = [
        'Prioritize your Questions!',
        'Unlimited Questions can be asked!',
        'Upto 5MB of data can be uploaded!',
        'Filter out useless answers!',
    ]

    const backgroundStyle = {
        background: `repeating-conic-gradient(
            from 30deg,
            transparent 0 120deg,
            #3c3c3c 0 180deg
        ) 100px 57.7px,
        repeating-conic-gradient(
            from 30deg,
            #1d1d1d 0 60deg,
            #4e4f51 0 120deg,
            #3c3c3c 0 180deg
        )`,
        backgroundSize: '200px 115.4px',
    };

    return (
        <>
        <Navbar out={!session}/>
            <div className="h-full w-full flex items-center justify-center">
                <div className="max-w-7xl w-full px-6 lg:px-8 rounded-xl absolute top-28" style={backgroundStyle}>
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h1 className="relative z-10 text-3xl md:text-6xl p-4 uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                            Simple no-tricks pricing
                        </h1>
                    </div>
                    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-900 mt-10 lg:mt-20 lg:flex lg:max-w-none backdrop-blur-xl mb-10">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-100">Lifetime membership</h3>
                            <p className="mt-6 text-base leading-7 text-gray-100">
                                Experience our Pro version with prioritized support and unlimited questions. Upload up to 5MB of data and filter out irrelevant answers for efficient interactions.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-100">What’s included</h4>
                                <div className="h-px flex-auto bg-gray-700" />
                            </div>
                            <ul
                                role="list"
                                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                            >
                                {fts.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-gray-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-black/30 py-10 text-center ring-1 ring-inset ring-gray-900 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-300">Pay once, own it forever</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-100">$34.9</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">USD</span>
                                    </p>
                                    <Button asChild className="mt-10 w-full"><Link href={!session ? '/signup' : '/buy'}>Get Access</Link></Button>
                                    <p className="mt-6 text-xs leading-5 text-gray-300">
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Premium