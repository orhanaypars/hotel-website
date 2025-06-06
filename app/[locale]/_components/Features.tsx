import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Features: React.FC = () => {
  const t = useTranslations("Features");

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-5xl font-semibold text-blue-800 pb-4 text-center">
          {t("title.part1")}
          <span className="text-amber-600 font-bold"> {t("title.part2")}</span>
        </h1>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-15 md:gap-6 pt-14">
          <div className="text-sm w-full sm:w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-md">
            <div className="flex flex-col items-center px-5 py-4 relative">
              <div className="h-24 w-24 absolute -top-14 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt={t("card1.alt")}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">
                  {t("card1.name")}
                </h1>
              </div>
            </div>
            <p className="text-gray-500 px-6 text-center">
              {t("card1.comment")}
            </p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                <StarIcons />
              </div>
            </div>
          </div>
          <div className="text-sm w-full sm:w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-md">
            <div className="flex flex-col items-center px-5 py-4 relative">
              <div className="h-24 w-24 absolute -top-14 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt={t("card2.alt")}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">
                  {t("card2.name")}
                </h1>
              </div>
            </div>
            <p className="text-gray-500 px-6 text-center">
              {t("card2.comment")}
            </p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                <StarIcons />
              </div>
            </div>
          </div>
          <div className="text-sm w-full sm:w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-md">
            <div className="flex flex-col items-center px-5 py-4 relative">
              <div className="h-24 w-24 absolute -top-14 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt={t("card3.alt")}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">
                  {t("card3.name")}
                </h1>
              </div>
            </div>
            <p className="text-gray-500 px-6 text-center">
              {t("card3.comment")}
            </p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                <StarIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarIcons = () => (
  <>
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          width="18"
          height="18"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
            fill="#FF532E"
          />
        </svg>
      ))}
  </>
);

export default Features;
