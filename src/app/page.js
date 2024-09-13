"use client";
import { useSession } from "next-auth/react";
import { CTA } from "@/components/CTA";
import Hero from "@/components/Hero";
import Preface from "@/components/Preface";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const words = `L o a d i n g . . .`;

  const { data: session, status } = useSession();
  console.table(session);

  if (status === "loading") {
    return <TextGenerateEffect words={words} />;
  }

  return (
    <>
      <Navbar out={!session} />
      {!session ? (
        <>
          <Hero />
          <Preface />
          <CTA />
        </>
      ) : (
        <>
          <h1>Welcome {session.token.username}!</h1>
          <h1>{session.token.email}</h1>
          <Image alt="user-profile" src={session.token.picture} width={500} height={500} />
        </>
      )}
    </>
  );
}