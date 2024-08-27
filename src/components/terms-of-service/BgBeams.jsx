"use client";
import Link from "next/link";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";
import Navbar from "../Navbar";
import { useSession } from "next-auth/react";

const termsOfService = [
    {
        title: "Welcome",
        content: `Welcome to Big Brain 🧠. These Terms of Service ("Terms") govern your access to and use of our application and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use the Service.`
    },
    {
        title: "1. Acceptance of Terms",
        content: `By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of the Terms, you may not access the Service.`
    },
    {
        title: "2. Changes to Terms",
        content: `We reserve the right to modify these Terms at any time. If we make changes, we will notify you by revising the date at the top of the Terms and, in some cases, we may provide additional notice. Your continued use of the Service after the changes have been posted constitutes your acceptance of the new Terms.`
    },
    {
        title: "3. Use of the Service",
        content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for your conduct and any content that you submit, post, or display on the Service. You must not:`,
        list: [
            "Use the Service in any way that violates any applicable federal, state, local, or international law or regulation.",
            "Engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the Service, or which, as determined by us, may harm Big Brain 🧠 or users of the Service.",
            "Impersonate or attempt to impersonate Big Brain 🧠, an Big Brain 🧠 employee, another user, or any other person or entity."
        ]
    },
    {
        title: "4. User Content",
        content: `You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness. By posting content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service.`
    },
    {
        title: "5. Intellectual Property Rights",
        content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Big Brain 🧠 and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Big Brain 🧠.`
    },
    {
        title: "6. Termination",
        content: `We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.`
    },
    {
        title: "7. Limitation of Liability",
        content: `In no event shall Big Brain 🧠, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.`
    },
    {
        title: "8. Governing Law",
        content: `These Terms shall be governed and construed in accordance with the laws of [State/Country], without regard to its conflict of law provisions.`
    },
    {
        title: "9. Changes to the Service",
        content: `We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time or for any period.`
    },
    {
        title: "10. Contact Us",
        content: (
            <>
                If you have any questions about these Terms, please contact us at<Button variant="link" asChild><Link href={'/contact'}>Contact Us</Link></Button>
            </>
        )
    },
    // Add more sections as needed
];

function BgBeams() {
    const {data: session} = useSession();

    return (
        <>
        <Navbar out={!session}/>
            <div className="relative h-screen w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased overflow-hidden">
                <div className="custom-scrollbar overflow-y-auto max-w-2xl z-50 p-4 absolute top-28 bottom-5 mx-auto">
                    <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                        Terms Of Service
                    </h1>
                    <div className="mt-4">
                        {termsOfService.map((section, index) => (
                            <div key={index} className="my-8 border-2 rounded-md p-2 backdrop-blur-[3px]">
                                <h2 className="text-neutral-300 font-semibold text-center">{section.title}</h2>
                                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                                    {section.content}
                                </p>
                                {section.list && (
                                    <ul className="list-disc list-inside text-neutral-500 max-w-lg mx-auto text-sm text-left">
                                        {section.list.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </>
    )
}

export default BgBeams;