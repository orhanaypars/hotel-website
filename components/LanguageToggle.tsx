// components/LanguageToggle.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeTo = useCallback(
    (newLocale: string) => {
      if (searchParams) {
        const params = new URLSearchParams(searchParams.toString());
        const cleanPathname = pathname
          ? pathname.replace(`/${locale}`, "")
          : ""; // Remove current locale from the path
        router.push(`/${newLocale}${cleanPathname}?${params.toString()}`);
      }
    },
    [pathname, searchParams, router, locale]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 rounded-lg bg-blue-950 text-white font-medium hover:bg-amber-500 transition-colors flex items-center gap-2">
        {getFlagIcon(locale)}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-lg py-2">
        {["tr", "fr", "de", "en"].map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => changeTo(loc)}
            className={`px-4 py-2 cursor-pointer hover:bg-amber-500 transition-colors flex items-center gap-2 ${
              locale === loc ? "font-bold text-blue-950" : "text-blue-950"
            }`}
          >
            {getFlagIcon(loc)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  function getFlagIcon(locale: string) {
    switch (locale) {
      case "tr":
        return (
          <div className="flex items-center gap-2">
            <Image
              src="/trflag.png"
              alt="Turkish Flag"
              width={24}
              height={16}
              className="object-contain"
            />
            <span className="text-sm font-medium">TR</span>
          </div>
        );
      case "fr":
        return (
          <div className="flex items-center gap-2">
            <Image
              src="/frflag.png"
              alt="French Flag"
              width={24}
              height={16}
              className="object-contain"
            />
            <span className="text-sm font-medium">FR</span>
          </div>
        );
      case "de":
        return (
          <div className="flex items-center gap-2">
            <Image
              src="/deflag.png"
              alt="German Flag"
              width={24}
              height={16}
              className="object-contain"
            />
            <span className="text-sm font-medium">DE</span>
          </div>
        );
      case "en":
        return (
          <div className="flex items-center gap-2">
            <Image
              src="/usaflag.png"
              alt="USA Flag"
              width={24}
              height={16}
              className="object-contain"
            />
            <span className="text-sm font-medium">EN</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2">
            <Image
              src="/flags/default.png"
              alt="Default Flag"
              width={24}
              height={16}
              className="object-contain"
            />
            <span className="text-sm font-medium">N/A</span>
          </div>
        );
    }
  }
}
