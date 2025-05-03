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

const Navbar: React.FC = () => {
  return (
    <header className="w-full text-white">
      {/* Top Promo Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-700 to-blue-800 text-center text-xs sm:text-sm py-1">
        Rezervasyona özel ilk konaklama ücretinde{" "}
        <span className="font-semibold">%20 indirim</span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-blue-900 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between xl:justify-center xl:gap-20 px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 font-medium text-white">
            {["Home", "Services", "Portfolio", "Pricing"].map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              // variant="outline"
              size="lg"
              className="hidden md:inline-flex"
            >
              Rezervasyon yap
            </Button>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <GiHamburgerMenu />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-blue-900 text-white">
                  <SheetHeader>
                    <SheetTitle className="text-lg font-semibold border-b-3 border-b-white">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <ul className="space-y-6 font-medium text-lg">
                      {[
                        { name: "Home", icon: "🏠" },
                        { name: "Services", icon: "🛠️" },
                        { name: "Portfolio", icon: "📁" },
                        { name: "Pricing", icon: "💰" },
                      ].map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center space-x-3"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <Link
                            href="#"
                            className="hover:text-indigo-400 transition-colors block"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-amber-500 text-blue-950 font-bold"
                      >
                        Rezervasyon yap
                      </Button>
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
