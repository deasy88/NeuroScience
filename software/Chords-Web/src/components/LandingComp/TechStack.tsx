"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Chords from "./Chords";
import { Button } from "../../components/ui/button";

const Stack = () => {
  const { theme } = useTheme();
  const stack = [
    {
      name: "Next.js",
      logo:
        theme === "light"
          ? "./assets/dark/next-js.png"
          : "./assets/light/nextjs.svg",
      url: "https://nextjs.org/",
      description: "Framework React yang fantastis untuk membangun aplikasi web.",
    },
    {
      name: "Tailwind CSS",
      logo: "./assets/tailwindcss.svg",
      url: "https://tailwindcss.com/",
      description: "Framework CSS berfokus utilitas untuk pengembangan UI yang cepat.",
    },
    {
      name: "shadcn/ui",
      logo:
        theme === "light"
          ? "./assets/dark/ShadcnUI.png"
          : "./assets/light/ShadcnUI.png",
      url: "https://ui.shadcn.com",
      description: "Dibangun dengan komponen luar biasa dari shadcn/ui.",
    },
    {
      name: "WebGl Plot",
      logo: "./assets/logo.svg",
      url: "https://github.com/danchitnis/webgl-plot",
      description: "Grafik untuk merencanakan data secara waktu nyata.",
    },
    {
      name: "Web Serial API",
      logo:
        theme === "light"
          ? "./assets/dark/Webserialdark.svg"
          : "./assets/light/serialdevicelight.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API",
      description: "Untuk menghubungkan ke port serial perangkat.",
    },
    {
      name: "IndexedDB API",
      logo:
        theme === "light"
          ? "./assets/dark/indexDBdark.svg"
          : "./assets/light/indexDBlight.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",
      description: "IndexedDB adalah API tingkat rendah untuk penyimpanan sisi klien.",
    },
  ];
  return (
    <section className="w-full pt-12">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-16 md:px-24 lg:px-16 xl:px-24 max-w-7xl ">

        {/* Left Side (Text Content) */}
        <div className="space-y-6 text-left ">
          <div className="space-y-3">
            <div className="space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide ">
                <span className="block">{/* Force line break */}
                  <Chords /> adalah sumber terbuka,
                </span>

                <span className="block">{/* Force line break */}
                  dan gratis digunakan.
                </span>
              </h1>
            </div>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
              Ini didukung oleh teknologi berikut, membuatnya sangat cepat, efisien, dan andal.
            </p>
          </div>
          <div className="pt-6 w-60">
            <Link href="https://github.com/upsidedownlabs/Chords-Web" target="_blank">
              <Button className="flex items-center w-full justify-center py-2 px-6 sm:py-3 sm:px-8 rounded-xl  font-semibold">
                <span>Kode Sumber</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side (Images) */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
          {stack.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-start p-6 space-x-4 transition-transform transform rounded-lg border"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={60}
                height={60}
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>



      </div>
    </section>


  );
};

export default Stack;