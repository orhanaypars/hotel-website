"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
    <div className="container mx-auto px-4 sm:px-8 lg:px-20 mt-15 pb-12">
      {/* Başlık ve Açıklama */}
      <section className="mt-8 md:mt-28 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
          {t("title")}
          <span className="block text-blue-700 mt-2">
            {t("subtitle.part1")}{" "}
            <span className="font-bold text-amber-600">
              {t("subtitle.part2")}
            </span>
          </span>
        </h1>
        <p className="mt-6 text-gray-700 text-md sm:text-lg md:text-xl max-w-2xl">
          {t("description")}
        </p>
      </section>

      {/* Ana Görsel */}
      <div
        className="w-full mx-auto mt-12 relative
                max-w-full
                sm:max-w-xl
                md:max-w-2xl
                lg:max-w-4xl"
      >
        <div className="aspect-video rounded-lg overflow-hidden">
          <Image
            src={mainImage}
            alt="Ana Görsel"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw,    /* Mobilde %100 genişlik */
             (max-width: 768px) 75vw,     /* Küçük tabletlerde %75 */
             (max-width: 1024px) 66vw,    /* Büyük tabletlerde %66 */
             800px" /* Daha geniş ekranlarda sabit sınır */
          />
        </div>
      </div>

      {/* Thumbnail Galeri */}
      <div
        className="grid
                grid-cols-2        /* En küçük cihazda 2 kolon */
                sm:grid-cols-3     /* Küçük ekran (≥640px) 3 kolon */
                md:grid-cols-4     /* Orta ekran (≥768px) 4 kolon */
                gap-3              /* Daha sıkı aralık */
                max-w-full
                sm:max-w-xl
                md:max-w-2xl
                lg:max-w-3xl
                mx-auto
                mt-4"
      >
        {images.map(({ src, alt }, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(src)}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500
                 rounded-lg overflow-hidden"
          >
            <div className="aspect-square w-full relative">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover hover:opacity-80 transition-opacity"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 160px"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Öne Çıkan İstatistikler */}
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* İstatistik Kartı 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
            {/* İkon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a)" stroke="#2F77FF">
                <path
                  d="M34.062 9.049c0 2.407-.781 4.716-2.173 6.418-1.097 1.343-2.503 2.222-4.014 2.533l-19.767-.005c-1.5-.316-2.898-1.192-3.99-2.528-1.39-1.702-2.172-4.01-2.172-6.418v-3.85c0-.473.312-.89.766-1.026a53.57 53.57 0 0 1 30.584 0c.455.135.766.553.766 1.027zM17.99 26.287v7.785m-6.18-.001h12.362"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.056 16.96c.155 4.914 4.031 9.307 8.948 9.307 5.003 0 8.772-4.315 8.944-9.316q.05-1.41.05-2.853c0-3.896-.26-7.864-.685-11.384-2.672-.597-5.42-.785-8.309-.785s-5.692.165-8.309.785c-.448 3.505-.685 7.488-.685 11.384q0 1.446.046 2.862Z"
                  fill="#D7E0FF"
                />
              </g>
            </svg>
          </div>
          <p className="mt-4 text-2xl font-semibold text-blue-700">
            {t("stats.reviews.count")}
          </p>
          <p className="text-gray-700">{t("stats.reviews.label")}</p>
        </div>

        {/* İstatistik Kartı 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
            {/* İkon */}
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 35.018c9.123 0 16.518-7.396 16.518-16.518S27.623 1.982 18.5 1.982 1.982 9.377 1.982 18.5c0 9.122 7.395 16.518 16.518 16.518"
                fill="#D7E0FF"
                stroke="#2F77FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.114 21.041c1.27 4.574 6.353 7.37 10.927 6.099 2.796-1.017 5.083-3.304 5.845-6.099"
                stroke="#2F77FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.766 13.48v1.85m13.468-1.85v1.85"
                stroke="#2F77FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="mt-4 text-2xl font-semibold text-blue-700">
            {t("stats.satisfaction.count")}
          </p>
          <p className="text-gray-700">{t("stats.satisfaction.label")}</p>
        </div>
      </div>
    </div>
  );
}
