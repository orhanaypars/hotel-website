"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  const t = useTranslations("Contact");

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

      toast.error(t("errorRetryMessage"), {
        style: {
          backgroundColor: "#ef4444",
          color: "#ffffff",
        },
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-16 px-6 md:px-12  w-full mx-auto bg-gradient-to-r from-blue-800 to-blue-950 text-amber-500 py-12 shadow-lg">
      <div className="flex-1 md:mt-15">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center text-sm "
        >
          <h1 className="text-5xl font-bold  pb-6 text-center">{t("title")}</h1>
          <p className="text-base text-white text-center pb-12 italic font-light">
            {t("subtitle")}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-3xl">
            <div className="w-full">
              <Label htmlFor="name">{t("nameLabel")}</Label>
              <Input
                {...register("name", {
                  required: t("nameRequired"),
                })}
                className="h-14 p-4 mt-2 w-full border border-gray-600 rounded-lg outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition text-white bg-gray-800"
                type="text"
                placeholder={t("namePlaceholder")}
              />
              {errors.name && (
                <p className="text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full">
              <Label htmlFor="email">{t("emailLabel")}</Label>
              <Input
                {...register("email", {
                  required: t("emailRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: t("emailInvalid"),
                  },
                })}
                className="h-14 p-4 mt-2 w-full border border-gray-600 rounded-lg outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition text-white bg-gray-800 "
                type="email"
                placeholder={t("emailPlaceholder")}
              />
              {errors.email && (
                <p className=" text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="mt-8 w-full max-w-3xl">
            <Label htmlFor="message">{t("messageLabel")}</Label>
            <Textarea
              {...register("message", {
                required: t("messageRequired"),
              })}
              className="w-full mt-2 p-4 h-48 border border-gray-600 rounded-lg resize-none outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition text-white bg-gray-800 "
              placeholder={t("messagePlaceholder")}
            ></Textarea>
            {errors.message && (
              <p className=" text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 text-white bg-amber-600  h-14 w-full md:w-72 px-6 rounded-lg active:scale-95 transition disabled:opacity-50 cursor-pointer hover:bg-amber-700"
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </Button>
        </form>
      </div>
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.626143045365!2d27.137369775382027!3d38.42700387432311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8f7133f502d%3A0xa7fbb63df26fc9b0!2sDoubleTree%20by%20Hilton%20%C4%B0zmir%20-%20Alsancak!5e0!3m2!1str!2str!4v1746219270976!5m2!1str!2str"
          width="100%"
          height="100%"
          className="rounded-lg shadow-lg h-96 md:h-full"
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
