"use client";
import { useSession } from "next-auth/react";
import { CTA } from "@/components/CTA";
import Hero from "@/components/Hero";
import Preface from "@/components/Preface";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();
  console.table(session);
  if (status === "loading") {
    return <h1>Redirecting...</h1>;
  }

  if (!session) {
    return (
      <>
        <Navbar out={true} />
        <Hero />
        <Preface />
        <CTA />
      </>
    );
  }

  return (
    <>
      <Navbar out={false} />
      <h1>Welcome {session.token.name}!</h1>
      <h1>Welcome {session.token.email}!</h1>
      <h1>Welcome <Image alt="user-profile" src={session.token.picture} width={500} height={500}/>!</h1>
    </>
  );
}