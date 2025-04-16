"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* LEFT SIDE – tekst + statystyki */}
        <div className="relative w-full md:w-[60%] flex flex-col justify-center px-6 md:px-20 bg-white overflow-hidden py-12 md:py-0">
          {/* Gradient */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_100%,_rgba(241,240,255,0.6)_0%,_transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-xl relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black text-center md:text-left">
              Buy, rent, or sell
              <br /> your property easily
            </h1>
            <p className="text-gray-500 text-base sm:text-lg text-center md:text-left">
              A great platform to buy, sell, or even rent your properties
              without any commissions.
            </p>

            {/* Statystyki */}
            <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
              <div className="w-px h-10 bg-gray-300 opacity-50" />
              <div className="text-center">
                <p className="text-[var(--color-accent)] text-2xl font-bold">
                  50k+
                </p>
                <p className="text-sm text-gray-500">renters</p>
              </div>
              <div className="w-px h-10 bg-gray-300 opacity-50" />
              <div className="text-center">
                <p className="text-[var(--color-accent)] text-2xl font-bold">
                  10k+
                </p>
                <p className="text-sm text-gray-500">properties</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE – mapa + karta */}
        <div className="relative w-full md:w-[40%] h-[420px] md:h-[70vh] flex items-end md:block px-6 md:px-0">
          {/* MAPA */}
          <motion.div
            ref={mapRef}
            initial={{ x: 100, opacity: 0 }}
            animate={mapInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-0 flex justify-center items-start md:block"
          >
            <div className="w-[90%] h-full bg-white rounded-2xl overflow-hidden md:w-full md:rounded-none">
              <Image
                src="/map.svg"
                alt="Map Background"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* KARTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative z-10 w-full max-w-[320px] bg-white rounded-2xl shadow-2xl md:rounded-t-2xl md:absolute md:top-1/2 md:left-0 md:-translate-x-[20%] md:-translate-y-1/2"
            style={{ marginBottom: "5rem" }}
          >
            <Image
              src="/house.png"
              alt="House"
              width={320}
              height={160}
              className="rounded-t-2xl object-cover w-full h-40"
            />
            <div className="p-4">
              <p className="text-[var(--color-accent)] font-semibold text-lg">
                $2,700{" "}
                <span className="text-sm font-normal text-gray-600">
                  /month
                </span>
              </p>
              <p className="text-lg font-semibold text-black">
                Beverly Springfield
              </p>
              <p className="text-sm text-gray-500">
                2821 Lake Sevilla, Palm Harbor, TX
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
