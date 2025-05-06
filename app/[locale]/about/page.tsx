import React from "react";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("About");

  return (
    <div className="bg-blue-950 text-white min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-amber-500 mb-6 text-center">
          {t("title")}
        </h1>
        <p className="text-lg leading-relaxed text-center mb-12">
          {t("description")}
        </p>

        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          {t("missionTitle")}
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          {t("missionDescription")}
        </p>

        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          {t("visionTitle")}
        </h2>
        <p className="text-lg leading-relaxed mb-6">{t("visionDescription")}</p>

        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          {t("servicesTitle")}
        </h2>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
          <li>{t("services.0")}</li>
          <li>{t("services.1")}</li>
          <li>{t("services.2")}</li>
          <li>{t("services.3")}</li>
          <li>{t("services.4")}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          {t("contactTitle")}
        </h2>
        <p className="text-lg leading-relaxed">{t("contactDescription")}</p>
      </div>
    </div>
  );
};

export default Page;
