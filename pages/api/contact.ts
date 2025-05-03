import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Nodemailer transporter ayarları
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail kullanıyorsanız
      auth: {
        user: "orhanaypars35@gmail.com",
        pass: "rbnc soyd kgkq ynqs",
      },
    });

    try {
      // E-posta içeriği
      await transporter.sendMail({
        from: email, // Formdan gelen e-posta
        to: "orhanaypars35@gmail.com", // Mesajın gönderileceği e-posta adresi
        subject: `Yeni İletişim Formu Mesajı - ${name}`,
        text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
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
