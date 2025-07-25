import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Hero from "./components/sections/hero/hero";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <div>
      <Hero />
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
