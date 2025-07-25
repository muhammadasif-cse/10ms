"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("locale_switcher");
  const currentLocale = useLocale();
  const router = useRouter();

  const handleToggle = () => {
    const currentIndex = routing.locales.indexOf(
      currentLocale as (typeof routing.locales)[number]
    );
    const nextIndex = (currentIndex + 1) % routing.locales.length;
    const nextLocale = routing.locales[nextIndex];
    router.push(
      `/${nextLocale}${window.location.pathname.replace(/^\/[^\/]+/, "")}`
    );
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {t("label")} ({currentLocale})
    </button>
  );
}
