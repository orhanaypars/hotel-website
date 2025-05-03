import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, checkIn, checkOut, guests, phone } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "orhanaypars35@gmail.com",
        pass: "rbnc soyd kgkq ynqs",
      },
    });

    try {
      // E-posta içeriği
      await transporter.sendMail({
        from: email,
        to: "orhanaypars35@gmail.com",
        subject: `Rezervasyon Talebi - ${email}`,
        text: `\nE-posta: ${email}\n\n Telefon:${phone}\n\nGiriş Tarihi: ${checkIn}\nÇıkış Tarihi: ${checkOut}\n\nKişi Sayısı: ${guests}`,
      });

      res.status(200).json({ message: "Mesaj başarıyla gönderildi!" });
    } catch (error) {
      console.error("E-posta gönderim hatası:", error);
      res
        .status(500)
        .json({ message: "Mesaj gönderilemedi. Lütfen tekrar deneyin." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
