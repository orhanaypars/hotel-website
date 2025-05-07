"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWifi, FaParking, FaPaw } from "react-icons/fa";
import { PiSecurityCameraDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

const images = [
  { src: "/slider1.jpg", alt: "Oda 1" },
  { src: "/slider2.jpg", alt: "Oda 2" },
  { src: "/slider3.jpg", alt: "Oda 3" },
  { src: "/slider4.jpg", alt: "Oda 4" },
];

export default function Hero() {
  const t = useTranslations("Hero");
  const [mainImage, setMainImage] = useState(images[0].src);

  return (
    <div className="w-full flex flex-col items-center mt-6">
      {/* Main Image */}
      <Card className="w-full max-w-2xl mb-6 overflow-hidden rounded-2xl shadow-xl border-0">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={mainImage}
            alt="Main"
            fill
            className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 640px"
            priority
          />
        </div>
      </Card>
      {/* Thumbnails */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-2 w-full max-w-2xl px-2">
        {images.map(({ src, alt }, idx) => (
          <div key={idx} className="w-full">
            <Button
              onClick={() => setMainImage(src)}
              className={`w-full h-auto p-0 bg-transparent border-none shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg overflow-hidden ${mainImage === src ? "ring-2 ring-blue-500" : ""}`}
              aria-label={`Show ${alt}`}
              type="button"
            >
              <div className="relative w-full aspect-[16/9] min-h-[56px]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center rounded-md"
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 120px"
                  priority={mainImage === src}
                />
              </div>
            </Button>
          </div>
        ))}
      </div>
      {/* Features */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
        {[
          {
            icon: <FaWifi size={40} className="text-white mb-4" />,
            title: t("features.feature1.title"),
            description: t("features.feature1.description"),
            bg: "bg-blue-800",
            text: "text-amber-500",
          },
          {
            icon: (
              <PiSecurityCameraDuotone size={40} className="text-white mb-4" />
            ),
            title: t("features.feature2.title"),
            description: t("features.feature2.description"),
            bg: "bg-blue-800",
            text: "text-amber-500",
          },
          {
            icon: <FaParking size={40} className="text-white mb-4" />,
            title: t("features.feature3.title"),
            description: t("features.feature3.description"),
            bg: "bg-blue-800",
            text: "text-amber-500",
          },
          {
            icon: <FaPaw size={40} className="text-white mb-4" />,
            title: t("features.feature4.title"),
            description: t("features.feature4.description"),
            bg: "bg-blue-800",
            text: "text-amber-500",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.12,
              rotate: 2,
              boxShadow: "0 12px 32px 0 rgba(16,16,48,0.18)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            transition={{
              duration: 0.6,
              delay: idx * 0.12,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true }}
          >
            <Card
              className={`flex flex-col justify-center items-center flex-1 min-h-[220px] h-full p-6 rounded-2xl shadow-xl border-0 ${feature.bg} ${feature.text} transition-all duration-300`}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-2 text-center w-full">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base flex-1 flex items-center justify-center text-center opacity-90 text-white w-full">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
