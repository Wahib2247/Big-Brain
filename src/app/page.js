import { CTA } from "@/components/CTA";
import Hero from "@/components/Hero";
import Preface from "@/components/Preface";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Preface />
      <CTA />
    </>
  );
}
