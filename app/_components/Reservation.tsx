"use client";

import React, { FormEvent, useEffect, useState } from "react";

const Reservation: React.FC = () => {
  const [destinations, setDestinations] = useState<string[]>([]);
  const [formValues, setFormValues] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  // Bugünün tarihini ISO formatında al
  const today = new Date().toISOString().split("T")[0];

  // Örnek statik destinasyonlar: istersen API çağırarak dinamikleştir
  useEffect(() => {
    setDestinations(["Istanbul", "Ankara", "Izmir"]);
  }, []);

  // checkIn değiştikçe, checkOut min tarihini güncelle ve geçersizse oto-düzelt
  useEffect(() => {
    if (
      formValues.checkIn &&
      formValues.checkOut &&
      formValues.checkOut <= formValues.checkIn
    ) {
      // Default olarak checkIn +1 gün
      const nextDay = new Date(formValues.checkIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setFormValues((prev) => ({
        ...prev,
        checkOut: nextDay.toISOString().split("T")[0],
      }));
    }
  }, [formValues.checkIn, formValues.checkOut]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form verisi:", formValues);
    // TODO: API çağrısı / yönlendirme
  };

  return (
    <div className="flex flex-col items-center text-center mt-12 mb-12 px-4 sm:px-8 lg:px-20">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-blue-700">
          Hızlıca{" "}
          <span className="text-amber-500 font-bold "> rezervasyon </span>
          talebinizi oluşturun. <br /> <div className="mt-10"></div>
          <span className=" text-5xl font-bold text-blue-900">
            Ayrıcalıklı odalarımızda misafirimiz olun.
          </span>
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-screen-lg mx-auto bg-gray-50 shadow-md rounded-lg p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {/* Destination */}
            <div>
              <label
                htmlFor="destination"
                className="block mb-1 font-medium text-gray-700"
              >
                Gidilecek Yer
              </label>
              <input
                list="destinations"
                id="destination"
                name="destination"
                value={formValues.destination}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Buraya yazın"
                required
              />
              <datalist id="destinations">
                {destinations.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>

            {/* Check In */}
            <div>
              <label
                htmlFor="checkIn"
                className="block mb-1 font-medium text-gray-700"
              >
                Giriş Tarihi
              </label>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                value={formValues.checkIn}
                onChange={handleChange}
                min={today}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Check Out */}
            <div>
              <label
                htmlFor="checkOut"
                className="block mb-1 font-medium text-gray-700"
              >
                Çıkış Tarihi
              </label>
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                value={formValues.checkOut}
                onChange={handleChange}
                min={formValues.checkIn || today}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block mb-1 font-medium text-gray-700"
              >
                Kişi Sayısı
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={1}
                max={4}
                value={formValues.guests}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 py-2 text-white flex items-center justify-center gap-2 hover:bg-blue-700"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-3.5-3.5m0 0A7.5 7.5 0 1110 3.5a7.5 7.5 0 017.5 7.5z"
                  />
                </svg>
                Talep oluştur
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
