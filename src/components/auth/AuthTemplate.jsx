"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function AuthTemplate({ title, submit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="max-w-md w-full absolute top-32 left-1/2 -translate-x-[50%] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome {title == 'login' ? 'Back' : null} to Big Brain 🧠!
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {title === 'login' ? (
                    <>
                        Don&apos;t have an Account? Sign Up here:
                        <Button asChild variant="link" className="pl-1">
                            <Link href={'/signup'}>SignUp</Link>
                        </Button>
                    </>
                ) :
                    <>
                        Already have an Account? Login here:
                        <Button asChild variant="link" className="pl-1">
                            <Link href={'/login'}>Login</Link>
                        </Button>
                    </>
                }
            </p>

            <form className="my-8" onSubmit={submit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    {title == 'signup' ?
                        <LabelInputContainer>
                            <Label htmlFor="firstname">Name</Label>
                            <Input id="name" placeholder="Tyler" type="text" />
                        </LabelInputContainer>
                        : null
                    }
                    <LabelInputContainer>
                        <Label htmlFor="lastname">User Name</Label>
                        <Input id="lastname" placeholder="unknown6" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <Button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    {title == 'login' ?
                        <>
                            Login &rarr;
                        </>
                        :
                        <>
                            Sign Up &rarr;
                        </>
                    }
                    <BottomGradient />
                </Button>


                {title == 'signup' ?
                    <>
                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                        <div className="flex flex-col space-y-4">
                            <Button
                                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Google
                                </span>
                                <BottomGradient />
                            </Button>
                        </div>
                    </> : null
                }
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};