"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function ContactPage() {
  const t = useTranslations("ContactForm");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(t("errorMessage"));
      }

      toast.success(t("successMessage"), {
        style: {
          backgroundColor: "#22c55e",
          color: "#ffffff",
        },
      });
    } catch (error) {
      console.error(error);

      toast.error(t("failureMessage"), {
        style: {
          backgroundColor: "#ef4444",
          color: "#ffffff",
        },
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 max-w-6xl mx-auto mt-15">
      <div className="flex-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center text-sm"
        >
          <h1 className="text-4xl font-semibold text-blue-900 pb-4 text-center">
            {t("title")}{" "}
            <span className="text-amber-500">{t("highlight")}</span>
          </h1>
          <p className="text-sm text-gray-500 text-center pb-10">
            {t("description")}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-2xl">
            <div className="w-full">
              <label className="text-black/70" htmlFor="name">
                {t("nameLabel")}
              </label>
              <input
                {...register("name", {
                  required: t("nameRequired"),
                })}
                className="h-14 p-4 mt-2 w-full border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                type="text"
                placeholder={t("namePlaceholder")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-black/70" htmlFor="email">
                {t("emailLabel")}
              </label>
              <input
                {...register("email", {
                  required: t("emailRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("emailInvalid"),
                  },
                })}
                className="h-14 p-4 mt-2 w-full border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                type="email"
                placeholder={t("emailPlaceholder")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 w-full max-w-2xl">
            <label className="text-black/70" htmlFor="message">
              {t("messageLabel")}
            </label>
            <textarea
              {...register("message", {
                required: t("messageRequired"),
              })}
              className="w-full mt-2 p-4 h-48 border border-gray-300 rounded-lg resize-none outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
              placeholder={t("messagePlaceholder")}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 bg-blue-600 text-white h-14 w-full md:w-64 px-6 rounded-lg active:scale-95 transition disabled:opacity-50"
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </button>
        </form>
      </div>
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.626143045365!2d27.137369775382027!3d38.42700387432311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8f7133f502d%3A0xa7fbb63df26fc9b0!2sDoubleTree%20by%20Hilton%20%C4%B0zmir%20-%20Alsancak!5e0!3m2!1str!2str!4v1746219270976!5m2!1str!2str"
          width="100%"
          height="100%"
          className="rounded-lg shadow-md h-96 md:h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
