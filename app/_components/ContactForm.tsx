import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-20 py-12">
      <form className="flex flex-col items-center  w-full max-w-4xl">
        <h1 className="text-5xl font-semibold text-blue-800 pb-4 text-center">
          Bizimle <span className="text-amber-600 font-bold">İletişime</span>{" "}
          Geçin
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="w-full">
            <Label className="text-black/80" htmlFor="name">
              Adınız
            </Label>
            <Input
              className="h-12 p-2 mt-2 w-full border border-blue-300 rounded outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="w-full">
            <Label className="text-black/80" htmlFor="email">
              E-posta Adresiniz
            </Label>
            <Input
              className="h-12 p-2 mt-2 w-full border border-blue-300 rounded outline-none focus:ring-2 focus:ring-yellow-400"
              type="email"
              id="email"
              required
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <Label className="text-black/80" htmlFor="message">
            Mesajınız
          </Label>
          <Textarea
            className="w-full mt-2 p-2 h-40 border border-blue-300 rounded resize-none outline-none focus:ring-2 focus:ring-yellow-400"
            id="message"
            required
          ></Textarea>
        </div>

        <Button
          type="submit"
          className="mt-5 bg-blue-700 text-white h-12 w-full md:w-56 px-4 rounded active:scale-95 transition hover:bg-blue-800"
        >
          Mesaj Gönder
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
