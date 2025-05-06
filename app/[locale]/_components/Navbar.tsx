import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { Link as I18nLink } from "@/i18n/navigation";
import LanguageToggle from "@/components/LanguageToggle";

const Navbar: React.FC = () => {
  const t = useTranslations("Navbar");

  return (
    <header className="w-full text-white">
      <div className="bg-gradient-to-r from-violet-600 via-purple-700 to-blue-800 text-center text-xs sm:text-sm py-1">
        {t("promoText")}{" "}
        <span className="font-semibold">{t("promoDiscount")}</span>
      </div>
      <nav className="bg-blue-900 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between xl:justify-center xl:gap-20 px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={t("logoAlt")}
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>
          <ul className="hidden md:flex space-x-8 font-medium text-white">
            {[
              { name: t("home"), href: "/" },
              { name: t("gallery"), href: "/gallery" },
              { name: t("about"), href: "/about" },
              { name: t("contact"), href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <I18nLink
                  href={link.href}
                  className="hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </I18nLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-10">
            <LanguageToggle />
            <Link href="/reservation">
              <Button
                size="lg"
                className="hidden md:inline-flex cursor-pointer bg-amber-500 text-blue-950 font-bold hover:bg-blue-950 hover:text-amber-500 transition-colors"
              >
                {t("makeReservation")}
              </Button>
            </Link>

            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <GiHamburgerMenu />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-blue-900 text-white">
                  <SheetHeader>
                    <SheetTitle className="text-lg font-bold text-amber-500 border-b-3 border-b-white">
                      {t("menu")}
                    </SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <ul className="space-y-6 font-medium text-lg pl-5">
                      {[
                        { name: t("home"), href: "/" },
                        { name: t("gallery"), href: "/gallery" },
                        { name: t("about"), href: "/about" },
                        { name: t("contact"), href: "/contact" },
                      ].map((link) => (
                        <li key={link.name}>
                          <I18nLink
                            href={link.href}
                            className="hover:text-indigo-600 transition-colors"
                          >
                            {link.name}
                          </I18nLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Link href="/reservation">
                        <Button
                          variant="outline"
                          className="w-full bg-amber-500 text-blue-950 font-bold cursor-pointer hover:bg-blue-950 hover:text-amber-500 transition-colors"
                        >
                          {t("makeReservation")}
                        </Button>
                      </Link>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
