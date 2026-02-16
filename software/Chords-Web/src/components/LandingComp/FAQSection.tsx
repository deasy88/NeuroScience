import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Link from "next/link";
import Chords from "./Chords";

const FAQSection = () => {
  const FAQs: { question: string; answer: React.ReactNode }[] = [
    {
      question: `Apa tujuan dari BioSignal Studio?`,
      answer: (
        <>
          <Chords /> dibuat untuk memplot sinyal biopotensial seperti ECG, EMG, atau EOG secara real-time. Dibuat untuk tujuan pendidikan dan penelitian.
        </>
      ),
    },
    {
      question: `Data apa saja yang dikumpulkan oleh BioSignal Studio?`,
      answer: (
        <>
          Ini mengumpulkan data biopotensial dari perangkat yang terhubung ke port serial. Ini tidak mengumpulkan data pribadi atau cookie dari pengguna.
        </>
      ),
    },
    {
      question: "Bagaimana cara saya melaporkan masalah atau menyarankan peningkatan?",
      answer: (
        <>
          Anda dapat melaporkan masalah atau menyarankan peningkatan di halaman{" "}
          <Link
            href="https://github.com/upsidedownlabs/Chords-Web/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            GitHub Issues kami
          </Link>
          .
        </>
      ),
    },
    {
      question: "Dari mana saya bisa mendapatkan perangkat keras yang diperlukan untuk BioSignal Studio?",
      answer: (
        <>
          Anda dapat mendapatkan perangkat keras yang diperlukan dari{" "}
          <Link
            href="https://linktr.ee/Upside_Down_Labs_Stores"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            Toko NeuroSensor Lab Indonesia
          </Link>{" "}
          secara langsung.
        </>
      ),
    },
    {
      question: "Apa keterbatasan BioSignal Studio?",
      answer: (
        <>
          <Chords /> menggunakan{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            web serial api
          </Link>{" "}
          untuk terhubung ke port perangkat, yang hanya didukung di peramban berbasis chromium (Google Chrome, Opera, Microsoft Edge).
        </>
      ),
    },
    {
      question: "Berapa lama data dapat direkam?",
      answer: (
        <>
          Untuk perekaman data kami menggunakan{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            IndexedDB
          </Link>
          , yang memungkinkan penyimpanan hingga 80% ruang disk laptop Anda.
          <br />
        </>
      ),
    },
    {
      question: "Format data apa yang didukung oleh BioSignal Studio?",
      answer: (
        <>
          BioSignal Studio mendukung format array: [A0, A1, ..., A5, counter], di mana A0-A5 adalah nilai sinyal mentah dan counter adalah uint8_t (0-255). Contoh array: [468, 472, 463, 466, 465, 434, 10]. Untuk detail implementasi, lihat{" "}
          <Link
            href="https://github.com/upsidedownlabs/Chords-Arduino-Firmware"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            kode firmware Arduino kami
          </Link>
          .
        </>
      ),
    },
    {
      question: "Mikrokontroler mana yang didukung oleh BioSignal Studio?",
      answer: (
        <>
          Arduino Uno, Arduino Nano, dan Maker Uno telah diuji dan didukung oleh{" "}
          <Chords />.
        </>
      ),
    },
    {
      question:
        "Bisakah saya menggunakan mikrokontroler selain yang disebutkan di atas?",
      answer: (
        <>
          Ya, Anda hanya perlu memastikan bahwa mikrokontroler memberikan format data yang kompatibel dengan perangkat lunak. Dengan melakukan ini Anda dapat menggunakan mikrokontroler apa pun dengan <Chords />
        </>
      ),
    },
    {
      question: "Bagaimana cara memeriksa apakah saya telah kehilangan sampel/data?",
      answer: (
        <>
          Ada dua pemeriksaan untuk sampel yang hilang, pertama adalah nilai counter, jika tidak bertambah 1 maka ada sampel yang hilang. Kedua jika data rate di bawah sampling rate. Dalam kedua kasus Anda dapat menemukan berapa banyak data yang hilang di console.
        </>
      ),
    },
    {
      question: "Bagaimana cara memeriksa drift dari data yang telah saya rekam?",
      answer: (
        <>
          Jika kami merekam selama 10 menit, kami harus mengharapkan untuk menangkap 500 sampel per detik, yang berjumlah 500 * 60 * 10 = 300.000 sampel. Jika jumlah sampel yang sebenarnya direkam kurang dari 300.000, ini menunjukkan drift data. Untuk memverifikasi tingkat sampling yang didukung dari papan, silakan lihat kode firmware Arduino kami. Dengan membandingkan jumlah sampel yang diharapkan dengan jumlah yang sebenarnya direkam, kami dapat menghitung besarnya drift data.
        </>
      ),
    },
  ];
  return (
    <section className="w-full pb-8 md:pb-24 lg:pb-24 mx-auto lg:md:sm:px-0 px-4 md:px-24 lg:px-12">
      <div className="mx-auto mt-8 max-w-6xl xl:px-8 ">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-wide  sm:text-3xl md:text-3xl text-left text-foreground pb-8">
            Pertanyaan yang Sering Diajukan
          </h1>
        </div>
        <Accordion type="single" collapsible className=" max-w-7xl">
          {FAQs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <p className="text-lg font-semibold text-foreground/90 text-left">
                  {faq.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[1rem] text-muted-foreground">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
