"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";

interface ReservationFormData {
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  phone: string;
}

const Reservation: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>();

  // State for date inputs
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  // Compute today's date in YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  // Ensure check-out is always after check-in
  useEffect(() => {
    if (checkInDate) {
      // If no check-out set, default to next day
      if (!checkOutDate) {
        const next = new Date(checkInDate);
        next.setDate(next.getDate() + 1);
        setCheckOutDate(next.toISOString().split("T")[0]);
      }
      // If checkout <= checkin, bump checkout
      if (checkOutDate && checkOutDate <= checkInDate) {
        const next = new Date(checkInDate);
        next.setDate(next.getDate() + 1);
        setCheckOutDate(next.toISOString().split("T")[0]);
      }
    }
  }, [checkInDate, checkOutDate]);

  const onSubmit = async (data: ReservationFormData) => {
    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          checkIn: data.checkIn,
          checkOut: data.checkOut,
          guests: data.guests,
          phone: data.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Mesaj gönderilirken bir hata oluştu.");
      }

      toast.success("Rezervasyon talebiniz başarıyla gönderildi!", {
        style: { backgroundColor: "#22c55e", color: "#ffffff" },
      });
    } catch (error) {
      console.error(error);
      toast.error("Rezervasyon talebi gönderilemedi. Lütfen tekrar deneyin.", {
        style: { backgroundColor: "#ef4444", color: "#ffffff" },
      });
    }
  };

  return (
    <div className="flex flex-col items-center text-center mt-12 mb-12 px-4 sm:px-8 lg:px-20">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-blue-950">
          Hızlıca <span className="text-amber-500 font-bold">rezervasyon</span>{" "}
          talebinizi oluşturun.
          <div className="mt-5"></div>
          <span className="text-5xl font-bold text-blue-950">
            Ayrıcalıklı odalarımızda misafirimiz olun.
          </span>
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-screen-lg mx-auto bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="block mb-1 font-medium text-blue-950"
            >
              E-posta
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "E-posta gerekli." })}
              placeholder="ornek@gmail.com"
              className="border border-blue-950 focus:ring-amber-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Telefon */}
          <div>
            <Label
              htmlFor="phone"
              className="block mb-1 font-medium text-blue-950"
            >
              Telefon
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone", { required: "Telefon numarası gerekli." })}
              placeholder="053X XXX XX XX"
              className="border border-blue-950 focus:ring-amber-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Check-In */}
          <div>
            <Label
              htmlFor="checkIn"
              className="block mb-1 font-medium text-blue-950"
            >
              Giriş Tarihi
            </Label>
            <Input
              id="checkIn"
              type="date"
              {...register("checkIn", { required: "Giriş tarihi gerekli." })}
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={today}
              className="border border-blue-950 focus:ring-amber-500"
            />
            {errors.checkIn && (
              <p className="text-red-500 text-sm mt-1">
                {errors.checkIn.message}
              </p>
            )}
          </div>

          {/* Check-Out */}
          <div>
            <Label
              htmlFor="checkOut"
              className="block mb-1 font-medium text-blue-950"
            >
              Çıkış Tarihi
            </Label>
            <Input
              id="checkOut"
              type="date"
              {...register("checkOut", { required: "Çıkış tarihi gerekli." })}
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={
                checkInDate
                  ? new Date(
                      new Date(checkInDate).setDate(
                        new Date(checkInDate).getDate() + 1
                      )
                    )
                      .toISOString()
                      .split("T")[0]
                  : today
              }
              className="border border-blue-950 focus:ring-amber-500"
            />
            {errors.checkOut && (
              <p className="text-red-500 text-sm mt-1">
                {errors.checkOut.message}
              </p>
            )}
          </div>

          {/* Guests */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Label
              htmlFor="guests"
              className="block mb-1 font-medium text-blue-950"
            >
              Kişi Sayısı
            </Label>
            <Input
              id="guests"
              type="number"
              {...register("guests", {
                required: "Kişi sayısı gerekli.",
                min: { value: 1, message: "En az 1 kişi olmalı." },
                max: { value: 4, message: "En fazla 4 kişi olabilir." },
              })}
              placeholder="2"
              className="border border-blue-950 focus:ring-amber-500"
            />
            {errors.guests && (
              <p className="text-red-500 text-sm mt-1">
                {errors.guests.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="col-span-1 sm:col-span-2 md:col-span-5 flex items-end justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto rounded-md bg-amber-500 text-blue-950 py-2  flex items-center justify-center gap-2 hover:bg-blue-950 hover:text-white transition-colors duration-300"
            >
              Talep oluştur
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
