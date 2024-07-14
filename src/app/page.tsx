"use client"
import { BackgroundGradientAnimation } from "@/components/ui/bg-gradient";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <main className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <h1 className="scroll-m-20 text-4xl tracking-tight font-bold lg:text-5xl">
          Muhammad Saheed
        </h1>
        <p className="text-lg font-semibold">I like Shawarma</p>
        <blockquote className="mt-6 border-l-2 pl-6 italic text-lg">I learn&apos;t very noice things</blockquote>
      </main>
    </BackgroundGradientAnimation>
  );
}
