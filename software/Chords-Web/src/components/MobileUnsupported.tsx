import React from "react";
import { motion } from "framer-motion";
import { TbDeviceMobileOff } from "react-icons/tb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { ChevronRight, Monitor } from "lucide-react";
import Chords from "./LandingComp/Chords";
import Link from "next/link";

export default function MobileUnsupported() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
<div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white p-6 flex flex-col justify-between">
<motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center pt-10"
      >
        <h1 className="text-4xl font-bold mb-2">Oops! Perangkat Mobile Terdeteksi</h1>
        <p className="text-xl">Aplikasi ini memerlukan peramban desktop</p>
      </motion.header>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center items-center my-10"
      >
        <div className="relative">
          <TbDeviceMobileOff className="w-32 h-32 text-red-500" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-1 bg-red-500 rotate-45"></div>
          </div>
        </div>
        <ChevronRight className="w-12 h-12 mx-4" />
        <Monitor className="w-32 h-32 text-green-400" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white text-gray-800 rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Mengapa Desktop?</h2>
        <p className="mb-4">
          Aplikasi kami menggunakan fitur canggih seperti Web Serial API, yang hanya tersedia di peramban desktop. Untuk pengalaman terbaik, silakan beralih ke perangkat desktop.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
        <Accordion type="single" collapsible className="bg-white/10 rounded-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white mx-3">
              Bisakah saya menggunakan aplikasi ini di ponsel saya?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 mx-3">
              Sayangnya, aplikasi ini memerlukan fitur yang hanya tersedia di peramban desktop. Untuk pengalaman lengkap, silakan gunakan komputer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white mx-3">
              Peramban desktop mana yang didukung?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 mx-3">
              Kami merekomendasikan menggunakan peramban berbasis Chromium seperti Google Chrome, Microsoft Edge, atau Opera untuk kompatibilitas terbaik.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white mx-3">
              Akankah Anda mengembangkan versi mobile?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 mx-3">
              Kami selalu menjelajahi cara untuk memperluas aksesibilitas aplikasi kami. Nantikan pembaruan tentang dukungan mobile potensial di masa depan!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center py-6"
      >
        <p className="text-xs text-muted-foreground">
          <Chords /> | &copy; {new Date().getFullYear()}{" "}
          <Link href="https://upsidedownlabs.tech/" target="_blank">
            Upside Down Labs
          </Link>
        </p>
      </motion.footer>
    </div>
  );
}