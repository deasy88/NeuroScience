import React from "react";
import { Card } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Image from "next/image";
import { Separator } from "./ui/separator";
const InCompatibleBrowser = () => {
  const browsers = [
    {
      name: "Google Chrome",
      image:
        "https://img.icons8.com/?size=100&id=63785&format=png&color=000000",
    },
    {
      name: "Microsoft Edge",
      image:
        "https://img.icons8.com/?size=100&id=-5h34CbaUb09&format=png&color=000000",
    },
    {
      name: "Opera",
      image:
        "https://img.icons8.com/?size=100&id=63646&format=png&color=000000",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl w-full">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-6xl text-destructive font-bold text-center mb-8 flex items-center justify-center gap-0 lg:gap-2 font-yanone">
          ! Peramban Tidak Didukung
        </h1>
      </div>

      <Separator className="my-7" />
      <div className="text-4xl font-semibold text-center mb-8">
        Peramban yang Didukung
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
        {browsers.map((browser) => (
          <Card key={browser.name} className="p-6 flex flex-col items-center">
            <Image
              width={70}
              height={70}
              src={browser.image}
              alt="Supported Browser"
            />
            <p className="text-center font-medium">{browser.name}</p>
          </Card>
        ))}
      </div>

      <Separator className=" my-7" />
      <h2 className="text-4xl font-semibold text-center mb-8">
        Pertanyaan yang Sering Diajukan
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Mengapa peramban saya tidak didukung?</AccordionTrigger>
          <AccordionContent>
            Aplikasi ini menggunakan Web Serial API untuk membuat koneksi dengan port COM. Anda melihat pesan ini karena peramban yang Anda gunakan tidak mendukung Web Serial API.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Bagaimana cara saya mengakses aplikasi?</AccordionTrigger>
          <AccordionContent>
            Untuk mengakses aplikasi, silakan gunakan peramban berbasis Chromium seperti Google Chrome, Microsoft Edge, atau Opera. Peramban ini mendukung Web Serial API yang diperlukan agar aplikasi ini berfungsi dengan baik. Anda dapat mengunduh salah satu peramban ini dari situs web resmi mereka.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Apakah peramban lain akan didukung di masa depan?
          </AccordionTrigger>
          <AccordionContent>
            Dukungan untuk Web Serial API ditentukan oleh pengembang peramban. Meskipun saat ini terutama tersedia di peramban berbasis Chromium, peramban lain mungkin menambahkan dukungan di masa depan. Kami merekomendasikan memeriksa dokumentasi peramban pilihan Anda atau menggunakan peramban yang didukung untuk pengalaman terbaik.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InCompatibleBrowser;
