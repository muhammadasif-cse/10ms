"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("locale_switcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const oppositeLocale = currentLocale === "en" ? "bn" : "en";

  const handleToggle = () => {
    const nextLocale = oppositeLocale;
    router.push(
      `/${nextLocale}${window.location.pathname.replace(/^\/[^\/]+/, "")}`
    );
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {t(oppositeLocale)}
    </button>
  );
}
