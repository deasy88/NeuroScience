"use client";
import React from "react";
import { useState } from 'react';

import { Card } from "../ui/card";
import Image from "next/image";
import Chords from "./Chords";

export function Features() {
  const features: {
    title: string;
    description: string;
    image: string;
  }[] = [
      {
        title: "Plot Data Multi Saluran",
        description:
          "Plot data dari berbagai saluran dalam grafik yang berbeda. Setiap stream memiliki warna yang berbeda untuk identifikasi yang mudah.",
        image: "./assets/MultiChannel.jpg",
      },
      {
        title: "Rekam & Simpan Data",
        description:
          "Rekam dan simpan data untuk referensi di masa depan. Ekspor data dalam format CSV untuk analisis lebih lanjut.",
        image: "./assets/DownloadIcon.png",
      },
      {
        title: "Auto Board Detection",
        description:"Untuk mengatur resolusi ADC, Chords secara otomatis mendeteksi berdasarkan ID vendor-nya.",
        image: "./assets/Arduino.png",
      },
      {
        title: "Freeze Stream",
        description:
          "Bekukan stream untuk menganalisis data. Lanjutkan stream ketika Anda siap untuk melanjutkan.",
        image: "./assets/Pause.png",
      },
    ];

  return (
    <section className="w-full pt-12">
      <div className="container px-4 md:px-24 lg:px-12 xl:px-6 max-w-6xl">
        <div className="flex flex-col items-start justify-start space-y-3 text-left">
          <div className="space-y-2 flex flex-col justify-start items-start pl-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-left">
              <Chords /> dikemas dengan fitur
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
              Gambaran umum semua fitur inti <Chords /> menyediakan.
            </p>
          </div>
        </div>

        {/* Grid Layout for Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-12 ">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center space-y-2 p-3 min-h-40 shadow-none"
            >
              <div className="flex justify-center gap-2 items-center flex-col">
                <div className="flex items-center justify-center w-12 h-12 p-2 text-background bg-primary rounded-full">
                  <Image
                    src={feature.image}
                    alt="Icon"
                    width={36}
                    height={36}
                    className="invert dark:invert-0"
                  />
                </div>
                <h2 className="text-lg font-bold text-center">{feature.title}</h2>
              </div>
              <p className="text-primary/50 text-sm text-center max-w-xs">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>


  );
}
